
var React = require("react");

var ResultItem = React.createClass({
	render: function () {
		return (
			<li>{this.props.name} @ {this.props.company.name}</li>
		);
	},
});

module.exports = ResultItem;
