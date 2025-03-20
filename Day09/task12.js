// Input:
function printSquareNumber(n) {
	// Xử lý và in ra kết quả
	if (n) {
		let result = [];
		for (let i = 2; i <= n; i++) {
			if (Number.isInteger(Math.sqrt(i))) {
				result.push(i);
			}
		}
		console.log(result);
	}
}

// Output:
printSquareNumber(10);
console.log('--------------------');
printSquareNumber(20);

// console.log(printSquareNumber(10)); // 4 9
// console.log(printSquareNumber(20));  // 4 9 16
