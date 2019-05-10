const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

const container = path => {
  const firstSplit = path.split("/")
  return firstSplit[firstSplit.length - 2]
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `${__dirname}`,
    })
    createNodeField({
      node,
      name: `slug`,
      value: `/${container(node.fileAbsolutePath)}${slug}`,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.js`)
  const chapterTemplate = path.resolve("src/templates/chapter.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              type
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { frontmatter } = node
      const { fields } = node

      if (frontmatter.type === "posts") {
        createPage({
          path: fields.slug,
          component: postTemplate,
          context: {
            slug: fields.slug,
          }, // additional data can be passed via context
        })
      }
      if (frontmatter.type === "chapters") {
        createPage({
          path: fields.slug,
          component: chapterTemplate,
          context: {
            slug: fields.slug,
          },
        })
      }
    })
  })
}
