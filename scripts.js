
/*
*  Activate card (current card)
*
**/
function activateCard(card, nbCards) {
	card.classList.add("active")
	card.style.transform = `translateX(${25*(nbCards - 1)}px) scale(1)`
}

/*
* Initialize cards (inital preview)
*
**/
function initCardsLocation(cardButtons) {
	const topCardButtonIndex = cardButtons.length - 1

	cardButtons.forEach((button, index) => {
		card = button.parentNode

		card.classList.remove("moveright")

		if (index === topCardButtonIndex) {
			card.style.transform = `translateX(${25*index}px) scale(1)`

			card.classList.add("active")
		} else {
			card.style.transform = `translateX(${25*index}px) scale(0.9)`

			card.classList.remove("active")
		}
	})
}



function defineCardsButtonClickEvent() {
	const cardButtons = document.querySelectorAll(".carousel-3d .card .btn")
	
	cardButtons.forEach((button, index) => {
		initCardsLocation(cardButtons)

		button.addEventListener("click", function () {		
			if (index !== 0) {
				card = button.parentNode
				card.classList.add("moveright") // animation, move to right

				let cardBeforeButton = cardButtons[index - 1]
				let cardBefore = cardBeforeButton.parentNode

				// activate next card
				activateCard(cardBefore, cardButtons.length)
			} else {
				// return to initial preview
				initCardsLocation(cardButtons)
			}
			
		})
	})
}

function main() {
	defineCardsButtonClickEvent()
}


main()
