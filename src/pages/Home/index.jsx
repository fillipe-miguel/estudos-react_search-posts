import { useEffect, useState } from "react";

// Arquivos JS
import { loadPosts } from "../../utils/loadPosts";

// Components
import { Posts } from "../../components/Posts";

// Styles
import "./styles.css";
import { Button } from "../../components/Button";

const Home = () => {
    const [viewStats, setViewStats] = useState({
        page: 0,
        postsPerPage: 2,
    });

    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);

    const noMorePosts =
        viewStats.page + viewStats.postsPerPage >= allPosts.length;

    useEffect(() => {
        loadPostsHere();
    }, []);

    // Preciso fazer uma funçao aqui para que consiga usar o await
    // Poderia passar a função direto dentro do useEffect mas para organizar é melhor aqui
    const loadPostsHere = async () => {
        const postsAndPhotos = await loadPosts();
        setAllPosts(postsAndPhotos);
        setPosts(postsAndPhotos.slice(viewStats.page, viewStats.postsPerPage));
    };

    // Gambi para fazer paginação
    const loadMorePosts = () => {
        const nextPage = viewStats.page + viewStats.postsPerPage;

        const nextPosts = allPosts.slice(
            nextPage,
            nextPage + viewStats.postsPerPage
        );

        setPosts([...posts, ...nextPosts]);

        setViewStats({ ...viewStats, page: nextPage });
    };

    return (
        <section className="container">
            <Posts posts={posts} />
            <div className="button-container">
                <Button disabled={noMorePosts} onClick={loadMorePosts}>
                    Carregar Mais posts
                </Button>
            </div>
        </section>
    );
};

export default Home;
