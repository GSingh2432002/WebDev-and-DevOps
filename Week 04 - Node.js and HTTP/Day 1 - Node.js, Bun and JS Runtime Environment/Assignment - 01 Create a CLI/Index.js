/*
Assignments #1 - Create a cli

Create a `command line interface` that lets the user specify a file path and the nodejs process counts the number of words inside it.

Input - node index.js /Users/kirat/file.txt
Output - You have 10 words in this file

Command - `node Index.js count_words filePath`
*/

const fs = require('fs');       //inetrnal module needed
const { Command } = require('commander');
const program = new Command()


program
  .name('counter')      //name of the program 
  .description('CLI to do file based tasks')        //description og program likke woh krta kya hai
  .version('0.8.0');            //version the program

// To count Total Words
program
    .command('count_words')            //yeh program bnaye hai jo..count command bnaye hai jo number of words ko count krta hai     
    .description('Count the number of Words in a file')       //yeh count ka description 
    .argument('<file>', 'file to count')          //yeh woh argument jo function ko chhaiye woh count command ko execute krne ke liye chahiye
    .action((file) => {           //ab yeh uska action ki like woh count command execute hua toh karna kya hai
        fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const words = data.split(" ").length;
            console.log(`There are ${words} words in ${file}`);
        }
        });
    });

// To count sentences
program
    .command("count_sentences")
    .description("Count the number of lines in a file")
    .argument("<file>", "file to count the number of lines")
    .action((file) => {
        fs.readFile(file, "utf-8", function (err, data) {
            if (err) {
                console.log(err);
                return;
            } else {
                const lines = data.split("\n").length;
                console.log(`There are total ${lines} lines in file ${file}.`);                
            }
        });
    });

program.parse();


// Note:- To execute yeh command we have type "node THIS_FILE_NAME COMMAND_NAME NAME_OF_THE_OTHER_FILE_JISPE_COMMAND_OPERATE_KREGA". Eg:-'node Index.js count a.txt'