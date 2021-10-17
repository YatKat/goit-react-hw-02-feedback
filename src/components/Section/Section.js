import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css"

class Section extends React.Component{
     static propTypes = {
         title : PropTypes.string,
         children : PropTypes.node.isRequired
     }

render(){

    return(
        <div className={styles.container}>
            <h2>{this.props.title}</h2>
            {this.props.children}
        </div>
    )
}

}
export default Section;