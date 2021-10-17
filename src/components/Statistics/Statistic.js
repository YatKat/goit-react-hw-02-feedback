import React from "react";
import PropTypes from "prop-types";

class Statistic extends React.Component {

    static defaultProps = {
        good : 0,
        neutral : 0,
        bad : 0,
        total : 0,
        positiveFeedback : 0
    };

    static propTypes = {
        good : PropTypes.number,
        neutral : PropTypes.number,
        bad : PropTypes.number,
        total : PropTypes.number,
        positiveFeedback : PropTypes.number
            };

    render(){
        return(
        <div>
                <p> Good: {this.props.good} </p>
                <p>Neutral: {this.props.neutral}</p>
                <p>Bad: {this.props.bad}</p>
                <p>Total feedbacks : {this.props.total}</p>
                <p>Positive feedback {this.props.positiveFeedback}%</p>
        </div>
        );
    }
}

export default Statistic;