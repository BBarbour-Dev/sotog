const path = require("path")

const slugify = path => {
  const firstSplit = path.split("/")
  return firstSplit[firstSplit.length - 1].split(".")[0]
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.js`)

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              title
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
      createPage({
        path: slugify(node.fileAbsolutePath),
        component: postTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
