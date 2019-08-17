let mortyWepEle = document.getElementById('mortyWep')
let wepEle = document.getElementById('p1Wep')
let healthEle = document.getElementById("health")
let hitEle = document.getElementById("hit-counter")
let restartElem = document.getElementById("restart")
let buttonElem = document.getElementById('replay')
let mittHitEle = document.getElementById('mittHit-Counter')
let mittHealthEle = document.getElementById('mittHealth')
let victPortEle = document.getElementById('victoryPort')
// let moves = {
//   slap: 1,
//   kick: 5,
//   punch: 10
// }
let player1 = {
  name: "Guy",
  health: 100,
  moves: {
    slap: 2,
    kick: 4,
    punch: 12
  },
  inventory: [],
  timesHit: 0,
}
let player2 = {
  name: "Mitt",
  health: 100,
  moves: {
    slap: 1,
    kick: 5,
    punch: 10
  },
  inventory: [],
  timesMittHit: 0,
}


let items = {
  PortalGun: {
    name: "Portal Gun",
    modifier: 2,
    description: "Opens a portal to antother dimension",
  },
  MrMeeseeksBox: {
    name: "Mr.Meeseeks Box",
    modifier: 5,
    description: "Summon multiple Meeseeks for assistance",

  },
  MegaSeed: {
    name: "Mega Seeds!",
    modifier: 10,
    description: "You know where to put these....",
  },
  nothing: {
    modifier: 0
  }
}

function giveItem(item) {
  if (items.hasOwnProperty(item)) {
    player1.inventory.push(items[item])


  }

  if ((item) == "nothing") {
    wepEle.classList.add('hidden')

  } else {
    wepEle.classList.remove('hidden')
    wepEle.innerText = `Currently Equipped : ${(item)}`

  }
}



function giveMittItem(item) {
  if (items.hasOwnProperty(item)) {
    player2.inventory.push(items[item])
    mortyWepEle.classList.remove('hidden')
    mortyWepEle.innerText = `Currently Equipped : ${(item)}`

  }

  if ((item) == "nothing") {
    mortyWepEle.classList.add('hidden')

  } else {
    mortyWepEle.classList.remove('hidden')
    mortyWepEle.innerText = `Currently Equipped : ${(item)}`
  }

}

function addMods() {
  let modTotal = 0
  let current = player1.inventory.length
  for (let i = 0; i < current; i++) {
    modTotal = player1.inventory[i].modifier
  }
  return modTotal
}
function addMittMods() {
  let mittModTotal = 0
  let current2 = player2.inventory.length
  for (let i = 0; i < current2; i++) {
    mittModTotal = player2.inventory[i].modifier
  }
  return mittModTotal
}


function hit(style) {
  // if (style == "slap") {
  //   health -= 1
  // } else if (style == "kick") {
  //   health -= 5
  // } else if (style == "punch") {
  //   health -= 10
  // }
  let pow2 = player2.moves[style] + addMittMods()
  let pow = player1.moves[style] + addMods()
  if (player1.health > 1 && player2.health > 1) {
    player2.health -= pow
    player1.health -= pow2
  } else if (player1.health > 1 && player2.health < 1) {
    restartElem.classList.remove('hidden')
    buttonElem.classList.remove('hidden')
    restartElem.innerText = "You beat Raid Boss Morty and a interdimensional rift appears in the corner"
  } else {
    restartElem.classList.remove('hidden')
    buttonElem.classList.remove('hidden')
    restartElem.innerText = "Raid Boss Morty tosses you aside like the sad Jerry you are."
  }

  draw()
}

function win() {


}

function replay() {
  player1.health = 100;
  player2.health = 100;
  player2.timesMittHit = 0
  player1.timesHit = 0
  player1.inventory = []
  player2.inventory = []
  restartElem.classList.add('hidden')
  buttonElem.classList.add('hidden')
  draw()
  mortyWepEle.classList.add('hidden')
  wepEle.classList.add('hidden')
}

function draw() {
  healthEle.innerText = player1.health.toString()
  hitEle.innerText = `${player1.timesHit++}`
  mittHealthEle.innerText = player2.health.toString()
  mittHitEle.innerText = `${player2.timesMittHit++}`




}
draw()



