
var React = require("react");

var CheckboxList = React.createClass({
    render: function () {
        var list = [];
        this.props.list.forEach(function (item, i) {
            list.push(
                <div key={i} className="form-group col-xs-3">
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"
                                value={item}
                                onChange={this._onChange} />
                            {item}
                        </label>
                    </div>
                </div>
            );
        }.bind(this));

        return (
            <div className="checkbox-list">
                <h4>{this.props.title}</h4>
                {list}
            </div>
        );
    },
    _onChange: function (event) {
        var value = event.target.value;
        var checked = event.target.checked;
        var list = this._list || [];
        var idx = list.indexOf(value);

        if (checked && idx < 0) {
            list.push(value);
        } else if (!checked && idx >= 0) {
            list.splice(idx, 1);
        }

        this._list = list;
        this.props.onChange && this.props.onChange(list);
    },
});

module.exports = CheckboxList;
