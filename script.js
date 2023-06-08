"use strict";
let arr = [2, 0, 2];

function Addnum(){
    for (let i = 0; i < 9; i++) {
        let nextnum = arr.slice(arr.length - 3).reduce((a, b) => a + b);
        arr.push(nextnum);
        console.log(nextnum);
    }
    console.log(arr);
}

Addnum();
