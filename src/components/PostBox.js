import React from "react"
import { Link } from "gatsby"
import PostThumbnail from "../components/PostThumbnail"

const PostBox = ({ post }) => {
  return (
    <div
      className="box"
      style={{ marginBottom: "1rem", background: "#F5F5F5" }}
    >
      <div className="has-text-white-bis post-header">
        <h2 className="is-size-5 has-text-weight-bold">
          {post.frontmatter.title}
        </h2>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <p
          className="has-text-weight-semibold is-uppercase"
          style={{ color: "#7ba53e", marginBottom: ".5rem" }}
        >
          {post.frontmatter.date}
        </p>
      </div>
      {post.frontmatter.thumbnail && (
        <PostThumbnail
          thumbnail={post.frontmatter.thumbnail}
          maxHeight="200px"
        />
      )}
      <div style={{ marginTop: "1rem" }}>
        <p className="has-text-justified">{post.excerpt}</p>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <p className="has-text-right">
          <Link to={post.fields.slug} className="button is-success">
            Read More
          </Link>
        </p>
      </div>
    </div>
  )
}

export default PostBox
