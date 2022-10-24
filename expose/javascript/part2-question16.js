let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (const property in statistics) {
    if (property[0] == 'r' || statistics[property] % 2 != 0 ){
        console.log(property);
    }
}



function printNums() {
    console.log(1);
    setTimeout(function() {console.log(2);}, 1000);
    setTimeout(function() { console.log(3);}, 0);
    console.log(4);
}

console.log(printNums());