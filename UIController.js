class UIController {
	constructor() {
		this.genRandomBtn = document.querySelector('.btnGenerate');
		this.sortBtn = document.querySelector('.btnSort');
		this.dropDown = document.querySelector('#algList');
		this.chart = document.querySelector('.chart');
	}

	renderBar(num, index) {
		return `
    <div
      class="column mr-1"
      id="${index}"
      style="height: ${num * 2}px; width: 20px; background: #2c3e50">
    </div>
    `;
	}
	appendBars(array) {
		let output = '';
		array.forEach((num, index) => {
			output += this.renderBar(num, index);
		});
		this.chart.innerHTML = output;
		return output;
	}
	swapBars(index1, index2) {
		const columns = ui.chart.getElementsByClassName('column');

		const first = columns[index1];
		const second = columns[index2];

		//Add some color to active bars
		first.style.background = 'green';
		second.style.background = 'red';

		//Remove copied div
		columns[index1].remove();

		second.insertAdjacentElement('afterend', first);
		setTimeout(() => {
			//Return default colour
			first.style.background = '#2c3e50';
			second.style.background = '#2c3e50';
		}, 100);
	}
}
