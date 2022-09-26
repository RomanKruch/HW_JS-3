const c = +prompt('Введи С');
const d = +prompt('Введи D');
let k = 0;

for (let i = c; i!==d;i+=1) {
    let cube = i*i*i;
    if (cube % 10 === 4 || cube % 10 === 9) {
        k+=1
    }
}

console.log(k);