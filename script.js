//VARIABLES
let minutes = document.getElementById("min")
let seconds = document.getElementById("sec")
let workMinutes = document.getElementById("volume")
let breakMinutes = document.getElementById("volume1")
let longBreakMinutes = document.getElementById("volume2")
let workValue = document.getElementById("fader")
let breakValue = document.getElementById("fader1")
let longBreakValue = document.getElementById("fader2")
let count = 0
let interval
//BIND
document.querySelector(".start").addEventListener("click", () => {
    start()
})
document.querySelector(".up").addEventListener("click", () => {
    document.querySelectorAll('input[type="radio"]')[4].checked = true
    let fader = document.querySelectorAll("input[class = 'f']")
    fader.forEach(i => {
        i.disabled = false
    })
    document.querySelector(".start__btn").src = "image/start.png"
    count = 0
    clearInterval(interval)
    seconds.innerHTML = 0 + "0"
    minutes.innerHTML = Number(minutes.innerHTML) + Number(5)
    minutes.innerHTML = minutes.innerHTML < 10 ? "0" + minutes.innerHTML : minutes.innerHTML;
    if (minutes.className == "value-1") {
        workValue.value = minutes.innerHTML
        startWork()
    }
    if (minutes.className == "value-2") {
        breakValue.value = minutes.innerHTML
        startBreak()
    }
    if (minutes.className == "value-3") {
        longBreakValue.value = minutes.innerHTML
        startLongBreak()
    }
})

document.querySelector(".down").addEventListener("click", () => {
    document.querySelectorAll('input[type="radio"]')[4].checked = true
    let fader = document.querySelectorAll("input[class = 'f']")
    fader.forEach(i => {
        i.disabled = false
    })
    document.querySelector(".start__btn").src = "image/start.png"
    workValue.value = minutes.innerHTML
    count = 0
    clearInterval(interval)
    seconds.innerHTML = 0 + "0"
    minutes.innerHTML = Number(minutes.innerHTML) - Number(5)
    minutes.innerHTML = minutes.innerHTML < 0 ? 0 : minutes.innerHTML;
    minutes.innerHTML = minutes.innerHTML < 10 ? "0" + minutes.innerHTML : minutes.innerHTML;
    if (minutes.className == "value-1") {
        workValue.value = minutes.innerHTML
        startWork()
    }
    if (minutes.className == "value-2") {
        breakValue.value = minutes.innerHTML
        startBreak()
    }
    if (minutes.className == "value-3") {
        longBreakValue.value = minutes.innerHTML
        startLongBreak()
    }
})
document.querySelector(".down__mini").addEventListener("click", () => {
    document.querySelectorAll('input[type="radio"]')[4].checked = true
    let fader = document.querySelectorAll("input[class = 'f']")
    fader.forEach(i => {
        i.disabled = false
    })
    document.querySelector(".start__btn").src = "image/start.png"
    workValue.value = minutes.innerHTML
    count = 0
    clearInterval(interval)
    seconds.innerHTML = 0 + "0"
    minutes.innerHTML = Number(minutes.innerHTML) - Number(1)
    minutes.innerHTML = minutes.innerHTML < 0 ? 0 : minutes.innerHTML;
    minutes.innerHTML = minutes.innerHTML < 10 ? "0" + minutes.innerHTML : minutes.innerHTML;
    if (minutes.className == "value-1") {
        workValue.value = minutes.innerHTML
        startWork()
    }
    if (minutes.className == "value-2") {
        breakValue.value = minutes.innerHTML
        startBreak()
    }
    if (minutes.className == "value-3") {
        longBreakValue.value = minutes.innerHTML
        startLongBreak()
    }
})
document.querySelector(".up-mini").addEventListener("click", () => {
    document.querySelectorAll('input[type="radio"]')[4].checked = true
    let fader = document.querySelectorAll("input[class = 'f']")
    fader.forEach(i => {
        i.disabled = false
    })
    document.querySelector(".start__btn").src = "image/start.png"
    workValue.value = minutes.innerHTML
    count = 0
    clearInterval(interval)
    seconds.innerHTML = 0 + "0"
    minutes.innerHTML = Number(minutes.innerHTML) + Number(1)
    minutes.innerHTML = minutes.innerHTML < 10 ? "0" + minutes.innerHTML : minutes.innerHTML;
    if (minutes.className == "value-1") {
        workValue.value = minutes.innerHTML
        startWork()
    }
    if (minutes.className == "value-2") {
        breakValue.value = minutes.innerHTML
        startBreak()
    }
    if (minutes.className == "value-3") {
        longBreakValue.value = minutes.innerHTML
        startLongBreak()
    }
})
// document.querySelector('.sex3').addEventListener("click", () => {
//     reset()
// })
// FUNCTIONS
function start() {
    audio()
    document.querySelector(".start__btn").src = "image/stop.png"
    count = count + 1
    clearInterval(interval)
    interval = setInterval(startTimer, 1000)
    if (count % 2 == 0) {
        audio()
        clearInterval(interval)
        document.querySelector(".start__btn").src = "image/start.png"
    }
}

