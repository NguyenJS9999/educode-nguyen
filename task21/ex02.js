let resultElement2 = document.getElementById('result2');

/**
    Viết hàm lọc lấy các số chẵn của một mảng
Thực hiện viết hàm filterEvenNumbers(arr) để lọc lấy các số chẵn từ mảng arr.

Ví dụ:

function filterEvenNumbers(arr) {
  // Xử lý và in ra kết quả
}

// Test

filterEvenNumbers([1, 2, 3, 4, 5, 6]) ; // Output: [2, 4, 6]
filterEvenNumbers([1, 3, 5, 7]) ; // Output: []
filterEvenNumbers([]) ; // Output: []
filterEvenNumbers([-2, -1, 0, 1, 2]) ; // Output: [-2, 0, 2]

*/
const Vd2htmlOut = [];
function filterEvenNumbers(arr) {
	console.log(`Mảng ban đầu cần lọc các số chắn: `, !arr ? `Thiếu đầu vào`: arr);
	Vd2htmlOut.push(`<div>Mảng ban đầu cần lọc các số chắn [${arr}]</div>`)

	let evenNumberArr = [];
	if (arr) {
		for (let i = 0; i < arr.length; i++) {
			Vd2htmlOut.push(`<div></div>`)
			if (arr.length <= 0) {
				return [];
			}
			if (arr[i] % 2 === 0) {
				evenNumberArr.push(arr[i]);
			}

		}
		console.log(
			`Mảng mới sau khi lọc lấy các số chẵn của một mảng ban đầu: ' [${evenNumberArr}]`
		);
		console.log(`-------------------------------------------------------`);

		Vd2htmlOut.push(`Mảng sau khi lọc: [ ${evenNumberArr} ] <br> `);
		Vd2htmlOut.push(`<br>`);

		return evenNumberArr;
	} else {
		resultElement1.innerHTML = `Đầu vào ko hợp lệ`;
		return `Đầu vào ko hợp lệ`;
	}
}

filterEvenNumbers([1, 2, 3, 4, 5, 6]); // Output: [2, 4, 6]
filterEvenNumbers([1, 3, 5, 7]); // Output: []
filterEvenNumbers([]); // Output: []
filterEvenNumbers([-2, -1, 0, 1, 2]); // Output: [-2, 0, 2]

resultElement2.innerHTML = `
    ${Vd2htmlOut.map(item => `<div>${item}</div>`).join('')}
`;
