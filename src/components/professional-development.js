import React from "react";
import PropTypes from 'prop-types';

const ProfessionalDevelopment = (props) => {
    const { certifications } = props;

    return (
        <section className="mb-5">
            <h5>Professional Development</h5>
            <ul>
                {certifications.map((cert, i) =>
                    <li key={`cert${i}`}>
                       <strong>{cert.title}</strong> - <i>{cert.schoolName}</i>, {cert.endDate}
                    </li>
                )}
            </ul>
        </section>
    );
}
ProfessionalDevelopment.propTypes = {
    certifications: PropTypes.array,
}

export default ProfessionalDevelopment