// const createAirplaneElement = () => {
//     const element = document.createElement('p')
//     element.textContent = 'airplane'
//     element.classList.add('airplane')
//     return element
// }
//
// const content = document.getElementById('content')
// const airplane = createAirplaneElement()
// // let airplaneLeft = 0
// content.append(airplane)

// const AIRPLANE_SPEED = 150
// const ANIMATION_INTERVAL = 0.02

// setInterval(() => {
//     airplaneLeft -= AIRPLANE_SPEED * ANIMATION_INTERVAL
//     if (airplaneLeft < 0) {
//         airplaneLeft = content.offsetWidth
//     }
//
//     airplane.style.left = `${airplaneLeft}px`
// }, ANIMATION_INTERVAL * 1000)