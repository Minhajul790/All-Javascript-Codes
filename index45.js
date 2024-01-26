// Write a js program to get the extension of a file

let file1 = "index.json";

let getFileExtension = (file) => {
    return file.slice(file.lastIndexOf('.'));
}

console.log(getFileExtension(file1));