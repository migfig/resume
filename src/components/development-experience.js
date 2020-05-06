import React from "react";
import PropTypes from 'prop-types';

import UrlReplacer from './url-replacer';

const DevelopmentExperience = (props) => {
    const { developmentExperience } = props;

    return (
        <section className="mb-5">
            <h5>Development Experience</h5>
            <ul>
                {developmentExperience.map((devExp, i) =>
                    <li key={`devExp${i}`}>
                       <UrlReplacer experience={devExp} />
                    </li>
                )}
            </ul>
        </section>
    );
}
DevelopmentExperience.propTypes = {
    developmentExperience: PropTypes.array,
}

export default DevelopmentExperience