function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    const original = string;
    const upper = string.toUpperCase();
    const lower = string.toLowerCase();

      if (string === lower) {
        return `I can't hear you!`;
      }
      else if (string === upper) {
        return `YES INDEED!`;
      }
      else if (original === `I love you, Grandma.`) {
        return `I love you, too.`;
      }
  }