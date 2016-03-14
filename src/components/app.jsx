
var React = require("react");

var Config = require("../config.js");

var SearchForm = require("./searchform.jsx");
var ResultsList = require("./resultslist.jsx");

var App = React.createClass({
    render: function () {
        return (
        	<div>
        		<SearchForm url={Config.url} />
        		<ResultsList />
        	</div>
    	);
    },
});

module.exports = App;

