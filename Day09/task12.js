const num = parseFloat(
	prompt(
		'Task 12: Nhập số vào giới hạn để kiếm tra trong khoảng có bao số chính phương: '
	)
);

// Input:
function printSquareNumber() {
	// Xử lý và in ra kết quả
	console.log('num: ', num, typeof num);
	if (num && typeof num === 'number' && !isNaN(num)) {
		console.log('Đầu vào là dạng số hợp lệ')
		let result = [];
		for (let i = 2; i <= num; i++) {
			if (Number.isInteger(Math.sqrt(i))) {
				result.push(i);
			}
		}
		console.log(result);
		alert(`Trong khoảng từ 1 đến ${num} có ${result.length} số chính phương là các số: ${result.join(', ')}`);
	}
}

// Output:
printSquareNumber();
console.log('--------------------');
// printSquareNumber(20);

// console.log(printSquareNumber(10)); // 4 9
// console.log(printSquareNumber(20));  // 4 9 16
