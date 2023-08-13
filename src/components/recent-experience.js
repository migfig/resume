import React, { useState } from "react";
import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import Arrow from './arrow';
import Img from 'gatsby-image';
import UrlReplacer from './url-replacer';

const RecentExperience = (props) => {
    const { recentProjects, images, title } = props;
    const [isExpanded, setIsExpanded] = useState(recentProjects.map(rp => false));
    
    const handleArrowState = (index) => {
        const resetState = recentProjects.map(rp => false);
        resetState[index] = !isExpanded[index];
        setIsExpanded(resetState);
    }

    return (
        <section className="mb-5">
            <h5>{title}</h5>
            <Accordion defaultActiveKey="0">
                {recentProjects.map((prj, i) => 
                    <Card key={`recPrj${i}`}>
                        <Accordion.Toggle as={Card.Header} eventKey={i} onClick={e => handleArrowState(i) }>
                            <Row>
                                <Col lg={2}>
                                    <Arrow isExpanded={isExpanded[i]} />
                                    {prj.startDate !== prj.endDate ? prj.startDate.toString() + '-' + prj.endDate.toString(): prj.endDate}
                                </Col>
                                <Col lg={10}>
                                    <UrlReplacer experience={prj} />
                                </Col>
                            </Row>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={i}>
                            <Card.Body>
                                <u><i>Tools</i></u>:
                                <ul>
                                    {prj.tools.map((tool, i) => <li key={`liTool${i}`}>{tool}</li>)}
                                </ul>
                                <Carousel>
                                    {prj.screenShots.map((ss, i) => {
                                        const image = images.find(im => im.node.name === ss.url.replace('.png', '') || im.node.name === ss.url.replace('.webp', ''));
                                        const isGifImage = ss.url.includes('.webp');
                                        return <Carousel.Item key={`car${i}`}>
                                            {isGifImage ? <img src={`/static/gifs/${ss.url.split('.')[0]}.gif`} /> :<Img fluid={image.node.childImageSharp.fluid} />}
                                            <Carousel.Caption>
                                                <h6>
                                                    <div style={{
                                                        color: 'white', 
                                                        backgroundColor: '#007acc',
                                                        display: 'inline',
                                                        paddingLeft: '12px',
                                                        paddingRight: '12px',
                                                        paddingBottom: '12px',
                                                        opacity: '0.65',
                                                        }}>
                                                        {ss.name}
                                                    </div>
                                                </h6>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    })}
                                </Carousel>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>                
                )}
            </Accordion>
        </section>
    );
}
RecentExperience.propTypes = {
    recentProjects: PropTypes.array,
    images: PropTypes.array,
    title: PropTypes.string,
}

export default RecentExperience