function reverseSentence(sentence) {
    // Spliting sentence
    let words = sentence.split(' ');

    // Reversing each word
    let reverseWords = words.map(word => reverseWord(word));

    // Joining reverse words
    let reverseSentence = reverseWords.join(' ');

    return reverseSentence;
}

function reverseWord(word) {
    // Spliting word
    return word.split('').reverse().join('');
}

const input = "Hello world, how are you?";
const reverse = reverseSentence(input);

console.log("Original Sentence: " + input);
console.log("Reversed Sentence: " + reverse);
