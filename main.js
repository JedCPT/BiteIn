// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);


//var html_text = DOMtoString(document);
//console.log(document);
//document.getElementsByTagName('p')
//console.log(document.getElementsByTagName('p'));

var w = { "people":"mensen"}

function stringInsert(str, toInsert, n, m){
	return str.slice(0, n) + toInsert + str.slice(m);
};

function func(str, n, m){
	word = w[str.substring(n, m)];
	if (word != null){
		return str.slice(0, n) + word + str.slice(m);
	};
	return null;
}

// rootNode = document.body.firstChild;
var myNodelist = document.getElementsByTagName("p");
var i;
for (i = 0; i < myNodelist.length; i++) {
	str = myNodelist[i].innerHTML;
	var j;
	count = 0
	c = 0
	for (j = 0; j < str.length; j++){
		var xx = null;
		if (str[j] == '<') {
			//console.log(str.substring(c, j))
			xx = func(str, c, j);
			//str = stringInsert(str, w[str.substring(c, j)], c, j);
			count += 1;
		}
		else if (str[j] == '>') {
			count -= 1;
			c = j + 1;
		}
		//console.log("here");
		else if (count == 0){
			//next_space = str.indexOf(' ', j)
			// Check if character is not a letter.
			if (str[j].match(/[a-z]/i) == null){
				//console.log("hello");
				//console.log(str.substring(c, j))
				//var x = w[str.substring(c, j)];
				xx = func(str, c, j);
				// if (xx == null) {
				// 	//stringInsert(str, w[str.substring(c, j)], c, j);//str.slice(0, c) + w[str.substring(c, j)] + str.slice(j);
				// 	//j = c;
				// 	c = j + 1;
				// }
				// else {
				// 	str = xx;
				// 	j = c;
				// 	//c = j + 1;
				// }
				//console.log(w[str.substring(c, j)]);
				c = j + 1;


			}
			//.substring(j, str.indexOf(' ', j)));
			//if str.substring(j, str.indexOf(' ', j))
			//j = min(next_space, str.indexOf(' ', j))
		}
		if (xx != null) {
			//stringInsert(str, w[str.substring(c, j)], c, j);//str.slice(0, c) + w[str.substring(c, j)] + str.slice(j);
			//j = c;
			str = xx;
			j = c;
		}
		else {
			//str = xx;
			//j = c;
			//c = j + 1;
		}
	}
	console.log(str);
	myNodelist[i].innerHTML = str;
	//console.log(myNodelist[i].innerHTML);
    //myNodelist[i].style.backgroundColor = "red";
	// w.forEach(function(ww) {

	// 	console.log(str);
	// 	var findThis = String("\\s" + ww.word + "[\\s,.!?]");
	// 	var reWordChanger = new RegExp(findThis,"g");
	// 	//console.log(str);
	// 	myNodelist[i].innerHTML = str.replace(reWordChanger, " <span style='background-color: #FFFF00;' title='" + ww.word + "'>" + ww.translation + "</span> ");
	//
	//
	// });

}
// z = chrome.extension.getURL("./words.json");
// var xhr = new XMLHttpRequest();
// xhr.open("GET", z, true);
// xhr.send();


//JSON.parse('{}')
//$.getJSON(chrome.extension.getURL('words.json'), function(settings) {
  //..
//});
//$.getJSON("words.json");
//JSON.parse()
//x = JSON.stringify(eval("(" + z + ")"));

//traverseHTML(rootNode)
// while (node) {
// 	if (node.nodeType == 1){
// 		console.log(node.firstChild);
// 	};
// 	//console.log(node.nodeType);
// 	//console.log("hello");
// 	//if (node.nodeType == Node.ELEMENT_NODE){
// 		//console.log(node.innerHTML);
// 	//}
// 	node = node.nextSibling
// };


