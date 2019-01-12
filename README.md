# Risk World Generator

An application used to create randomized world boards for the (Dutch) (in)famous game called Risk.

## Installation

Make sure you have Google Chrome installed installed!

* Clone the repository: `git clone git@github.com:Maikxx/risk-world-generator.git`
* Navigate into the directory: `cd risk-world-generator`
* Install dependencies: `yarn` or `npm install`
* Start the client with: `yarn start-client` or `npm run start-client`.

## Specification

This list includes all the specifications which would make a great risk board (and game in it's whole).

* The shape of the board should not matter too much, however a rectangle would be the ideal situation.
* The board must consist of continents.
* Each continent must contain at least two countries.
* Each continent must have at least two travel links to at least one continent.
* Each country must have at least one link to another country.
* The difficulty (an integer) for conquering a continent in it's whole will be calculated by:
    * The amount of connecting links the continent has.
    * The amount of countries the continent has.

## License

This repository is licensed as [MIT](LICENSE) by [Maikel van Veen](https://github.com/maikxx).