/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<header>	<ul>		<li class=\"yo-ico\">&#xe613;</li>		<li class=\"yo-ico\">&#xe656;</li>		<li>			<a href=\"\">				<img src=\"//resource.underarmour.cn/images/common/logo@2x.jpg\"/>			</a>		</li>		<li class=\"yo-ico\">&#xe606;</li>		<li class=\"yo-ico\">&#xe600;</li>	</ul></header>"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<div>	<p>asdfasdfasd</p>	<p>asdfasdf</p>	<p>asdfasdfasdffasdfsadsdfas</p></div>"

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	__webpack_require__(8)


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/



	var indexTpl=__webpack_require__(9)
	var headerTpl=__webpack_require__(3)
	var footerTpl=__webpack_require__(4)



	var body=document.body
	body.innerHTML=indexTpl+body.innerHTML
	var header=document.getElementById("header")
	header.innerHTML=headerTpl
	var footer=document.getElementById("footer")
	footer.innerHTML=footerTpl



/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">	<header id=\"header\"></header>	<section>		<div class=\"box1\">			<img src=\"//resource.underarmour.cn/images/common/logo@2x.jpg\" />		</div>	</section>	<footer id=\"footer\"></footer>		</div>"

/***/ })
/******/ ]);