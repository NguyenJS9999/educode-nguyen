/**
     Tính tiền taxi
    Viết hàm tính tiền taxi với số km nhập vào từ bàn phím.

    Số km <= 1 giá: 10000đ/km. (giá mở cửa 10.000đ)
    Số km > 1 đến <= 30 giá: 8000đ/km.
    Số km từ > 30 giá: 7000đ/km.
    Nếu số km nhập vào không hợp lệ thì thông báo "Số km không hợp lệ".
    // Input:
    function taxiBill(km) {
    // Xử lý và in ra kết quả
    }

    // Test:
    taxiBill(0.1); // Output: Số tiền cần trả: 10000đ
    taxiBill(1); // Output: Số tiền cần trả: 10000đ
    taxiBill(10); // Output: Số tiền cần trả: 82000đ
    taxiBill(-5); // Output: Số km không hợp lệ
    taxiBill("abc"); // Output: Số km không hợp lệ
*/

let resultElement = document.getElementById('result');

const km = parseFloat(prompt('Task 16: Nhập vào số km cần tính tiền taxi: '));

function taxiBill() {
	if (!km || Number(km <= 0) || isNaN(km)) {
		console.log(`Số km không hợp lệ`);
		resultElement.textContent = `Số km không hợp lệ`;
	}

	const step1 = 10000;
	const step2 = 8000;
	const step3 = 8000;
    let note = '';
	if (km) {
		let totalMoney = 0;
		if (km <= 1) {
			totalMoney = 1 * step1;
            note = `1 ${step1} - vnđ/1km`;
		} else if (km <= 30) { // 29
			totalMoney = step1 + (km - 1) * step2;
            note = `2 ${step2} - vnđ/1km`;
		} else {
			totalMoney = step1 + (km - 1) * step3;
            note = `3 ${step3} - vnđ/1km`;
		}

		console.log(
			`Số tiền cần trả của ${km} tính theo bậc ${note}: `,
			totalMoney.toLocaleString('vi-VN', {
				style: 'currency',
				currency: 'VND'
			})
		);

		if (resultElement) {
			const convert = totalMoney.toLocaleString('vi-VN', {
				style: 'currency',
				currency: 'VND'
			});
			resultElement.textContent = `
                Số tiền cần trả của ${km} tính theo bậc ${note}:${convert}
            `;
		}
	}
}

taxiBill();

// taxiBill(0.1); // Output: Số tiền cần trả: 10000đ
// taxiBill(1); // Output: Số tiền cần trả: 10000đ
// taxiBill(10); // Output: Số tiền cần trả: 82000đ
// taxiBill(-5); // Output: Số km không hợp lệ
// taxiBill('abc'); // Output: Số km không hợp lệ
