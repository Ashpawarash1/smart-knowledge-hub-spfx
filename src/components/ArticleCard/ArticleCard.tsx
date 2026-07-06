import * as React from "react";
import { Card } from "@fluentui/react-components";
import styles from "./ArticleCard.module.scss";
import { IArticle } from "../../models";

interface IArticleCardProps {
  article: IArticle;
}

const ArticleCard: React.FC<IArticleCardProps> = ({ article }) => {

  return (

    <Card className={styles.card}>

      <h3>{article.title}</h3>

      <p>{article.description}</p>

      <div className={styles.footer}>

        <span>{article.author}</span>

        <span>{article.category}</span>

      </div>

    </Card>

  );

};

export default ArticleCard;