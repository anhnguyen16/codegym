const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // literal
let V = prompt("Nhap vao gia tri (So nguyen)");
// Kiểm tra xem giá trị nhập vào có phải số nguyên hay không
if (isNaN(V)) {
    V = +prompt("Nhap gia tri so nguyen");
}
for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item === +V) {
        arr.splice(i, 1);
        break;
    }
}
// Mảng mới sau khi xóa
console.log(arr);
