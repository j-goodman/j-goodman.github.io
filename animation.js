const wheelOne = document.getElementById("wheel-1")
const wheelTwo = document.getElementById("wheel-2")
const wheelThree = document.getElementById("wheel-3")

const fastenerOne = document.getElementById("fastener-1")
const fastenerTwo = document.getElementById("fastener-2")

const backframe = document.getElementById("backframe")
const belt = document.getElementById("belt")

wheelOne.style.display =
wheelTwo.style.display =
wheelThree.style.display =
fastenerOne.style.display =
backframe.style.display =
belt.style.display =
fastenerTwo.style.display = "block"

const scrollEvent = () => {
    let scroll = 180 + document.documentElement.scrollTop / 7
    wheelOne.style.transform = `translate(-420px, ${window.innerHeight - 427}px) rotate(${scroll}deg) scale(.5)`
    wheelTwo.style.transform = `translate(-150px, ${window.innerHeight - 440}px) rotate(${scroll * -2}deg) scale(.5)`
    fastenerOne.style.transform = `translate(-416px, 222px) rotate(225deg) scale(.25)`
    
    fastenerTwo.style.transform = `translate(${window.innerWidth - 677}px, ${-45}px) rotate(90deg) scale(-.4, .4)`
    wheelThree.style.transform = `translate(${window.innerWidth - 695}px, ${-150}px) rotate(${scroll * 0.6}deg) scale(.5)`
    belt.style.transform = `translate(${window.innerWidth - 710}px, -572px) rotate(0deg) scale(.5)`

    backframe.style.transform = `translate(10px, 10px)`
    
    // belt.style.opacity = .25
    // wheelThree.style.opacity = .55
    backframe.style.opacity = .55
    fastenerOne.style.opacity = .35
}

scrollEvent()
window.addEventListener("scroll", scrollEvent)