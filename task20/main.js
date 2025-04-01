/**
    Task 20: Viết hàm in ra cây thông noel theo ký tự đã nhập
*/

let resultElement = document.getElementById('result');

function printChristmasTree(n, character) {
	if (!Number.isInteger(n) || n <= 0 || n >= 100) {
		console.log('Chiều cao phải là sô nguyên dương nhỏ hơn 100');
		return;
	}

	if (typeof character !== 'string' && character.length !== 1) {
		console.log('Ki tự cần in phải là 1 kí tự, đơn lẻ');
		return;
	}

	let treeHtml = '<pre>'; // html

	for (let i = 0; i < n; i++) {
		let spaces = '';
		let spacesHtml = ''; // html

		for (let j = 0; j < n - i - 1; j++) {
			spaces += ' ';
			spacesHtml += '&nbsp;'; // html
		}

		for (let k = 0; k < 2 * i + 1; k++) { // 2 * 0 + 1 = 1 *
			spaces += character;
		}
		console.log(spaces);
		treeHtml += spaces + '<br>'; // html
	}

	let origin = '';
	let originHtml = '';  // html

	for (let h = 0; h < n - 1; h++) {
		origin += ' ';
		originHtml += '&nbsp;';  // html
	}

	console.log(origin + character); // !!!

	let trunk = '&nbsp;'.repeat(n - 1) + character;  // html
	treeHtml += trunk + '</pre>';  // html

	resultElement.innerHTML += treeHtml;  // html
	console.log(
		`----------------------------------------------------------------------`
	);
}

printChristmasTree(10, '*');
