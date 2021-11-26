const chalk = require('chalk')

console.log(chalk.bgRed('Hello YSE!!!'))
console.log(chalk.green('Hello YSE!!!'))
console.log(chalk.blue('Hello YSE!!!'))


//const cities = require('cities')
const lat = process.aray[3]
const lng = process.aray[2]

if(lat && lng) {
    let city = cities.gps_lookup(lat,lng)
    console.log(city)
    //console.log(cities.gps_lookup(lat,lng))
}