// function isJS(node) {
// 	return node.nodeValue.indexOf('{') != -1 || node.nodeValue.indexOf('<') != -1;
// };
//
// function traverseHTML(node){
// 	while(node){
//
// 		if (node.hasChildNodes()){
// 			traverseHTML(node.firstChild);
// 		}
// 		else if (node.nodeType == 3 && !isJS(node) && node.nodeValue.length > 2){
// 			//console.log(node.nodeValue);
// 			node.nodeValue = translate(node.nodeValue);
// 			//console.log(translate(node.nodeValue));
// 		};
// 		node = node.nextSibling;
// 	}
// };
//
// function translate(str){
// 	//console.log("hh" + str);
// 	w.forEach(function(ww) {
// 		var findThis = String("\\s" + ww.word + "[\\s,.!?]");
// 		var reWordChanger = new RegExp(findThis,"g");
// 		//console.log(str);
// 		str = str.replace(reWordChanger, " <span style='background-color: #FFFF00;' title='" + ww.word + "'>" + ww.translation + "</span> ");
//
// 		//console.log("hh" + str);
//
// 	});
// 	return str;
//
//
// 	// for each(function(el) {
// 	//
// 	//
//     //     var findThis = String("\\s" + el.word + "[\\s,.!?]");
//     //     var reWordChanger = new RegExp(findThis,"g");
// 	//
//     //     str.replace(reWordChanger, " <span style='background-color: #FFFF00;' title='"+el.word+"'>"+el.translation+"</span> ");
// 	//
//     // });
// 	//return "hello";
//
// };




		// switch (node.nodeType) {
		// case Node.ELEMENT_NODE:
		// 		html += node.outerHTML;
		// 		break;
		// case Node.TEXT_NODE:
		// 		html += node.nodeValue;
		// 		break;
		// case Node.CDATA_SECTION_NODE:
		// 		html += '<![CDATA[' + node.nodeValue + ']]>';
		// 		break;
		// case Node.COMMENT_NODE:
		// 		html += '<!--' + node.nodeValue + '-->';
		// 		break;
		// case Node.DOCUMENT_TYPE_NODE:
		// 		// (X)HTML documents are identified by public identifiers
		// 		html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
		// 		break;
		// }
		// node = node.nextSibling;
//$("p").each(function() {
  //  console.log("next <p> element with id: " + this.id);
//});


// var regexp;
// var backup = html_text;
// var something;
// var i = 0;
// var BreakException = {};
//
// var reWhitespace = new RegExp(/\s/);
// var reWord = new RegExp("and");
// var reCombined = new RegExp(reWhitespace + reWord);
//
// try {
//
//     words.forEach(function(el) {
//         i = i + 1;
//         if (i >= 1000) { throw BreakException; };
//
//         // var string = el.word;
//         // var trans = el.translation;
//         // https://github.com/tkivisik/dict-en-nl/blob/master/testing.json
//     //    var json = require('./testing.json');
//     //  console.log(json);
//         var findThis = String("\\s" + el.word + "[\\s,.!?]");
// //        if (findThis !== "undefined") { console.log(findThis); };
//         var reWordChanger = new RegExp(findThis,"g");
//
//         html_text = html_text.replace(reWordChanger, " <span style='background-color: #FFFF00;' title='"+el.word+"'>"+el.translation+"</span> ");
// //        html_text = html_text.replace(reWordChanger, " <span class='highlight'>"+el.translation+"</span> ");
//         // html_text.split(string).join(trans);
//         // html_text.replace(new RegExp(string, 'g'), "<span class='highlight'>"+trans+"</span>");
//     });
// } catch (e) {
//     if (e !== BreakException) throw e;
// }
//
// //console.log(something);
//
// document.body.innerHTML = html_text;



// String.prototype.replaceAll = function(search, replacement) {
//     var target = this;
//     return target.replace(new RegExp(search, 'g'), replacement);
// };


// var re1 = new RegExp(/google+/g);

//var words = require('./somefile.json');
//console.log(window.active);
// $.getJSON("words.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });


//var match = re1.exec(html_text);

//console.log(match);
//html_text = "hello"





// function DOMtoString(document_root) {
//     var html = '',
//         node = document_root.firstChild;
//     while (node) {
//         switch (node.nodeType) {
//         case Node.ELEMENT_NODE:
//             html += node.outerHTML;
//             break;
//         case Node.TEXT_NODE:
//             html += node.nodeValue;
//             break;
//         case Node.CDATA_SECTION_NODE:
//             html += '<![CDATA[' + node.nodeValue + ']]>';
//             break;
//         case Node.COMMENT_NODE:
//             html += '<!--' + node.nodeValue + '-->';
//             break;
//         case Node.DOCUMENT_TYPE_NODE:
//             // (X)HTML documents are identified by public identifiers
//             html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
//             break;
//         }
//         node = node.nextSibling;
//     }
//     return html;
// }

// chrome.runtime.sendMessage({
//     action: "getSource",
//     source: DOMtoString(document)
// });
