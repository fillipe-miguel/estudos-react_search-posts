import { useEffect, useState } from "react";

// Arquivos JS
import { loadPosts } from "../../utils/loadPosts";

// Components
import { Posts } from "../../components/Posts";

// Styles
import "./styles.css";

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPostsHere();
    }, []);

    // Preciso fazer uma funçao aqui para que consiga usar o await
    // Poderia passar a função direto dentro do useEffect mas para organizar é melhor aqui
    const loadPostsHere = async () => {
        const postsAndPhotos = await loadPosts();
        setPosts(postsAndPhotos);
    };

    return (
        <section className="container">
            <Posts posts={posts} />
        </section>
    );
};

export default App;
