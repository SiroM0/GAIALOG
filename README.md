🌱 GAIALOG: Sustainable E-Waste Data Logger

    Transforming Electronic Waste into Precision Scientific Tools

📖 Overview

GAIALOG is a sustainable engineering capstone project developed by students at Obour STEM School. In response to the global crisis of electronic waste and the scarcity of rare earth elements, we designed an environmental data logger constructed entirely from repurposed electronic components.

Instead of chemically salvaging metals—which destroys functional parts—GAIALOG proves that discarded electronics can be directly reused to create high-accuracy scientific instruments.
🌍 The Problem

    E-Waste Explosion: In 2022 alone, 62 million tons of e-waste were produced globally, with only 22.3% collected and recycled.

    Resource Scarcity: The demand for rare earth elements used in electronics is skyrocketing while supplies diminish.

    Environmental Impact: Improper disposal leads to the release of neurotoxins like lead into the biosphere.

💡 The Solution

We successfully built a functional Data Logger using parts salvaged from old circuits, broken DIY projects, and discarded kits.

Key Features:

    ♻️ 100% Recycled Core: Built using an ATmega328P microcontroller salvaged from an old Arduino Uno.

    🌡️ Multi-Sensor Logging: Monitors Temperature, Humidity, and Distance.

    📊 High Accuracy: Validated against reference instruments with error margins near ±1%.

    🏫 Lab-Ready: Successfully tested in biology labs for monitoring plant transpiration.

🛠️ Hardware & Components

All components were extracted from e-waste sources.

| Component            | Quantity | Function                               | Source                    |
| -------------------- | -------- | -------------------------------------- | ------------------------- |
| ATmega328P           | 1        | Microcontroller / Processor             | Old Arduino Uno          |
| DHT11 Module         | 1        | Temperature & Humidity Sensing          | Broken DIY Project       |
| HC-SR04              | 1        | Ultrasonic Distance Sensing             | Broken DIY Project       |
| 16x2 LCD             | 1        | Data Display                            | Broken Screen            |
| 16 MHz Crystal       | 1        | Clock Signal Provider                   | Old Circuit Board        |
| Breadboard           | 1        | Prototyping Base                        | Discarded Fab Lab Kit    |
| Capacitors/Resistors | Various  | Voltage Smoothing & Signal Stability    | Old Circuit Boards       |

🔌 Wiring & Configuration

The system is powered by a 5V battery supply. Below is the pin configuration used in our prototype:
Microcontroller Setup

    Crystal: 16 MHz Crystal + two 22pF capacitors.

    Reset: 10kΩ pull-up resistor on the RESET pin.

    Power: 10µF capacitor across 5V and GND rails.

Sensor Connections

    DHT11: Connected to Digital Pin 2 (with 10kΩ pull-up resistor).

    HC-SR04:

        Trigger: Pin 9

        Echo: Pin 8

    LCD (4-bit mode): Connected to Pins 12, 11, 5, 4, 3.

📈 Performance & Results

We conducted rigorous testing to validate the reliability of recycled parts.

Accuracy Analysis
| Sensor Type  | Reference Value | Measured Mean | Error %  | Status    |
| ------------ | --------------- | ------------- | -------- | --------- |
| Temperature  | 20.0 °C         | 20.2 °C       | ±1.00%  | ✅ Passed |
| Humidity     | 45.0 %          | 45.6 %        | ±1.33%  | ✅ Passed |
| Distance     | 80.0 cm         | 80.9 cm       | ±1.13%  | ✅ Passed |


    Note: Our design requirement was < ±5% error. The device significantly outperformed this metric.

Precision (Consistency)

    Temperature SD: 0.1°C

    Humidity SD: 0.2%

    Distance SD: 0.2 cm

🚀 Future Recommendations

To further improve GAIALOG, we recommend the following for future iterations:

    Signal Conditioning: Add Op-Amps and noise filters to further stabilize readings.

    Expanded Sensing: Integrate air quality or pressure sensors.

    Power Optimization: Implement low-power modes to extend battery life.

    Standardized Testing: Develop a strict protocol for validating salvaged parts before use.

👥 The Team

Obour STEM School - Group 21201 (2025-2026)

    👨‍💻 Kareem Esmail

    👨‍💻 Marwan Mahmoud

    👨‍💻 Mohammed Khalid 

Acknowledgments

Special thanks to our Capstone supervisor Mr. Naeem, Mrs. Shaimaa Sobhy, and Mr. Ahmed Morsy for their guidance.

© 2025 GAIALOG Project. Built with 💚 for the planet.
