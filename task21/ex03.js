let resultElement3 = document.getElementById('result3');

/**
    Viết hàm lọc lấy các chuỗi có độ dài lớn hơn 5 của mảng các chuỗi
    Thực hiện viết hàm filterLongStrings(arr) để lọc lấy các chuỗi có độ dài lớn hơn 5 từ mảng arr.

    Ví dụ:

    function filterLongStrings(arr) {
        // Xử lý và in ra kết quả
    }

    // Test
    filterLongStrings(["hello", "world", "javascript", "nodejs"]); // Output: ["javascript", "nodejs"]
    filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"]); //Output: ["hello world", "goodbye!!"]
    filterLongStrings(["hi", "bye", "yes"]); //Output: []

*/

const Vd3htmlOut = [];
function filterLongStrings(arr) {
	const fiveLetterString = [];

	console.log('Ví dụ 3: Với đầu vào', arr);
	if (arr) {
		for (let i = 0; i < arr.length; i++) {
			// console.log('arr[i]: ', arr[i]);

			for (let j = 0; j < arr.length; j++) {
				if (arr[j].length > 5) {
					// console.log('arr[j].length > 5: ', arr[j]);
					fiveLetterString.push(arr[i]);
				}
			}
		}
		console.log(
			`chuỗi có độ dài lớn hơn 5 của mảng các chuỗi: ' [ ${fiveLetterString} ]`
		);

		console.log('fiveLetterString', fiveLetterString);

		Vd3htmlOut.push(`[${fiveLetterString}]`);
		console.log('--------------: ');
		return fiveLetterString;
	} else {
		resultElement3.innerHTML = `Đầu vào ko hợp lệ`;
		return `Đầu vào ko hợp lệ`;
	}
}
console.log('Vd3htmlOut', Vd3htmlOut);
resultElement3.innerHTML = `
    ${Vd3htmlOut.map(item => `<div>${item}</div>`).join('')}
`;

// Test
filterLongStrings(['hello', 'world', 'javascript', 'nodejs']); // Output: ["javascript", "nodejs"]
filterLongStrings(['hi', 'hello world', 'a b c', 'goodbye!!']); //Output: ["hello world", "goodbye!!"]
filterLongStrings(['hi', 'bye', 'yes']); //Output: []
