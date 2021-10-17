import React from "react";
import PropTypes from "prop-types";
import styles from "./Notification.module.css"

class Notification extends React.Component{
    static propTypes = {
        message : PropTypes.string
    }

    render(){
        return(
            <>
            <h3 className={styles.container}>{this.props.message}</h3>
            </>
        );
    }
}
export default Notification;