import { useEffect, useState } from "react";

function useArticles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(
                    "https://dev.to/api/articles?per_page=5"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch articles");
                }

                const data = await response.json();

                setArticles(data);
            } catch (error) {
                console.error("Article API Error:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    return {
        articles,
        loading,
        error
    };
}

export default useArticles;