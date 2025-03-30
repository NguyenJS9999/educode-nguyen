/**
    Viết hàm nhận vào một mảng và làm sạch các falsy values có trong mảng
    Thực hiện viết hàm cleanFalsyValues(arr) để nhận vào một mảng arr và loại bỏ các giá trị falsy có trong mảng đó.

    Ví dụ:
    function cleanFalsyValues(arr) {
    // Xử lý và in ra kết quả
    }

    // Test
    cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3]); // Output: [1, "hello", 2, 3]
*/
let resultElement1 = document.getElementById('result1');

// const arr1 = parseFloat(
// 	prompt(
// 		`  Task 21: Loại bỏ các giá trị falsy có trong mảng [  1, 0, '', null, 'hello', undefined, NaN, 2, 3 ] `
// 	)
// );
function cleanFalsyValues(arr) {
	// Xử lý và in ra kết quả
	console.log('Đầu vào:', arr);
	const cleanArr = [];
	for (i = 0; i < arr.length; i++) {
		if (arr[i]) {
			cleanArr.push(arr[i]);
		}
	}
	console.log('Mảng arr và loại bỏ các giá trị falsy: ', cleanArr);
	resultElement1.innerHTML = `<p>Mảng arr và loại bỏ các giá trị falsy: ' [ ${cleanArr} ]</p>`;
}

// Test

cleanFalsyValues([1, 0, '', null, 'hello', undefined, NaN, 2, 3]); // Output: [1, "hello", 2, 3]
