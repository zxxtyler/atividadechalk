const inquirer = require('inquirer')
const chalk = require('chalk')


inquirer
.prompt([
    { name: 'nome', message: 'Qual o seu nome?'},
    { name: 'idade', message: 'Qual a sua idade?'}
])


console.log(chalk.black(prompt))
console.log(chalk.bgYellow(prompt))

