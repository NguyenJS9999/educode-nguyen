
let step_1 = 11000000;
let step_2 = 25000000;
let step_3 = 50000000;
let step_4 = 80000000;

function taxSalary(netSalary) {
    console.log(` Với đầu vào lương NET = ${convertVnMoney(netSalary)} `)

	if ( !netSalary || isNaN(netSalary) || netSalary < 0) {
		console.log('Thu nhập không hợp lệ');
		return;
	}

	let tax = 0; // Tổng tiền thuể bị trừ

	if (netSalary > step_4) { // > 80tr
		console.log('netSalary > step_4')
        let salaryOver = netSalary - step_4;
		tax += salaryOver * 0.3;

        netSalary = step_4;
	}
	if (netSalary > step_3) { // > 50tr -> < 80tr
		console.log('netSalary > step_3')
        let salaryOver = netSalary - step_3;
		tax += salaryOver * 0.2;

        netSalary = step_3;
	}
	if (netSalary > step_2) { // > 25tr -> < 50tr
		console.log('netSalary > step_2')
        let salaryOver = netSalary - step_2;
		tax += salaryOver * 0.1;

        netSalary = step_2;
	}
	if (netSalary > step_1) { //  > 11tr ->  < 25tr
		console.log('netSalary > step_1')
        let salaryOver = netSalary - step_1;
		tax += salaryOver * 0.05;

        netSalary = step_1;
	}


	console.log(` => Số tiền thuế phải trả: ${convertVnMoney(tax)}`);
    console.log('--------------------------------------------------------------')
}

taxSalary(10000000); // 0
taxSalary(15000000); // 200.000
taxSalary(30000000); // 1.200.000
taxSalary(100000000); // 17.200.000

taxSalary(-10000000); // Thu nhập không hợp lệ
taxSalary("abc"); // Thu nhập không hợp lệ

function convertVnMoney(money) {
    if (isNaN(money) || money === null || money === undefined) {
        return "Số tiền không hợp lệ";
    }

    return money
        .toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND"
        })
        .replace("₫", "VNĐ");
}
