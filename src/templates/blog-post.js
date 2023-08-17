import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"

const shortcodes = { Link } // Provide common components here

const BlogPostTemplate = ({
  data: { previous, next, site, mdx },
  children,
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <div className="w-full max-w-[42rem] m-auto">
        <article itemScope itemType="http://schema.org/Article">
          <header>
            <h1 itemProp="headline" className="text-sky-700">
              {mdx.frontmatter.title}
            </h1>
            <p>
              <span className="inline-block">{mdx.frontmatter.date}</span>
              {mdx.frontmatter.categories ? (
                <>
                  <div className="rounded inline-block bg-black w-1 h-1 mx-1 mb-0.5"></div>
                  <span className="inline-block">
                    {mdx.frontmatter.categories.join([", "])}
                  </span>
                </>
              ) : null}
            </p>
          </header>
          <MDXProvider
            components={shortcodes}
            localImages={mdx.frontmatter.embeddedImagesLocal}
          >
            {children}
          </MDXProvider>
          <hr />
          <footer>
            <Bio />
          </footer>
        </article>
        <nav className="blog-post-nav">
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
      </div>
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

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
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
        categories
      }
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
