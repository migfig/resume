import React, { useState } from "react";
import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Arrow from './arrow';

const Experience = (props) => {
    const { workExperience } = props;
    const [isExpanded, setIsExpanded] = useState(workExperience.map(we => false));
    
    const handleArrowState = (index) => {
        const resetState = workExperience.map(we => false);
        resetState[index] = !isExpanded[index];
        setIsExpanded(resetState);
    }

    return (
        <section className="mb-5">
            <h5>Professional Experience</h5>
            <Accordion defaultActiveKey="0">
                {workExperience.map((exp, i) =>
                    <Card key={`exp${i}`}>
                        <Accordion.Toggle as={Card.Header} eventKey={i} onClick={e => handleArrowState(i)}>
                            <Row>
                                <Col lg={4}>
                                    <Arrow isExpanded={isExpanded[i]} />
                                    {exp.startDate}-{exp.endDate}
                                </Col>
                                <Col lg={5}>
                                    {exp.company}
                                </Col>
                                <Col lg={3}>
                                    {exp.location}
                                </Col>
                            </Row>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={i}>
                            <Card.Body>
                                <strong>{exp.position}</strong>
                                <ul><li>{exp.jobDescription}</li></ul>
                                <u><i>Achievements</i></u>:
                                {exp.achievements.map((ach, i) => <p key={`pAch${i}`} style={{ textAlign: "justify" }}>{ach}</p>)}
                                <u><i>Functional experience</i></u>:
                                {exp.functionalExperience.map((fexp, i) => <p key={`pFuncExp${i}`} style={{ textAlign: "justify" }}>{fexp}</p>)}
                                <u><i>Tools</i></u>:
                                <ul>
                                {exp.tools.map((tool, i) => <li key={`liTools${i}`}>{tool}</li>)}
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )}
            </Accordion>
        </section>
    );
}
Experience.propTypes = {
    workExperience: PropTypes.array,
}

export default Experience