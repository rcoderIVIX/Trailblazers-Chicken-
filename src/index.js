import "./styles.css";

import { chickenShop } from "./chickenshop";

import { menu } from "./menu";

import { contact } from "./contact";

let homeButton = document.querySelector('.home')

let menuButton = document.querySelector(".menu")

let contactButton = document.querySelector('.contact')

let content = document.querySelector("#content");

contact();

homeButton.addEventListener("click", ()=>{

        while (content.firstChild) {
        content.removeChild(content.firstChild);

        }
        chickenShop();
    })

menuButton.addEventListener('click', ()=>{
        while (content.firstChild) {
            content.removeChild(content.firstChild);
    
            }
            menu();
    })

contactButton.addEventListener('click', ()=>{
    while (content.firstChild) {
        content.removeChild(content.firstChild);

        }
        contact();
})




