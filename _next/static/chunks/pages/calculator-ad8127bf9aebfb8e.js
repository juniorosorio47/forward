(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[481],{4144:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_runner_work_forward_forward_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6687),next_head__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9008),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7294),react_icons_fi__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6893),_styles_calculator_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6301),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5893),Calculator=function Calculator(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),calc=_useState[0],setCalc=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),result=_useState2[0],setResult=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([""]),history=_useState3[0],setHistory=_useState3[1],operators=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return["+","-","*","/","."]}),[]),digits=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){var _=Array.from(Array(10).keys());return _.push("."),_.push(Number(_.shift())),_.push("="),_}),[]),calculate=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){if(""!==calc&&!operators.includes(calc.slice(-1))){setResult(eval(calc).toString()),console.log(history);var newHistoryItem="".concat(calc," = ").concat(result),historyCopy=history;historyCopy.push(newHistoryItem),setHistory((0,_home_runner_work_forward_forward_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__.Z)(historyCopy)),setCalc(result)}}),[calc,history]),deleteLast=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){setCalc(calc.slice(0,-1)),""!==calc||setResult("")}),[calc,result]),clearAll=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){""!==calc&&(setResult(""),setCalc(""))}),[calc,result]),clearHistory=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){setHistory([])}),[history]),updateCalc=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(value){operators.includes(value)&&""===calc||operators.includes(value)&&operators.includes(calc.slice(-1))||(setCalc(calc+value),operators.includes(value)||setResult(eval(calc+value).toString()))}),[calc,result]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_styles_calculator_styles__WEBPACK_IMPORTED_MODULE_2__.W2,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(next_head__WEBPACK_IMPORTED_MODULE_0__.default,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("title",{children:"Calculator"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1",{children:"Forward Online Calculator"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"Click at the numbers and operators to use the calculator!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_styles_calculator_styles__WEBPACK_IMPORTED_MODULE_2__.bN,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_styles_calculator_styles__WEBPACK_IMPORTED_MODULE_2__.aL,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{onChange:function(_){updateCalc(_.target.value)},type:"text",readOnly:!0,value:calc||"0",onKeyPress:function(_){/^(\+|-|\*|\/|=|%|[0-9])$/.test(_.key)||_.preventDefault()}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{children:["= ",result||"0"]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_styles_calculator_styles__WEBPACK_IMPORTED_MODULE_2__.SX,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("+")},children:" + "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("-")},children:" - "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("*")},children:" x "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("/")},children:" / "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return clearAll()},children:"C"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{id:"delete",onClick:function(){return deleteLast()},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.hT1,{})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_styles_calculator_styles__WEBPACK_IMPORTED_MODULE_2__.Hx,{children:digits.map((function(_){return"="===_?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button",{onClick:function(){return calculate()},children:[" ",_," "]},_):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button",{onClick:function(){return updateCalc(_.toString())},children:[" ",_," "]},_)}))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_styles_calculator_styles__WEBPACK_IMPORTED_MODULE_2__.Ay,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("header",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h3",{children:["History ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:'(Press "=" to save at history)'})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button",{onClick:clearHistory,children:[" ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.Ybf,{})," "]},"clear")]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:history.length>0?history.map((function(_){return""===_?void 0:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:_})})):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"Empty history"})})]})]})]})};__webpack_exports__.default=Calculator},6301:function(_,t,e){"use strict";e.d(t,{W2:function(){return a},bN:function(){return i},aL:function(){return o},Hx:function(){return s},SX:function(){return c},Ay:function(){return l}});var r=e(6637),n=e(7379),a=n.ZP.div.withConfig({displayName:"styles__Container",componentId:"sc-19zc7d8-0"})(["position:absolute;padding-top:20px;top:0;left:0;height:100%;width:100%;background:#01325F;display:flex;flex-direction:column;justify-content:center;align-items:center;@media only screen and (max-width:768px){height:auto;>h1{font-size:24px;}}#delete{color:",";}>h1{margin-top:10px;margin-bottom:10px;}>span{margin-bottom:15px;font-size:12px;font-weight:medium;margin-bottom:20px;}>div{padding:20px;display:grid;grid-template-columns:1fr 1fr;align-items:flex-start;justify-content:center;grid-gap:20px;@media only screen and (max-width:768px){grid-template-columns:1fr;place-items:center;}}"],(0,r.$n)(.1,"red")),i=n.ZP.div.withConfig({displayName:"styles__CalculatorBody",componentId:"sc-19zc7d8-1"})(["width:320px;height:auto;max-height:480px;display:grid;grid-gap:2px;background:radial-gradient(circle,"," 0%,#1076C5 93%,#1076C5 100%);padding:15px;border-radius:10px;box-shadow:0px 0px 10px ",";justify-content:stretch;align-items:center;grid-template-rows:100px 60px 290px;"],(0,r.$n)(.2,"#1076C5"),(0,r.$n)(.3,"#000")),o=n.ZP.div.withConfig({displayName:"styles__CalculatorInput",componentId:"sc-19zc7d8-2"})(["text-align:right;height:auto;max-height:100px;display:flex;flex-direction:column;background-color:",";color:#fff;padding:10px;border-radius:8px;max-width:100%;overflow:auto;>span{font-size:20px;}>input{overflow:auto;background-color:transparent;color:",";width:100%;max-width:100%;height:50px;border:none;border-bottom:1px solid #fff;margin-bottom:5px;padding:0;text-align:right;padding:5px;font-size:18px;&:focus{outline:none;}}"],(0,r.$n)(.1,"#121212"),(0,r.wj)(.1,"#fff")),s=n.ZP.div.withConfig({displayName:"styles__CalculatorNumbers",componentId:"sc-19zc7d8-3"})(["margin-top:5px;display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:5px;justify-content:center;align-items:center;width:100%;height:auto;>button{display:flex;justify-content:center;align-items:center;border-radius:5px;height:70px;font-size:24px;font-weight:500;background:",";border:none;color:#fff;&:hover{background:",";transition:background 0.3s;box-shadow:1px 1px 2px ",";}}"],(0,r.$n)(.09,"#121212"),(0,r.wj)(.8,"#121212"),(0,r.wj)(.3,"#1076C5")),c=n.ZP.div.withConfig({displayName:"styles__CalculatorOperators",componentId:"sc-19zc7d8-4"})(["margin-bottom:5px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;justify-content:space-between;align-items:center;grid-gap:5px;>button{display:flex;justify-content:center;align-items:center;border-radius:5px;color:#fff;height:45px;background:#123F81;border:none;width:100%;font-size:24px;font-weight:400;padding:0;&:hover{background:",";transition:background 0.3s;}&+button{border-left:1px solid #000;}}"],(0,r.wj)(.5,"#123F81")),l=n.ZP.div.withConfig({displayName:"styles__History",componentId:"sc-19zc7d8-5"})(["background:radial-gradient(circle,"," 0%,#1076C5 93%,#1076C5 100%);border-radius:10px;max-width:400px;width:300px;height:auto;max-height:400px;padding:10px;box-shadow:0px 0px 10px ",";text-align:center;display:grid;grid-template-columns:1fr;grid-template-rows:1fr 5fr;max-height:460px;span{font-size:12px;font-weight:300;color:",";}>div{overflow:auto;padding-right:10px;top:0;left:0;width:100%;height:100%;max-width:300px;}>div>p{text-align:left;font-size:18px;background:#2C2C2C;border-radius:5px;padding:10px;overflow:auto;width:100%;&+p{margin-top:8px;}}>header{border-bottom:2px solid rgba(255,255,255,0.1);margin-bottom:10px;display:flex;justify-content:flex-start;align-items:center;grid-gap:10px;padding:5px;>button{display:flex;justify-content:center;align-items:center;border-radius:5px;background:transparent;border:none;font-size:18px;font-weight:200;padding:5px;color:red;&:hover{color:",";}}>h3{font-size:18px;text-align:center;padding-bottom:5px;}}"],(0,r.wj)(.2,"#1076C5"),(0,r.$n)(.3,"#000"),(0,r.wj)(.1,"#fff"),(0,r.wj)(.2,"red"))},1162:function(_,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calculator",function(){return e(4144)}])},6687:function(_,t,e){"use strict";function r(_,t){(null==t||t>_.length)&&(t=_.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=_[e];return r}function n(_){return function(_){if(Array.isArray(_))return r(_)}(_)||function(_){if("undefined"!==typeof Symbol&&null!=_[Symbol.iterator]||null!=_["@@iterator"])return Array.from(_)}(_)||function(_,t){if(_){if("string"===typeof _)return r(_,t);var e=Object.prototype.toString.call(_).slice(8,-1);return"Object"===e&&_.constructor&&(e=_.constructor.name),"Map"===e||"Set"===e?Array.from(_):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(_,t):void 0}}(_)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(t,{Z:function(){return n}})}},function(_){_.O(0,[823,712,774,888,179],(function(){return t=1162,_(_.s=t);var t}));var t=_.O();_N_E=t}]);