import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from '../components/resume'

import "./../styles/styles.scss"
import "bootstrap/dist/css/bootstrap.min.css"

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title={data.site.siteMetadata.title} />
     <Resume />
  </Layout>
)

export default IndexPage
