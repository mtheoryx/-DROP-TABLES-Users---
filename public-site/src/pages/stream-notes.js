import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const StreamNotes = ({ data }) => {
  return (
    <Layout>
      <h1>Stream Notes Page!!</h1>
      <h2>June</h2>
      <p>{data.JuneStreamNotes.edges.length} Streams notes!</p>
      <ul>
        {data.JuneStreamNotes.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.headings[0].value}</Link>
          </li>
        ))}
      </ul>

      <hr />
      <h2>May</h2>
      <p>{data.MayStreamNotes.edges.length} Streams notes!</p>
      <ul>
        {data.MayStreamNotes.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.headings[0].value}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <h2>April</h2>
      <p>{data.AprilStreamNotes.edges.length} Streams notes!</p>
      <ul>
        {data.AprilStreamNotes.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.headings[0].value}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <h2>March</h2>
      <p>{data.MarchStreamNotes.edges.length} Streams notes!</p>
      <ul>
        {data.MarchStreamNotes.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.headings[0].value}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <h2>February</h2>
      <p>{data.FebruaryStreamNotes.edges.length} Streams notes!</p>
      <ul>
        {data.FebruaryStreamNotes.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.headings[0].value}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <h2>January</h2>
      <p>{data.JanuaryStreamNotes.edges.length} Streams notes!</p>
      <ul>
        {data.JanuaryStreamNotes.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.headings[0].value}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <h2>December</h2>
      <p>{data.DecemberStreamNotes.edges.length} Streams notes!</p>
      <ul>
        {data.DecemberStreamNotes.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.headings[0].value}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default StreamNotes

export const pageQuery = graphql`
  query {
    JuneStreamNotes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jun-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          headings(depth: h1) {
            value
          }
          fields {
            slug
          }
        }
      }
    }
    MayStreamNotes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/may-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          headings(depth: h1) {
            value
          }
          fields {
            slug
          }
        }
      }
    }
    AprilStreamNotes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/apr-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          headings(depth: h1) {
            value
          }
          fields {
            slug
          }
        }
      }
    }
    MarchStreamNotes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/mar-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          headings(depth: h1) {
            value
          }
          fields {
            slug
          }
        }
      }
    }
    FebruaryStreamNotes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/feb-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          headings(depth: h1) {
            value
          }
          fields {
            slug
          }
        }
      }
    }
    JanuaryStreamNotes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jan-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          headings(depth: h1) {
            value
          }
          fields {
            slug
          }
        }
      }
    }
    DecemberStreamNotes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/dec-2018/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          headings(depth: h1) {
            value
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