let count_pomodoro = 0

function startTimer() {
    let min
    let sec = seconds.innerHTML - 1
    if (sec == -1) {
        min = minutes.innerHTML - 1
        min = min < 10 ? "0" + min : min;
        minutes.textContent = min
        sec = 59
    }
    if(min == "0-1" && count_pomodoro == 4){
        console.log(count_pomodoro)
        count = 0
        sec = 0
        sec.innerHTML = 0
        return slide_3()
    }
    if (min == "0-1" && count_pomodoro % 2 == 0) {
        count_pomodoro = count_pomodoro + 1
        console.log(count_pomodoro)
        count = 0
        sec = 0
        sec.innerHTML = 0
        return slide_2()
    }
    if (min == "0-1" && count_pomodoro % 2 != 0) {
        count_pomodoro = count_pomodoro + 1
        console.log(count_pomodoro)
        count = 0
        sec = 0
        sec.innerHTML = 0
        return slide_1()
    }
    sec = sec < 10 ? "0" + sec : sec;
    seconds.textContent = sec
}

function reset() {
    minutes.className = ''
    count = 0
    clearInterval(interval)
    minutes.innerHTML = 25
    seconds.innerHTML = 0 + "0"
}

//FUNCTIONS POPUP
let modal = document.querySelector(".popup__container")
let modal__2 = document.querySelector(".popup")
document.querySelector(".options").addEventListener("click", () => {
    modal.style.display = "block"
    modal__2.style.display = "block"
    clearInterval(interval)
    seconds.innerHTML = 0 + "0"
    count = 0
    document.querySelector("body").style.overflow = "hidden"
})
document.querySelector(".popup__close").addEventListener("click", () => {
    modal.style.display = "none"
    modal__2.style.display = "none"
    document.querySelector("body").style.overflowY = "scroll"
    if (minutes.className == "value-1") {
        minutes.innerHTML = workMinutes.innerHTML
    }
    if (minutes.className == "value-2") {
        minutes.innerHTML = breakMinutes.innerHTML
    }
    if (minutes.className == "value-3") {
        minutes.innerHTML = longBreakMinutes.innerHTML
    }
})
///////////////////////////////////////////////////////////////////////////////////////////////
function outUpdate(vol) {
    let output = document.querySelector("#volume")
    output.value = vol
}
function outUpdate1(vol) {
    let output = document.querySelector("#volume1")
    output.value = vol
}
function outUpdate2(vol) {
    let output = document.querySelector("#volume2")
    output.value = vol
}
/////////////////////////////////////////////////////////////////////////////////////////
document.querySelector(".slide-1").addEventListener("click", () => {
    slide_1()
})
function slide_1() {
    startWork()
    document.querySelector(".start__btn").src = "image/start.png"
    document.querySelector(".slide-1 a").style.color = "white"
    document.querySelector(".slide-2 a").style.color = "#cfcfcfcf"
    document.querySelector(".slide-3 a").style.color = "#cfcfcfcf"
}

document.querySelector(".slide-2").addEventListener("click", () => {
    slide_2()
})
function slide_2() {
    startBreak()
    document.querySelector(".start__btn").src = "image/start.png"
    document.querySelector(".slide-2 a").style.color = "white"
    document.querySelector(".slide-1 a").style.color = "#cfcfcfcf"
    document.querySelector(".slide-3 a").style.color = "#cfcfcfcf"
}

