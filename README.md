# JOHNNY

Complete Cardputer ADV Firmware for Hardware Hacking & Music.

## First release

Version: `1.0.0`

Target: M5Stack Cardputer ADV (ESP32-S3).

## Firmware

Arduino/C++ source: [firmware/j.ino](firmware/j.ino).

The first build provides the MP3 player firmware for Cardputer ADV. Build dependencies and local compilation instructions are documented in [docs/firmware.md](docs/firmware.md).

## Web Flasher

The site reads published GitHub Releases and lets the user choose a version. Each release contains a merged ESP32-S3 image and an ESP Web Tools manifest. Installation requires Chrome or Edge, HTTPS, and a USB data cable.

## Build and releases

GitHub Actions compiles the firmware and publishes a release only after a successful build. See [Build and installation](docs/firmware.md).

Other M5Stack devices and ESP32 variants are not marked as supported until separate builds are implemented and tested.
