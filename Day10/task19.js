/**
	Viết hàm in ra bảng cửu chương từ 1 đến 10 dựa vào vòng lặp for
	Thực hiện viết hàm printMultiplicationTable() để in ra bảng cửu chương từ 1 đến 10 dựa vào vòng lặp for.
*/

let resultElement = document.getElementById('result');

const num =
// 6;
parseFloat(prompt('Task 19: Nhập vào số cạnh in ra tam giá cân: '));

function printIsoscelesTriangle() {
	let character = '*';
	let output = '';

	for (let i = 0; i < num; i++) { // 6
		let space = '';

		for (let j = 0; j < num - i - 1; j++) { // 6 - 0 - 1 = 5space
			space += ' ';
		}

		for (let k = 0; k < 2 * i + 1; k++) { // 6 * 0 + 1 = 1*
			space += character;
			output += space + '<br>'; // Xuống dòng trong HTML
		}

		console.log(space);
        // resultElement.textContent = space;

	}
}

// Test
printIsoscelesTriangle(5, '*');
