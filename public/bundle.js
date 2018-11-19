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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var list = document.querySelector('.list');

var Message = function () {
  function Message(text, data, login, image, comments) {
    _classCallCheck(this, Message);

    this.text = text;
    this.data = data;
    this.image = image;
    this.like = 0;
    this.login = login;
    this.comments = comments;
  }

  _createClass(Message, [{
    key: 'createMessage',
    value: function createMessage() {
      var tegLi = document.createElement('li');
      var post = list.appendChild(tegLi);
      post.style.width = '140%';
      post.classList.add('element');

      this.createPost(post);
      if (this.image != '') {
        var tegImg = document.createElement('img');
        var image = post.appendChild(tegImg);
        image.setAttribute('src', this.image);
        image.classList.add('postImg');
      }

      var tegButton = document.createElement('button');
      var counterLike = post.appendChild(tegButton);
      counterLike.classList.add('postCounter');
      counterLike.textContent = this.like;
      counterLike.onclick = this.counter.bind(this);

      var tegButton1 = document.createElement('button');
      var comment = post.appendChild(tegButton1);
      comment.classList.add('comment');
      comment.textContent = 'Коментировать';
      comment.addEventListener('click', this.consoleComment.bind(this, post));

      this.getComments.bind(this, post);
    }
  }, {
    key: 'getComments',
    value: function getComments(post) {
      console.log('comments-2', this.comments);
      this.comments.map(function (element) {
        console.log('start', post);
        element.createComments(post);
      });
    }
  }, {
    key: 'consoleComment',
    value: function consoleComment(post) {
      var _this = this;

      var tegTextarea = document.createElement('textarea');
      tegTextarea.style.widows = '40px';
      tegTextarea.style.display = 'block';
      var commentText = post.appendChild(tegTextarea);
      var tegButton = document.createElement('button');
      var submit = post.appendChild(tegButton);
      submit.textContent = 'отправить';
      submit.classList.add('commentInput');
      submit.onclick = function () {
        post.removeChild(commentText);
        post.removeChild(submit);
        var text = commentText.value;
        if (text != '') {
          console.log('text', text, _this);
          _this.addComments.bind(_this, text, post);
        }
      };
    }
  }, {
    key: 'addComments',
    value: function addComments(text, post) {
      var comment = new Comment(text);
      this.comments.push(comment);
      console.log(comments, text, post);
      this.getComments.bind(this, post);
    }
  }, {
    key: 'counter',
    value: function counter(event) {
      var target = event.target;
      this.like++;
      target.textContent = this.like;
    }
  }, {
    key: 'remove',
    value: function remove(target) {
      target.remove();
    }
  }, {
    key: 'createPost',
    value: function createPost(post) {
      var _this2 = this;

      post.textContent = this.data;

      var avtorLogin = '<h1>' + this.login + '</h1>';
      post.innerHTML += avtorLogin;

      var tegButton2 = document.createElement('button');
      var delet = post.appendChild(tegButton2);
      delet.textContent = 'X';
      var tegH3 = document.createElement('h3');
      var postText = post.appendChild(tegH3);
      postText.textContent = this.text;

      delet.onclick = function (event) {
        var target = event.target;
        var element = target.parentElement;
        _this2.remove(element);
      };
    }
  }]);

  return Message;
}();

var Comment = function (_Message) {
  _inherits(Comment, _Message);

  function Comment() {
    _classCallCheck(this, Comment);

    return _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).apply(this, arguments));
  }

  _createClass(Comment, [{
    key: 'createComments',
    value: function createComments(post) {
      var tegLi = document.createElement('li');
      var notice = post.appendChild(tegLi);
      this.createPost(notice);
    }
  }]);

  return Comment;
}(Message);

exports.default = Message;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Page = __webpack_require__(2);

var _Page2 = _interopRequireDefault(_Page);

var _Message = __webpack_require__(0);

var _Message2 = _interopRequireDefault(_Message);

var _Comment = __webpack_require__(4);

var _Comment2 = _interopRequireDefault(_Comment);

var _Activator = __webpack_require__(5);

var _Activator2 = _interopRequireDefault(_Activator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _Page2.default)();
var list = document.querySelector('.list');
var formGener = document.querySelector('.formGener');
var send = formGener.elements.send;

send.addEventListener('click', _Activator2.default);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestFetch = __webpack_require__(3);

var Page = function Page() {

  var generAvatar = document.querySelector('.avatar');
  var generHeader = document.querySelector('.header');
  var fonConstructor = document.querySelector('.fonConstructor');
  var testImage = document.querySelector('.testImage');
  var avatarLogin = document.querySelector('.avatarLogin');
  var formEditor = document.querySelector('.formEditor');

  fetch('/data/user').then(function (response) {
    return response.json();
  }).then(function (data) {
    avatarLogin.textContent = data.login;
    generAvatar.style.backgroundImage = 'url(' + data.header + ')';
    generHeader.style.backgroundImage = 'url(' + data.avatar + ')';
  });

  generHeader.addEventListener('click', generImage.bind(null, generHeader, 'header'));
  generAvatar.addEventListener('click', generImage.bind(null, generAvatar, 'avatar'));

  formEditor.elements.exit.addEventListener('click', exit);

  function generImage(target, type) {
    fonConstructor.style.display = 'block';
    formEditor.elements.save.onclick = function () {
      target.style.backgroundImage = 'url(' + formEditor.elements.url.value + ')';
      target.style.backgroundSize = formEditor.elements.size.value + 'px';
      exit();
      localStorage.setItem(type, formEditor.elements.url.value);
    };
  }
  function exit() {
    fonConstructor.style.display = 'none';
  }
};

exports.default = Page;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var requestLogin = function requestLogin(value) {
  fetch('/data/userLogin').then(function (response) {
    return response.json();
  }).then(function (data) {
    value = data;
  });
};
var requestAvatar = function requestAvatar() {
  fetch('/data/userAvatar').then(function (response) {
    return response.json();
  });
};
var requestHeader = function requestHeader() {
  fetch('/data/userHeader').then(function (response) {
    return response.json();
  });
};
exports.requestHeader = requestHeader;
exports.requestAvatar = requestAvatar;
exports.requestLogin = requestLogin;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Message2 = __webpack_require__(0);

var _Message3 = _interopRequireDefault(_Message2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = function (_Message) {
  _inherits(Comment, _Message);

  function Comment() {
    _classCallCheck(this, Comment);

    return _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).apply(this, arguments));
  }

  _createClass(Comment, [{
    key: "createComments",
    value: function createComments(post) {
      var tegLi = document.createElement('li');
      var notice = post.appendChild(tegLi);
      this.createPost(notice);
    }
  }]);

  return Comment;
}(_Message3.default);

exports.default = Comment;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Message = __webpack_require__(0);

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Activator = function Activator(e) {
  e.preventDefault();
  var data = new Date();
  var hours = data.getHours();
  var min = data.getMinutes();
  var time = hours + ':' + min;
  var formGener = e.target.parentElement;

  var text = formGener.elements.message.value;
  if (text != '') {
    var imageUrl = formGener.elements.createImg.value;
    fetch('/data/user').then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data.login);
      var post = new _Message2.default(text, time, data.login, imageUrl);
      post.createMessage();
    });
  }
};

exports.default = Activator;

/***/ })
/******/ ]);