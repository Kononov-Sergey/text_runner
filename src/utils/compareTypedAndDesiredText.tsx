export enum typeOfText {
  MISSPELED = "mis",
  NORMAL = "normal",
}

export interface typedTextOjectToDisplayInterface {
  type: typeOfText;
  value: string;
}

export default function compareTypedAndDesiredText(
  typedText: string,
  fulltext: string[],
  numOfCurrentSentence: number
) {
  let wordBuffer: string = "";
  const resultArray: typedTextOjectToDisplayInterface[] = [];
  const currentDesiredSentence = fulltext[numOfCurrentSentence];

  for (let i = 0; i < typedText.length; i++) {
    if (currentDesiredSentence[i] === typedText[i]) {
      wordBuffer += typedText[i];
      continue;
    }
    resultArray.push({ type: typeOfText.NORMAL, value: wordBuffer });
    resultArray.push({ type: typeOfText.MISSPELED, value: typedText[i] });
    wordBuffer = "";
  }

  if (wordBuffer.length > 0) {
    resultArray.push({ type: typeOfText.NORMAL, value: wordBuffer });
  }
  return resultArray;
}
