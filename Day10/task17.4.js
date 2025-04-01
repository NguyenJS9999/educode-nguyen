let resultElement = document.getElementById('result');

let step_1 = 11000000;
let step_2 = 25000000;
let step_3 = 50000000;
let step_4 = 80000000;

function taxSalary(netSalary) {
	console.log(
		'--------------------------------------------------------------'
	);
	console.log(` Với đầu vào lương NET = ${convertVnMoney(netSalary)} `);

	if (!netSalary || isNaN(netSalary) || netSalary < 0) {
		console.log('Đầu vào thu nhập không hợp lệ');
		return;
	}

	if (netSalary > step_4) { // > 80tr
		console.log('netSalary > step_4');

        const grossNumber = netSalary - taxAbleForRange_5(netSalary).thisTaxNumber;
		console.log('grossNumber > 80tr', convertVnMoney(grossNumber));

        const totalTax =
            taxAbleForRange_2(netSalary).thisTaxNumber +
            taxAbleForRange_3(netSalary).thisTaxNumber +
            taxAbleForRange_4(netSalary).thisTaxNumber +
            taxAbleForRange_5(netSalary).thisTaxNumber
		frintResult({
			net: netSalary,
			tax: totalTax,
			gross: grossNumber,
		});
	}
	if (netSalary > step_3 && netSalary <= step_4) { // > 50tr -> < 80tr
        const grossNumber = netSalary - taxAbleForRange_4(netSalary).thisTaxNumber;
        const totalTax =
            taxAbleForRange_2(netSalary).thisTaxNumber +
            taxAbleForRange_3(netSalary).thisTaxNumber +
            taxAbleForRange_4(netSalary).thisTaxNumber
		frintResult({
			net: netSalary,
			tax: totalTax,
			gross: grossNumber,
		});
	}
	if (netSalary > step_2 && netSalary <= step_3) { // > 25tr -> < 50tr
        const grossNumber = netSalary - taxAbleForRange_3(netSalary).thisTaxNumber;
        const totalTax =
        taxAbleForRange_2(netSalary).thisTaxNumber +
        taxAbleForRange_3(netSalary).thisTaxNumber

		frintResult({
			net: netSalary,
			tax: totalTax,
			gross: grossNumber,
		});
    }

	if (netSalary > step_1 && netSalary <= step_2) { //  > 11tr ->  < 25tr
        const grossNumber = netSalary - taxAbleForRange_2(netSalary).thisTaxNumber;
        const totalTax = taxAbleForRange_2(netSalary).thisTaxNumber; // Tiền mất

		frintResult({
			net: netSalary,
            tax: totalTax,
			gross: grossNumber
		});
	}

	if (netSalary <= step_1) { //  <= 11tr => Miễn thuế
		const grossSalary = netSalary;
		console.log("<= 11tr => Miễn thuế",grossSalary);
        const totalTax = netSalary * 0;

		frintResult({
			net: netSalary,
            tax: totalTax,
			gross: netSalary,
		});
	}

	// console.log(` => Số tiền thuế phải trả: ${convertVnMoney(tax)}`);
}

taxSalary(10000000); // 0
taxSalary(15000000); // 200.000
taxSalary(30000000); // 1.200.000
taxSalary(100000000); // 17.200.000

taxSalary(-10000000); // Thu nhập không hợp lệ
taxSalary('abc'); // Thu nhập không hợp lệ

// Trả về tiền đã trừ % và tiền bị trừ cụ thể
function taxAbleForRange_2(salary) { // > 11tr -> 25tr
	let salaryOver = salary - step_1; // - 11tr

	console.log("taxAbleForRange_2 salaryOver", salaryOver)
	let thisTaxNumber = salaryOver * 0.05; // 5%

	console.log("taxAbleForRange_2 thisTaxNumber", thisTaxNumber)
	let thisSalaryRangeAfterTax = salaryOver - thisTaxNumber;

	console.log("taxAbleForRange_2 thisSalaryRangeAfterTax", thisSalaryRangeAfterTax)
		console.log(
		'--------------------------------------------------------------'
	);
	return {
		thisSalaryRangeAfterTax,
		thisTaxNumber
	};
}
function taxAbleForRange_3(salary) { // > 25tr -> 50tr
	let salaryOver = salary - step_2; // 50tr - 25tr

	console.log("taxAbleForRange_3 salaryOver", salaryOver)
	let thisTaxNumber = salaryOver * 0.1; // 10%

	console.log("taxAbleForRange_3 thisTaxNumber", thisTaxNumber)
	let thisSalaryRangeAfterTax = salaryOver - thisTaxNumber;

	console.log("taxAbleForRange_3 thisSalaryRangeAfterTax", thisSalaryRangeAfterTax)
		console.log(
		'--------------------------------------------------------------'
	);
	return {
		thisSalaryRangeAfterTax,
		thisTaxNumber
	};
}
function taxAbleForRange_4(salary) { // > 50tr -> 80tr
	let salaryOver = salary - step_3; // 80tr - 50tr = 30tr
    console.log("taxAbleForRange_4 salaryOver: ", salaryOver)
	let thisTaxNumber = salaryOver * 0.2; // 20%
	console.log("taxAbleForRange_4 thisTaxNumber: ", thisTaxNumber)
	let thisSalaryRangeAfterTax = salaryOver - thisTaxNumber;
	console.log("taxAbleForRange_4 thisSalaryRangeAfterTax: ", thisSalaryRangeAfterTax)
		console.log(
		'--------------------------------------------------------------'
	);
	return {
		thisSalaryRangeAfterTax,
		thisTaxNumber
	};
}

