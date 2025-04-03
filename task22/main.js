let resultElement2 = document.getElementById('result2');
/**
    Task 22: Viết hàm nhóm đặc điểm của người dùng
Viết hàm nhóm đặc điểm của người dùng
Viết hàm groupBy(arr, key) nhận vào một danh sách người dùng và một key, trả về object nhóm người dùng theo đặc điểm key.

// Input:
const users = [
  { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
  { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
  { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
  { fullname: "Nguyen Van D", age: 22, address: "HaNoi" },
  { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
];

*/

const users = [
	{ fullname: 'Nguyen Van A', age: 20, address: 'LangSon' },
	{ fullname: 'Nguyen Van B', age: 22, address: 'BacGiang' },
	{ fullname: 'Nguyen Van C', age: 21, address: 'HaNoi' },
	{ fullname: 'Nguyen Van D', age: 22, address: 'HaNoi' },
	{ fullname: 'Nguyen Van E', age: 32, address: 'LangSon' }
];

function groupBy(array, key) {
	if (!array || !Array.isArray(array) || array.length <= 0) {
		console.log(`Mảng dữ liệu không hợp lệ`);
		return `Mảng dữ liệu không hợp lệ`;
	}
    if ( !key || typeof key === "number" ) {
        console.log(`dữ liệu key cần tìm phải có và có chứa kí tự`);
        return(`dữ liệu key cần tìm phải có và có chứa kí tự`);
    }

    for (let i = 0; i < array.length; i++) {

        
    }
}

// Output:
const result1 = groupBy(users, 'age'); // nhóm theo tuổi
console.log(result1);
