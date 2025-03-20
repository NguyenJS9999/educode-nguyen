// Task 08: Viết hàm tính và đưa ra gợi ý sức khoẻ trên cơ sở chỉ số BMI
/**
    Viết hàm tính và đưa ra gợi ý sức khoẻ trên cơ sở chỉ số BMI
    Viết hàm calcBMI(weight, height) nhận vào cân nặng weight (kg) và chiều cao height (m) của một người, trả về chỉ số BMI và gợi ý sức khoẻ tương ứng:

    BMI < 18.5: Thiếu cân
    18.5 <= BMI < 23: Bình thường
    23 <= BMI < 25: Thừa cân
    BMI >= 25: Béo phì
    Với công thức: BMI = weight / height^2

    Ví dụ:

    calcBMI(60, 1.7); // "BMI = 20.76, Bình thường"

    https://js-eight-eta.vercel.app/1.JSBase/01.%20calcBMI.html
*/

const weight = parseFloat(prompt('Task 8: Nhập cân nặng (kg): '));
const height = parseFloat(prompt('Task 8: Nhập chiều cao (cm): '));

function calcBMI() {
	const BMI = ((weight / height ** 2) * 10000).toFixed(2);
	console.log('BMI', BMI);

	switch (true) {
		case BMI < 18.5:
			console.log(`BMI = ${BMI}, Cơ thể thiếu cân`);
			alert(`BMI = ${BMI}, Cơ thể thiếu cân`);
			break;

		case BMI > 18.5 && BMI < 23:
			console.log(`BMI = ${BMI}, Cơ thể bình thường`);
			alert(`BMI = ${BMI}, Cơ thể bình thường`);
			break;

		case BMI > 23 && BMI < 25:
			console.log(`BMI = ${BMI}, Cơ thể thừa cân`);
			alert(`BMI = ${BMI}, Cơ thể thừa cân`);
			break;

		case BMI > 25:
			console.log(`BMI = ${BMI}, Cơ thể bị béo phì`);
			alert(`BMI = ${BMI}, Cơ thể bị béo phì`);
			break;

		default:
			console.log(`Không xác định`);
			alert(`Không xác định`);
			break;
	}
}
calcBMI(60, 1.7); // "BMI = 20.76, Bình thường"
