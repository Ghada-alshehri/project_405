import React, { useEffect, useState } from "react";

function NewsSection() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://www.unv.org/rss.xml")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.items.slice(0, 5));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching RSS feed:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>Global Volunteering Updates</h2>
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : (
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "1rem",
            paddingTop: "1rem",
            scrollSnapType: "x mandatory",
          }}
        >
          {articles.map((article, index) => (
            <div
              key={index}
              style={{
                minWidth: "300px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                padding: "1rem",
                scrollSnapAlign: "start",
                flexShrink: 0,
              }}
            >
              {article.thumbnail && (
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "0.5rem",
                  }}
                />
              )}
              <h4 style={{ fontSize: "16px", marginBottom: "0.5rem" }}>
                {article.title}
              </h4>
<p style={{ fontSize: "14px", color: "#555" }}>
  {article.description?.replace(/<[^>]+>/g, "").slice(0, 100)}...
</p>

              <a
                href={article.link}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#007BFF", fontSize: "14px" }}
              >
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default NewsSection;
