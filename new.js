let a = 50;
 a = 40;
console.log(a)
const b = 100;
// b = 590;
console.log(b);
const name = {
    fullName: 'Rasel',
    age: 40,
    roll: 3,
    home: "Dhaka"
    
}
let mysk = `i have ${a} taka ,
my age ${name.age} old
my name ${name.fullName} raaz`
console.log(mysk)

const myNumber = num => num / 5;
const total = myNumber(55)
console.log(total)


const gooo = (num1, num2, num3) => {
    const multi1 = num1 * num2;
    const mult2 = multi1 * num3;
    return mult2;
}
const total2 = gooo(20, 4, 3);
console.log(total2);


const bb = (boo1, boo2) => {
    const goo = boo1 + 2;
    const hoo = boo2 + 2;
    const too = goo * hoo;
    return too;
}
const ftotal = bb(10, 15);
console.log(ftotal);

