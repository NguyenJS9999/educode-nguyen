let resultElement = document.getElementById('result');

const nums = prompt(
	'Task 14: Nhập vào 3 số cách nhau bằng dấu phẩy để tìm ra số lớn nhất: '
)
	.split(',')
	.map(num => parseFloat(num.trim()));


// Input:
function findMaxNumber() {
	let maxNumber = [0];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > maxNumber) {
			maxNumber = nums[i];
		}
	}

    // return arr.map((_, i, nums) => {
    //     let minIndex = i;
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[j] < nums[minIndex]) {
    //             minIndex = j;
    //         }
    //     }
    //     [nums[i], nums[minIndex]] = [nums[minIndex], array[i]];
    //     array[i];
    // });

    // for (let i = 2; i <= nums.lenth; i++) {
    //     let minIndex = i;
    //     for (let j = 2; j <= nums.lenth; j++) {
    //         console.log(nums[i] , nums[j]);
    //         if ( nums[i] < nums[j] ) {
    //             let k = nums[i];
    //             nums[i] = nums[j];
    //             nums[j] = k;
    //         }
    //     }
    // }
    // console.log("nums: ", nums)
    // maxNumber = nums[-1];

    console.log(`Số lớn nhất trong các số ${nums} là: ${maxNumber} `);
    resultElement.textContent = `Số lớn nhất trong các số ${nums} là: ${maxNumber} `
        
}

// Output:
findMaxNumber(3, 5, 2); // 5

/**

6, 1, 2

 */