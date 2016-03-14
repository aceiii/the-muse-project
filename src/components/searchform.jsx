
var React = require("react");
var $ = require("jquery");

var ResultsList = require("./resultslist.jsx");
var CheckboxList = require("./checkboxlist.jsx");
var CollapseBox = require("./collapsebox.jsx");

var SearchForm = React.createClass({
    getInitialState() {
        return {
            started: false,
            loading: false,
            descending: false,
            flexible: false,
            company: [],
            category: [],
            level: [],
            location: [],
            page: 0,
            page_count: 0,
            results: [],
        };
    },
    render: function () {
        var prevButton, nextButton;

        if (this.state.page_count && this.state.page > 0) {
            prevButton = (
                <li className="previous">
                    <a href="#" onClick={this._onPrevClick}>
                        <span aria-hidden="true">&larr;</span> Prev
                    </a>
                </li>
            );
        }

        if (this.state.page_count && this.state.page < this.state.page_count-1) {
            nextButton = (
                <li className="next">
                    <a href="#" onClick={this._onNextClick}>
                        Next <span aria-hidden="true">&rarr;</span>
                    </a>
                </li>
            );
        }

        var results;
        if (this.state.started) {
            results = (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Results</h3>
                    </div>
                    <div className="panel-body">
                        <ResultsList results={this.state.results} />
                        <ul className="pager">
                            {prevButton}
                            {nextButton}
                        </ul>
                    </div>
                </div>
            );
        } else {
            var text = "Please use the form above to begin.";

            if (this.state.loading) {
                text = "Loading. Please be patient...";
            }

            results = (
                <div className="panel panel-default">
                    <div className="panel-body">
                        <p className="text-center">
                            {text}
                        </p>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <div className="panel panel-default">
                    <form onSubmit={this._onSubmit}>
                        <div className="panel-heading">
                            <h3 className="panel-title">Search Form</h3>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="checkbox">
                                    <label>
                                        <input id="search-field-descending" type="checkbox" onChange={this._onDescendingChange} />
                                        Descending
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="checkbox">
                                    <label>
                                        <input id="search-field-flexible" type="checkbox" onChange={this._onFlexibleChange} />
                                        Flexible
                                    </label>
                                </div>
                            </div>
                            <CollapseBox title="Company" name="company">
                                <CheckboxList id="search-field-company" list={this.props.companies} onChange={this._onCompanyChange} />
                            </CollapseBox>
                            <CollapseBox title="Category" name="category">
                                <CheckboxList id="search-field-category" list={this.props.categories} onChange={this._onCategoryChange} />
                            </CollapseBox>
                            <CollapseBox title="Level" name="level">
                                <CheckboxList id="search-field-level" list={this.props.levels} onChange={this._onLevelChange} />
                            </CollapseBox>
                            <CollapseBox title="Location" name="location">
                                <CheckboxList id="search-field-location" list={this.props.locations} onChange={this._onLocationChange} />
                            </CollapseBox>
                        </div>
                        <div className="panel-footer clearfix">
                            <button className="btn btn-primary pull-right" type="submit" disabled={this.state.loading}>Search</button>
                        </div>
                    </form>
                </div>
                {results}
            </div>
        );
    },
    _onCompanyChange: function (value) {
        this.setState({ company: value });
    },
    _onCategoryChange: function (value) {
        this.setState({ category: value });
    },
    _onLevelChange: function (value) {
        this.setState({ level: value });
    },
    _onLocationChange: function (value) {
        this.setState({ location: value });
    },
    _onSubmit: function (event) {
        this.setState({
            started: false
        });

        this._fetch({
            page: 0,
        });

        event.preventDefault();
        event.stopPropagation();
        return false;
    },
    _onPrevClick: function (event) {
        this._fetch({
            page: this.state.page - 1,
        });

        event.preventDefault();
        event.stopPropagation();
        return false;
    },
    _onNextClick: function (event) {
        this._fetch({
            page: this.state.page + 1,
        });

        event.preventDefault();
        event.stopPropagation();
        return false;
    },
    _fetch: function (data) {
        this.setState({ loading: true });

        $.ajax({
            type: "GET",
            url: this.props.url,
            dataType: "json",
            data: {
                page: data.page,
                descending: this.state.descending,
                flexible: this.state.flexible,
                company: this.state.company,
                category: this.state.category,
                level: this.state.level,
                location: this.state.location,
            },
            traditional: true,
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
                started: true,
                loading: false
            });
        }.bind(this));
    },
});

module.exports = SearchForm;
