const REPOSITORY = "otavio-dias-leite/johnny";
const versionSelect = document.querySelector("#version");
const installer = document.querySelector("#installer");
const statusText = document.querySelector("#flasher-status");

function setStatus(message) {
  statusText.textContent = message;
}

function selectRelease(releases) {
  const release = releases.find(item => item.tag_name === versionSelect.value);
  if (!release) return;
  const manifest = release.assets.find(asset => asset.name === "manifest.json");
  if (!manifest) {
    installer.removeAttribute("manifest");
    setStatus("Esta versão não possui manifesto de instalação.");
    return;
  }
  installer.setAttribute("manifest", manifest.browser_download_url);
  setStatus(`${release.name || release.tag_name} selecionada.`);
}

async function loadReleases() {
  try {
    const response = await fetch(`https://api.github.com/repos/${REPOSITORY}/releases?per_page=30`, {
      headers: { Accept: "application/vnd.github+json" }
    });
    if (!response.ok) throw new Error(`GitHub API: HTTP ${response.status}`);
    const releases = (await response.json()).filter(release =>
      !release.draft && release.assets?.some(asset => asset.name === "manifest.json") &&
      release.assets?.some(asset => asset.name === "johnny-cardputer-adv.bin")
    );
    versionSelect.replaceChildren();
    if (!releases.length) {
      versionSelect.add(new Option("Nenhuma versão publicada", ""));
      installer.removeAttribute("manifest");
      setStatus("Nenhuma release instalável encontrada.");
      return;
    }
    for (const release of releases) {
      versionSelect.add(new Option(release.name || release.tag_name, release.tag_name));
    }
    selectRelease(releases);
    versionSelect.addEventListener("change", () => selectRelease(releases));
    if (!("serial" in navigator)) {
      setStatus("Web Serial não disponível. Abra o site no Chrome ou Edge.");
    }
  } catch (error) {
    versionSelect.replaceChildren(new Option("Falha ao carregar versões", ""));
    installer.removeAttribute("manifest");
    setStatus(`Não foi possível carregar as releases: ${error.message}`);
  }
}

loadReleases();