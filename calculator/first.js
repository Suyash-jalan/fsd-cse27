let display = document.getElementById("main");

function a() {display.value += "7"};
function b() {display.value += "8"};
function c() {display.value += "9"};
function e() {display.value += "4"};
function f() {display.value += "5"};
function g() {display.value += "6"};
function i() {display.value += "1"};
function j() {display.value += "2"};
function k() {display.value += "3"};
function n() {display.value += "0"};

function d() {display.value += "+"};
function h() {display.value += "-"};
function l() {display.value += "*"};
function p() {display.value += "/"};

function m(){
    display.value = " ";
}

function o() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}