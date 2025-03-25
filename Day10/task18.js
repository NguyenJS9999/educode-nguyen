/**
    Viết hàm in ra bảng cửu chương từ 1 đến 10 dựa vào vòng lặp for
    Thực hiện viết hàm printMultiplicationTable() để in ra bảng cửu chương từ 1 đến 10 dựa vào vòng lặp for.

*/

let resultElement = document.getElementById('result');
// const num = parseFloat(prompt('Task 18: Nhập vào số cạnh in ra tam giá cân: '));

function printMultiplicationTable() {
    let tableHTML = "";
	for (i = 1; i <= 9; i++) {
		console.log(`-----------------------`);
		console.log(` - Bảng cửu chương số ${i}`);

        tableHTML += `<div class="table">`;
        tableHTML += `<h3>Bảng cửu chương số ${i}</h3>`;

		for (j = 1; j <= 10; j++) {
			console.log(`${i} x ${j} = ${i * j}`);
            tableHTML += `<p>${i} × ${j} = ${i * j}</p>`;
		}
        tableHTML += `</div>`;
	}
    resultElement.innerHTML = tableHTML;
}

printMultiplicationTable();
