
var React = require("react");

var Config = require("../config.js");

var SearchForm = require("./searchform.jsx");

var App = React.createClass({
    render: function () {
        return (
        	<div className="container">
		  		<h1>The Muse Project</h1>
	            <SearchForm url={Config.url}
	            	companies={Config.search.companies}
	            	categories={Config.search.categories}
	            	levels={Config.search.levels}
	            	locations={Config.search.locations} />
        	</div>
        );
    },
});

module.exports = App;

