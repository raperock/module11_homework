let arr=[3,6,18,0,0,null, '-','?'];
let nullChar=0;
let evend=0;
let odd=0;
console.log(arr);

function find() {
    for (let i = 0; i < arr.length; i++){
        if (arr [i] === 0){
            ++nullChar;
        }
       else if (typeof arr [i] =='number'){
                    if (arr [i] % 2 === 0){
                        ++evend;
                }
                    else ++odd;

        }
    }
    console.log('кол-во элементов равных 0 -  '+nullChar);
    console.log('кол-во элементов четных  -  '+evend);
    console.log('кол-во элементов нечетных  - '+odd);
}

find();