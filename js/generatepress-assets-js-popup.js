const toggle1 = document.querySelector(".row-left");
const hide = document.querySelector(".hidden");
const blur = document.querySelector(".main-container");
const button = document.querySelector(".close");
const crypto = document.querySelectorAll(".crypto-list");
const crypto2 = document.querySelectorAll(".swap-list");
const hide2 = document.querySelector(".hide");
const toggle2 = document.querySelector(".lefty");

let menuOpener = false;
let menuOpen = false;

const questionToggle = function () {
	if (!menuOpen) {
		hide2.classList.remove("hide");
		menuOpen = true;
	} else {
		hide2.classList.add("hide");
		menuOpen = false;
	}
};

toggle2.addEventListener("click", questionToggle);

for (let i = 0; i < crypto2.length; i++)
	crypto2[i].addEventListener("click", function () {
		if (!menuOpen) {
			hide2.classList.remove("hide");
			menuOpen = true;
		} else {
			hide2.classList.add("hide");
			document.querySelector(".almost2").src = document.querySelector(
				".image-togglers" + i
			).src;
			document.querySelector(".please2").textContent = crypto[i].textContent;
			menuOpen = false;
		}
	});

// FIRST TOGGLER

const closeModal = function toggle() {
	if (!menuOpen) {
		hide.classList.remove("hidden");
		menuOpen = true;
	} else {
		hide.classList.add("hidden");
		menuOpen = false;
	}
};

toggle1.addEventListener("click", closeModal);

button.addEventListener("click", closeModal);

let disable = document.querySelector(".disable");

for (let i = 0; i < crypto.length; i++) {
	crypto[i].addEventListener("click", function () {
		if (!menuOpen) {
			hide.classList.remove("hidden");
			menuOpen = true;
		} else {
			hide.classList.add("hidden");
			document.querySelector(".almost").src = document.querySelector(
				".image-toggle" + i
			).src;
			document.querySelector(".please").textContent = crypto[i].textContent;
			menuOpen = false;
		}
	});
}