import P from "prop-types";

// Components
import { PostCard } from "../PostCard";

// Styles
import "./styles.css";

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard
        key={post.id}
        title={post.title}
        cover={post.cover}
        body={post.body}
      />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.array,
};
