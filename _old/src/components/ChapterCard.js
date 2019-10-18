import React from "react"
import PostFeatured from "./PostFeatured"
import { Link } from "gatsby"

const ChapterCard = ({ chapter }) => {
  return (
    <div className="column is-one-third">
      <div className="card" style={{ background: "#F5F5F5" }}>
        <div className="card-image">
          <PostFeatured
            featured={chapter.frontmatter.cover}
            alt={chapter.frontmatter.title}
          />
        </div>
        <div className="card-content">
          <h1 className="is-size-5 has-text-weight-bold has-text-success is-uppercase">
            {chapter.frontmatter.title}
          </h1>
          <p>{chapter.frontmatter.description}</p>
        </div>
        <footer className="card-footer">
          <Link to={chapter.fields.slug} className="card-footer-item">
            View
          </Link>
          {chapter.frontmatter.pdf && (
            <a
              href={chapter.frontmatter.pdf}
              className="card-footer-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF
            </a>
          )}
        </footer>
      </div>
    </div>
  )
}

export default ChapterCard
