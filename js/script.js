document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('.newsletter__signup-form');
	let successOverlay;

	function showSuccessMessage(email) {
		const successHTML = `
					<div class="newsletter__success-overlay">
							<div class="newsletter__success">
									<div class='newsletter__icon-container'>
											<img src='./assets/images/icon-success.svg' alt='Successful submission icon' class='newsletter__icon' />
											<h1>Thanks for subscribing!</h1>
											<p>A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription.</p>
									</div>
									<div class="newsletter__dismiss-container">
											<button class="newsletter__dismiss-btn">Dismiss message</button>
									</div>
							</div>
					</div>
			`;

		document.body.insertAdjacentHTML('beforeend', successHTML);
		successOverlay = document.querySelector('.newsletter__success-overlay');
		document.querySelector('.newsletter__dismiss-btn').addEventListener('click', dismissSuccessMessage);
		lockScroll();
	}

	function lockScroll() {
		document.body.style.overflow = 'hidden';
	}

	function unlockScroll() {
		document.body.style.overflow = 'auto';
	}

	window.dismissSuccessMessage = function () {
		successOverlay.remove();
		unlockScroll();
	};

	form.addEventListener('submit', function (event) {
		event.preventDefault();
		const emailInput = form.querySelector('.newsletter__email-input');
		showSuccessMessage(emailInput.value);
		emailInput.value = '';
	});
});
