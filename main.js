// BiteIn:
// @author Jedda Boyle <jeddaboyle@gmail.com>
// @author Taavi Kivisik <taavi.kivisik@gmail.com>

// Read external JSON file into the words variable.
var words;
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        words = JSON.parse(this.responseText);
    }
};
xhr.open("GET", chrome.extension.getURL('words.json'), false);
xhr.send();

// Check if the word between index n and m is in the dictionary of translatable
// words. If it is replace the substring between n and m with the translation
// of the word.
function insertTranslatedWord(str, n, m){
	word = words[str.substring(n, m)];
	if (word == null){
		return null;
	};
	return str.slice(0, n) + word + str.slice(m);
};

var bracketBalance;
var indexOfPreviousWordBreak;
var translatedParagraphHTML;
var paragraphs = document.getElementsByTagName("p");

for (paragraph of paragraphs) {
	paragraphHTML = paragraph.innerHTML;
	bracketBalance = 0
	indexOfPreviousWordBreak = 0

	for (var i = 0; i < paragraphHTML.length; i++){
		translatedParagraphHTML = null;
		if (paragraphHTML[i] == '<') {
			translatedParagraphHTML = insertTranslatedWord(paragraphHTML, indexOfPreviousWordBreak, i);
			bracketBalance += 1;
		}
		else if (paragraphHTML[i] == '>') {
			bracketBalance -= 1;
			indexOfPreviousWordBreak = i + 1;
		}
		else if (bracketBalance == 0 && paragraphHTML[i].match(/[a-z]/i) == null) {
				translatedParagraphHTML = insertTranslatedWord(paragraphHTML, indexOfPreviousWordBreak, i);
				indexOfPreviousWordBreak = i + 1;
		}
		if (translatedParagraphHTML != null) {
			paragraphHTML = translatedParagraphHTML;
			j = indexOfPreviousWordBreak;
		}
	}
	paragraph.innerHTML = paragraphHTML;
};
