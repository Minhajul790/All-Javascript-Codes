// Uses of promises, async and await functionS

let fs = require("fs/promises");

const readThree = async(file1, file2, file3) => {
    let a1 = fs.readFile("file1.txt", "utf-8");
    let a2 = fs.readFile("file2.txt", "utf-8");
    let a3 = fs.readFile("file3.txt", "utf-8");
    let c1 = await a1;
    console.log (c1);
    let c3 = await a3;
    console.log(c3);
    let c2 = await a2;
    console.log(c2);
}
readThree("file1.txt", "file2.txt", "file3.txt");