/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles.scss?");

/***/ }),

/***/ "../node_modules/pug-runtime/index.js":
/*!********************************************!*\
  !*** ../node_modules/pug-runtime/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n}\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '',\n    className,\n    padding = '',\n    escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '',\n    padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n}\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (\n    val === false ||\n    val == null ||\n    (!val && (key === 'class' || key === 'style'))\n  ) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  var type = typeof val;\n  if (\n    (type === 'object' || type === 'function') &&\n    typeof val.toJSON === 'function'\n  ) {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + \"='\" + val.replace(/'/g, '&#39;') + \"'\";\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n}\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse) {\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n}\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html) {\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34:\n        escape = '&quot;';\n        break;\n      case 38:\n        escape = '&amp;';\n        break;\n      case 60:\n        escape = '&lt;';\n        break;\n      case 62:\n        escape = '&gt;';\n        break;\n      default:\n        continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n}\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str) {\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  var context, lines, start, end;\n  try {\n    str = str || (__webpack_require__(/*! fs */ \"?16ca\").readFileSync)(filename, {encoding: 'utf8'});\n    context = 3;\n    lines = str.split('\\n');\n    start = Math.max(lineno - context, 0);\n    end = Math.min(lines.length, lineno + context);\n  } catch (ex) {\n    err.message +=\n      ' - could not read from ' + filename + ' (' + ex.message + ')';\n    pug_rethrow(err, null, lineno);\n    return;\n  }\n\n  // Error context\n  context = lines\n    .slice(start, end)\n    .map(function(line, i) {\n      var curr = i + start + 1;\n      return (curr == lineno ? '  > ' : '    ') + curr + '| ' + line;\n    })\n    .join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  try {\n    err.message =\n      (filename || 'Pug') +\n      ':' +\n      lineno +\n      '\\n' +\n      context +\n      '\\n\\n' +\n      err.message;\n  } catch (e) {}\n  throw err;\n}\n\n\n//# sourceURL=webpack:///../node_modules/pug-runtime/index.js?");

/***/ }),

