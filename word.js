import inquirer from "inquirer";
const userinput = await inquirer.prompt([{
        type: "input",
        name: "paragraph",
        message: "Enter your paragraph to count word"
    }]);
const parainput = userinput.paragraph;
const letterWithoutSpace = parainput.replace(/\s/g, "");
const lettercount = letterWithoutSpace.length;
// console.log(lettercount)
const wordArry = parainput.split(" ");
const wordCount = wordArry.length;
console.log(`Total letter in your para are ${lettercount}and total words are${wordCount}`);
