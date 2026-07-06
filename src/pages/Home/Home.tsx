import * as React from "react";
import { useMemo, useState } from "react";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { IArticle } from "../../models/IArticle";
import { ICategory } from "../../models/ICategory";
import styles from "./Home.module.scss";

const categories: ICategory[] = [
  { id: 1, title: "SPFx", articleCount: 3, icon: "SPFx" },
  { id: 2, title: "Power Platform", articleCount: 2, icon: "PP" },
  { id: 3, title: "SharePoint", articleCount: 2, icon: "SP" },
  { id: 4, title: "Microsoft 365", articleCount: 3, icon: "M365" }
];

const articles: IArticle[] = [
  {
    id: 1,
    title: "Building a modern SharePoint Framework web part",
    description: "A practical guide to creating responsive SPFx experiences with React and Fluent UI.",
    author: "Aarush",
    category: "SPFx",
    updatedOn: new Date("2026-06-15"),
    tags: ["SPFx", "React", "Fluent UI"]
  },
  {
    id: 2,
    title: "Power Platform integration for enterprise scenarios",
    description: "How to connect Power Apps and Power Automate with SharePoint and Microsoft 365 data.",
    author: "Aarush",
    category: "Power Platform",
    updatedOn: new Date("2026-06-10"),
    tags: ["Power Platform", "Power Automate"]
  },
  {
    id: 3,
    title: "SharePoint list design for knowledge management",
    description: "Best practices for organizing knowledge articles, metadata, and permissions.",
    author: "Aarush",
    category: "SharePoint",
    updatedOn: new Date("2026-05-28"),
    tags: ["SharePoint", "Lists", "Knowledge"]
  },
  {
    id: 4,
    title: "Microsoft Graph APIs for modern intranet experiences",
    description: "Use Graph endpoints to enrich portals with people, files, and collaboration data.",
    author: "Aarush",
    category: "Microsoft 365",
    updatedOn: new Date("2026-05-20"),
    tags: ["Microsoft Graph", "M365"]
  }
];

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return articles.filter((article) => {
      const categoryMatch = !selectedCategory || article.category === selectedCategory;
      const searchMatch =
        !normalizedSearch ||
        [article.title, article.description, article.author, article.category]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      return categoryMatch && searchMatch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>SPFx � SharePoint � Microsoft 365</p>
        <h1>Smart Knowledge Hub</h1>
        <p className={styles.summary}>
          A portfolio-style SharePoint Framework solution for organizing knowledge articles,
          surfacing curated content, and showcasing enterprise-grade UI patterns for modern intranets.
        </p>
        <div className={styles.badges}>
          <span>React</span>
          <span>Fluent UI</span>
          <span>Microsoft Graph</span>
          <span>SPFx</span>
        </div>
      </section>

      <section className={styles.panel}>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <div className={styles.sectionTitle}>Browse by category</div>
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => setSelectedCategory(category.title)}
            />
          ))}
        </div>
      </section>

      <section className={styles.panel}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Recommended articles</h2>
            <p>
              {selectedCategory
                ? `Showing content for ${selectedCategory}`
                : "Explore curated knowledge articles and documentation."}
            </p>
          </div>
          <button
            className={styles.clearButton}
            onClick={() => {
              setSelectedCategory(null);
              setSearchTerm("");
            }}
          >
            Clear filters
          </button>
        </div>

        <div className={styles.articleGrid}>
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {filteredArticles.length === 0 ? (
          <p className={styles.emptyState}>No articles match your current filters.</p>
        ) : null}
      </section>
    </div>
  );
};

export default Home;
