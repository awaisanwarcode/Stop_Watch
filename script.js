const btns = document.getElementsByTagName("button");
const mark = document.querySelector("ul");
const time_Con = document.getElementsByClassName("time");
const clock = document.getElementById("clock");
const disclDiv = document.getElementById("disc_div");
const paras = document.getElementsByTagName("p");
// varaiblse
let miliSec_Con = time_Con[2];
let Sec_Con = time_Con[1];
let mint_Con = time_Con[0];
let Clr1;
let Clr2;
let Clr3;
// Function that start the counting:
function starting_Fun() {
    // Setting Back the Changes that were made by "Stop" Button (btns[2]) ;
    clock.style.border = "4px solid rgb(252, 169, 15)";
    for (let i = 0; i < time_Con.length; i++) {
        time_Con[i].style.color = "rgb(252, 169, 15)";
    }
    btns[0].innerText = "Start";
    // Intervals
    Clr1 = setInterval(() => {
        miliSec_Con.innerText++;
        stoping_Fun();
    }, 1);
    Clr2 = setInterval(() => {
        Sec_Con.innerText++;
        Sec_Stp_Fun();
    }, 1000);
    Clr3 = setInterval(() => {
        mint_Con.innerText++;
        min_Stp_Fun();
    }, 60000);
}
// Stoping Function for Milli Seconds
function stoping_Fun() {
    if (miliSec_Con.innerText == 1000) {
        miliSec_Con.innerText = 0;
    }
}
// Stoping Function for Seconds
function Sec_Stp_Fun() {
    if (Sec_Con.innerText < 10) {
        Sec_Con.innerText = `0${Sec_Con.innerText}`;
    }
    if (Sec_Con.innerText == 60) {
        Sec_Con.innerText = 0;
    }
}
// Stoping Function for minutes
function min_Stp_Fun() {
    if (mint_Con.innerText < 10) {
        mint_Con.innerText = `0${mint_Con.innerText}`;
    }
    if (mint_Con.innerText == 60) {
        mint_Con.innerText = 0;
        alert("One Hour Completed")
    }
}
// function to get time while to stop
function get_Time() {
    let newMark = document.createElement("li");
    newMark.innerHTML = `<li>${mint_Con.innerText} : ${Sec_Con.innerText} : ${miliSec_Con.innerText}</li`
    mark.appendChild(newMark);
}
// EVENT LISTENER
btns[0].addEventListener("click", starting_Fun);
btns[1].addEventListener("click", () => {
    get_Time();
});
btns[2].addEventListener("click", () => {
    console.log(time_Con)
    clock.style.border = "4px solid rgb(236, 252, 15)";
    for (let i = 0; i < time_Con.length; i++) {
        time_Con[i].style.color = "rgb(236, 252, 15)";
    }
    clearInterval(Clr1);
    clearInterval(Clr2);
    clearInterval(Clr3);
    btns[0].innerText = "Rerun";
});
clock.addEventListener("click", () => {
    for (let i = 0; i < time_Con.length; i++) {
        time_Con[i].innerText = "00"
    }
    clock.style.border = "4px solid rgb(252, 169, 15)";
    for (let i = 0; i < time_Con.length; i++) {
        time_Con[i].style.color = "rgb(252, 169, 15)";
    }
    btns[0].innerText = "Start";
});
let paras_Condi = "hidden";
disclDiv.addEventListener("click", () => {
    if (paras_Condi === "hidden") {
        for (let i = 0; i < paras.length; i++) {
            paras[i].style.display = "block";
        }
        paras_Condi = "displayed";
    } else {
        for (let i = 0; i < paras.length; i++) {
            paras[i].style.display = "none";
        }
        paras_Condi = "hidden";
    }
})
//*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*& Alhumdulilah Completed By Awais Anwar S/O Muhammad Ayub &*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*\\