/***/ "./index.pug":
/*!*******************!*\
  !*** ./index.pug ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;var pug_indent = [];\npug_html = pug_html + \"\\u003C!DOCTYPE html\\u003E\\n\\u003Chtml lang=\\\"ru\\\"\\u003E\\n  \\u003Chead\\u003E\\n    \\u003Cmeta charset=\\\"utf-8\\\"\\u003E\\n    \\u003Cmeta name=\\\"viewport\\\" content=\\\"initial-scale=1.0, width=device-width\\\"\\u003E\\n    \\u003Ctitle\\u003EБанкомат Юла\\u003C\\u002Ftitle\\u003E\\n  \\u003C\\u002Fhead\\u003E\\n  \\u003Cbody\\u003E\\n    \\u003Cdiv class=\\\"atm\\\"\\u003E\\n      \\u003Cdiv class=\\\"atm__welcome\\\"\\u003E\\n        \\u003Cbutton class=\\\"start-button\\\" type=\\\"button\\\"\\u003EНажните на экран, чтобы начать работу\\u003C\\u002Fbutton\\u003E\\n      \\u003C\\u002Fdiv\\u003E\\n      \\u003Cdiv class=\\\"atm__menu menu\\\"\\u003E\\n        \\u003Cmarquee class=\\\"menu__info\\\"\\u003E \\u003Cspan\\u003EКурс валют к рублю - ЦБ РФ: \\u003C\\u002Fspan\\u003E\\u003Cspan\\u003EUSD - 104,68\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003EEUR - 115,60\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003EGBP - 138,00\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003ECNY - 16,47\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003EKRW - 86,06\\u003C\\u002Fspan\\u003E\\u003Cspan\\u003EJPY - 87,82\\u003C\\u002Fspan\\u003E\\u003C\\u002Fmarquee\\u003E\\n        \\u003Cdiv class=\\\"menu__top\\\"\\u003EЮ деньги\\u003C\\u002Fdiv\\u003E\\n        \\u003Cdiv class=\\\"menu__middle\\\"\\u003E\\u003Cspan class=\\\"menu__balance\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"menu__card\\\"\\u003E\\u003C\\u002Fspan\\u003E\\n          \\u003Cbutton class=\\\"menu__button\\\"\\u003EСнять наличные\\u003C\\u002Fbutton\\u003E\\n        \\u003C\\u002Fdiv\\u003E\\n        \\u003Cdiv class=\\\"menu__bottom\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\n        \\u003Cdiv class=\\\"cash\\\"\\u003E\\n          \\u003Cdiv class=\\\"cash__zone\\\"\\u003E\\n            \\u003Cinput class=\\\"cash__input\\\" type=\\\"text\\\" placeholder=\\\"Введите сумму\\\" maxlength=\\\"10\\\"\\u003E\\n          \\u003C\\u002Fdiv\\u003E\\n          \\u003Cdiv class=\\\"available-nominal\\\"\\u003EДоступный номинал\\u003C\\u002Fdiv\\u003E\\n          \\u003Cdiv class=\\\"cash__nominals\\\"\\u003E\\n            \\u003Cdiv class=\\\"cash__100 cash__banknote\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\n            \\u003Cdiv class=\\\"cash__200 cash__banknote\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\n            \\u003Cdiv class=\\\"cash__500 cash__banknote\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\n            \\u003Cdiv class=\\\"cash__1000 cash__banknote\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\n            \\u003Cdiv class=\\\"cash__2000 cash__banknote\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\n            \\u003Cdiv class=\\\"cash__5000 cash__banknote\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\n          \\u003C\\u002Fdiv\\u003E\\n          \\u003Cdiv class=\\\"output\\\"\\u003E \\n            \\u003Cp class=\\\"output__100\\\"\\u003E\\u003C\\u002Fp\\u003E\\n            \\u003Cp class=\\\"output__200\\\"\\u003E\\u003C\\u002Fp\\u003E\\n            \\u003Cp class=\\\"output__500\\\"\\u003E\\u003C\\u002Fp\\u003E\\n            \\u003Cp class=\\\"output__1000\\\"\\u003E \\u003C\\u002Fp\\u003E\\n            \\u003Cp class=\\\"output__2000\\\"\\u003E\\u003C\\u002Fp\\u003E\\n            \\u003Cp class=\\\"output__5000\\\"\\u003E\\u003C\\u002Fp\\u003E\\n          \\u003C\\u002Fdiv\\u003E\\n          \\u003Cdiv class=\\\"cash__buttons\\\"\\u003E\\n            \\u003Cbutton class=\\\"buttons__clear cash__button\\\"\\u003EИзменить сумму\\u003C\\u002Fbutton\\u003E\\n            \\u003Cbutton class=\\\"buttons__confirmation cash__button\\\"\\u003EПодтвердить\\u003C\\u002Fbutton\\u003E\\n          \\u003C\\u002Fdiv\\u003E\\n        \\u003C\\u002Fdiv\\u003E\\n      \\u003C\\u002Fdiv\\u003E\\n    \\u003C\\u002Fdiv\\u003E\\n  \\u003C\\u002Fbody\\u003E\\n\\u003C\\u002Fhtml\\u003E\";;return pug_html;}\n\nmodule.exports = template\n\n//# sourceURL=webpack:///./index.pug?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./styles.scss\");\n/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.pug */ \"./index.pug\");\n/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_pug__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n// Я не знал, как именно сделать запрос с сервера, его у меня нет. Пришлось обыграть это через console.log, надеюсь это подойдёт C:\r\n\r\n// Преключение экрана ожидания на меню\r\nconst startButton = document.querySelector(\".start-button\");\r\nconst startWindow = document.querySelector('.atm__welcome');\r\nconst menuWindow = document.querySelector('.atm__menu');\r\nconst balance = document.querySelector('.menu__balance');\r\nlet balanceCount = 100000;\r\n\r\nstartButton.addEventListener(\"click\", function () {\r\n  startWindow.style.opacity = \"0\";\r\n  startWindow.style.transition = \"2s\";\r\n\r\n  setTimeout(function () {\r\n    menuWindow.style.opacity = \"1\";\r\n    menuWindow.style.transition = \"2s\";\r\n    startWindow.style.display = \"none\";\r\n    balance.innerHTML = `Ваш баланс: ${balanceCount} ₽`\r\n  }, 1500);\r\n});\r\n\r\n// Переключение на экран снятия наличных\r\nconst menuButton = document.querySelector('.menu__button');\r\nconst menuBottom = document.querySelector('.menu__bottom');\r\nconst cashSection = document.querySelector('.cash');\r\n\r\nmenuButton.addEventListener(\"click\", function () {\r\n  menuBottom.style.opacity = \"0\";\r\n  menuBottom.style.transition = \"2s\";\r\n  menuButton.style.opacity = \"0\";\r\n  menuButton.style.transition = \"2s\";\r\n\r\n  setTimeout(function () {\r\n    cashSection.style.opacity = \"1\";\r\n    cashSection.style.transition = \"2s\";\r\n    menuBottom.style.display = \"none\";\r\n    menuButton.style.display = \"none\";\r\n\r\n    output100.innerHTML = `x${banknotes[`${100}`]}`;\r\n    output200.innerHTML = `x${banknotes[`${200}`]}`;\r\n    output500.innerHTML = `x${banknotes[`${500}`]}`;\r\n    output1000.innerHTML = `x${banknotes[`${1000}`]}`;\r\n    output2000.innerHTML = `x${banknotes[`${2000}`]}`;\r\n    output5000.innerHTML = `x${banknotes[`${5000}`]}`;\r\n  }, 1500);\r\n});\r\n\r\n//Кнопки экрана снятия наличных\r\nconst cashClearButton = document.querySelector('.buttons__clear');\r\nconst cashConfirmButton = document.querySelector('.buttons__confirmation');\r\nconst cashInput = document.querySelector('.cash__input');\r\n\r\nconst output100 = document.querySelector('.output__100');\r\nconst output200 = document.querySelector('.output__200');\r\nconst output500 = document.querySelector('.output__500');\r\nconst output1000 = document.querySelector('.output__1000');\r\nconst output2000 = document.querySelector('.output__2000');\r\nconst output5000 = document.querySelector('.output__5000');\r\nconst cashText = document.querySelector('.available-nominal')\r\n\r\ncashClearButton.addEventListener(\"click\", function () {\r\n  cashInput.value = '';\r\n  cashText.style.color = 'black';\r\n});\r\n\r\n// Снятие наличных\r\ncashConfirmButton.addEventListener(\"click\", function () {\r\n  cashText.innerHTML = 'Запрашиваю данные с сервера...';\r\n  cashText.style.color = 'black';\r\n\r\n  output100.innerHTML = `0`;\r\n  output200.innerHTML = `0`;\r\n  output500.innerHTML = `0`;\r\n  output1000.innerHTML = `0`;\r\n  output2000.innerHTML = `0`;\r\n  output5000.innerHTML = `0`;\r\n\r\n  // setTimeout(function () {\r\n    personWantGet(parseInt(cashInput.value), banknotes);\r\n  // }, 3000);\r\n});\r\n\r\nlet banknotes = {\r\n  5000: 10,\r\n  2000: 10,\r\n  1000: 10,\r\n  500: 10,\r\n  200: 10,\r\n  100: 10\r\n};\r\n\r\nlet personWantGet = (ammountNeeded, banknotes) => {\r\n  let nominals = Object.keys(banknotes).map(Number).sort((a, b) => b - a);\r\n  let sumOfBanknotes = () => {\r\n    let sum = 0;\r\n    for (let i = 0; i < nominals.length; i++) { \r\n      sum += nominals[i] * banknotes[`${nominals[i]}`];\r\n      }\r\n    return sum;\r\n  }\r\n\r\n  // console.log(`нужная сумма - ${ammountNeeded}`)\r\n  // console.log(`сумма банкнот - ${sumOfBanknotes()}`)\r\n  // console.log(`баланс - ${balanceCount}`)\r\n\r\n  // Проверка возможности операции\r\n  if (ammountNeeded < 99 || ammountNeeded % 100 !== 0 || typeof ammountNeeded !== 'number') {\r\n    cashText.innerHTML = 'Введена неправильная сумма';\r\n    cashText.style.color = 'red';\r\n  } else if (ammountNeeded > balanceCount) {\r\n    cashText.innerHTML = 'Недостаточно денег на счету';\r\n    cashText.style.color = 'red';\r\n  } else if (ammountNeeded > sumOfBanknotes()) {\r\n    cashText.innerHTML = 'Недостаточно наличных для выдачи денег';\r\n    cashText.style.color = 'red';\r\n  } else {\r\n    let operation = collectedSum(ammountNeeded, nominals);\r\n    console.log(operation[100] === undefined)\r\n\r\n    balance.innerHTML = `ВАШ БАЛАНС: ${balanceCount} ₽`;\r\n    cashText.innerHTML = 'Выданные наличные';\r\n    cashText.style.color = 'black';\r\n    output100.innerHTML = `x${operation[100] === undefined ? 0 : operation[100]}`;\r\n    output200.innerHTML = `x${operation[200] === undefined ? 0 : operation[200]}`;\r\n    output500.innerHTML = `x${operation[500] === undefined ? 0 : operation[500]}`;\r\n    output1000.innerHTML = `x${operation[1000] === undefined ? 0 : operation[1000]}`;\r\n    output2000.innerHTML = `x${operation[2000] === undefined ? 0 : operation[2000]}`;\r\n    output5000.innerHTML = `x${operation[5000] === undefined ? 0 : operation[5000]}`;\r\n\r\n    // ПУНКТ 1 ЗАДАНИЕ 1 - ЗАПРОС С СЕРВЕРА\r\n    console.log({ 'amount': ammountNeeded, 'banknotes': banknotes });\r\n  }\r\n\r\n  function collectedSum(amount, nominals) {\r\n    if (amount === 0) return {}; // успеш - банкнот достаточно\r\n    if (!nominals.length) {// ошибка - банкнот недостаточно\r\n      cashText.innerHTML = 'Недостаточно наличных для выдачи денег';\r\n      cashText.style.color = 'red';\r\n      return {}\r\n    };\r\n\r\n    let currentNominal = nominals[0]; // Номинал в текущем проходе рекурсии\r\n    let availableNotes = banknotes[currentNominal]; // Кол-во банкнот текущего номинала\r\n    let notesNeeded = Math.floor(amount / currentNominal); // Сколько необходимо текущих банкнот\r\n    let notesOutput = Math.min(availableNotes, notesNeeded); // Сколько банкнот выдано\r\n\r\n    banknotes[currentNominal] -= notesOutput;\r\n    balanceCount -= currentNominal * notesOutput;\r\n\r\n    let result = collectedSum(amount - currentNominal * notesOutput, nominals.slice(1)); // Рекурсия по номиналам\r\n\r\n    if (result) {\r\n      return notesOutput ? { [currentNominal]: notesOutput, ...result } : result;\r\n    }  \r\n  };\r\n};\r\n\r\n\r\n// personWantGet(2, banknotes); // Введена неправильная сумма\r\n// personWantGet(-2, banknotes); // Введена неправильная сумма\r\n// personWantGet(102, banknotes); // Введена неправильная сумма\r\n// personWantGet(-102, banknotes); // Введена неправильная сумма\r\n// personWantGet(`999999999`, banknotes); // Введена неправильная сумма\r\n// personWantGet(`-`, banknotes); // Введена неправильная сумма\r\n\r\n// personWantGet(200000, banknotes); // Недостаточно денег на счету\r\n// personWantGet(99999900, banknotes); // Недостаточно денег на счету\r\n// personWantGet(100000, banknotes); // Недостаточно наличных для выдачи денег\r\n// personWantGet(90000, banknotes); // Недостаточно наличных для выдачи денег\r\n\r\n// personWantGet(100, banknotes); // успех\r\n// personWantGet(1000, banknotes); // успех\r\n// personWantGet(5000, banknotes);  // успех\r\n// personWantGet(13000, banknotes);  // успех\r\n// personWantGet(88000, banknotes);  // успех\r\n// console.log(banknotes)\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "?16ca":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;