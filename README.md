# JOHNNY — Version 1.0

Firmware para dispositivos M5Stack e ESP32, com foco em hardware hacking e música.

## Site
Site estático na raiz do repositório. Ative o GitHub Pages usando a branch `main` e a pasta `/`.

## Primeiro alvo
M5Stack Cardputer ADV (ESP32-S3).

## Firmware
O projeto utiliza C++/Arduino. O sketch principal recebido é o Johnny MP3 ADV v4.0, para Cardputer ADV.

Dependências principais:
- M5Cardputer / M5Unified / M5GFX
- ESP8266Audio

## Web Flasher
A interface do gravador será ativada quando os binários `.bin` e o manifesto de flash do Cardputer ADV forem compilados e validados. Um arquivo `.ino` é código-fonte e não pode ser gravado diretamente pelo navegador.

## Compatibilidade
- Cardputer ADV: primeiro alvo.
- Outros dispositivos M5Stack: planejados.
- Família ESP32: planejada.

## Versão
1.0.0
