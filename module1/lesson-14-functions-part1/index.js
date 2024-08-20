/*
 * Tham tri
 * Chi hoat dong tren cac bien co kieu du lieu nguyen thuy
 */

function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
}

let a = 5, b = 10;
// Truoc khi hoan doi
console.log(`a=${a}, b=${b}`); // a = 5, b = 10
swap(a, b);
// Sau khi hoan doi
console.log(`a=${a}, b=${b}`); // a = 10, b = 5

/*
 * Return
 * Hàm đệ quy
 */

function func1(a) {
    if (a === 2) return 2; // Điều kiện dừng
    return a * func1(a - 1);
}
// ===== 5 * (24) => 120
// ====== 4 * (6) => 24
// ======= 3 * 2 = 6
// ========
let result = func1(5);
console.log(result); // KQ: 120

// Kiểu dữ liệu nguyên thủy: boolean, number, string, undefined, null, symbol (ES6 - ECMA Script 2015)
// let color = 'white';

/*
 * Tham chieu
 */
// Kiểu dữ liệu tham chiếu: object, array, function
let vinFast = {
    color: 'black',
    seats: 4
} // Kieu doi tuong

function swapColor(car) {
    car.color = 'white';
}
// Gia tri ban dau
console.log(`Color: ${vinFast.color}`); // black
swapColor(vinFast);
// Gia tri sau khi thuc hien swap
console.log(`Color: ${vinFast.color}`); // black

let arr = ['red', 'blue'];
function changeValue(array) {
    array[0] = 'black';
}
// truoc khi thay doi
console.log(arr);
// sau khi thay doi
changeValue(arr);
console.log(arr);

console.log(typeof vinFast);
console.log(typeof arr);
console.log(typeof func1)

console.log('Dog:' + dog); // Milu //

var dog = 'Milu'; // Khai bao bien o pham vi toan cuc // hoisting


// Block Scope - Phạm vi
// console.log(dog);
{
   const cat = 'Thanh'; // Khai bao bien o pham vi cuc bo
   // console.log(dog);
   // console.log(cat);
    {
        const animal = 'Tiger';
        console.log(animal);
        // console.log(dog);
        // console.log(cat);
    }
    // console.log(aminal); // tiger
}
// console.log(cat); // Thanh


function func2(a) {
    if (a >= 10) return;
    console.log("a nho hon 10"); //
}
func2(9); //
