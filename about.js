const teamMembers = [
	{ name: "Aldolphus Yoko Saywien", role: "Founder" },
	{ name: "Marthaline Barlay", role: "Product Manager" },
	{ name: "Alvin G. Blokar", role: "Creative Director" },
	{ name: "Faith B. Oroge", role: "Marketing Manager" },
	{ name: "Kamanda Gborie", role: "Drama Leader" },
	{ name: "Daniel E. George", role: "Program Director" },
	{ name: "Sofia Barccanee", role: "Volunteer Coordinator" },
	{ name: "Agape kanneh", role: "Volunteer Director" },
	{ name: "Korpo Yancy B.", role: "Housing Coordinator" },
	{ name: "Mary J. Morley.", role: "Finance Director" },
	{ name: "Marianne L. Naef", role: "Int'L Sponsorship Liason" }
];

const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");
const memberName = document.querySelector(".member-name");
const memberRole = document.querySelector(".member-role");
const leftArrow = document.querySelector(".nav-arrow.left");
const rightArrow = document.querySelector(".nav-arrow.right");
let currentIndex = 0;
let isAnimating = false;

function updateCarousel(newIndex) {
	if (isAnimating) return;
	isAnimating = true;

	currentIndex = (newIndex + cards.length) % cards.length;

	cards.forEach((card, i) => {
		const offset = (i - currentIndex + cards.length) % cards.length;

		card.classList.remove(
			"center",
			"left-1",
			"left-2",
			"right-1",
			"right-2",
			"hidden"
		);

		if (offset === 0) {
			card.classList.add("center");
		} else if (offset === 1) {
			card.classList.add("right-1");
		} else if (offset === 2) {
			card.classList.add("right-2");
		} else if (offset === cards.length - 1) {
			card.classList.add("left-1");
		} else if (offset === cards.length - 2) {
			card.classList.add("left-2");
		} else {
			card.classList.add("hidden");
		}
	});

	dots.forEach((dot, i) => {
		dot.classList.toggle("active", i === currentIndex);
	});

	memberName.style.opacity = "0";
	memberRole.style.opacity = "0";

	setTimeout(() => {
		memberName.textContent = teamMembers[currentIndex].name;
		memberRole.textContent = teamMembers[currentIndex].role;
		memberName.style.opacity = "1";
		memberRole.style.opacity = "1";
	}, 300);

	setTimeout(() => {
		isAnimating = false;
	}, 800);
}

leftArrow.addEventListener("click", () => {
	updateCarousel(currentIndex - 1);
});

rightArrow.addEventListener("click", () => {
	updateCarousel(currentIndex + 1);
});

dots.forEach((dot, i) => {
	dot.addEventListener("click", () => {
		updateCarousel(i);
	});
});

cards.forEach((card, i) => {
	card.addEventListener("click", () => {
		updateCarousel(i);
	});
});

document.addEventListener("keydown", (e) => {
	if (e.key === "ArrowLeft") {
		updateCarousel(currentIndex - 1);
	} else if (e.key === "ArrowRight") {
		updateCarousel(currentIndex + 1);
	}
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
	touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
	touchEndX = e.changedTouches[0].screenX;
	handleSwipe();
});

function handleSwipe() {
	const swipeThreshold = 50;
	const diff = touchStartX - touchEndX;

	if (Math.abs(diff) > swipeThreshold) {
		if (diff > 0) {
			updateCarousel(currentIndex + 1);
		} else {
			updateCarousel(currentIndex - 1);
		}
	}
}

updateCarousel(0);


// This JavaScript code is implementing a carousel (slider) for displaying team member cards. Let’s break it down:

// 1. Defining Team Members
// The array teamMembers contains objects representing different members of the team, each with a name and a role.

// 2. Selecting Elements
// The code selects multiple elements from the HTML document, such as:

// cards: Team member cards.

// dots: Navigation dots for the carousel.

// memberName and memberRole: Display area for the current team member’s details.

// leftArrow and rightArrow: Buttons for navigating the carousel.

// 3. Tracking State
// currentIndex: Tracks which team member is currently visible.

// isAnimating: Prevents unwanted animation interruptions.

// 4. Updating the Carousel
// The updateCarousel(newIndex) function:

// Ensures animation only happens when isAnimating is false.

// Computes the correct positioning of each card.

// Removes old positioning classes (center, left-1, etc.).

// Adds new classes based on the new index.

// Updates the dots’ active state.

// Temporarily hides member details before fading them in.

// Ensures animation timing is controlled.

// 5. Navigation Controls
// Arrow Buttons: Clicking left/right arrows calls updateCarousel() with an adjusted index.

// Dots & Cards Click Events: Clicking a dot or card updates the carousel.

// Keyboard Navigation: Arrow key presses update the carousel.

// Touch Swipes: Swiping left/right on a mobile device navigates the carousel.

// 6. Initialization
// At the bottom, updateCarousel(0) ensures the carousel starts with the first member visible.

// This code makes the carousel fully interactive, supporting keyboard navigation, 
// touch gestures, and mouse clicks. 
// If you'd like me to help optimize or modify it further, let me know! 🚀



window.addEventListener('load', () => {
  const footer = document.getElementById('footer');
  const body = document.body;
  const html = document.documentElement;

  const height = Math.max(body.scrollHeight, body.offsetHeight, 
                          html.clientHeight, html.scrollHeight, html.offsetHeight);
  
  if (height < window.innerHeight) {
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.width = '100%';
  }
});

document.getElementById("donateBtn").addEventListener("click", function () {
  // Example: Capture form data
  var firstName = document.getElementById("firstName").value;
  var email = document.getElementById("email").value;

  if (!firstName || !email) {
    alert("Please fill in all required fields.");
    return;
  }

  // For now, just confirm donation intent
  alert("Thanks for your donation, " + firstName + "!");
  
  // You could redirect to a thank you page or trigger a payment flow here.
});

