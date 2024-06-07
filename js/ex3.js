const word = "english";
const sentence = "abdcEnglishdef";
const result = wordExist()
export function wordExist() {
  const sentenceInLowerCase = sentence.toLowerCase();
  return sentenceInLowerCase.includes(word);
}
console.log(result);