//Elementos del Dom 
const parfMessage =document.getElementById("aMessage")
const btningresar =document.getElementById("btn")

//funciones
function validaPass(){
    const oneoption = document.getElementById("opcion1")
    const twooption= document.getElementById("opcion2")
    const threeoption = document.getElementById("opcion3")
    const result = oneoption.value + twooption.value + threeoption.value

    if (result === "911") {
        parfMessage.innerHTML = "Password 1 Correcto"
    } else if (result === "714") {
        parfMessage.innerHTML = "Password 2 Correcto"
    } else {
        parfMessage.innerHTML = "Password incorrecto"
    }
}