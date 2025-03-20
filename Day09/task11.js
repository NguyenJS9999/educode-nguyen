/**
    Viết hàm kiểm tra 3 số là độ dài 3 cạnh tam giác
    Thực hiện viết hàm isTriangle(a, b, c) để kiểm tra 3 số a, b, c có thể tạo thành 1 tam giác hợp lệ hay không. Nếu có trả về true, ngược lại trả về false.

    function isTriangle(a, b, c) {
    // Viết logic trả về true hoặc false ở đâyđây
    }

    // Test cases:
    console.log(isTriangle(3, 4, 5)); // true
    console.log(isTriangle(3, 4, 7)); // false
*/

// const num = prompt(
// 	'Task 11: Nhập vào 3 số là độ dài của 3 cạnh bất kì của 1 tam giác: '
// );
// const nums = num.split(',').map(Number);
// console.log('Các số độ dài cạnh tam giác: ', nums);

function isTriangle(a, b, c) {
	// Viết logic trả về true hoặc false ở đây đây

    console.log(`Các số ban đầu từ prams ${a}, ${b}, ${c}`);

    if (a, b, c) {
        if (a + b > c && a + c > b && b + c > a) {
            return `Các số ${a}, ${b}, ${c} có thể tạo thành 1 tam giác hợp lệ.`;
        } else {
            return `Các số ${a}, ${b}, ${c} Không thể tạo thành 1 tam giác hợp lệ.`;
        }
    }

    // if (nums) {
    //     if (a + b > c && a + c > b && b + c > a) {
    //         console.log(`Các số ${a}, ${b}, ${c} có thể tạo thành 1 tam giác hợp lệ.`);
    //     } else {
    //         console.log(`Các số ${a}, ${b}, ${c} Không thể tạo thành 1 tam giác hợp lệ.`);
    //     }
    // }



}

// isTriangle();
console.log(isTriangle(3, 4, 5)); // true
console.log(isTriangle(3, 4, 7)); // false
