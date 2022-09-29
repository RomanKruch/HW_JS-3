const inpNumber = +prompt('Введіть число !!!');
let s = 0;

for (let i = 0; i!==inpNumber+1;i+=1) {
    if (inpNumber % i === 0) {
        s+=i;
    }
}

console.log(s);