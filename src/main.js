
var $ = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");

var App = require("./app.jsx");

$(document).ready(function () {
   ReactDOM.render(React.createElement(App), document.getElementById("app")); 
});

