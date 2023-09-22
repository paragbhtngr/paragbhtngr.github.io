import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"

const ResumeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Container fullWidth>
        <h1 className="text-3xl md:text-6xl fade-in-up">About Me</h1>
        <div className="md:grid md:grid-cols-[400px_auto] md:gap-4">
          <div className="mx-auto text-center">
            <StaticImage
              src="../images/profile-pic.jpeg"
              alt="Parag Bhatnagar"
              placeholder="blurred"
            />
          </div>
          <p className="pt-4 md:pt-0 text-lg">
            Hi, I'm Parag - a professional full-stack developer based out of
            Singapore with expertise in Front-end development. I've worked for
            the past 6 years across a variety of companies, solving problems
            across various disciplines.
            <br />
            <br />
            If you'd like to know more about my work experience, here is my{" "}
            <a href="/resume.pdf">resume</a>.
            <br />
            <br />
            I'm passionate about creating usable and intuitive user experiences,
            human psychology and behaviour. Outside of work, I've done
            improvised theatre for over 10 years, performing at several
            international festivals and more shows than I can remember. If I'm
            not working, I'm usually performing, watching stand-up or playing
            board games.
            <br />
            <br />
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

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
