/**
  Ví dụ 05
Viết hàm chèn số vào mảng mà không thay đổi thứ tự tăng dần của mảng.
Cho trước một mảng chưa được sắp xếp.
Hãy sắp xếp lại mảng theo thứ tự tăng dần và loại bỏ toàn bộ giá trị không phải là số hoặc là NaN của mảng.
Viết hàm insertNumber(arr, num) để chèn số num vào mảng arr mà không làm thay đổi thứ tự tăng dần của mảng.
Ví dụ:

function insertNumber(arr, num) {
  // Xử lý và in ra kết quả
}

// Test

insertNumber([1, 3, 5, 7, 9], 6); // Output: [1, 3, 5, 6, 7, 9]
insertNumber([3, "hello", 1, NaN, 4, null], 2); // Output: [1, 2, 3, 4]
insertNumber([], 5); // Output: [5]
insertNumber([-1, 10, -5, "abc"], -3); // Output: [-5, -3, -1, 10]
insertNumber([5, 2, 8], NaN); // Output: [2, 5, 8]
*/

function insertNumber(array, num) {
	console.log('Đầu vào của mảng cần thêm: ', array);
	console.log('In ra đầu vào muốn thêm vào mảng là 1 ký tự bất kì: ', num);
	if (!Array.isArray(array)) {
		console.log('Lỗi: Đầu vào phải là một mảng.');
		return;
	}

	// if (typeof num !== 'number' || isNaN(num)) {
	// 	console.log('Lỗi: Giá trị thêm vào phải là một số hợp lệ.');
	// }

	// Thêm kí tự bất kì vào mảng
	array.push(num);

	// Lọc
	let trueArr = [];
	for (let i = 0; i < array.length; i++) {

		if (
			array[i] &&
			typeof array[i] !== "string" &&
			typeof array[i] === "number" &&
			!isNaN(array[i])
		) {
			// console.log("typeof array[i]: ",typeof array[i])
			trueArr.push(array[i]);
		}

	}




	for (let i = 0; i < trueArr.length - 1; i++) {
		for (let j = 0; j < trueArr.length - 1; j++) {
			if (trueArr[j] > trueArr[j + 1]) {
				trueArr[j] = trueArr[j] + trueArr[j + 1];
				trueArr[j + 1] = trueArr[j] - trueArr[j + 1];
				trueArr[j] = trueArr[j + 1] - trueArr[j];
			}
		}
	}

	console.log(`=> Mảng sau khi lọc
		sắp xếp theo thứ tự tăng dần và loại bỏ toàn bộ giá trị không phải là số hoặc là NaN :`, trueArr);

	console.log(
		`------------------------------------------------------------------------`
	);
}

insertNumber([1, 3, 5, 7, 9], 6); // Output: [1, 3, 5, 6, 7, 9]
insertNumber([3, 'hello', 1, NaN, 4, null], 2); // Output: [1, 2, 3, 4]
insertNumber([], 5); // Output: [5]
insertNumber([-1, 10, -5, 'abc'], -3); // Output: [-5, -3, -1, 10]
insertNumber([5, 2, 8], NaN); // Output: [2, 5, 8]
