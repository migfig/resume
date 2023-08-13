import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import DevelopmentExperience from './development-experience';
import Experience from './experience';
import ProfessionalDevelopment from './professional-development';
import Education from './education';
import Languages from './languages';
import RecentExperience from './recent-experience';
import Skills from './skills';

const Resume = (props) => {
    const data = useStaticQuery(graphql`
        query itemsQuery {
            resumes: allResume {
                items: nodes {
                    name
                    type
                    id
                    resume: content {
                        name
                        dateOfBirth
                        address {
                            street
                            number
                            city
                            state
                            zip
                            country
                        }
                        emails
                        phones {
                            number
                            kind
                        }
                        hobies
                        photo
                        status
                        title
                        certifications {
                            endDate
                            location
                            schoolName
                            startDate
                            title
                        }
                        education {
                            endDate
                            location
                            schoolName
                            startDate
                            title
                        }
                        idioms {
                            name
                            level
                            schoolName
                            location
                        }
                        projects {
                            description
                            replacements {
                                label
                                url
                            }
                            annotations {
                                label
                                type
                            }
                            startDate
                            endDate
                            tools
                            screenShots {
                                name
                                url
                            }
                        }
                        recentProjects {
                            description
                            replacements {
                                label
                                url
                            }
                            annotations {
                                label
                                type
                            }
                            startDate
                            endDate
                            tools
                            screenShots {
                                name
                                url
                            }
                        }
                        skills {
                            name
                            stack
                            level
                        }
                        developmentExperience {
                            description
                            replacements {
                                label
                                url
                            }
                            annotations {
                                label
                                type
                            }
                        }
                        workExperience {
                            company
                            location
                            startDate
                            endDate
                            position
                            jobDescription
                            achievements
                            functionalExperience
                            tools
                        }
                    }
                }
            }

            screenShotFiles: allFile(filter: {sourceInstanceName: { eq: "images" }}) {
                edges {
                    node {
                        name
                        childImageSharp {
                            fluid(maxWidth:2000) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }`)
    const resume = data.resumes.items[0].resume;
    
    return (
        <React.Fragment>
            <DevelopmentExperience developmentExperience={resume.developmentExperience} />
            <Experience workExperience={resume.workExperience} />
            <Education education={resume.education} />
            <ProfessionalDevelopment certifications={resume.certifications} />
            <Languages idioms={resume.idioms} />
            <RecentExperience title="Recent Personal Projects" recentProjects={resume.recentProjects} images={data.screenShotFiles.edges} />
            <Skills skills={resume.skills} />
            <RecentExperience title="Personal Programming Hobbies" recentProjects={resume.projects} images={data.screenShotFiles.edges} />
        </React.Fragment>
    )
}

export default Resume