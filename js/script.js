document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('.newsletter__signup-form');
	const emailInput = form.querySelector('.newsletter__email-input');
	const errorMessage = document.querySelector('.newsletter__error-message');
	let successOverlay;

	// Function to show the success message
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

	// Lock scrolling
	function lockScroll() {
			document.body.style.overflow = 'hidden';
	}

	// Unlock scrolling
	function unlockScroll() {
			document.body.style.overflow = 'auto';
	}

	// Dismiss success message and unlock scrolling
	window.dismissSuccessMessage = function () {
			successOverlay.remove();
			unlockScroll();
	};

	// Email validation function
	function validateEmail(email) {
			const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Simple email validation pattern
			return regex.test( email );
	}

	// Form submission event listener
	form.setAttribute( 'novalidate', '' );
	form.addEventListener('submit', function ( event ) {
		event.preventDefault();
		const emailLabel = form.querySelector( 'label' );
		if ( validateEmail( emailInput.value ) ) {
			showSuccessMessage( emailInput.value );
			emailInput.value = '';
			emailInput.classList.remove( 'error' );
			emailLabel.classList.remove( 'error' );
			errorMessage.style.display = 'none';
		} else {
			errorMessage.textContent = 'Valid email required';
			errorMessage.style.display = 'block';
			emailInput.classList.add( 'error');
			emailLabel.classList.add( 'error' );
		}
	});

});

