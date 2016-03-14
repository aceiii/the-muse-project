
var React = require("react");
var $ = require("jquery");

var ResultsList = require("./resultslist.jsx");

var SearchForm = React.createClass({
	getInitialState() {
	    return {
	    	loading: false,
	    	page: 0,
	    	page_count: 0,
     		results: [],
	    };
	},
	render: function () {
		var prevButton, nextButton;

		if (this.state.page_count && this.state.page > 0) {
			prevButton = (
				<button onClick={this._onPrevClick} disabled={this.state.loading}>Prev</button>
			);
		}

		if (this.state.page_count && this.state.page < this.state.page_count-1) {
			nextButton = (
				<button onClick={this._onNextClick} disabled={this.state.loading}>Next</button>
			);
		}

		return (
			<div className="search-form-wrapper">
				<div className="search-form">
					Jobs Search
					<button onClick={this._onClick} disabled={this.state.loading}>Search</button>
				</div>
        		<ResultsList results={this.state.results} />
        		{prevButton}{nextButton}
			</div>
		);
	},
	_onClick: function () {
		this._fetch({
			page: 0,
		});
	},
	_onPrevClick: function () {
		this._fetch({
			page: this.state.page - 1,
		});
	},
	_onNextClick: function () {
		this._fetch({
			page: this.state.page + 1,
		});
	},
	_fetch: function (data) {
		this.setState({ loading: true });

		$.ajax({
			type: "GET",
			url: this.props.url,
			dataType: "json",
			data: {
				page: data.page,
			},
		}).then(function (obj) {
			this.setState({
				page: obj.page,
				page_count: obj.page_count,
				results: obj.results
			});
		}.bind(this), function () {
			// TODO: error
		}.bind(this)).always(function () {
			this.setState({
				loading: false
			});
		}.bind(this));
	},
});

module.exports = SearchForm;
