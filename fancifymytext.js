// Called when the "Bigger!" button is clicked.
// (Originally just: alert("Hello, world!");)
function bigger() {
	document.getElementById("text").style.fontSize = "24pt";
}

// Called when either radio button changes.
// FancyShmancy -> bold, blue, underlined. BoringBetty -> back to normal.
function fancify() {
	var textArea = document.getElementById("text");

	if (document.getElementById("fancy").checked) {
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else if (document.getElementById("boring").checked) {
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea.style.textDecoration = "none";
	}
}

// Called when the "Moo" button is clicked.
// Uppercases the text and adds "-Moo" to the last word of each sentence.
function moo() {
	var textArea = document.getElementById("text");
	var str = textArea.value.toUpperCase();

	// Each piece except the last one ended with a period.
	var sentences = str.split(".");
	for (var i = 0; i < sentences.length - 1; i++) {
		var words = sentences[i].split(" ");
		var last = words.length - 1;
		if (words[last] !== "") {
			words[last] = words[last] + "-Moo";
		}
		sentences[i] = words.join(" ");
	}

	textArea.value = sentences.join(".");
}
