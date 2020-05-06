/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const resumeContent = require('./src/data/resume.json');

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const resumes = [resumeContent];
  
  resumes.forEach(resume => {
      const node = {
          name: resume.name,
          type: resume.type,
          id: createNodeId(`Resume-${resume.name}`),
          content: resume,
          internal: {
              type: "Resume",
              contentDigest: createContentDigest(resume),
          },
      }
      actions.createNode(node)
  })
}
