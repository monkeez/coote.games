import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    {
      data.allItchioGame.nodes.map((node) => (
        <article key={node.title}>
          <h2>{node.title}</h2>
          <a href={node.url}><img src={node.cover_url} alt="Alt text"></img></a>
          <hr></hr>
        </article>
      ))
    }
  </Layout>
)

export const query = graphql`
  query {
    allItchioGame(limit: 10) {
      nodes {
        title
        url
        cover_url
      }
    }
  }
`

export default IndexPage
