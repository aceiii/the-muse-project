
var React = require("react");

var Config = require("../config.js");

var SearchForm = require("./searchform.jsx");

var App = React.createClass({
    render: function () {
        return (
    		<SearchForm url={Config.url} />
    	);
    },
});

module.exports = App;

