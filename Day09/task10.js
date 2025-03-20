/**
    Task 10: Viết hàm thực hiện đổ chỗ 3 số thành thứ tự tăng dần

    Sắp xếp 3 số
    Cho trước 3 số a, b, c. Thực hiện đổi chỗ 3 số a, b, c sao cho 3 số có thứ tự tăng dần nhưng không được dùng phương thức sort() của mảng, cũng không được dùng biến trung gian.

    // Input:
    function sortNumber(a, b, c) {
    // Xử lý và in ra kết quả
    }

    // Output:
    sortNumber(3, 2, 1); // 1 2 3

*/

const num = prompt(
	'Task 10: Nhập vào kí tự dạng 3 số hoặc hơn phân cách nhau bằng dẩu phẩy: '
);
const nums = num.split(',').map(Number);
console.log('Các số từ mảng ban đầu: ', nums);

// Input:
function sortNumber() {
	// Xử lý và in ra kết quả
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
			}
		}
	}
	console.log('Các số từ mảng sau sắp xếp: ', nums);
}

// Output:
sortNumber(); // 1 2 3
