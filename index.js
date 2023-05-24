let speedX = 0, speedY = 0
let positionX = 500, positionY = 500
let isFreeFalling = false
let isOnGround = false
let rotationInDeg = 0

const accelerationX = 5
const accelerationY = 5
const freeFallAccelerationY = 30
const angularAccelerationInDeg = 30

const interval = 0.02

const player = document.getElementById('player')
const enemy = document.getElementById('enemy')
const contentDiv = document.getElementById('content')

document.addEventListener('keydown', (event) => {
    if (isFreeFalling) {
        return
    }

    const callback = {
        "ArrowLeft"  : leftHandler,
        "ArrowRight" : rightHandler,
        "ArrowUp"    : upHandler,
        "ArrowDown"  : downHandler,
    }[event.key]
    callback()
})

const leftHandler = () => {
    speedX -= accelerationX
}

const rightHandler = () => {
    speedX += accelerationX
}

const upHandler = () => {
    speedY += accelerationY
}

const downHandler = () => {
    speedY -= accelerationY
}

setInterval(() => {
    if (isFreeFalling && !isOnGround) {
        speedY -= freeFallAccelerationY * interval
        rotationInDeg += angularAccelerationInDeg * interval
    }

    positionX += speedX * interval
    positionY += speedY * interval

    positionX = Math.max(0, Math.min(contentDiv.offsetWidth, positionX))
    positionY = Math.max(0, Math.min(contentDiv.offsetHeight, positionY))

    isOnGround = positionY === 0

    updatePlayerPosition()
    updatePlayerRotation()
    if (!isFreeFalling && isColliding()) {
        isFreeFalling = true
    }
}, interval * 1000)

const updatePlayerPosition = () => {
    player.style.left = `${positionX}px`
    player.style.bottom = `${positionY}px`
}

const updatePlayerRotation = () => {
    player.style.transform = `rotate(${rotationInDeg}deg)`;
}

const isColliding = () => {
    const playerRect = player.getBoundingClientRect()
    const enemyRect = enemy.getBoundingClientRect()

    return playerRect.top < enemyRect.bottom &&
        playerRect.bottom > enemyRect.top &&
        playerRect.left < enemyRect.right &&
        playerRect.right > enemyRect.left
}