const alg = new Algorithms();
const ui = new UIController();
let arr;
//On page loaded
document.addEventListener('DOMContentLoaded', appendBars);

//Gen Array click
ui.genRandomBtn.addEventListener('click', () => {
	ui.chart.innerHTML = '';
	appendBars();
});
// Sort click
ui.sortBtn.addEventListener('click', sortBars);

// Funcitons
function appendBars() {
	ui.appendBars(alg.getRandomArr());
}

function sortBars() {
	//Disable generate btn
	ui.genRandomBtn.disabled = true;
	let arr = alg.getData();

	// Check Bubble Sort selected
	if (ui.dropDown.value === 'buble') {
		let { steps } = alg.bubbleSort(arr);

		//UI swap
		steps.forEach((pair, i) => {
			setTimeout(() => {
				ui.swapBars(pair[0], pair[1]);
			}, i * 150);
		});
		//Release generate btn after sort complition
		setTimeout(() => {
			ui.genRandomBtn.disabled = false;
		}, steps.length * 150);
	}
}
