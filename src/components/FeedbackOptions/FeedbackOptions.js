import React from "react";
import PropTypes from "prop-types";
import styles from "components/FeedbackOptions/FeedbackOptions.module.css"

class FeedbackOptions extends React.Component{

    static propTypes = {
        options : PropTypes.array,
        onLeaveFeedback : PropTypes.func
            };

    render(){
        const options = this.props.options;

        return(
            <div>
                {Object.keys(options).map(option => (
                <button className={option === 'good' ? styles.good : option === 'neutral' ? styles.neutral : styles.bad} 
                type="button"
                key={option} 
                onClick={this.props.onLeaveFeedback}
                value={option}
                data-option={option}
                >{option}</button>))}
            </div>
        );
    }
}

export default FeedbackOptions;
