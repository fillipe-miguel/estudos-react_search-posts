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
