
var React = require("react");
var $ = require("jquery");

var ResultItem = React.createClass({
    render: function () {

        var levels = [];
        this.props.levels.forEach(function (item, i) {
            levels.push(
                <span key={i} className="label label-primary">{item.name}</span>
            );
            levels.push(<span key={"_"+i}> </span>)
        });

        var categories = [];
        this.props.categories.forEach(function (item, i) {
            categories.push(
                <span key={i} className="label label-success">{item.name}</span>
            );
            categories.push(<span key={"_"+i}> </span>)
        });

        var locations = [];
        this.props.locations.forEach(function (item, i) {
            locations.push(
                <span key={i} className="label label-info">{item.name}</span>
            );
            locations.push(<span key={"_"+i}> </span>)
        });

        return (
            <div className="list-group-item">
                <h4 className="list-group-item-heading">
                    {this.props.name} <small>@ {this.props.company.name}</small>
                    <button type="button" className="btn btn-default btn-sm pull-right" onClick={this._onClick}>
                        View
                    </button>
                </h4>
                <div>
                    {levels}
                    {categories}
                    {locations}
                </div>
                <div ref={this._modalRef} className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">
                                    {this.props.name} <small>@ {this.props.company.name}</small>
                                </h4>
                            </div>
                            <div className="modal-body">
                                <div dangerouslySetInnerHTML={this._contents()}></div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    _modalRef: function (el) {
        this._modal = el;
    },
    _onClick: function () {
        $(this._modal).modal();
    },
    _contents: function () {
        return {
            __html: this.props.contents,
        };
    },
});

module.exports = ResultItem;