function taxAbleForRange_5(salary) { // 80tr < 100tr, 200tr
	console.log("Range 5 salary: ", salary)
    let salaryOver = salary - step_4; // 80tr - 50tr = 30tr
	console.log("Range 5 salaryOver: ", salaryOver)
    let thisTaxNumber = salaryOver * 0.3; // 30%
	console.log("Range 5 thisTaxNumber: ", thisTaxNumber)
    let thisSalaryRangeAfterTax = salaryOver - thisTaxNumber;
	console.log("Range 5 thisSalaryRangeAfterTax: ", thisSalaryRangeAfterTax)
    	console.log(
		'--------------------------------------------------------------'
	);
	return {
		thisSalaryRangeAfterTax,
		thisTaxNumber
	};
}

function convertVnMoney(money) {
	console.log("convertVnMoney money: ", money)
	if ( isNaN(money) || money === null || money === undefined ) {
		return 'Số tiền không hợp lệ';
	}
	if ( money == 0 ) {
		return money
		.toLocaleString('vi-VN', {
			style: 'currency',
			currency: 'VND'
		})
		.replace('₫', 'VNĐ');
	}

	return money
	.toLocaleString('vi-VN', {
		style: 'currency',
		currency: 'VND'
	})
	.replace('₫', 'VNĐ');
}

function frintResult(dataResult) {
	//   ${ !dataResult?.tax ? `Số tiền không hợp lệ` : convertVnMoney(dataResult?.tax) }
	if (dataResult) {
		console.log(`
            Với đầu vào lương NET là: ${convertVnMoney(dataResult?.net)}.
            Tổng số tiền thuế nếu bị trừ bớt sẽ là:
			${convertVnMoney(dataResult?.tax)}
			${
				dataResult?.gross < dataResult?.net &&
				`
					Nên số tiền sau khi bị trừ thuế là: ${convertVnMoney(dataResult?.gross)}.
				`
			}
			${

				` Thu nhập dưới hoặc bằng ${convertVnMoney(dataResult?.net)} Thi không phải chịu thuế .`
			}

        `);

		// 		if (resultElement && dataResult) {
		// 			allResultOutHtml.push(
		// 				`
		// 			${`
		// 				<p>Với đầu vào là lương NET là: <strong>${convertVnMoney(
		// 					dataResult.netSalary || 0
		// 				)}</strong>.</p>
		// 				<p>Đang ở bậc khấu trừ % thuế ở bậc: <strong>${
		// 					dataResult.tier || 'Không xác định'
		// 				}</strong></p>
		// 				${dataResult.tier === 1 && `<p>Nên được miễn thuế</p>`}
		// 				${
		// 					[2, 3, 4].includes(dataResult.tier) &&
		// 					`<p>Bậc ${
		// 						dataResult.tier
		// 					} phải chịu thuế trong khoảng <strong>${convertVnMoney(
		// 						dataResult.milestone || 0
		// 					)}</strong></p>`
		// 				}
		//
		// 				<p>Nên thu nhập sau thuế là: <strong>${convertVnMoney(
		// 					dataResult.gross || 0
		// 				)}</strong>.</p>
		// 				<p>Như vậy tổng số tiền phải chịu thuế là: <strong>${convertVnMoney(
		// 					dataResult.totalTax || 0
		// 				)}</strong> !!!</p>
		// 				<hr/>
		//
		// 			`}
		//
		// 			`
		// 			);
		// 		}
	}
}
