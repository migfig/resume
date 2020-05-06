import React from "react";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";

const Arrow = (props) => {
    const { isExpanded, size, className, color } = props;

    return (
        <FontAwesomeIcon
            icon={isExpanded ? faArrowAltCircleUp : faArrowAltCircleDown} 
            size={size} 
            className={className}
            color={color} />
    );
}
Arrow.propTypes = {
    isExpanded: PropTypes.bool.isRequired,
    size: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
}
Arrow.defaultProps = {
    isExpanded: false,
    size: "lg",
    className: "mr-2",
    color: "#666",
}

export default Arrow;
