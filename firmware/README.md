# Firmware

O alvo inicial é o M5Stack Cardputer ADV com ESP32-S3.

O firmware principal é um sketch Arduino/C++ chamado `j.ino`. Compile-o na Arduino IDE ou PlatformIO com as dependências M5Cardputer/M5Unified/M5GFX e ESP8266Audio instaladas.

O Web Flasher do site só deve ser habilitado após gerar e testar os binários de bootloader, partições e aplicação para esta placa. Não use imagens genéricas de ESP32 em hardware diferente.
