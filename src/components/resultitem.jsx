
var React = require("react");

var ResultItem = React.createClass({
    render: function () {
        return (
            <div className="list-group-item">
                <h4 className="list-group-item-heading">
                    {this.props.name} @ <small>{this.props.company.name}</small>
                </h4>
            </div>
        );
    },
});

module.exports = ResultItem;
