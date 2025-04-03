// Task 27: Xây dựng lại phương thức reduce
/**


*/

Array.prototype.reduce2 = function (callback, initialValue) {
	if (typeof callback !== 'function') {
		throw new TypeError('Callback must be a function');
	}

	let arr = this; // Tham chiếu đến mảng hiện tại
	let hasInitialValue = arguments.length > 1; // Kiểm tra có initialValue không
	let accumulator = hasInitialValue ? initialValue : undefined;
	let startIndex = hasInitialValue ? 0 : 1; // Nếu không có initialValue, bắt đầu từ index 1

	if (!hasInitialValue && arr.length === 0) {
		throw new TypeError('Reduce of empty array with no initial value');
	}

	if (!hasInitialValue) {
		// Nếu không có initialValue, tìm giá trị đầu tiên hợp lệ trong mảng
		for (let i = 0; i < arr.length; i++) {
			if (i in arr) {
				// Kiểm tra phần tử có tồn tại không (bỏ qua empty slot)
				accumulator = arr[i];
				startIndex = i + 1;
				break;
			}
		}
	}

	for (let i = startIndex; i < arr.length; i++) {
		if (i in arr) {
			// Bỏ qua phần tử trống
			accumulator = callback(accumulator, arr[i], i, arr);
		}
	}

	return accumulator;
};

// Sample 1
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result1 = arr1.reduce2((accumulator, value) => accumulator + value, 0);
console.log(result1); // 15

// Sample 2
const arr2 = [];
try {
	const result2 = arr2.reduce2((accumulator, ) => accumulator + value);
	console.log(result2);
} catch (error) {
	console.log(error.message); // "Reduce of empty array with no initial value"
}

// Sample 3
const arr3 = [];
const result3 = arr3.reduce2((accumulator, value) => accumulator + value, 0);
console.log(result3); // 0
