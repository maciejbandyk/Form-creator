/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/App.ts":
/*!****************************!*\
  !*** ./src/classes/App.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });
    exports.App = void 0;
    const TextAreaField_1 = __webpack_require__(/*! ./TextAreaField */ "./src/classes/TextAreaField.ts");
    const SelectField_1 = __webpack_require__(/*! ./SelectField */ "./src/classes/SelectField.ts");
    const EmailField_1 = __webpack_require__(/*! ./EmailField */ "./src/classes/EmailField.ts");
    const DateField_1 = __webpack_require__(/*! ./DateField */ "./src/classes/DateField.ts");
    const CheckboxField_1 = __webpack_require__(/*! ./CheckboxField */ "./src/classes/CheckboxField.ts");
    const InputField_1 = __webpack_require__(/*! ./InputField */ "./src/classes/InputField.ts");
    const Form_1 = __webpack_require__(/*! ./Form */ "./src/classes/Form.ts");
    class App {
        constructor() {
            const fields = [];
            fields.push(new InputField_1.InputField('test', 'test2', 'zero'));
            fields.push(new CheckboxField_1.CheckboxField('test2', 'essa', 'dzialaj'));
            fields.push(new DateField_1.DateField('testcior', 'dawaj', ''));
            fields.push(new EmailField_1.EmailField('email', 'labelemail', 'wartosc'));
            fields.push(new SelectField_1.SelectField('poleselect', 'poleselect', 'essa'));
            fields.push(new TextAreaField_1.TextAreaField('nazwatextarea', 'labeltextarea', 'wartosc'));
            const formContainer = document.createElement('div');
            document.body.appendChild(formContainer);
            const formularztestowy = new Form_1.Form(fields);
            formularztestowy.render(formContainer);
        }
        run() {
        }
    }
    exports.App = App;
    
    
    /***/ }),
    
    /***/ "./src/classes/CheckboxField.ts":
    /*!**************************************!*\
      !*** ./src/classes/CheckboxField.ts ***!
      \**************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CheckboxField = void 0;
    const FieldLabel_1 = __webpack_require__(/*! ./FieldLabel */ "./src/classes/FieldLabel.ts");
    class CheckboxField extends HTMLElement {
        constructor(name, label, value) {
            super();
            this.Name = name;
            this.Label = label;
            this.Value = value;
        }
        render(container) {
            new FieldLabel_1.FieldLabel(container, 'question-label', this.Label);
            const element = document.createElement('input');
            element.setAttribute('type', this.Type);
            container.appendChild(element);
            element.value = this.Value;
            this.Input = element;
            element.addEventListener('change', this.setValue);
        }
        setValue(event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            this.Value = this.Input.value;
        }
    }
    exports.CheckboxField = CheckboxField;
    
    
    /***/ }),
    
    /***/ "./src/classes/DateField.ts":
    /*!**********************************!*\
      !*** ./src/classes/DateField.ts ***!
      \**********************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DateField = void 0;
    const FieldLabel_1 = __webpack_require__(/*! ./FieldLabel */ "./src/classes/FieldLabel.ts");
    class DateField extends HTMLElement {
        constructor(name, label, value) {
            super();
            this.Name = name;
            this.Label = label;
            this.Value = value;
        }
        render(container) {
            new FieldLabel_1.FieldLabel(container, 'question-label', this.Label);
            const element = document.createElement('input');
            element.setAttribute('type', this.Type);
            container.appendChild(element);
            element.value = this.Value;
            this.Input = element;
            element.addEventListener('keyup', this.setValue);
            element.addEventListener('paste', this.setValue);
            element.addEventListener('cut', this.setValue);
        }
        setValue(event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            this.Value = this.Input.value;
        }
    }
    exports.DateField = DateField;
    
    
    /***/ }),
    
    /***/ "./src/classes/EmailField.ts":
    /*!***********************************!*\
      !*** ./src/classes/EmailField.ts ***!
      \***********************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EmailField = void 0;
    const FieldLabel_1 = __webpack_require__(/*! ./FieldLabel */ "./src/classes/FieldLabel.ts");
    class EmailField extends HTMLElement {
        constructor(name, label, value) {
            super();
            this.Name = name;
            this.Label = label;
            this.Value = value;
        }
        render(container) {
            new FieldLabel_1.FieldLabel(container, 'question-label', this.Label);
            const element = document.createElement('input');
            element.setAttribute('type', this.Type);
            container.appendChild(element);
            element.value = this.Value;
            this.Input = element;
            element.addEventListener('keyup', this.setValue);
            element.addEventListener('paste', this.setValue);
            element.addEventListener('cut', this.setValue);
        }
        setValue(event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            this.Value = this.Input.value;
        }
    }
    exports.EmailField = EmailField;
    
    
    /***/ }),
    
    /***/ "./src/classes/FieldLabel.ts":
    /*!***********************************!*\
      !*** ./src/classes/FieldLabel.ts ***!
      \***********************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FieldLabel = void 0;
    class FieldLabel extends HTMLElement {
        constructor(container, tagStyle, content) {
            super();
            const element = document.createElement("LABEL");
            element.className = tagStyle;
            element.innerHTML = content;
            container.appendChild(element);
        }
        ;
    }
    exports.FieldLabel = FieldLabel;
    
    
    /***/ }),
    
    /***/ "./src/classes/Form.ts":
    /*!*****************************!*\
      !*** ./src/classes/Form.ts ***!
      \*****************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Form = void 0;
    class Form {
        constructor(fields) {
            this.fieldsArray = fields;
        }
        render(pole) {
            const formDocument = document.createElement("form");
            this.fieldsArray.forEach(field => { field.render(formDocument); });
            pole.appendChild(formDocument);
        }
        getValue(params) {
            return this.fieldsArray.map(field => {
                return { name: field.Name, value: field.Value };
            });
        }
    }
    exports.Form = Form;
    
    
    /***/ }),
    
    /***/ "./src/classes/InputField.ts":
    /*!***********************************!*\
      !*** ./src/classes/InputField.ts ***!
      \***********************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InputField = void 0;
    const FieldLabel_1 = __webpack_require__(/*! ./FieldLabel */ "./src/classes/FieldLabel.ts");
    class InputField extends HTMLElement {
        constructor(name, label, value) {
            super();
            this.Name = name;
            this.Label = label;
            this.Value = value;
        }
        render(container) {
            new FieldLabel_1.FieldLabel(container, 'question-label', this.Label);
            const element = document.createElement('input');
            element.setAttribute('type', this.Type);
            container.appendChild(element);
            element.value = this.Value;
            this.Input = element;
            element.addEventListener('keyup', this.setValue);
            element.addEventListener('paste', this.setValue);
            element.addEventListener('cut', this.setValue);
        }
        setValue(event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            this.Value = this.Input.value;
        }
    }
    exports.InputField = InputField;
    
    
    /***/ }),
    
    /***/ "./src/classes/SelectField.ts":
    /*!************************************!*\
      !*** ./src/classes/SelectField.ts ***!
      \************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SelectField = void 0;
    const FieldLabel_1 = __webpack_require__(/*! ./FieldLabel */ "./src/classes/FieldLabel.ts");
    class SelectField extends HTMLElement {
        constructor(name, label, value) {
            super();
            this.Name = name;
            this.Label = label;
            this.Value = value;
        }
        render(container) {
            new FieldLabel_1.FieldLabel(container, 'question-label', this.Label);
            const element = document.createElement('input');
            element.setAttribute('type', this.Type);
            container.appendChild(element);
            element.value = this.Value;
            this.Input = element;
            element.addEventListener('change', this.setValue);
        }
        setValue(event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            this.Value = this.Input.value;
        }
    }
    exports.SelectField = SelectField;
    
    
    /***/ }),
    
    /***/ "./src/classes/TextAreaField.ts":
    /*!**************************************!*\
      !*** ./src/classes/TextAreaField.ts ***!
      \**************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextAreaField = void 0;
    const FieldLabel_1 = __webpack_require__(/*! ./FieldLabel */ "./src/classes/FieldLabel.ts");
    class TextAreaField extends HTMLElement {
        constructor(name, label, value) {
            super();
            this.Name = name;
            this.Label = label;
            this.Value = value;
        }
        render(container) {
            new FieldLabel_1.FieldLabel(container, 'question-label', this.Label);
            const element = document.createElement('textarea');
            element.setAttribute('type', this.Type);
            container.appendChild(element);
            element.value = this.Value;
            element.addEventListener('keyup', this.setValue);
            element.addEventListener('paste', this.setValue);
            element.addEventListener('cut', this.setValue);
        }
        setValue(event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            this.Value = this.Input.value;
        }
    }
    exports.TextAreaField = TextAreaField;
    
    
    /***/ }),
    
    /***/ "./src/index.ts":
    /*!**********************!*\
      !*** ./src/index.ts ***!
      \**********************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    Object.defineProperty(exports, "__esModule", { value: true });
    const App_1 = __webpack_require__(/*! ./classes/App */ "./src/classes/App.ts");
    console.log('test');
    const app = new App_1.App();
    console.log('asd');
    
    
    /***/ })
    
    /******/ });
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0NoZWNrYm94RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvRGF0ZUZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0VtYWlsRmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvRmllbGRMYWJlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Gb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0lucHV0RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvU2VsZWN0RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvVGV4dEFyZWFGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztR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QUFDLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IFRleHRBcmVhRmllbGQgfSBmcm9tICcuL1RleHRBcmVhRmllbGQnO1xyXG5pbXBvcnQgeyBTZWxlY3RGaWVsZCB9IGZyb20gJy4vU2VsZWN0RmllbGQnO1xyXG5pbXBvcnQgeyBFbWFpbEZpZWxkIH0gZnJvbSAnLi9FbWFpbEZpZWxkJztcclxuaW1wb3J0IHsgRGF0ZUZpZWxkIH0gZnJvbSAnLi9EYXRlRmllbGQnO1xyXG5pbXBvcnQgeyBDaGVja2JveEZpZWxkIH0gZnJvbSAnLi9DaGVja2JveEZpZWxkJztcclxuaW1wb3J0IHsgSW5wdXRGaWVsZCB9IGZyb20gJy4vSW5wdXRGaWVsZCc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICcuL0Zvcm0nO1xyXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcy9pZmllbGQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCBmaWVsZHM6IEZpZWxkW10gPSBbXTtcclxuICAgICAgICBmaWVsZHMucHVzaChuZXcgSW5wdXRGaWVsZCgndGVzdCcsICd0ZXN0MicsICd6ZXJvJykpO1xyXG4gICAgICAgIGZpZWxkcy5wdXNoKG5ldyBDaGVja2JveEZpZWxkKCd0ZXN0MicsICdlc3NhJywnZHppYWxhaicpKTtcclxuICAgICAgICBmaWVsZHMucHVzaChuZXcgRGF0ZUZpZWxkKCd0ZXN0Y2lvcicsICdkYXdhaicsICcnKSk7XHJcbiAgICAgICAgZmllbGRzLnB1c2gobmV3IEVtYWlsRmllbGQoJ2VtYWlsJywgJ2xhYmVsZW1haWwnLCAnd2FydG9zYycpKTtcclxuICAgICAgICBmaWVsZHMucHVzaChuZXcgU2VsZWN0RmllbGQoJ3BvbGVzZWxlY3QnLCAncG9sZXNlbGVjdCcsICdlc3NhJykpO1xyXG4gICAgICAgIGZpZWxkcy5wdXNoKG5ldyBUZXh0QXJlYUZpZWxkKCduYXp3YXRleHRhcmVhJywgJ2xhYmVsdGV4dGFyZWEnLCd3YXJ0b3NjJykpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG4gICAgICAgIGNvbnN0IGZvcm11bGFyenRlc3Rvd3kgPSBuZXcgRm9ybShmaWVsZHMpO1xyXG4gICAgICAgIGZvcm11bGFyenRlc3Rvd3kucmVuZGVyKGZvcm1Db250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBydW4oKTogdm9pZCB7XHJcbiAgICAgICAgLy9Gb3JtLlxyXG4gICAgfVxyXG59XHJcbi8qY29uc3QgZmllbGRzOiBGaWVsZFtdID0gW107XHJcbmZpZWxkcy5wdXNoKG5ldyBJbnB1dEZpZWxkKCd0ZXN0JywgJ3Rlc3QyJywgJ3plcm8nKSk7XHJcbmZpZWxkcy5wdXNoKG5ldyBDaGVja2JveEZpZWxkKCd0ZXN0MicsICdlc3NhJywnZHppYWxhaicpKTtcclxuZmllbGRzLnB1c2gobmV3IERhdGVGaWVsZCgndGVzdGNpb3InLCAnZGF3YWonLCAnJykpO1xyXG5maWVsZHMucHVzaChuZXcgRW1haWxGaWVsZCgnZW1haWwnLCAnbGFiZWxlbWFpbCcsICd3YXJ0b3NjJykpO1xyXG5maWVsZHMucHVzaChuZXcgU2VsZWN0RmllbGQoJ3BvbGVzZWxlY3QnLCAncG9sZXNlbGVjdCcsICdlc3NhJykpO1xyXG5maWVsZHMucHVzaChuZXcgVGV4dEFyZWFGaWVsZCgnbmF6d2F0ZXh0YXJlYScsICdsYWJlbHRleHRhcmVhJywnd2FydG9zYycpKTsqLyIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzL2lmaWVsZCc7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJy4vLi4vZW51bXMvZmllbGQtdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gJy4vRmllbGRMYWJlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hGaWVsZCBleHRlbmRzIEhUTUxFbGVtZW50IGltcGxlbWVudHMgRmllbGQge1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLk5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuTGFiZWwgPSBsYWJlbDtcclxuICAgICAgICB0aGlzLlZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBOYW1lOiBzdHJpbmc7ICAgIFxyXG4gICAgTGFiZWw6IHN0cmluZztcclxuICAgIFR5cGU6IEZpZWxkVHlwZS5DaGVja2JveDtcclxuICAgIFZhbHVlOiBzdHJpbmc7XHJcbiAgICBJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICByZW5kZXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIG5ldyBGaWVsZExhYmVsKGNvbnRhaW5lciwgJ3F1ZXN0aW9uLWxhYmVsJywgdGhpcy5MYWJlbCk7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0aGlzLlR5cGUpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICBlbGVtZW50LnZhbHVlID0gdGhpcy5WYWx1ZTtcclxuICAgICAgICB0aGlzLklucHV0ID0gZWxlbWVudDtcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuc2V0VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRWYWx1ZShldmVudDogRXZlbnQpOiBhbnkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5WYWx1ZSA9IHRoaXMuSW5wdXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzL2lmaWVsZCc7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJy4vLi4vZW51bXMvZmllbGQtdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gJy4vRmllbGRMYWJlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0ZUZpZWxkIGV4dGVuZHMgSFRNTEVsZW1lbnQgaW1wbGVtZW50cyBGaWVsZCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbGFiZWw6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bGwpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5MYWJlbCA9IGxhYmVsO1xyXG4gICAgICAgIHRoaXMuVmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIE5hbWU6IHN0cmluZzsgICAgXHJcbiAgICBMYWJlbDogc3RyaW5nO1xyXG4gICAgVHlwZTogRmllbGRUeXBlLkRhdGU7XHJcbiAgICBWYWx1ZTogc3RyaW5nO1xyXG4gICAgSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBcclxuICAgIHJlbmRlcihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgbmV3IEZpZWxkTGFiZWwoY29udGFpbmVyLCAncXVlc3Rpb24tbGFiZWwnLCB0aGlzLkxhYmVsKTtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsIHRoaXMuVHlwZSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSB0aGlzLlZhbHVlO1xyXG4gICAgICAgIHRoaXMuSW5wdXQgPSBlbGVtZW50O1xyXG5cclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5zZXRWYWx1ZSk7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIHRoaXMuc2V0VmFsdWUpO1xyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY3V0JywgdGhpcy5zZXRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFsdWUoZXZlbnQ6IEV2ZW50KTogYW55IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuVmFsdWUgPSB0aGlzLklucHV0LnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG59IiwiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMvaWZpZWxkJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnLi8uLi9lbnVtcy9maWVsZC10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBGaWVsZExhYmVsIH0gZnJvbSAnLi9GaWVsZExhYmVsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFbWFpbEZpZWxkIGV4dGVuZHMgSFRNTEVsZW1lbnQgaW1wbGVtZW50cyBGaWVsZCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgJycpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5MYWJlbCA9IGxhYmVsO1xyXG4gICAgICAgIHRoaXMuVmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIE5hbWU6IHN0cmluZzsgICAgXHJcbiAgICBMYWJlbDogc3RyaW5nO1xyXG4gICAgVHlwZTogRmllbGRUeXBlLkVtYWlsO1xyXG4gICAgVmFsdWU6IHN0cmluZztcclxuICAgIElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgXHJcbiAgICByZW5kZXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIG5ldyBGaWVsZExhYmVsKGNvbnRhaW5lciwgJ3F1ZXN0aW9uLWxhYmVsJywgdGhpcy5MYWJlbCk7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0aGlzLlR5cGUpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICBlbGVtZW50LnZhbHVlID0gdGhpcy5WYWx1ZTtcclxuICAgICAgICB0aGlzLklucHV0ID0gZWxlbWVudDtcclxuXHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuc2V0VmFsdWUpO1xyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCB0aGlzLnNldFZhbHVlKTtcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2N1dCcsIHRoaXMuc2V0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlKGV2ZW50OiBFdmVudCk6IGFueSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLlZhbHVlID0gdGhpcy5JbnB1dC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxufSIsImV4cG9ydCBjbGFzcyBGaWVsZExhYmVsIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgdGFnU3R5bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTEFCRUxcIik7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSB0YWdTdHlsZTtcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfTtcclxufSBcclxuXHJcbiIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzL2lmaWVsZCc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoZmllbGRzOiBGaWVsZFtdKSB7XHJcbiAgICAgICAgIHRoaXMuZmllbGRzQXJyYXkgPSBmaWVsZHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaWVsZHNBcnJheTogRmllbGRbXTtcclxuXHJcbiAgICByZW5kZXIocG9sZTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBmb3JtRG9jdW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgICAgICB0aGlzLmZpZWxkc0FycmF5LmZvckVhY2goZmllbGQgPT4ge2ZpZWxkLnJlbmRlcihmb3JtRG9jdW1lbnQpfSk7XHJcbiAgICAgICAgcG9sZS5hcHBlbmRDaGlsZChmb3JtRG9jdW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbHVlKHBhcmFtczphbnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZHNBcnJheS5tYXAoZmllbGQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge25hbWU6IGZpZWxkLk5hbWUsIHZhbHVlOiBmaWVsZC5WYWx1ZSB9O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGaWVsZExhYmVsIH0gZnJvbSAnLi9GaWVsZExhYmVsJztcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMvaWZpZWxkJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnLi8uLi9lbnVtcy9maWVsZC10eXBlLmVudW0nO1xyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0RmllbGQgZXh0ZW5kcyBIVE1MRWxlbWVudCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5MYWJlbCA9IGxhYmVsO1xyXG4gICAgICAgIHRoaXMuVmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgTmFtZTogc3RyaW5nOyAgICBcclxuICAgIExhYmVsOiBzdHJpbmc7XHJcbiAgICBUeXBlOiBGaWVsZFR5cGUuVGV4dGJveDtcclxuICAgIFZhbHVlOiBzdHJpbmc7XHJcbiAgICBJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICByZW5kZXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIG5ldyBGaWVsZExhYmVsKGNvbnRhaW5lciwgJ3F1ZXN0aW9uLWxhYmVsJywgdGhpcy5MYWJlbCk7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0aGlzLlR5cGUpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICBlbGVtZW50LnZhbHVlID0gdGhpcy5WYWx1ZTtcclxuICAgICAgICB0aGlzLklucHV0ID0gZWxlbWVudDtcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5zZXRWYWx1ZSk7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIHRoaXMuc2V0VmFsdWUpO1xyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY3V0JywgdGhpcy5zZXRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldFZhbHVlKGV2ZW50OiBFdmVudCk6IGFueSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLlZhbHVlID0gdGhpcy5JbnB1dC52YWx1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzL2lmaWVsZCc7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJy4vLi4vZW51bXMvZmllbGQtdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gJy4vRmllbGRMYWJlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0RmllbGQgZXh0ZW5kcyBIVE1MRWxlbWVudCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLk5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuTGFiZWwgPSBsYWJlbDtcclxuICAgICAgICB0aGlzLlZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIE5hbWU6IHN0cmluZzsgICAgXHJcbiAgICBMYWJlbDogc3RyaW5nO1xyXG4gICAgVHlwZTogRmllbGRUeXBlLlNlbGVjdGJveDtcclxuICAgIFZhbHVlOiBzdHJpbmc7XHJcbiAgICBJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIFxyXG4gICAgcmVuZGVyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBuZXcgRmllbGRMYWJlbChjb250YWluZXIsICdxdWVzdGlvbi1sYWJlbCcsIHRoaXMuTGFiZWwpO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgdGhpcy5UeXBlKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IHRoaXMuVmFsdWU7XHJcbiAgICAgICAgdGhpcy5JbnB1dCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnNldFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZShldmVudDogRXZlbnQpOiBhbnkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5WYWx1ZSA9IHRoaXMuSW5wdXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcy9pZmllbGQnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICcuLy4uL2VudW1zL2ZpZWxkLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tICcuL0ZpZWxkTGFiZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRBcmVhRmllbGQgZXh0ZW5kcyBIVE1MRWxlbWVudCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbGFiZWw6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8ICcnKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLk5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuTGFiZWwgPSBsYWJlbDtcclxuICAgICAgICB0aGlzLlZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBOYW1lOiBzdHJpbmc7ICAgIFxyXG4gICAgTGFiZWw6IHN0cmluZztcclxuICAgIFR5cGU6IEZpZWxkVHlwZS5UZXh0bGFyZ2Vib3g7XHJcbiAgICBWYWx1ZTogc3RyaW5nO1xyXG4gICAgSW5wdXQ6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcblxyXG4gICAgcmVuZGVyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBuZXcgRmllbGRMYWJlbChjb250YWluZXIsICdxdWVzdGlvbi1sYWJlbCcsIHRoaXMuTGFiZWwpO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgdGhpcy5UeXBlKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IHRoaXMuVmFsdWU7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuc2V0VmFsdWUpO1xyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCB0aGlzLnNldFZhbHVlKTtcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2N1dCcsIHRoaXMuc2V0VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRWYWx1ZShldmVudDogRXZlbnQpOiBhbnkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5WYWx1ZSA9IHRoaXMuSW5wdXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iLCJpbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi9jbGFzc2VzL0FwcFwiO1xyXG5jb25zb2xlLmxvZygndGVzdCcpO1xyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcbmNvbnNvbGUubG9nKCdhc2QnKTsiXSwic291cmNlUm9vdCI6IiJ9