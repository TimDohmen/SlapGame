
let healthEle = document.getElementById("health")
let hitEle = document.getElementById("hit-counter")
let restartElem = document.getElementById("restart")
// let moves = {
//   slap: 1,
//   kick: 5,
//   punch: 10
// }
let player1 = {
  name: "Guy",
  health: 100,
  moves: {
    slap: 1,
    kick: 5,
    punch: 10
  },
  inventory: []


}

let items = {
  pGun: {
    name: "Portal Gun",
    modifier: 5,
    description: "Opens a portal to antother dimension",
  },
  mBox: {
    name: "Mr.Meeseeks Box",
    modifier: 10,
    description: "Summon multiple Meeseeks for assistance",

  },
  mSeed: {
    name: "Mega Seeds!",
    modifier: 15,
    description: "You know where to put these....",
  },
}
let timesHit = 0
let multiplier = player1.inventory



function giveItem(item) {
  if (items.hasOwnProperty(item)) {
    player1.inventory.push(items[item])
  }
}


function addMods(stuff) {
  for (let i = 0; i <= player1.inventory.length; i++) {

  }
}



function hit(style) {
  // if (style == "slap") {
  //   health -= 1
  // } else if (style == "kick") {
  //   health -= 5
  // } else if (style == "punch") {
  //   health -= 10
  // }
  let pow = player1.moves[style]

  if (player1.health > 0) {
    player1.health -= pow + addMods()

  } else {
    restartElem.classList.remove('hidden')
    restartElem.innerText = "You beat Raid Boss Morty and find Ricks portal gun lying in the corner"
  }

  draw()
}

function win() {

}
function replay() {
  player1.health = 100;
  restartElem.classList.add('hidden')
}

function draw() {
  healthEle.innerText = player1.health.toString()
  hitEle.innerText = `${timesHit++}`
}
draw()



