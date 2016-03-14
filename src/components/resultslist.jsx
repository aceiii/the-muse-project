
var React = require("React");

var ResultItem = require("./resultitem.jsx");

var ResultsList = React.createClass({
    render: function () {

        var list = [];

        this.props.results.forEach(function (res) {
            list.push(
                <ResultItem key={res.id} {...res} />
            );
        });

        return (
            <div className="list-group">
                {list}
            </div>
        );
    },
});

module.exports = ResultsList;
