function myFunction() {
    //the constant temprature in kelvin
    let kelvin = prompt("Degrees kelvin:");
            //degrees celsius equals degrees kelvin - 273
            let celsius = kelvin - 273;
            //equation for celsius to fahrenheit
            let fahrenheit = celsius * (9 / 5) + 32;
            //make fahrenheit into an integer
            fahrenheit = Math.floor(fahrenheit);
            document.write(`The temperature is ${fahrenheit} degrees Fahrenheit. `);
            newton = celsius * (33 / 100);
            newton = Math.floor(newton);
            document.write(`It's ${newton} degrees newton. `);
            document.write(`It's ${celsius} degrees celsius.`);
}
function myFunction2() {
    let myAge = prompt("Your age(in human years):");
    let earlyYears = 2;
    earlyYears *= 10.5;
    let laterYears = myAge - 2;
    laterYears *= 4;
    let myDogAge = earlyYears + laterYears;
    document.write(myDogAge);
}
function myFunction3() {
    let celsius1 = prompt("Degrees Celsius");
    let kelvin1 = celsius1 + 273;
    let fahrenheit1 = celsius1 * (9 / 5) + 32;
    let newton1 = celsius1 * (33 / 100);
    newton1 = Math.floor(newton1 * 10) / 10;
    fahrenheit1 = Math.floor(fahrenheit1);
    document.write(`${celsius1} degrees Celsius is ${fahrenheit1} degrees Fahrenheit, ${kelvin1} degrees Kelvin and ${newton1} degrees Newton.`);
}
