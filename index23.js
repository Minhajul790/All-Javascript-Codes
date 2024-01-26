// Write a js program to replace every character in a given string with the characters following it in the alphabet
// String.fromCharCode basically creates a unicode values and return a string  with that defined unicode values


const moveCharsForward = (str) => {
    return str.split('').map((char) => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
}


console.log(moveCharsForward('y'));
