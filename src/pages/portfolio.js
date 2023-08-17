import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"

const PortfolioIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Container>
        <h1 className="text-3xl md:text-6xl fade-in-up">Portfolio</h1>
        <p className="text-2xl fade-in-up">
          Illustrations, drawings, design work. Sometimes I do things that
          aren't coding. Here's some of that stuff that I'm particularly proud
          of.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-20">
          {posts.map((post, index) => {
            const title = post.frontmatter.title || post.frontmatter.slug
            const featuredImg = getImage(
              post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData
            )

            return (
              <div
                key={post.frontmatter.slug}
                className="fade-in-up"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <Link to={`/${post.frontmatter.slug}`} itemProp="url">
                  <div className="w-full h-0 pb-[100%] overflow-hidden rounded-lg">
                    <GatsbyImage
                      image={featuredImg}
                      objectFit="cover h-full w-full"
                      objectPosition={"0% 50%"}
                      className="aspect-square hover:scale-105 hover:opacity-80 transition-all duration-300 bg-slate-200"
                    />
                  </div>
                  <article
                    className="post-list-item text-black"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h4 className="mb-0 mt-6 text-sky-700">{title}</h4>
                      <small className="text-gray-700">
                        {post.frontmatter.date}
                      </small>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </article>
                </Link>
              </div>
            )
          })}
        </div>
      </Container>
    </Layout>
  )
}

export default PortfolioIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { post: { eq: "portfolio" } } }
    ) {
      nodes {
        excerpt
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          slug
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
      }
    }
  }
`
