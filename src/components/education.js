import React from "react";
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Education = (props) => {
    const { education } = props;

    return (
        <section className="mb-5">
            <h5>Education</h5>
            {education.map((edu, i) =>
                <React.Fragment key={`row${i}`}>
                    <Row>
                        <Col lg={4}>
                            {edu.startDate}-{edu.endDate}
                        </Col>
                        <Col lg={5}>
                            {edu.schoolName}
                        </Col>
                        <Col lg={3}>
                            {edu.location}
                        </Col>
                    </Row>
                    <ul>
                        <li key={`edu${i}`}>
                            <strong>{edu.title}</strong>
                        </li>
                    </ul>
                </React.Fragment>
            )}
        </section>
    );
}
Education.propTypes = {
    education: PropTypes.array,
}

export default Education