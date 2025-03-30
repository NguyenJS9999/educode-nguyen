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
	console.log('------------------------');
	let max = arr[0];
	let maxIndex = 0;
	let min = arr[0];
	let minIndex = 0;
	let arrPrimeNumber = [];

	if (!Array.isArray(arr) || arr.length === 0) {
		return {
			max: null,
			maxIndex: null,
			min: null,
			minIndex: null,
			primeAverage: null
		};
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
			maxIndex = i;
		}

		if (arr[i] < min) {
			min = arr[i];
			minIndex = i;
		}

		if (checkPrimeNumber(arr[i])) {
			arrPrimeNumber.push(arr[i]);
		}
	}

	let sum = 0;
	let numPrimeAverage = null;

	console.log('arrPrimeNumber', arrPrimeNumber);

	if (arrPrimeNumber.length > 0) {
		for (let i = 0; i < arrPrimeNumber.length; i++) {
			sum += arrPrimeNumber[i];
		}
		numPrimeAverage = (sum / arrPrimeNumber.length).toFixed(2);
	}

	console.log('sum', sum);
	console.log('numPrimeAverage', numPrimeAverage);

	return {
		max: max,
		maxIndex: maxIndex,
		min: min,
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
