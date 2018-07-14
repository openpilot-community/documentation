# Supported Vehicles

| Make    | Model                  | Supported Package    | Lateral | Longitudinal | No Accel Below  | No Steer Below |
| ------- | ---------------------- | -------------------- | ------- | ------------ | --------------  | -------------- |
| Acura   | ILX 2016               | AcuraWatch Plus      | Yes     | Yes          | 25mph*          | 25mph          |
| Acura   | ILX 2017               | AcuraWatch Plus      | Yes     | Yes          | 25mph*          | 25mph          |
| Acura   | RDX 2018               | AcuraWatch Plus      | Yes     | Yes          | 25mph*          | 12mph          |
| GM      | Volt 2017              | Driver Confidence II | Yes     | Yes          | 0mph            | 0mph           |
| GM      | Volt 2018              | Driver Confidence II | Yes     | Yes          | 0mph            | 0mph           |
| Honda   | Accord 2018            | All                  | Yes     | Stock        | 0mph            | 3mph           |
| Honda   | Civic 2016             | Honda Sensing        | Yes     | Yes          | 0mph            | 12mph          |
| Honda   | Civic 2017             | Honda Sensing        | Yes     | Yes          | 0mph            | 12mph          |
| Honda   | Civic 2017 *(Hatch)*   | Honda Sensing        | Yes     | Stock        | 0mph            | 12mph          |
| Honda   | Civic 2018             | Honda Sensing        | Yes     | Yes          | 0mph            | 12mph          |
| Honda   | CR-V 2015              | Honda Sensing        | Yes     | Yes          | 25mph*          | 12mph          |
| Honda   | CR-V 2016              | Honda Sensing        | Yes     | Yes          | 25mph*          | 12mph          |
| Honda   | CR-V 2017              | Honda Sensing        | Yes     | Stock        | 0mph            | 12mph          |
| Honda   | CR-V 2018              | Honda Sensing        | Yes     | Stock        | 0mph            | 12mph          |
| Honda   | Odyssey 2017           | Honda Sensing        | Yes     | Yes          | 25mph*          | 12mph          |
| Honda   | Odyssey 2018           | Honda Sensing        | Yes     | Yes          | 25mph*          | 12mph          |
| Honda   | Pilot 2017             | Honda Sensing        | Yes     | Yes          | 25mph*          | 12mph          |
| Honda   | Pilot 2018             | Honda Sensing        | Yes     | Yes          | 25mph*          | 12mph          |
| Honda   | Ridgeline 2017         | Honda Sensing        | Yes     | Yes          | 25mph*          | 12mph          |
| Honda   | Ridgeline 2018         | Honda Sensing        | Yes     | Yes          | 25mph*          | 12mph          |
| Lexus   | RX Hybrid 2017         | All                  | Yes     | Yes          | 0mph            | 0mph           |
| Lexus   | RX Hybrid 2018         | All                  | Yes     | Yes          | 0mph            | 0mph           |
| Toyota  | Corolla 2017           | All                  | Yes     | Yes          | 20mph           | 0mph           |
| Toyota  | Corolla 2018           | All                  | Yes     | Yes          | 20mph           | 0mph           |
| Toyota  | Prius 2016             | TSS-P                | Yes     | Yes          | 0mph            | 0mph           |
| Toyota  | Prius 2017             | All                  | Yes     | Yes          | 0mph            | 0mph           |
| Toyota  | Prius 2018             | All                  | Yes     | Yes          | 0mph            | 0mph           |
| Toyota  | Prius Prime 2017       | All                  | Yes     | Yes          | 0mph            | 0mph           |
| Toyota  | Prius Prime 2018       | All                  | Yes     | Yes          | 0mph            | 0mph           |
| Toyota  | Rav4 2016              | TSS-P                | Yes     | Yes          | 20mph           | 0mph           |
| Toyota  | Rav4 2017              | All                  | Yes     | Yes          | 20mph           | 0mph           |
| Toyota  | Rav4 2018              | All                  | Yes     | Yes          | 20mph           | 0mph           |
| Toyota  | Rav4 Hybrid 2017       | All                  | Yes     | Yes          | 0mph            | 0mph           |
| Toyota  | Rav4 Hybrid 2018       | All                  | Yes     | Yes          | 0mph            | 0mph           |

## Community Maintained Cars

| Make    | Model                  | Supported Package    | Lateral | Longitudinal | No Accel Below  | No Steer Below	|
| ------- | -----------------------| -------------------- | ------- | ------------ | -----------     | ------------ |
| Tesla   | Model S 2012           | All                  | Yes     | Not yet      | Not applicable  | 0mph         |
| Tesla   | Model S 2013           | All                  | Yes     | Not yet      | Not applicable  | 0mph         |

[[Tesla Pull Request]](https://github.com/commaai/openpilot/pull/246)

*Community Maintained Cars are not confirmed by comma.ai to meet our safety model. Be extra cautious using them.

## In Progress Cars

- All TSS-P Toyota with Steering Assist.
  - 'Full Speed Range Dynamic Radar Cruise Control' is required to enable stop-and-go. Only the Prius, Camry and C-HR have this option.
  - Even though the Tundra, Sequoia and the Land Cruiser have TSS-P, they don't have Steering Assist and are not supported.
- All LSS-P Lexus with Steering Assist or Lane Keep Assist.
  - 'All-Speed Range Dynamic Radar Cruise Control' is required to enable stop-and-go. Only the GS, GSH, F, RX, RXH, LX, NX, NXH, LC, LCH, LS, LSH have this option.
  - Even though the LX have TSS-P, it does not have Steering Assist and is not supported.