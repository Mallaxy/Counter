"use strict"

const d = () => {
    count.innerHTML = parseInt(--count.innerHTML)
}
const r = () => {
    count.innerHTML = 0
}
const i = () => {
    count.innerHTML = parseInt(++count.innerHTML)
}
const decreace = document.querySelector('#decrease')
decreace.addEventListener("click", d)
const reset = document.querySelector('#reset')
reset.addEventListener("click", r)
const increase = document.querySelector('#increase')
increase.addEventListener("click", i)