'use strict';
console.log('avg.js');


export function avarage(n1,n2,n3) {
    const sum = n1 + n2 + n3;
    const avg = (sum  / 3).toFixed(2);
    return avg;
}

