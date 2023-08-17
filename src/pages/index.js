import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"

const BlogIndex = ({ data, location }) => {
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
        <section className="py-24">
          <h1 className="text-3xl md:text-6xl mb-10 fade-in-up">
            Hi, I'm Parag
          </h1>
          <p className="text-2xl fade-in-up">
            I'm a Full-Stack Developer - specialising in Front-end development
            with React. <Link to={"/resume"}>Check out my resume.</Link>
            <br />
            <br /> I draw and design things occasionally.{" "}
            <Link to={"/portfolio"}>Here's some stuff I'm proud of.</Link>
            <br />
            <br /> I think a lot about life, work, and what I've learned on my
            journey so far.{" "}
            <Link to={"/blog"}>
              Here are some things you might find interesting
            </Link>
          </p>
        </section>
      </Container>
      <section className="bg-gradient-to-t from-[#025c8e] to-[#0369a1]">
        <Container>
          <h2 className="text-white pt-16 mb-0 fade-in-up">
            Some stuff I've written recently{" "}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 pb-10">
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
                      <h2 className="text-base text-white mb-0">
                        <Link to={post.frontmatter.slug} itemProp="url">
                          {title}
                        </Link>
                      </h2>
                      <small className="text-sky-200">
                        <span className="inline-block">
                          {post.frontmatter.date}
                        </span>
                        {post.frontmatter.categories ? (
                          <>
                            <div className="rounded inline-block bg-sky-200 w-1 h-1 mx-1 mb-0.5"></div>
                            <span className="inline-block">
                              {post.frontmatter.categories.join([", "])}
                            </span>
                          </>
                        ) : null}
                      </small>
                    </header>
                    <p
                      className="text-sm text-white"
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </article>
                </div>
              )
            })}
          </div>
        </Container>
      </section>
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
      limit: 6
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
