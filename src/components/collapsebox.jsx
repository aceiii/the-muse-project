
var React = require("react");

var CollapseBox = React.createClass({
    render: function () {

        var collapseId = "collapse-" + this.props.name;
        var collapseTarget = "#" + collapseId;

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <a role="button" data-toggle="collapse" data-target={collapseTarget}>{this.props.title}</a>
                </div>
                <div className="collapse" id={collapseId}>
                    {this.props.children}
                </div>
            </div>
        );
    },
});

module.exports = CollapseBox;
