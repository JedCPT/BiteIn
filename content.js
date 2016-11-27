// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// // Use of this source code is governed by a BSD-style license that can be
// // found in the LICENSE file.
//
 //Called when the user clicks on the browser action.

 // chrome.runtime.onMessage.addListener(function(request, sender) {
 //   if (request.action == "getSource") {
 //     //fdconsole.log(request.source);
 //
 //
 //    //});
 //   }
 // });
 var active = false;

 chrome.browserAction.onClicked.addListener(function(tab) {

   //console.log(document.body);
   //  $('body').html("hahahaha"
   //$(document).ready(function() {


   chrome.tabs.executeScript(null, {
       file: "getPagesSource.js"
     }, function() {
       // If you try and inject into an extensions page or the webstore/NTP you'll get an error
       //if (chrome.runtime.lastError) {
         //message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
       //}
     });
 });
