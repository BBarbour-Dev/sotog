const slugify = path => {
  const firstSplit = path.split("/")
  return firstSplit[firstSplit.length - 1].split(".")[0]
}

console.log(
  slugify("/Users/brian/Dev/Projects/sotog/posts/2019-05-05-second-post.md")
)
