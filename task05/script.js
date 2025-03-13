const productList = [
	{
		id: 1,
		avata: 'image 31.jpg',
		title: 'AHRI',
		alt: 'Lelah Nichols'
	},
	{
		id: 2,
		avata: 'image 32.png',
		title: 'AKALI',
		alt: 'Jesus Weiss'
	},
	{
		id: 3,
		avata: 'image 33.png',
		title: 'AZIR',
		alt: 'Annie Rice'
	},
	{
		id: 4,
		avata: 'image 34.png',
		title: 'CAITLYN',
		alt: 'Robert Brower'
	},
	{
		id: 5,
		avata: 'image 35.png',
		title: 'DARIUS',
		alt: 'Amy Campbell'
	},
	{
		id: 6,
		avata: 'image 36.png',
		title: 'FIZZ',
		alt: 'Anthony S. Morin'
	},
	{
		id: 7,
		avata: 'image 37.png',
		title: 'IRELIA',
		alt: 'Anthony S. Morin'
	},
	{
		id: 8,
		avata: 'image 38.png',
		title: 'JINX',
		alt: 'Anthony S. Morin'
	},
	{
		id: 9,
		avata: 'image 39.png',
		title: 'RENGAR',
		alt: 'Anthony S. Morin'
	},
	{
		id: 10,
		avata: 'image 40.png',
		title: 'SERAPHINE',
		alt: 'Anthony S. Morin'
	},
	{
		id: 11,
		avata: 'image 41.png',
		title: 'YASUO',
		alt: 'Anthony S. Morin'
	},
	{
		id: 12,
		avata: 'image 42.png',
		title: 'WUKONG',
		alt: 'Anthony S. Morin'
	}
];
const productListElement = document.getElementById('lol-list-item');
productListElement.innerHTML = Array.isArray(productList)
	? productList
			.map(
				item => `

			<div class="lol-item-product  d-flex flex-col">
                <div class="lol-item-product__img">
                    <img src="./images/${item?.avata}" alt="${item?.alt}" />
                </div>
                <div class="lol-item-product__title d-flex justify-center align-center">
                    <span>${item?.title}</span>
                </div>
            </div>

        	`
			)
			.join('')
	: 'No products!';
