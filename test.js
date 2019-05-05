const slugify = path => {
  const firstSplit = path.split("/")
  return firstSplit[firstSplit.length - 1].split(".")[0]
}

const chapters = path => {
  const firstSplit = path.split("/")
}

console.log(slugify("/Users/brian/Dev/Projects/sotog/chapters/chapter-one.md"))
