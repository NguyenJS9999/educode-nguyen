/**
 Khoản thu nhập <= 11 triệu: Không tính thuế.
Khoản thu nhập từ trên 11 triệu đến 25 triệu: 5% thuế.
Khoản thu nhập từ trên 25 triệu đến 50 triệu: 10% thuế.
Khoản thu nhập từ trên 50 triệu đến 80 triệu: 20% thuế.
Khoản thu nhập từ trên 80 triệu: 30% thuế.
Nếu thu nhập nhập vào không hợp lệ thì thông báo "Thu nhập không hợp lệ".
 */

// const salary = parseFloat(
// 	prompt(
// 		'Task 17: Nhập vào số tiền lương để tính lại sau thuế thu nhập cá nhân: '
// 	)
// );
// Các cột mốc

let resultElement = document.getElementById('result');
let allResultOutHtml = [];

let milestone_1 = 11000000;
let milestone_2 = 25000000;
let milestone_3 = 50000000;
let milestone_4 = 80000000;
let tier = 0;
function taxSalary(salary) {
	console.log(`Đầu vào: với thu nhập ${convertVnMoney(salary)} `);

	if (!salary || isNaN(salary) || salary <= 0) {
		// console.log('Thu nhập không hợp lệ');
		// resultElement.textContent = `Thu nhập không hợp lệ `;
		return frintResult({
			message: 'Thu nhập không hợp lệ'
		});
	}

	if (salary <= milestone_1) {
		// 11 củ = Miễn thuế
		const value = nonTaxable();
		return frintResult({
			netSalary: salary, // lương NET
			grossSalary: value, // lương Gross sau thuế
			tier: 1,
			milestone: `${milestone_1}`, // Bậc chịu thuế
			totalTax: salary - salary
		});
	}
	// >11->25:  11tr + (4tr*5%)
	else if (salary <= milestone_2) {
		const value = nonTaxable() + taxableRange_2(salary);
		return frintResult({
			netSalary: salary,
			grossSalary: value,
			tier: 2,
			milestone: milestone_2,
			totalTax: salary - value
		});
	}
	// 25->50: 11tr + (4tr*5%) + ( 25tr*10% )
	else if (salary <= milestone_3) {
		const value =
			nonTaxable() + taxableRange_2(salary) + taxableRange_3(salary);
		return frintResult({
			netSalary: salary,
			tier: 3,
			milestone: milestone_3,
			grossSalary: value,
			totalTax: salary - value
		});
	}
	// 50->80: 11tr + (4tr*5%) + ( 25tr*10% )+ ( 30tr*20% ) +
	else if (salary <= milestone_4) {
		const value =
			nonTaxable() +
			taxableRange_2(salary) +
			taxableRange_3(salary) +
			taxableRange_4(salary);
		return frintResult({
			netSalary: salary,
			tier: 4,
			milestone: milestone_4,
			grossSalary: value,
			totalTax: salary - value
		});
	}
	// 80 < : 11tr + (4tr*5%) + ( 25tr*10% )+ ( 30tr*20% ) + (...-80tr * 30% )
	else {
		const value =
			nonTaxable() +
			taxableRange_2(salary) +
			taxableRange_3(salary) +
			taxableRange_4(salary) +
			taxableRange_5(salary);
		return frintResult({
			netSalary: salary,
			milestone: milestone_4,
			tier: 5,
			grossSalary: value,
			totalTax: salary - value
		});
	}
}
function nonTaxable() {
	// = 11 tr
	return milestone_1;
}

// Phần tính chịu thuế theo từng khoảng riêng đó dc trừ theo % riêng
function taxableRange_2(salary) {
	// từ 11tr đến 25tr
	if (salary > milestone_1) {
		let taxableIncome = Math.min(salary, milestone_2) - milestone_1;
		return taxableIncome * 0.05;
	}

	return 0;
}

function taxableRange_3(salary) {
	// từ 25tr đến 50tr
	if (salary > milestone_2) {
		let taxableIncome = Math.min(salary, milestone_3) - milestone_2;
		return taxableIncome * 0.1;
	}

	return 0;
}

function taxableRange_4(salary) {
	// từ 50tr đến 80tr
	if (salary > milestone_3) {
		let taxableIncome = Math.min(salary, milestone_4) - milestone_3;
		return taxableIncome * 0.2;
	}

	return 0;
}

function taxableRange_5(salary) {
	// lớn hơn 80tr
	if (salary > milestone_4) {
		let taxableIncome = salary - milestone_4;
		return taxableIncome * 0.3;
	}

	return 0;
}

taxSalary(10000000); // 0
taxSalary(15000000); // 750000
taxSalary(30000000); // 3000000
taxSalary(100000000); // 17.200.000

taxSalary(-10000000); // Thu nhập không hợp lệ
taxSalary('abc'); // Thu nhập không hợp lệ

function frintResult(dataResult) {
	if (dataResult) {
		console.log(
			`
			${
				!dataResult.message
					? `Với đầu vào là lương NET là: ${convertVnMoney(
							dataResult?.netSalary
					  )}.
			Đang ở bậc khấu trừ % thuế ở bậc: ${dataResult?.tier}
			${
				dataResult?.tier === 1
					? `nên được miễn thuế`
					: ` ${
							dataResult?.tier
					  } phải chịu thuế trong khoảng ${convertVnMoney(
							dataResult?.milestone
					  )}`
			}
			Nên thu nhập sau thuế là: ${convertVnMoney(dataResult?.grossSalary)}.
			Như vậy tổng số tiền phải chịu thuế là: ${convertVnMoney(
				dataResult?.totalTax
			)} !!!.`
					: `${dataResult.message}`
			}
		`
		);

		if (resultElement && dataResult) {
			allResultOutHtml.push(
				`
			${`
				<p>Với đầu vào là lương NET là: <strong>${convertVnMoney(
					dataResult.netSalary || 0
				)}</strong>.</p>
				<p>Đang ở bậc khấu trừ % thuế ở bậc: <strong>${
					dataResult.tier || 'Không xác định'
				}</strong></p>
				${dataResult.tier === 1 && `<p>Nên được miễn thuế</p>`}
				${
					[2, 3, 4].includes(dataResult.tier) &&
					`<p>Bậc ${
						dataResult.tier
					} phải chịu thuế trong khoảng <strong>${convertVnMoney(
						dataResult.milestone || 0
					)}</strong></p>`
				}

				<p>Nên thu nhập sau thuế là: <strong>${convertVnMoney(
					dataResult.grossSalary || 0
				)}</strong>.</p>
				<p>Như vậy tổng số tiền phải chịu thuế là: <strong>${convertVnMoney(
					dataResult.totalTax || 0
				)}</strong> !!!</p>
				<hr/>

			`}

			`
			);
		}
	}
}

function convertVnMoney(money) {
	if (money) {
		return money
			.toLocaleString('vi-VN', {
				style: 'currency',
				currency: 'VND'
			})
			.replace('đ', 'VNĐ');
	} else {
		return '';
	}
}
