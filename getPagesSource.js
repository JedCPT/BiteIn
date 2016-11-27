// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);


var html_text = DOMtoString(document);


var words = [
    {
        "word": "and",
        "translation": "thiswasAND"
    },
    {
        "word": "for",
        "translation": "thiswasFOR"
    }
];
var regexp;
var backup = html_text;
var something;
words.forEach(function(el) {

    
    //var string = el.word;
    //var trans = el.translation;
    html_text = html_text.replace(new RegExp(el.word, "g"), "<span class='highlight'>"+el.translation+"</span>");
    //html_text.split(string).join(trans);
   // html_text.replace(new RegExp(string, 'g'), "<span class='highlight'>"+trans+"</span>");
});

console.log(something);

document.body.innerHTML = html_text;



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





function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    while (node) {
        switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            html += node.outerHTML;
            break;
        case Node.TEXT_NODE:
            html += node.nodeValue;
            break;
        case Node.CDATA_SECTION_NODE:
            html += '<![CDATA[' + node.nodeValue + ']]>';
            break;
        case Node.COMMENT_NODE:
            html += '<!--' + node.nodeValue + '-->';
            break;
        case Node.DOCUMENT_TYPE_NODE:
            // (X)HTML documents are identified by public identifiers
            html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
            break;
        }
        node = node.nextSibling;
    }
    return html;
}

// chrome.runtime.sendMessage({
//     action: "getSource",
//     source: DOMtoString(document)
// });
