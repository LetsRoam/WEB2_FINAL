// Modify the changeBackgroundImage() function to take a parameter for the direction (1 for right, -1 for left)
function changeBackgroundImage(direction) {
	currentIndex = (currentIndex + direction + images.length) % images.length;
}

var images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];

var heroSection = document.querySelector(".hero");
var header = document.querySelector(".sticky-header");
var currentIndex = 0;

function changeBackgroundImage() {
	heroSection.style.backgroundImage = "url('" + images[currentIndex] + "')";

	// Check the brightness of the current image to determine the background color
	var img = new Image();
	img.src = images[currentIndex];
	img.onload = function () {
		var brightness = getBrightness(img);
		if (brightness <= 128) {
			header.classList.remove("light");
			header.classList.add("dark");
		} else {
			header.classList.remove("dark");
			header.classList.add("light");
		}
	};

	currentIndex = (currentIndex + 1) % images.length;
}

var leftArrow = document.querySelector(".left-arrow");
var rightArrow = document.querySelector(".right-arrow");

// Add event listeners to the left and right arrows
leftArrow.addEventListener("click", function () {
	changeBackgroundImage(-1);
});

rightArrow.addEventListener("click", function () {
	changeBackgroundImage(1);
});

// Initially display the specific image
heroSection.style.backgroundImage = "url('" + images[0] + "')";

// Call the function to change the background image every 5 seconds
setInterval(changeBackgroundImage, 5000);

// Function to calculate brightness based on image pixels
function getBrightness(image) {
	var canvas = document.createElement("canvas");
	canvas.width = image.width;
	canvas.height = image.height;

	var context = canvas.getContext("2d");
	context.drawImage(image, 0, 0);

	var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
	var brightness = 0;

	for (var i = 0; i < imageData.data.length; i += 4) {
		var r = imageData.data[i];
		var g = imageData.data[i + 1];
		var b = imageData.data[i + 2];

		brightness += Math.max(r, g, b);
	}

	brightness = Math.round(brightness / (imageData.data.length / 4));
	return brightness;
}

// For Introduction Section

// Function to toggle the visibility of hidden content
function toggleContent(contentId, toggleIcon) {
	const content = document.getElementById(contentId);
	if (content.style.display === "none" || content.style.display === "") {
		content.style.display = "block";
		toggleIcon.style.display = "none"; // Hide the toggle icon when the content is shown
	} else {
		content.style.display = "none";
		toggleIcon.style.display = "inline-block"; // Show the toggle icon when the content is hidden
	}
}

// Array of student names and their scores
const students = [
	{ name: "Wang", score: 80 },
	{ name: "Chen", score: 75 },
	{ name: "Zhao", score: 92 },
	{ name: "Liu", score: 60 },
	{ name: "Yamamoto", score: 91 },
	{ name: "Tanaka", score: 82 },
];

// Function to create an HTML div element with given items
function createDivs(items) {
	const divContainer = document.createElement("div");
	for (const item of items) {
		const divItem = document.createElement("div");
		divItem.textContent = item;
		divContainer.appendChild(divItem);
	}
	return divContainer;
}

// Function to populate and display student scores and students above 90
function displayStudentScores() {
	// Populate student scores and students above 90
	const studentScoresList = students.map(
		(student) => student.name + " : " + student.score
	);
	const studentsAbove90List = students
		.filter((student) => student.score > 90)
		.map((student) => student.name + " : " + student.score);

	// Display the content in the respective elements
	document.getElementById("StudentScores").innerHTML =
		createDivs(studentScoresList).innerHTML;
	document.getElementById("studentsAbove90").innerHTML =
		createDivs(studentsAbove90List).innerHTML;
}

// Call the function to populate and display student scores and students above 90
displayStudentScores();

// Calculate total score
let totalScore = 0;
for (let i = 0; i < students.length; i++) {
	totalScore += students[i].score;
}

// Calculate average score
const averageScore = totalScore / students.length;

// Populate the elements with content
document.getElementById("totalStudents").textContent = students.length;
document.getElementById("totalScore").textContent = totalScore;
document.getElementById("averageScore").textContent = averageScore;

// Sort students by score in descending order
const sortedStudents = [...students]; // Create a copy of the original students array
sortedStudents.sort((a, b) => b.score - a.score);

// Populate sorted student scores
let sortedStudentScoresHTML = "";
for (let i = 0; i < sortedStudents.length; i++) {
	sortedStudentScoresHTML +=
		"<div>" +
		sortedStudents[i].name +
		" : " +
		sortedStudents[i].score +
		"</div>";
}

document.getElementById("sortedStudentScores").innerHTML =
	sortedStudentScoresHTML;

// JS Code for shop section
function displayImage(event) {
	var clickedImage = event.target;
	var itemImage = document.getElementById("item-image");

	itemImage.src = clickedImage.src;
}
