const collectionList = [
	{
		id: 1,
		avata: 'collection(1).png',
		title: 'AHRI',
		description: 'I teach how to start UX',
		alt: 'Lelah Nichols'
	},
	{
		id: 2,
		avata: 'collection(2).png',
		title: 'AKALI',
		title: 'I teach how to design test',
		alt: 'Jesus Weiss'
	},
	{
		id: 3,
		avata: 'collection(3).png',
		title: 'AZIR',
		description: 'I teach how to asses design',
		alt: 'Annie Rice'
	},
	{
		id: 4,
		avata: 'collection(4).png',
		title: 'CAITLYN',
		description: 'I teach how to do icons',
		alt: 'Robert Brower'
	},
];
const collectionListElement = document.getElementById('collections-list');
console.log(collectionListElement)
collectionListElement.innerHTML = Array.isArray(collectionList)
	? collectionList
			.map(
				item => `

				<div class="colection-item">
                    <img src="./images/${item?.avata}" alt="/${item?.alt}">

                    <div class="collection-infors">
                        <div class="title"${item?.title}</div>
                        <div class="description">
                            <span>${item?.description}</span>
                        </div>
                    </div>
                </div>

        	`
			)
			.join('')
	: 'No colection!';
