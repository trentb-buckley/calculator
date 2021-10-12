const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let day = "finished";

// const plus = "+";

reader.question("What would you like to calculate?", function(input){
    tokens = input.split(' ');
    
    mathSymbol = tokens[0];
    num1 = Number(tokens[1]);
    num2 = Number(tokens[2]);

    console.log('mathSymbol', mathSymbol);
    console.log('num1', num1);
    console.log('num2', num2);

    if(mathSymbol === "+") {
        console.log(`Answer: ${num1 + num2}`)
    } else if(mathSymbol === "-") {
		console.log(`Answer: ${num1 - num2}`)
	} else if(mathSymbol === "*") {
		console.log(`Answer: ${num1 * num2}`)
	} else if(mathSymbol === "/") {
		console.log(`Answer: ${num1 / num2}`)
	} else if(mathSymbol === "sqrt") {
		console.log(`Answer: ${Math.sqrt(num1)}`)
	} else if(mathSymbol === "sq") {
		console.log(`Answer: ${num1 * num1}`)
	};

	// This line closes the connection to the command line interface.
	reader.close()

});
