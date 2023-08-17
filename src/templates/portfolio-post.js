import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const shortcodes = { Link } // Provide common components here

const PortfolioPostTemplate = ({
  data: { previous, next, site, mdx },
  children,
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <article itemScope itemType="http://schema.org/Article" className="px-4">
        <div className="max-w-[42rem] px-4 m-auto fade-in-up">
          <header>
            <h1 itemProp="headline">{mdx.frontmatter.title}</h1>
            <p>{mdx.frontmatter.date}</p>
          </header>
          <MDXProvider
            components={shortcodes}
            localImages={mdx.frontmatter.embeddedImagesLocal}
          >
            {children}
          </MDXProvider>
        </div>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="">
        <ul className="flex justify-between font-bold list-none max-w-[42rem] m-auto px-4">
          <li>
            {previous && (
              <Link to={previous.frontmatter.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.frontmatter.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const Head = ({ data: { mdx } }) => {
  return (
    <Seo
      title={mdx.frontmatter.title}
      description={mdx.frontmatter.description || mdx.excerpt}
    />
  )
}

export default PortfolioPostTemplate

export const pageQuery = graphql`
  query PorfolioPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      body
    }
    previous: mdx(id: { eq: $previousPostId }) {
      frontmatter {
        slug
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      frontmatter {
        slug
        title
      }
    }
  }
`
