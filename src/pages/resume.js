import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"

const ResumeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Container>
        <h1 className="text-3xl md:text-6xl fade-in-up">Resume</h1>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="Resume" />

export default ResumeIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
