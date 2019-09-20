bubbleSort = (array) => {
	let k, swap = 0;
	for (let i = 0; i < array.length - 1; i++) {
		k = 0;
		for (let j = 0; j < array.length - i; j++) {
			if (array[j] > array[j+1]) {
				swap = array[j];
				array[j] = array[j+1];
				array[j+1] = swap;
				k = 1;
			}
		}
		if (k == 0) 
			break;
	}
	return array;
};

console.log(bubbleSort([6,5,3,1,8,7,2,4]));
