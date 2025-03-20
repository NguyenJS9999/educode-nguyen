/**
    Task 09: Viết hàm thực hiện hoán vị 2 số không dùng biến trung gian
    Hoán vị 2 số
    Viết hàm swapNumber(a,b) thực hiện hoán vị 2 số không dùng biến trung gian và không được dùng kiến thức về mảng.
*/

const numA = parseFloat(prompt('Task 9: Nhập số a: '));
const numB = parseFloat(prompt('Task 9: Nhập số b: '));

// Input:
function swapNumber() {
	// Xử lý và in ra kết quả
    a = parseFloat(numA || 5);
    b = parseFloat(numB || 3);
    console.log(` Đầu vào ban đầu với giá trị của a = ${a} và b = ${b}`);

    a = a + b; // a = 3 + 5 = 8
    b = a - b; // b =  8 - 5 = 3
    a = a - b; // a = 8 - 3 = 5
    console.log(` Đầu ra sau hoán đổi với giá trị của a = ${a} và b = ${b}`);
    return (a, b)
}
// Output:
console.log(swapNumber()); // 5 3
