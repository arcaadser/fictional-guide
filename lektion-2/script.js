const namn = "JavaScript"
const version = 1.0

const str1 = "1. Hello " + namn + " version " + version;

function hello() {
    const str2 = `2. Hello-function ${namn} version ${version}`;
    console.log(str2);
}

function clickHandler() {
    console.log("Du tryckte på knappen!")
}

console.log(str1);
hello();