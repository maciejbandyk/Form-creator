parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VXco":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.LocStorage=void 0;var a=function(){function e(){t(this,e),this.DataStorage=window.localStorage}return n(e,[{key:"saveDocument",value:function(t){return this.DataStorage.setItem("document-".concat(Date.now()),JSON.stringify(t))}},{key:"saveEditedDocument",value:function(t,e){return this.DataStorage.setItem(e,JSON.stringify(t))}},{key:"loadDocument",value:function(t){return this.DataStorage.getItem(t)}},{key:"getDocuments",value:function(){var t=Object.assign({},this.DataStorage),e=[];for(var n in t)if("F-"!=n.substr(0,2)){if(!t.hasOwnProperty(n))continue;e.push(n)}return e}},{key:"getForms",value:function(){for(var t=[],e=Object.assign({},this.DataStorage),n=0,a=Object.keys(e);n<a.length;n++){var r=a[n];"F-"==r.substr(0,2)&&t.push(r)}return t}},{key:"removeDocument",value:function(t){this.DataStorage.removeItem(t)}},{key:"saveForm",value:function(t,e){return this.DataStorage.setItem("F-".concat(e,"-").concat(Date.now()),JSON.stringify(t))}}]),e}();exports.LocStorage=a;
},{}],"hVle":[function(require,module,exports) {
"use strict";function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function n(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Router=void 0;var t=function(){function r(){e(this,r)}return n(r,null,[{key:"getParam",value:function(){var e=window.location.search.substr(1);return new URLSearchParams(e).get("id")}}]),r}();exports.Router=t;
},{}],"p53v":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Form=void 0;var a=require("./LocStorage"),r=require("./Router"),o=function(){function t(n){e(this,t),this.fieldsArray=n}return n(t,[{key:"render",value:function(e){var t=this,n=document.createElement("form");n.classList.add("form-horizontal");var a=document.createElement("button");a.classList.add("btn"),a.innerHTML="Save";var o=document.createElement("button");o.classList.add("btn","btn-back"),o.innerHTML="Back",this.fieldsArray.forEach(function(e){e.render(n)}),n.appendChild(a),a.addEventListener("click",function(e){e.preventDefault(),e.stopImmediatePropagation(),null==r.Router.getParam()||r.Router.getParam().startsWith("F-")?t.save(t):t.saveEdit(t,r.Router.getParam())}),n.appendChild(o),o.addEventListener("click",function(e){e.preventDefault(),e.stopImmediatePropagation(),window.location.replace("../document-list/document-list.html")}),e.appendChild(n)}},{key:"getValue",value:function(){return this.fieldsArray.map(function(e){return{type:e.Type,label:e.Label,name:e.Name,value:e.Value}})}},{key:"saveEdit",value:function(e,t){(new a.LocStorage).saveEditedDocument(e,t),alert("Document edited"),window.location.href="../document-list/document-list.html"}},{key:"save",value:function(e){(new a.LocStorage).saveDocument(e),alert("Document saved"),window.location.href="../../index.html"}}]),t}();exports.Form=o;
},{"./LocStorage":"VXco","./Router":"hVle"}],"qRFD":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.FieldType=void 0,function(e){e.Textbox="text",e.Textlargebox="textarea",e.Date="date",e.Email="email",e.Selectbox="radio",e.Checkbox="checkbox"}(e=exports.FieldType||(exports.FieldType={}));
},{}],"Jg3K":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.FieldLabel=void 0;var n=function n(t,a,o){e(this,n);var r=document.createElement("LABEL");r.className=a,r.innerHTML=o,t.appendChild(r)};exports.FieldLabel=n;
},{}],"OHei":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.CheckboxField=void 0;var i=require("../../enums/field-type.enum"),a=require("./FieldLabel"),r=function(){function t(n,a,r){e(this,t),this.Type=i.FieldType.Checkbox,this.Name=n,this.Label=a,this.Value=r}return n(t,[{key:"render",value:function(e){var t=this,n=document.createElement("div");n.classList.add("form-group"),new a.FieldLabel(n,"question-label",this.Label);var i=document.createElement("input");i.setAttribute("type",this.Type),n.appendChild(i),e.appendChild(n),this.Input=i,!0===this.Value&&(i.checked=!0),i.addEventListener("change",function(){1==i.checked?t.Value=!0:t.Value=!1})}},{key:"setValue",value:function(e){e.preventDefault(),e.stopImmediatePropagation(),this.Value=!0}},{key:"getValue",value:function(){return this.Value}}]),t}();exports.CheckboxField=r;
},{"../../enums/field-type.enum":"qRFD","./FieldLabel":"Jg3K"}],"RfoC":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextAreaField=void 0;var n=require("../../enums/field-type.enum"),r=require("./FieldLabel"),i=function(){function t(a,r,i){e(this,t),this.Type=n.FieldType.Textlargebox,this.Name=a,this.Label=r,this.Value=i}return a(t,[{key:"render",value:function(e){var t=this,a=document.createElement("div");a.classList.add("form-group"),new r.FieldLabel(a,"question-label",this.Label);var n=document.createElement("textarea");n.classList.add("form-control"),n.value=this.Value,a.appendChild(n),e.appendChild(a),this.Input=n,n.addEventListener("keyup",function(e){t.Value=e.target.value}),n.addEventListener("paste",function(e){t.Value=e.target.value}),n.addEventListener("cut",function(e){t.Value=e.target.value})}},{key:"setValue",value:function(e){e.preventDefault(),e.stopImmediatePropagation(),this.Value=e.target.value}},{key:"getValue",value:function(){return this.Value}}]),t}();exports.TextAreaField=i;
},{"../../enums/field-type.enum":"qRFD","./FieldLabel":"Jg3K"}],"A51h":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.SelectField=void 0;var a=require("../../enums/field-type.enum"),i=require("./FieldLabel"),l=function(){function t(n,i,l,r){e(this,t),this.Type=a.FieldType.Selectbox,this.Name=n,this.Label=i,this.Options=l,this.Value=r}return n(t,[{key:"render",value:function(e){var t=this,n=document.createElement("div");n.classList.add("form-group"),new i.FieldLabel(n,"question-label",this.Label);var a=document.createElement("select");a.classList.add("form-control"),n.appendChild(a),e.appendChild(n),this.Options.forEach(function(e){var t=document.createElement("option");t.value=e,t.innerHTML=e,a.appendChild(t)}),a.value=this.Value,this.Input=a,a.addEventListener("change",function(e){t.Value=e.target.value})}},{key:"setValue",value:function(e){e.preventDefault(),e.stopImmediatePropagation(),this.Value=e.target.value}},{key:"getValue",value:function(){return this.Value}}]),t}();exports.SelectField=l;
},{"../../enums/field-type.enum":"qRFD","./FieldLabel":"Jg3K"}],"v6fu":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.InputField=void 0;var a=require("./FieldLabel"),u=require("../../enums/field-type.enum"),i=function(){function t(n,a,i){e(this,t),this.Type=u.FieldType.Textbox,this.Name=n,this.Label=a,this.Value=i}return n(t,[{key:"render",value:function(e){var t=this,n=document.createElement("div");n.classList.add("form-group"),new a.FieldLabel(n,"question-label",this.Label);var u=document.createElement("input");u.classList.add("form-control"),u.setAttribute("type",this.Type),n.appendChild(u),e.appendChild(n),u.value=this.Value,this.Input=u,u.addEventListener("keyup",function(e){t.Value=e.target.value}),u.addEventListener("paste",function(e){t.Value=e.target.value}),u.addEventListener("cut",function(e){t.Value=e.target.value})}},{key:"setValue",value:function(e){e.preventDefault(),e.stopImmediatePropagation(),this.Value=e.target.value}},{key:"getValue",value:function(){return this.Value}}]),t}();exports.InputField=i;
},{"./FieldLabel":"Jg3K","../../enums/field-type.enum":"qRFD"}],"fa7L":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.EmailField=void 0;var n=require("../../enums/field-type.enum"),i=require("./FieldLabel"),u=function(){function t(a,i,u){e(this,t),this.Type=n.FieldType.Email,this.Name=a,this.Label=i,this.Value=u}return a(t,[{key:"render",value:function(e){var t=this,a=document.createElement("div");a.classList.add("form-group"),new i.FieldLabel(a,"question-label",this.Label);var n=document.createElement("input");n.classList.add("form-control"),n.setAttribute("type",this.Type),a.appendChild(n),e.appendChild(a),n.value=this.Value,this.Input=n,n.addEventListener("keyup",function(e){t.Value=e.target.value}),n.addEventListener("paste",function(e){t.Value=e.target.value}),n.addEventListener("cut",function(e){t.Value=e.target.value})}},{key:"setValue",value:function(e){e.preventDefault(),e.stopImmediatePropagation(),this.Value=e.target.value}},{key:"getValue",value:function(){return this.Value}}]),t}();exports.EmailField=u;
},{"../../enums/field-type.enum":"qRFD","./FieldLabel":"Jg3K"}],"AkfJ":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.DateField=void 0;var n=require("../../enums/field-type.enum"),i=require("./FieldLabel"),r=function(){function t(a,i,r){e(this,t),this.Type=n.FieldType.Date,this.Name=a,this.Label=i,this.Value=r}return a(t,[{key:"render",value:function(e){var t=this,a=document.createElement("div");a.classList.add("form-group"),new i.FieldLabel(a,"question-label",this.Label);var n=document.createElement("input");n.classList.add("form-control"),n.setAttribute("type",this.Type),a.appendChild(n),e.appendChild(a),n.value=this.Value,this.Input=n,n.addEventListener("change",function(e){t.Value=e.target.value})}},{key:"setValue",value:function(e){e.preventDefault(),e.stopImmediatePropagation(),this.Value=e.target.value}},{key:"getValue",value:function(){return this.Value}}]),t}();exports.DateField=r;
},{"../../enums/field-type.enum":"qRFD","./FieldLabel":"Jg3K"}],"uJDr":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Components=void 0;var r=require("../components/new-form/new-form"),a=require("./fields/CheckboxField"),i=require("./fields/TextAreaField"),l=require("./fields/SelectField"),o=require("./fields/InputField"),c=require("./fields/EmailField"),d=require("./fields/DateField"),s=function(){function t(){e(this,t)}return n(t,[{key:"findElement",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];switch(e){case"checkbox":return new a.CheckboxField("name",t,!1);case"date":return new d.DateField("name",t,"");case"email":return new c.EmailField("name",t,"");case"input":return new o.InputField("name",t,"");case"select":return new l.SelectField("name",t,n,"");case"textarea":return new i.TextAreaField("name",t,"")}}},{key:"creatingForm",value:function(e,t){var n=this,a=document.createElement("div");a.classList.add("container","creating-component","border","border-primary");var i=document.createElement("h4");i.innerHTML="".concat(t," element"),a.appendChild(i);var l,o=this.newFormGroup("Label name:","text","name-one");a.append(o),"select"===t&&(l=this.selectOptionsCreator("New option:","text","option-handler"),a.appendChild(l));var c=document.createElement("div");c.classList.add("row","row-buttons");var d=this.newButton("ADD",["btn","btn-success"]);d.addEventListener("click",function(i){var c,d=o.getElementsByTagName("input")[0].value;if(0!==d.length&&d.trim()){var s=null!==(c=null==l?void 0:l.getElementsByTagName("select")[0])&&void 0!==c?c:[],u=n.findElement(t,d,n.getSelectedItems(s));r.form.addFormElement(u),a.remove(),u.render(e)}else alert("Label name must have at least 1 letter")});var s=this.newButton("BACK",["btn","btn-danger"]);s.addEventListener("click",function(){a.remove()}),c.append(d,s),a.appendChild(c),e.appendChild(a)}},{key:"newFormGroup",value:function(e,t,n){var r=document.createElement("div");r.classList.add("form-group");var a=document.createElement("label");a.innerHTML=e;var i=document.createElement("input");return i.classList.add("form-control"),i.setAttribute(t,"text"),i.setAttribute("name",n),r.append(a,i),r}},{key:"selectOptionsCreator",value:function(e,t,n){var r=document.createElement("div");r.classList.add("form-group");var a=document.createElement("label");a.innerHTML=e;var i=document.createElement("input");i.classList.add("form-control"),i.setAttribute(t,"text"),i.setAttribute("name",n);var l=document.createElement("div");l.classList.add("d-flex","flex-row-reverse");var o=this.newButton("ADD",["btn","btn-success"]),c=this.newButton("REMOVE",["btn","btn-danger"]);l.append(c,o);var d=document.createElement("select");return d.classList.add("form-control"),r.append(a,i,l,d),o.addEventListener("click",function(){if(0!==i.value.length&&i.value.trim()){var e=document.createElement("option");e.text=i.value,d.add(e)}else alert("Option name must have at least 1 letter")}),c.addEventListener("click",function(){-1===d.selectedIndex?alert("You have to select option to remove"):d.removeChild(d.options[d.selectedIndex])}),r}},{key:"getSelectedItems",value:function(e){var t=[];if(e.type)for(var n=0;n<e.length;n++){var r=e[n].textContent;t.push(r)}return t}},{key:"newButton",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["btn"],n=document.createElement("button");return t.forEach(function(e){n.classList.add(e)}),n.innerHTML=e,n}}]),t}();exports.Components=s;
},{"../components/new-form/new-form":"uX2o","./fields/CheckboxField":"OHei","./fields/TextAreaField":"RfoC","./fields/SelectField":"A51h","./fields/InputField":"v6fu","./fields/EmailField":"fa7L","./fields/DateField":"AkfJ"}],"NcfQ":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.FormCreator=void 0;var o=require("./Form"),r=require("./LocStorage"),a=require("./Components"),i=function(){function n(){e(this,n),this.componentsHandler=new a.Components,this.fields=[]}return t(n,[{key:"newForm",value:function(){var e=this,n=document.querySelector("div.row"),t=document.querySelector("div.container div.container"),o=document.querySelector("div.form-controls");["checkbox","date","email","input","select","textarea"].forEach(function(o){var r=e.componentsHandler.newButton(o,["btn","btn-outline-info"]);r.addEventListener("click",function(){e.componentsHandler.creatingForm(t,o)}),n.appendChild(r)});var r=this.componentsHandler.newButton("SAVE",["btn","btn-success"]);r.addEventListener("click",function(){e.formName=document.querySelector("input[name=form-name]").value,0!==e.formName.length&&e.formName.trim()?e.saveForm():alert("Form name must have at least one letter")});var a=this.componentsHandler.newButton("BACK",["btn","btn-danger"]);a.addEventListener("click",function(){window.location.href="../new-document/new-document.html"}),o.append(a,r)}},{key:"saveForm",value:function(){var e=new r.LocStorage,n=new o.Form(this.fields);e.saveForm(n,this.formName),window.location.href="../new-document/new-document.html"}},{key:"addFormElement",value:function(e){this.fields.push(e)}}]),n}();exports.FormCreator=i;
},{"./Form":"p53v","./LocStorage":"VXco","./Components":"uJDr"}],"uX2o":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.form=void 0;var r=require("../../classes/FormCreator");exports.form=new r.FormCreator,exports.form.newForm();
},{"../../classes/FormCreator":"NcfQ"}]},{},["uX2o"], null)
//# sourceMappingURL=new-form.730035e0.js.map