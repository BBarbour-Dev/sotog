import React from "react"
import { Link } from "gatsby"
import PostFeatured from "../components/PostFeatured"
import { FaLongArrowAltRight } from "react-icons/fa"

const PostBox = ({ post }) => {
  return (
    <div className="column is-half">
      <div className="box" style={{ background: "#F5F5F5", borderRadius: "0" }}>
        <div className="has-text-white-bis post-header">
          <h2 className="is-size-5 has-text-weight-bold is-uppercase">
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
        <div className="columns">
          {post.frontmatter.featured ? (
            <div className="column">
              <div
                className="featured-thumbnail"
                style={{ marginRight: "auto", marginLeft: "auto" }}
              >
                <PostFeatured
                  featured={post.frontmatter.featured}
                  alt={post.frontmatter.title}
                />
              </div>
            </div>
          ) : null}
          <div className="column">{post.excerpt}</div>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <p className="has-text-right">
            <Link
              to={post.fields.slug}
              className="button is-success is-outlined"
            >
              Read More <FaLongArrowAltRight style={{ marginLeft: ".5rem" }} />
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostBox
