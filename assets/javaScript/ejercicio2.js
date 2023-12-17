//Elementos del Dom 
const parfMessage =document.getElementById("aMessage")
const btnverify =document.getElementById("btn")

//funciones
function calcStikers(){
    const oneInput = document.getElementById("sticker-1")
    const twoInput = document.getElementById("sticker-2")
    const threeInput = document.getElementById("sticker-3")
    const result = Number(oneInput.value) + Number(twoInput.value) + Number(threeInput.value)

    if (result > 10) {
        parfMessage.innerHTML = "Llevas demasiados stickers"
    } else {
        parfMessage.innerHTML = `llevas ${result} stikers`
    }
}
