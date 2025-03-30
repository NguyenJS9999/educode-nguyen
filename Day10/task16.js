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
	if (isNaN(km) || km <= 0) {
		console.log(`Số km không hợp lệ`);
		if (resultElement) resultElement.textContent = `Số km không hợp lệ`;
        return;
	}

	const step1 = 10000;
	const step2 = 8000;
	const step3 = 7000;
    let note = '';
    let step = '';
	let totalMoney = 0;
	if (km) {
		if (km <= 1) {
			totalMoney = step1;

			step = 1;
            note = `${step} tức là bắt đầu từ Số km <= 1 giá: ${step1}đ/km. (giá mở cửa 10.000đ) `;
		} else if (km <= 30) { // 29
			totalMoney = step1 + (km - 1) * step2;

			step = 2;
			note = `${step} Số km > 1 đến <= 30 giá: ${step2}đ/km`;
		} else {
			totalMoney = step1 + (29 * step2) + ((km - 30) * step3); //

			step = 3;
			note = `${step} Số km từ > 30 giá: ${step3}đ/km.`;
		}

		console.log(
			`Số tiền cần trả của ${km} km đạt lũy giảm bậc ${note}: `,
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
                Số tiền cần trả của ${km} km đạt lũy giảm bậc ${note}:${convert}
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
