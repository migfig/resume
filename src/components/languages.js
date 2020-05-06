import React from "react";
import PropTypes from 'prop-types';

const Languages = (props) => {
    const { idioms } = props;

    return (
        <section className="mb-5">
            <h5>Languages</h5>
            <ul>
                {idioms.map((idiom, i) =>
                    <li key={`idiom${i}`}>
                       <strong>{idiom.name}</strong>. <i>{idiom.level}</i> - <i>{idiom.schoolName}</i>, {idiom.location}
                    </li>
                )}
            </ul>
        </section>
    );
}
Languages.propTypes = {
    idioms: PropTypes.array,
}
Languages.defaultProps = {
    idioms: [],
}

export default Languages