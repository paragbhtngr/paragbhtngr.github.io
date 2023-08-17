/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Container from "./container"

const Bio = ({ blueBg }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className={blueBg ? `bg-sky-700` : ""}>
      <div className="bio">
        {author?.name && (
          <p className={`${blueBg ? "text-white" : "text-black"}`}>
            Written by {author.name}. {author?.summary || null}
          </p>
        )}
      </div>
    </div>
  )
}

export default Bio
