function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  const love = 'I love you, Grandma.';
  if(string === love){
    return "I love you, too.";
  }else{
    if(string.toLowerCase() === string){
      return
    }else if(string.toUpperCase() === string){
      return "YES INDEED!";
    }
  }
}