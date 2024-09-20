const express = require('express');
const readline = require('readline');

const app = express();
const PORT = 3000;

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askForInput = () => {
    
    let index = 0;
    let first = 0; let second = 1; let container = [];

    readLine.question('Enter a number for fibonacci sequence: ', (input) => {

        const number = parseInt(input, 10);

        if (!Number.isInteger(number)) console.log('Please enter a valid integer.');
    
        if(number <= 0 || number > 20) console.log(`Invalid, Number should be 1 - 20`);
        
        while (index < input) {
            container.push(first);
            let x = first + second;
            first = second;
            second = x;
            index++;
        }

        console.log(container)

        askForInput();
    });
};


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    askForInput(); 
});