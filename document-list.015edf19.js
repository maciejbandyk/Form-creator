parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VXco":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.LocStorage=void 0;var a=function(){function e(){t(this,e),this.DataStorage=window.localStorage}return n(e,[{key:"saveDocument",value:function(t){return this.DataStorage.setItem("document-".concat(Date.now()),JSON.stringify(t))}},{key:"saveEditedDocument",value:function(t,e){return this.DataStorage.setItem(e,JSON.stringify(t))}},{key:"loadDocument",value:function(t){return this.DataStorage.getItem(t)}},{key:"getDocuments",value:function(){var t=Object.assign({},this.DataStorage),e=[];for(var n in t)if("F-"!=n.substr(0,2)){if(!t.hasOwnProperty(n))continue;e.push(n)}return e}},{key:"getForms",value:function(){for(var t=[],e=Object.assign({},this.DataStorage),n=0,a=Object.keys(e);n<a.length;n++){var r=a[n];"F-"==r.substr(0,2)&&t.push(r)}return t}},{key:"removeDocument",value:function(t){this.DataStorage.removeItem(t)}},{key:"saveForm",value:function(t,e){return this.DataStorage.setItem("F-".concat(e,"-").concat(Date.now()),JSON.stringify(t))}}]),e}();exports.LocStorage=a;
},{}],"DH78":[function(require,module,exports) {
"use strict";function e(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){c=!0,i=e},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw i}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.DocumentList=void 0;var i=require("./LocStorage"),u=function(){function t(){r(this,t);var e=new i.LocStorage;this.ListOfDocuments=e.getDocuments()}return a(t,[{key:"getDocuments",value:function(){return this.ListOfDocuments}},{key:"getDocument",value:function(t){var n,r,o=e(this.ListOfDocuments);try{for(o.s();!(r=o.n()).done;){var a=r.value;a===t&&(n=localStorage.getItem(a))}}catch(i){o.e(i)}finally{o.f()}return JSON.parse(n)}},{key:"getLength",value:function(){return this.getDocuments().length}},{key:"render",value:function(e){var t=this,n=document.createElement("table");n.classList.add("table","table-striped","table-responsive-sm");for(var r=function(e){for(var r=document.createElement("tr"),o=0;o<4;o++){var a=document.createElement("td");if(0==o)a.appendChild(document.createTextNode((e+1).toString()));else if(1==o)a.appendChild(document.createTextNode(t.ListOfDocuments[e]));else if(2==o){var i=document.createElement("span");i.classList.add("fa","fa-pen","hov"),i.addEventListener("click",function(n){n.stopImmediatePropagation(),n.preventDefault(),window.location.href="../edit-document/edit-document.html?id=".concat(t.ListOfDocuments[e])}),a.appendChild(i)}else{var u=document.createElement("span");u.classList.add("fa","fa-trash","hov"),u.addEventListener("click",function(n){n.stopImmediatePropagation(),n.preventDefault(),!0===confirm("Are you sure about deleting this document?")&&t.removeDocument(t.ListOfDocuments[e])}),a.appendChild(u)}r.appendChild(a)}n.appendChild(r)},o=0;o<this.ListOfDocuments.length;o++)r(o);e.appendChild(n)}},{key:"removeDocument",value:function(e){window.localStorage.removeItem(e),window.location.href="document-list.html"}}]),t}();exports.DocumentList=u;
},{"./LocStorage":"VXco"}],"ErQE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../classes/DocumentList"),t=document.getElementById("main"),n=new e.DocumentList;0===n.getLength()?t.append("You don't have any saved documents yet"):n.render(t);
},{"../../classes/DocumentList":"DH78"}]},{},["ErQE"], null)
//# sourceMappingURL=document-list.015edf19.js.map