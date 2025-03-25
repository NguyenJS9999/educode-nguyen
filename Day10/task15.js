/*
    Kiểm tra số cùng dấu
    Cho trước 2 số a, b. Kiểm tra 2 số cùng dấu hay không và hiển thị kết quả ra màn hình.
    function isSameSign(a, b) {
    // Viết logic kiểm tra 2 số cùng dấu ở đây
    }

    // Test cases
    isSameSign(10, 20); // true
    isSameSign(-10, -20); // true
    isSameSign(10, -20); // false

*/

let resultElement = document.getElementById('result');

const num1 = parseFloat(
	prompt('Task 15: Nhập vào số thứ nhất để kiểm tra dấu:')
);

const num2 = parseInt(prompt('Task 15: Nhập vào số thứ hai để kiểm tra dấu:'));

function isSameSign() {
	if (isNaN(num1) || isNaN(num2)) {
		console.log('Vui lòng nhập đủ số vàhợp lệ.');
		if (resultElement) {
			resultElement.textContent = 'Vui lòng nhập đủ số vàhợp lệ.';
		}
		return;
	}

	if ((num1 && num2, typeof num1 === 'number', typeof num2 === 'number')) {
		if (num1 * num2 > 0) {
			console.log(`2 số ${num1} và ${num2} có CÙNG dấu`);
			resultElement.textContent = `2 số ${num1} và ${num2} có CÙNG dấu`;
		} else {
            console.log(`2 số ${num1} và ${num2} có TRÁI dấu`);
            resultElement.textContent = `2 số ${num1} và ${num2} có TRÁI dấu`;

		}
	}
}

isSameSign();
// isSameSign(10, 20); // true
// isSameSign(-10, -20); // true
// isSameSign(10, -20); // false
