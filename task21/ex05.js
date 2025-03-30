/**
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