export function convertVnMoney(money) {
    console.log(money)
	if (money) {
		return money.toLocaleString('vi-VN', {
			style: 'currency',
			currency: 'VND'
		});
	} else {
        return '';
    }
}
