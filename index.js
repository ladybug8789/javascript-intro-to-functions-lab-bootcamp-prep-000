function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
  console.log(string)
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if string === string.toLowerCase() {
    console.log(`I can\'t hear you!`)
  } else if string === string.toUpperCase() {
    console.log(`YES INDEED!`)
  } else string === `I love you, Grandma.` {
    return `I love you, too.`
  }
}
