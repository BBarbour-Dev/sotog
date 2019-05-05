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
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/posts/" } }
      ) {
        edges {
          node {
            id
            fileAbsolutePath
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
        path: `/posts/${slugify(node.fileAbsolutePath)}`,
        component: postTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions
//   const chapterTemplate = path.resolve(`src/templates/chapter.js`)

//   return graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         filter: { fileAbsolutePath: { regex: "/chapters/" } }
//       ) {
//         edges {
//           node {
//             id
//             fileAbsolutePath
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors)
//     }

//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: `/chapters/${slugify(node.fileAbsolutePath)}`,
//         component: chapterTemplate,
//         context: {}, // additional data can be passed via context
//       })
//     })
//   })
// }
