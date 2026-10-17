# JOHNNY firmware — build and installation

## Target

The first official target is the M5Stack Cardputer ADV (ESP32-S3). The ADV uses the Cardputer Arduino board definition.

## Build requirements

- Arduino CLI
- M5Stack ESP32 board core
- M5Cardputer library and its dependencies
- ESP8266Audio library

The sketch is stored as `firmware/j.ino`. The GitHub Actions workflow copies it to the Arduino-required sketch folder/name and compiles it for `m5stack:esp32:m5stack_cardputer`.

## Local build

Install the M5Stack core and libraries:

```bash
arduino-cli core update-index --additional-urls https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/arduino/package_m5stack_index.json
arduino-cli core install m5stack:esp32 --additional-urls https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/arduino/package_m5stack_index.json
arduino-cli lib install M5Cardputer ESP8266Audio
```

Compile (the sketch directory must contain a file named `johnny_mp3.ino`):

```bash
arduino-cli compile --fqbn m5stack:esp32:m5stack_cardputer \
  --build-property build.partitions=huge_app \
  --build-property upload.maximum_size=3145728 \
  ./johnny_mp3
```

## Release files

Each successful release contains:

- `johnny-cardputer-adv.bin`: merged image for ESP32-S3, flash at address `0x0`.
- `manifest.json`: ESP Web Tools manifest for the merged image.
- `johnny_mp3.ino`: exact Arduino/C++ source used for the build.
- `build-info.txt`: target and version information.
- `SHA256SUMS`: checksums.

## Web Flasher

Open the project site in Chrome or Edge over HTTPS. Connect the Cardputer ADV with a USB data cable, select a published version, then choose Install. The browser asks for permission to access the serial device.

The install manifest targets ESP32-S3 and erases existing flash when required. Back up data before installation. Never select a firmware image for a different board.

## Releases

Update the `VERSION` file before preparing a new release. Push the firmware or version change to `main`; GitHub Actions compiles the sketch and publishes the matching GitHub Release. A release is published only if compilation and binary packaging succeed.
