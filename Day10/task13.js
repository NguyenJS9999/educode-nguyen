/**
    Viết hàm in ra các số nguyên tố từ 2 đến n:
    Thực hiện viết hàm printPrimeNumber(n) để in ra các số nguyên tố từ 2 đến n.

    Ví dụ:

    // Input:
    function printPrimeNumber(n) {
    // Xử lý và in ra kết quả
    }

    // Output:
    printPrimeNumber(10); // 2 3 5 7

*/

let resultElement = document.getElementById('result');

const num = parseFloat(
	prompt(
		'Task 13: Nhập vào số >2 để tìm các số nguyên tố từ sau 1 đến số đó: '
	)
);

// Input:
function printPrimeNumber() {

	if (isNaN(num) && num < 2) {
		resultElement.textContent = 'Vui lòng nhập số nguyên dương ≥ 2.';
		console.log('Vui lòng nhập số nguyên dương ≥ 2.');
	} else {
		let primeArr = [];

		for (let i = 2; i <= num; i++) {
			for (var j = 2; j <= Math.sqrt(i); j++) { // căn 2 => khắc căn -> ko nguyên tố
				if (i % j === 0) break;
			}
			if (j > Math.sqrt(i)) {
				primeArr.push(i);
			}
		}

		console.log(
			primeArr.length
				? `Số nguyên tố trong khoảng từ số ${2} tới ${num} là: ${' '} ${primeArr}`
				: `Không có số nguyên tố nào trong khoảng từ số ${2} tới ${num}.`
		);

        resultElement.textContent =
        primeArr.length
				? `Số nguyên tố trong khoảng từ số ${2} tới ${num} là: ${' '} ${primeArr}`
				: `Không có số nguyên tố nào trong khoảng từ số ${2} tới ${num}.`

	}
}

// Output:
printPrimeNumber(); // nhập 10 ra 2 3 5 7