document.querySelector(".slide-3").addEventListener("click", () => {
    slide_3()
})
function slide_3() {
    startLongBreak()
    document.querySelector(".start__btn").src = "image/start.png"
    document.querySelector(".slide-3 a").style.color = "white"
    document.querySelector(".slide-1 a").style.color = "#cfcfcfcf"
    document.querySelector(".slide-2 a").style.color = "#cfcfcfcf"
}
//////////////////////////////////////////////////////////////////////////////////////////
function startWork() {
    minutes.className = "value-1"
    count = 0
    clearInterval(interval)
    if (minutes.className == "value-1") {
        seconds.innerHTML = 0 + "0"
        workMinutes.innerHTML = workValue.value
        minutes.innerHTML = workMinutes.innerHTML
        document.querySelector("header").style.backgroundColor = '#1a1f46'
        document.querySelector(".time__slider-inner").style.border = '1px solid #37396b'
        document.querySelector(".time__slider-inner").style.boxShadow = '0px 0px 15px 10px #37396b'
        document.querySelector(".time__period-container").style.border = '4px solid #37396b'
        document.querySelector(".time__period-container").style.boxShadow = '0px 0px 15px 10px #37396b'
    }
}
function startBreak() {
    minutes.className = "value-2"
    count = 0
    count_periods = 2
    clearInterval(interval)
    if (minutes.className == "value-2") {
        seconds.innerHTML = 0 + "0"
        breakMinutes.innerHTML = breakValue.value
        minutes.innerHTML = breakMinutes.innerHTML
        document.querySelector("header").style.backgroundColor = '#1c2752'
        document.querySelector(".time__slider-inner").style.border = '1px solid #2f3e7a'
        document.querySelector(".time__slider-inner").style.boxShadow = '0px 0px 15px 10px #2f3e7a'
        document.querySelector(".time__period-container").style.border = '4px solid #2f3e7a'
        document.querySelector(".time__period-container").style.boxShadow = '0px 0px 15px 10px #2f3e7a'
    }
}
function startLongBreak() {
    minutes.className = "value-3"
    count = 0
    clearInterval(interval)
    if (minutes.className == "value-3") {
        seconds.innerHTML = 0 + "0"
        longBreakMinutes.innerHTML = longBreakValue.value
        minutes.innerHTML = longBreakMinutes.innerHTML
        document.querySelector("header").style.backgroundColor = '#211f42'
        document.querySelector(".time__slider-inner").style.border = '1px solid #34325f'
        document.querySelector(".time__slider-inner").style.boxShadow = '0px 0px 15px 10px #34325f'
        document.querySelector(".time__period-container").style.border = '4px solid #34325f'
        document.querySelector(".time__period-container").style.boxShadow = '0px 0px 15px 10px #34325f'
    }
}
///////////////////////////////////////////////////////////////////////
let radio = document.querySelectorAll('input[name = "radio"]');
let findSelected = () => {
    let selected = document.querySelector("input[name = 'radio']:checked").value;
    if (selected == "baby") {
        workMinutes.innerHTML = 10
        breakMinutes.innerHTML = 5
        longBreakMinutes.innerHTML = 10
        workValue.value = 10
        breakValue.value = 5
        longBreakValue.value = 10
    }
    if (selected == "popular") {
        workMinutes.innerHTML = 25
        breakMinutes.innerHTML = 5
        longBreakMinutes.innerHTML = 15
        workValue.value = 25
        breakValue.value = 5
        longBreakValue.value = 15
    }
    if (selected == "medium") {
        workMinutes.innerHTML = 40
        breakMinutes.innerHTML = 8
        longBreakMinutes.innerHTML = 20
        workValue.value = 40
        breakValue.value = 8
        longBreakValue.value = 20
    }
    if (selected == "hard") {
        workMinutes.innerHTML = 60
        breakMinutes.innerHTML = 10
        longBreakMinutes.innerHTML = 25
        workValue.value = 60
        breakValue.value = 10
        longBreakValue.value = 25
    }
    if (selected == "custom") {
        let fader = document.querySelectorAll("input[class = 'f']")
        fader.forEach(i => {
            i.disabled = false
        })
    } else {
        let fader = document.querySelectorAll("input[class = 'f']")
        fader.forEach(i => {
            i.disabled = true
        })
    }
}
radio.forEach(i => {
    i.addEventListener('change', findSelected)
})
///////////////////////////////////////////
let count_periods = 1

document.querySelector(".right").addEventListener("click", () => {
    if (document.getElementById("min").className == "value-2") {
        return slide_3()
    }
    if (document.getElementById("min").className == "value-1") {
        return slide_2()
    }
    else {
        return slide_1()
    }
})

document.querySelector(".left").addEventListener("click", () => {
    if (document.getElementById("min").className == "value-3") {
        return slide_2()
    }
    if (document.getElementById("min").className == "value-2") {
        return slide_1()
    }
    else {
        return slide_3()
    }
})
/////////////////////////////////////////////////////////////////////////////////
function audio() {
    let audio = document.querySelector("audio")
    audio.play()
}