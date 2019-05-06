const slugify = path => {
  const firstSplit = path.split("/")
  return firstSplit[firstSplit.length - 2]
}

console.log(slugify("/Users/brian/Dev/Projects/sotog/chapters/chapter-one.md"))
