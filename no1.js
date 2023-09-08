function changeWord(selectedText, changedText, text) {
  const newText = text.replace(selectedText, changedText);
  return newText;
}

const kalimat1 = "Saya suka karya musik Fiersa Besari",
  kalimat2 = "saya suka bermain bola";

const newText1 = changeWord("Fiersa Besari", "Firza", kalimat1),
  newText2 = changeWord("bola", "Kucing", kalimat2);

console.log(newText1);
console.log(newText2);
