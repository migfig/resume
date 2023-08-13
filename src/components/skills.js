import React, { useState } from "react";
import PropTypes from 'prop-types';

import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import Arrow from './arrow';

const Skills = (props) => {
    const { skills } = props;
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
        <section className="mb-5">
            <h5>Skills</h5>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={0} onClick={e => setIsExpanded(!isExpanded)}>
                        <Arrow isExpanded={isExpanded} /> skills <Badge variant="secondary">{skills.length}</Badge>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={0}>
                        <Card.Body>
                            <Table responsive="sm" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Skill</th>
                                        <th>Stack</th>
                                        <th>Proficiency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {skills.map((skill, i) =>
                                        <tr key={`skill${i}`}>
                                            <td><span dangerouslySetInnerHTML={{__html: skill.name}}></span></td>
                                            <td>
                                                <ul>
                                                    {skill.stack.split(',').map((s, j) => <li key={`staListItm${j}`}><small dangerouslySetInnerHTML={{__html: s}}></small></li>)}
                                                </ul>
                                            </td>
                                            <td><i>{skill.level}</i></td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                            Notes: <i>&#185;</i> = only in personal projects
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </section>
    );
}
Skills.propTypes = {
    skills: PropTypes.array,
}
Skills.defaultProps = {
    skills: [],
}

export default Skills