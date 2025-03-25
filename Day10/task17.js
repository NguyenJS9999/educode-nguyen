/**

    Khoản thu nhập từ trên 11 triệu đến 25 triệu: 5% thuế.
    Khoản thu nhập từ trên 25 triệu đến 50 triệu: 10% thuế.
    Khoản thu nhập từ trên 50 triệu đến 80 triệ u: 20% thuế.
    Khoản thu nhập từ trên 80 triệu: 30% thuế.
    Nếu thu nhập nhập vào không hợp lệ thì thông báo "Thu nhập không hợp lệ".
    // Input:
    function taxSalary(salary) {
        // Xử lý và in ra kết quả
    }

    // Output:
    taxSalary(10000000); // 0
    taxSalary(15000000); // 750000
    taxSalary(30000000); // 3000000
    taxSalary(-10000000); // Thu nhập không hợp lệ
    taxSalary("abc"); // Thu nhập không hợp lệ

    9000000
    10000000
    30000000
    15000000
    -10000000

*/

let resultElement = document.getElementById('result');

const salary = parseFloat(
	prompt(
		'Task 17: Nhập vào số tiền lương để tính lại sau thuế thu nhập cá nhân: '
	)
);

console.log('salary: ', salary);

const step0 = 0 / 100;
const step1 = 5 / 100;
const step2 = 10 / 100;
const step3 = 20 / 100;
const step4 = 30 / 100;
let stepNum = 0;
let afterTax = 0;
let stepCurrent = 0;
function taxSalary() {
	if (!salary) {
		console.log('Thu nhập không hợp lệ');
		resultElement.textContent = `Thu nhập không hợp lệ `;
		return;
	}

    if (salary <= 0  ) {
		console.log('Thu nhập không hợp lệ');
		resultElement.textContent = `Thu nhập không hợp lệ `;
		return;
	}


	switch (true) {
		case salary < 11000000:
			afterTax = salary - salary * step0;
			stepNum = 0;
            stepCurrent = step0 * 100;
			frintResult(afterTax);
			break;

		case salary >= 11000000 && salary < 25000000:
			afterTax = salary - salary * step1;
			stepNum = 1;
            stepCurrent = step1 * 100;
			frintResult(afterTax);
			break;

		case salary >= 25000000 && salary < 50000000:
			afterTax = salary - salary * step2;
			stepNum = 2;
            stepCurrent = step2 * 100;
			frintResult(afterTax);
			break;

		case salary >= 50000000 && salary < 80000000:
			afterTax = salary - salary * step3;
			stepNum = 3;
            stepCurrent = step3 * 100;
			frintResult(afterTax);
			break;
		case salary > 80000000:
			afterTax = salary - salary * step4;
			stepNum = 4;
            stepCurrent = step4 * 100;
			frintResult(afterTax);
			break;

		default:
			console.log('Thu nhập không hợp lệ');
			break;
	}
}

taxSalary();

function frintResult(afterTax) {
	if (afterTax) {
		console.log(
			`
            Với số tiền lương ${convertVnMoney(
				salary
			)}thì thu nhập 1 tháng sau thuế thu nhập cá nhân ở bậc ${stepNum} với ${stepCurrent}% là: ${convertVnMoney(
				afterTax
			)}
          `
		);
		if (resultElement) {
			resultElement.textContent = `
            Với số tiền lương ${convertVnMoney(
				salary
			)}thì thu nhập 1 tháng sau thuế thu nhập cá nhân ở bậc ${stepNum} với ${stepCurrent}% là: ${convertVnMoney(
				afterTax
			)}
          `;
		}
	}
}

function convertVnMoney(money) {
	console.log(money);
	if (money) {
		return money.toLocaleString('vi-VN', {
			style: 'currency',
			currency: 'VND'
		});
	} else {
		return '';
	}
}
