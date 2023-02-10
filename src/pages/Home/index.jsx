import { useCallback, useEffect, useState } from "react";

// Arquivos JS
import { loadPosts } from "../../utils/loadPosts";

// Components
import { Posts, Button, TextInput } from "../../components";

// Styles
import "./styles.css";

const Home = () => {
  const [searchPhrase, setSearchPhrase] = useState("");

  const [viewStats, setViewStats] = useState({
    page: 0,
    postsPerPage: 6,
  });

  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  const noMorePosts =
    viewStats.page + viewStats.postsPerPage >= allPosts.length;

  const postFiltered = searchPhrase
    ? allPosts.filter((post) =>
        post.title.toLowerCase().includes(searchPhrase.toLowerCase())
      )
    : posts;

  // Preciso fazer uma funçao aqui para que consiga usar o await
  // Poderia passar a função direto dentro do useEffect mas para organizar é melhor aqui
  const handleLoadPosts = useCallback(async (viewStats) => {
    const postsAndPhotos = await loadPosts();
    setAllPosts(postsAndPhotos);
    setPosts(postsAndPhotos.slice(viewStats.page, viewStats.postsPerPage));
  }, []);

  // ISSO AQUI NÃO SEI O QUE ESTÁ ACONTECENDO AQUI !!!!!!!!
  useEffect(() => {
    handleLoadPosts({ page: 0, postsPerPage: viewStats.postsPerPage });
  }, [handleLoadPosts, viewStats.postsPerPage]);

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

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchPhrase(value);
  };

  return (
    <section className="container">
      <div className="search-container">
        <TextInput onChange={handleSearchChange} value={searchPhrase} />
      </div>

      {postFiltered.length > 0 && <Posts posts={postFiltered} />}

      {postFiltered.length === 0 && (
        <h1>Não há resultado para sua pesquisa =/</h1>
      )}

      {!searchPhrase && (
        <>
          <div className="button-container">
            <Button disabled={noMorePosts} onClick={loadMorePosts}>
              Carregar Mais posts
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
