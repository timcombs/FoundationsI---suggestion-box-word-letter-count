// have a suggestion box
// the text area name="suggestions"
// take the suggestions string and count the number of words and
// count the total number of characters in those words sans spaces
// on submit an alert box pops up telling the user how many characters
// and words they entered.

// this function gets us the text from the suggestions form
function getValue() {
	var textItem = document.getElementById("suggestions");
	return textItem.value;
}

// this function creates the array of words so we can count the amount of words
// and characters in those words
function textExamine() {
	var textValue = getValue();
	var possibleWords = textValue.split(/\s+|\n/);  // splits the text into possible words
											   		// and makes an array - I originally did 
											   		// this split using a space and was working
											   		// on a for loop to separate out
											   		// carriage returns later, but found a
											   		// regex to do both at the same time.

	var possibleWordsAmt = possibleWords.length;  // number of possible words in text

	//this code removes the non-word strings and counts the total characters
	var stringAmt = possibleWordsAmt;
	var characterAmt = 0;
	for (var i=0; i<stringAmt; i++) { // for loop counts the characters in each word and
								  	  // if they are double-hyphens or nulls it removes
								  	  // them from word count and character count

		if ((possibleWords[i] == "") || (possibleWords[i] == "--")) {
			possibleWordsAmt = possibleWordsAmt - 1; // subtracting from word count
		} else {
			var characterAmt = characterAmt + possibleWords[i].length; // adds characters
																	   // together
		}
	}

	alert("You have entered " + characterAmt + " characters and " +
		possibleWordsAmt + " words."); // pop up window with text
}