class Algorithms {
	constructor() {
		this.MIN = 1;
		this.MAX = 100;
		this.length = 20;
		this.data = [];
	}

	getData() {
		return this.data;
	}

	getRandomArr() {
		// reset array if exists
		this.data.length = 0;
		//fill array with random numbers
		while (this.data.length !== this.length) {
			this.data.push(this.randomInteger(this.MIN, this.MAX));
		}
		return this.data;
	}

	randomInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	bubbleSort(inputArr) {
		let steps = [];
		let len = inputArr.length;
		let swapped;
		do {
			swapped = false;
			for (let i = 0; i < len; i++) {
				if (inputArr[i] > inputArr[i + 1]) {
					//push id to steps
					steps.push([i, i + 1]);

					let tmp = inputArr[i];
					inputArr[i] = inputArr[i + 1];
					inputArr[i + 1] = tmp;
					swapped = true;
				}
			}
		} while (swapped);
		return { inputArr, steps };
	}

	selectionSort(inputArr) {}
}
