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
	console.log('1 - Đầu vào của mảng cần thêm: ', array);
	// console.log('2 - Một ký tự bất kì muốn thêm vào mảng trên: ', num);
	if (!Array.isArray(array)) {
		console.log('Lỗi: Đầu vào phải là một mảng.');
		return;
	}


	// Thêm kí tự bất kì vào mảng
	array.push(num);
	// console.log('3 - Mảng cũ sau khi thêm một giá trị số mới vào cuối: ', array);

	// Lọc
	let trueArr = [];
	for (let i = 0; i < array.length; i++) {
		if (
			typeof array[i] !== 'string' &&
			typeof array[i] === 'number' &&
			!isNaN(array[i])
		) {
			trueArr.push(array[i]);
		}
	}

	console.log(
		' -  Mảng mới sau khi loại bỏ toàn bộ giá trị không phải là số hoặc là NaN : ',
		trueArr
	);

	for (let i = 1; i < trueArr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (trueArr[j] < trueArr[j - 1]) {
                let template = trueArr[j];
                trueArr[j] = trueArr[j - 1];
                trueArr[j - 1] = template;
            } else {
                break;
            }
        }
    }


	console.log(`==> Mảng sau khi lọc sắp xếp theo thứ tự tăng dần :`, trueArr);
	console.log(
		`------------------------------------------------------------------------`
	);
}

insertNumber([1, 3, 5, 7, 9], 6); // Output: [1, 3, 5, 6, 7, 9]
insertNumber([3, 'hello', 1, NaN, 4, null], 2); // Output: [1, 2, 3, 4]
insertNumber([], 5); // Output: [5]
insertNumber([-1, 10, -5, 'abc'], -3); // Output: [-5, -3, -1, 10]
insertNumber([5, 2, 8], NaN); // Output: [2, 5, 8]
