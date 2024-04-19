#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 50000; // DOLLAR
let myPin = 524727;
console.log(chalk.blue(" \n \t WELCOME TO HBL BANK \n "));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter Your Pin Code:"),
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green(" \n \t Pin is Correct, Login Successfully! \n "));
    // console.log(`Current Balance is ${myBalance}`)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an Option:",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select a Withdrawl method:",
                choices: ["Fast Cash", "Enter Amount", "Mini Statement", "PIN Change", "Funds Transfer", "Bill Payment", "Other Services"]
            }
        ]);
        // FAST CASH FEATURE (Assisgment 1)
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: "Select Amount:",
                    choices: ["2000", "5000", "7000", "10000"]
                }
            ]);
            // INSUFFICIENT BALANCE (Assigment 3)
            if (fastcashAns.fastcash > myBalance) {
                console.log(chalk.red("\n \t Insufficient Balance \n"));
            }
            else {
                myBalance -= fastcashAns.fastcash;
                console.log(`${fastcashAns.fastcash} Withdraw Successfully`);
                console.log(chalk.green(`\n  Your Remaining Balance is: ${myBalance}\n`));
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to Withdraw"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log(chalk.red("\n Insufficient Balance\n"));
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdraw Successfully`);
                console.log(chalk.green(`\n  Remaining Balance is:${myBalance}\n`));
            }
        }
    }
    // TEMPLATE LITERALS (Assigment 2)
    else if (operationAns.operation === "Check Balance") {
        console.log(chalk.green(`\n  Your Account Balance is:${myBalance}\n`));
    }
}
else {
    console.log(chalk.red("\n \tPin is Invalid, Try Again!\n"));
}
