const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkButton = document.querySelector('#check-button');
const errorMessage = document.querySelector('#error-message');
const noOfNotes = document.querySelectorAll('.no-of-notes');

console.log(noOfNotes);

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function showMessage(message) {
	errorMessage.style.display = 'block';
	errorMessage.innerText = message;
}

function calculateChange(amountToBeReturn) {
	for (let i = 0; i < availableNotes.length; i++) {
		noOfNotes[i].innerText = Math.floor(amountToBeReturn / availableNotes[i]);
		amountToBeReturn = amountToBeReturn % availableNotes[i];
	}
}

checkButton.addEventListener('click', function validateBillAndCashAmount() {
	errorMessage.style.display = 'none'; // hide the error message
	if (billAmount.value > 0) {
		if (cashGiven.value > billAmount.value) {
			const amountToBeReturn = cashGiven.value - billAmount.value;
			calculateChange(amountToBeReturn);
		} else {
			showMessage('Cash provided should atleast be equal to bill amount.');
		}
	} else {
		showMessage('Invalid bill amount.');
	}
});
