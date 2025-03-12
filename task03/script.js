const productList = [
	{
		id: 1,
		avata: 'image(1).png',
		title: 'Lelah Nichols',
		description: 'Troy, MI',
		tag: ['Maintenance', 'frames', 'gears', 'repair']
	},
	{
		id: 2,
		avata: 'image(2).png',
		title: 'Jesus Weiss',
		description: 'Fort Worth, TX',
		tag: ['headset', 'gadget', 'speed', 'winter']
	},
	{
		id: 3,
		avata: 'image(3).png',
		title: 'Annie Rice',
		description: 'Austin, TX',
		tag: ['road', 'earth', 'mountain', 'trip', 'nature']
	},
	{
		id: 4,
		avata: 'image(4).png',
		title: 'Robert Brower',
		description: 'Cincinnati, OH',
		tag: ['Maintenance', 'frames', 'gears', 'repair']
	},
	{
		id: 5,
		avata: 'image(5).png',
		title: 'Amy Campbell',
		description: 'Warrior, AL',
		tag: ['music', 'disks',]
	},
	{
		id: 6,
		avata: 'image(6).png',
		title: 'Anthony S. Morin',
		description: 'Lyndhurst, NJ',
		tag: ['vintage', 'electric']
	}
];
const productListElement = document.getElementById('product-list');
productListElement.innerHTML = Array.isArray(productList)
	? productList
			.map(
				item => `
            <a href="#" class="product-card-item">
                <div class="product-card-item-img">
                    <img src="./images/${item?.avata}" alt="avatar" />
                </div>

                <div class="product-card-item-infos">
                    <div class="product-card-item-title">${item?.title}</div>
                    <div class="product-card-item-description">${
						item?.description
					}</div>
                    <div class="product-card-item-tags">
                        ${
							Array.isArray(item?.tag) && item?.tag.length
								? item.tag
										.map(
											tag => `
                                <div class="product-card-item-tags__item">${tag}</div>
                            `
										)
										.join('')
								: ''
						}
                    </div>
                </div>
            </a>
        `
			)
			.join('')
	: 'No products!';
