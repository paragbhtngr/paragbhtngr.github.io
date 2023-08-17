import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"

const BlogIndex = ({ data, location }) => {
  console.log("data", data)
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
        <h1 className="text-3xl md:text-6xl fade-in-up">Blog</h1>
        <p className="text-2xl fade-in-up">
          Stuff I think about and decide it's coherent enough to share with the
          world. Mostly things I've learnt through work, life, or a combination
          of the two.
        </p>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-8 py-20">
          {posts.map((post, index) => {
            const title = post.frontmatter.title || post.frontmatter.slug

            return (
              <div
                key={post.frontmatter.slug}
                className="fade-in-up"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <small>
                      <span className="inline-block">
                        {new Date(post.frontmatter.date)
                          .toDateString()
                          .split(" ")
                          .slice(1)
                          .join(" ")}
                      </span>
                      {post.frontmatter.categories ? (
                        <>
                          <div className="rounded inline-block bg-black w-1 h-1 mx-1 mb-0.5"></div>
                          <span className="inline-block">
                            {post.frontmatter.categories.join([", "])}
                          </span>
                        </>
                      ) : null}
                    </small>
                    <h2 className="text-sky-700 text-xl m-0">
                      <Link to={`/${post.frontmatter.slug}`} itemProp="url">
                        <h4 className="text-sky-700 my-1" itemProp="headline">
                          {title}
                        </h4>
                      </Link>
                    </h2>
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
              </div>
            )
          })}
        </div>
      </Container>
    </Layout>
  )
}

export default BlogIndex

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
      filter: { frontmatter: { post: { eq: "blog" } } }
    ) {
      nodes {
        excerpt
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          slug
          categories
        }
      }
    }
  }
`
