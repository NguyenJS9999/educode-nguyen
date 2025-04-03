/**
Cho trước mảng chứa các số nguyên, viết hàm tìm:
Tìm số lớn nhất trong mảng và vị trí của nó (Nếu có 2 số bằng nhau, lấy số đầu tiên tìm được).
Tìm số nhỏ nhất trong mảng và vị trí của nó (Nếu có 2 số bằng nhau, lấy số đầu tiên tìm được).
Tính trung bình cộng các số nguyên tố trong mảng, nếu mảng không có số nguyên tố nào, trả về null.
Ví dụ:

function findMinMaxAverage(arr) {
	// Xử lý và in ra kết quả
}

// Test
findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]); // Output: {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.25 }
findMinMaxAverage([5, 5, 2, 2, 1]); // Output: {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }
findMinMaxAverage([-3, 7, -8, 11, 0]); // Output: {max: 11, maxIndex: 3,min: -8, minIndex: 2,primeAverage: 9 }

 */

function findMinMaxAverage(arr) {
	console.log('**********************************************************');
	console.log('Mảng ban đầu cần xử lý: ', arr)
	let maxNum = arr[0], maxIndex = 0;
	let minNum = arr[0], minIndex = 0;
	let arrPrimeNumber = [];

	if (!Array.isArray(arr) || arr.length === 0) {
		return {
			maxNum: null,
			maxIndex: null,
			min: null,
			minIndex: null,
			primeAverage: null
		};
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > maxNum) {
			maxNum = arr[i]; // Chạy từ đầu nếu có số nào lớn hơn thì gán
			maxIndex = i;
			console.log('------------------------------------------------------------------------');

		}

		if (arr[i] < minNum) {
			minNum = arr[i]; // Chạy từ đầu nếu có số nào nhỏ hơn thì gán
			minIndex = i;
		}

		if (checkPrimeNumber(arr[i])) {
			arrPrimeNumber.push(arr[i]); // Mảng số nguyên tố
		}
	}

	let sumPrimeNumber = 0;
	let numPrimeAverage = null;

	console.log('Mảng các số nguyên tố tìm được', arrPrimeNumber);

	if (arrPrimeNumber.length > 0) {
		for (let i = 0; i < arrPrimeNumber.length; i++) {
			sumPrimeNumber += arrPrimeNumber[i];
		}
		numPrimeAverage = sumPrimeNumber / arrPrimeNumber.length;
		numPrimeAverage = parseFloat(numPrimeAverage.toFixed(2));
		// numPrimeAverage = Math.round( ( numPrimeAverage * 4 ) / 4 )
	}

	// console.log('sumPrimeNumber', sumPrimeNumber);
	// console.log('numPrimeAverage', numPrimeAverage);

	return {
		max: maxNum,
		maxIndex: maxIndex,
		min: minNum,
		minIndex: minIndex,
		primeAverage: numPrimeAverage
	};
}

function checkPrimeNumber(num) {
	if (num < 2) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) return false;
	}
	return true;
}

console.log(findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6])); // {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.25}
console.log(findMinMaxAverage([5, 5, 2, 2, 1])); // {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5}
console.log(findMinMaxAverage([-3, 7, -8, 11, 0])); // {max: 11, maxIndex: 3, min: -8, minIndex: 2, primeAverage: 9}
