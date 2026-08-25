import useArticles from "../hooks/useArticles";

function Articles() {
    const { articles, loading, error } = useArticles();

    if (loading) {
        return (
            <section>
                <h2>My Articles</h2>
                <p>Loading articles...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section>
                <h2>My Articles</h2>
                <p>Unable to load articles. Please try again later.</p>
            </section>
        );
    }

    return (
        <section>
            <h2>My Articles</h2>

            {articles.map((article) => (
                <article key={article.id}>
                    <h3>
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {article.title}
                        </a>
                    </h3>
                </article>
            ))}
        </section>
    );
}

export default Articles;