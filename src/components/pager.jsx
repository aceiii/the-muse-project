
var React = require("react");

var Pager = React.createClass({
	render: function () {
        var prevButton, nextButton, pageNumber;

        if (this.props.page_count && this.props.page > 0) {
        	var prevClassName = "previous";
        	if (this.props.loading) {
        		prevClassName += " disabled";
        	}
            prevButton = (
                <li className={prevClassName}>
                    <a href="#" onClick={this._onPrevClick}>
                        <span aria-hidden="true">&larr;</span> Prev
                    </a>
                </li>
            );
        }

        if (this.props.page_count && this.props.page < this.props.page_count-1) {
        	var nextClassName = "next";
        	if (this.props.loading) {
        		nextClassName += " disabled";
        	}
            nextButton = (
                <li className={nextClassName}>
                    <a href="#" onClick={this._onNextClick}>
                        Next <span aria-hidden="true">&rarr;</span>
                    </a>
                </li>
            );
        }

        if (this.props.loading) {
            pageNumber = (
                <li><span>Loading...</span></li>
            );      
        } else {
            var pageText = (this.props.page+1) + " of " + this.props.page_count;
            pageNumber = (
                <li><span>{pageText}</span></li>
            );
        }

        return (
        	<nav>
	            <ul className="pager">
	                {prevButton}
	                {pageNumber}
	                {nextButton}
	            </ul>
            </nav>
        );
	},
	_onPrevClick: function (event) {
		this.props.onPrev && this.props.onPrev();

        event.preventDefault();
        event.stopPropagation();
        return false;
	},
	_onNextClick: function (event) {
		this.props.onNext && this.props.onNext();

        event.preventDefault();
        event.stopPropagation();
        return false;
	},
});

module.exports = Pager;
