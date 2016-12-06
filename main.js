// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);


//var html_text = DOMtoString(document);
//console.log(document);
//document.getElementsByTagName('p')
//console.log(document.getElementsByTagName('p'));
rootNode = document.body.firstChild;

traverseHTML(rootNode)
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

function translate(str) {

};

function isJS(node) {
	return node.nodeValue.indexOf('{') != -1 || node.nodeValue.indexOf('<') != -1;
};

function traverseHTML(node){
	while(node){

		if (node.hasChildNodes()){
			traverseHTML(node.firstChild);
		}
		else if (node.nodeType == 3 && !isJS(node) && node.nodeValue.length > 2){
			console.log(node.nodeValue);
		};
		node = node.nextSibling;
	}
};
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
