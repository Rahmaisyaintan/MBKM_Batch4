function reverseString(text) {
    let reversed = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    return reversed;
}


console.log(reverseString("Halo World and Coders"));
console.log(reverseString("John Doe"));
console.log(reverseString("Iam a bookworm"));
console.log(reverseString("Coding is my hobby"));
console.log(reverseString("super"));