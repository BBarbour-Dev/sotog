const path = require("path")

const slugify = path => {
  const firstSplit = path.split("/")
  return firstSplit[firstSplit.length - 1].split(".")[0]
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
            fileAbsolutePath
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

      if (frontmatter.type === "posts") {
        createPage({
          path: `/posts/${slugify(node.fileAbsolutePath)}`,
          component: postTemplate,
          context: {}, // additional data can be passed via context
        })
      }
      if (frontmatter.type === "chapters") {
        createPage({
          path: `/chapters/${slugify(node.fileAbsolutePath)}`,
          component: chapterTemplate,
          context: {},
        })
      }
    })
  })
}
