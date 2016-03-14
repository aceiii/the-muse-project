
var React = require("react");

var ResultItem = React.createClass({
    render: function () {
        return (
            <div className="list-group-item">
                {this.props.name} @ {this.props.company.name}
            </div>
        );
    },
});

module.exports = ResultItem;
