webpackJsonp([0],{239:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return{todo:p.default.todo}}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(4),c=o(i),d=n(117),p=o(d),s=n(116),y=o(s),b=n(69),h=(n(39),n(115)),g=o(h),m=function(e){function t(e){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),f(t,[{key:"toggleTodo",value:function(e){e.get("done")?y.default.undoTodo(e):y.default.doTodo(e)}},{key:"deleteTodo",value:function(e){y.default.deleteTodo(e)}},{key:"render",value:function(){var e=this,t=this.props.todo;return c.default.createElement("section",null,c.default.createElement("h2",null,"Todo"),c.default.createElement(g.default,null),c.default.createElement("ul",null,t.map(function(t,n){return c.default.createElement("li",{key:n,onClick:function(){return e.toggleTodo(t)}},t.get("done")?c.default.createElement("strike",null,t.get("title")):t.get("title")," | ",c.default.createElement("a",{href:"#",onClick:function(n){n.stopPropagation(),e.deleteTodo(t)}},"del"))}).toList()))}}]),t}(c.default.Component),_=(0,b.connect)(a)(m);t.default=_}});