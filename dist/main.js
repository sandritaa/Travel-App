var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";async function r(){let e,t,n=document.getElementById("departureDate").value,r=document.getElementById("cityDestination").value,o=function(e){let t=new Date,n=new Date(e).getTime()-t.getTime();return Math.round(n/864e5)}(n);""===r?(e=!1,alert("Please enter a city name.")):e=!0,o<0?(t=!1,alert("Entered a day in the past, please enter a date in the future")):""===n?(t=!1,alert("Please enter a departure date")):t=!0;let a={};if(e&&t){let e={departureDate:n,destinationCity:r};a=await async function(e){let t=await fetch("http://localhost:3000/postRoute",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),n=await t.json();return console.log("Received response from server"),n}(e),o>a.weather.data.length?a.forecast="Forecast only available up to "+a.weather.data.length+" days in advance":a.forecast=a.weather.data[o].temp+" °C",a.photo=a.picture.hits[0].webformatURL,a.countdown=o}else a={city:"Error in inputs",date:"Error in inputs",forecast:"Error in inputs",photo:"../media/error.png",countdown:"Error in inputs"};return a}n.r(t),n.d(t,"travelListener",(function(){return o})),n.d(t,"todoListener",(function(){return a}));let o=document.getElementById("button1");o.addEventListener("click",(async function(){!function(e){const t=document.getElementById("itineraryTitle"),n=document.getElementById("date"),r=document.getElementById("temp"),o=document.getElementById("location"),a=document.getElementById("image"),i=document.getElementById("count");t.innerHTML='<span class="entry-item">itinerary</span>',n.innerHTML='<span class="entry-item">Date: </span>'+e.date,r.innerHTML='<span class="entry-item">Temperature: </span>'+e.forecast,o.innerHTML='<span class="entry-item">City: </span>'+e.city,a.innerHTML=`<img src=${e.photo}>`,i.innerText=e.countdown+" days to trip! ✈️",console.log(e)}(await r())}));let a=function(){let e=document.getElementById("app"),t=document.createElement("div");t.className="listClass",t.setAttribute("id","todo");let n=document.createElement("label"),r=document.createElement("input"),o=document.createElement("ul"),a=document.createElement("button"),i=document.createTextNode("click to add");return a.setAttribute("id","button2"),n.setAttribute("class","todoLabel"),n.setAttribute("for","label"),n.innerHTML="to-do list:",r.setAttribute("type","text"),r.setAttribute("placeholder","enter to do here"),r.setAttribute("id","todoInput"),o.setAttribute("id","myUL"),e.appendChild(t),t.appendChild(n),t.appendChild(r),t.appendChild(a),t.appendChild(o),a.appendChild(i),a}();a.addEventListener("click",(function(){let e=document.createElement("li");var t=document.getElementById("todoInput");if(""===t.value)alert("Please enter something to do");else{let n=document.createTextNode(t.value);e.appendChild(n),document.getElementById("myUL").appendChild(e),t.value=""}}));n(0)}]);