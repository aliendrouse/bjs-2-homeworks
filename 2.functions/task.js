function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		const current = arr[i];
		if (current > max) {
			max = current;
		}
		if (current < min) {
			min = current;
		}
		sum += current;
	}
	const avg = Number((sum / arr.length).toFixed(2));
	return {
		min,
		max,
		avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		const currentElement = arr[i];
		if (currentElement % 2 === 0) {
			sumEvenElement += currentElement;
		} else {
			sumOddElement += currentElement;
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		const currentElement = arr[i];
		if (currentElement % 2 === 0) {
			sumEvenElement += currentElement;
			countEvenElement++;
		}
	}
	if (countEvenElement === 0) {
		return 0;
	}
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxResult) {
			maxResult = result;
		}
	}
	if (maxResult === -Infinity) {
		return 0;
	}
	return maxResult;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const currentArray = arrOfArr[i];
		const currentResult = func(...currentArray);
		if (currentResult > maxWorkerResult) {
			maxWorkerResult = currentResult;
		}
	}
	return maxWorkerResult;
}