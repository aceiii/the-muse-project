
var React = require("react");
var $ = require("jquery");

var ResultsList = require("./resultslist.jsx");

var SearchForm = React.createClass({
	getInitialState() {
	    return {
	    	page: 0,
	    	page_count: 0,
     		results: [],
	    };
	},
	render: function () {
		return (
			<div className="search-form-wrapper">
				<div className="search-form">
					Jobs Search
					<button onClick={this._onClick}>Search</button>
				</div>
        		<ResultsList results={this.state.results} />
			</div>
		);
	},
	_onClick: function () {
		$.ajax({
			type: "GET",
			url: this.props.url,
			dataType: "json",
			data: {
				page: 0,
			},
		}).then(function (obj) {
			this.setState({
				page: obj.page,
				page_count: obj.page_count,
				results: obj.results
			});
		}.bind(this), function () {
			// TODO: error
		});
	},
});

module.exports = SearchForm;
