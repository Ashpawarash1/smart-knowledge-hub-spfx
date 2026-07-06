import * as React from "react";
import styles from "./CategoryCard.module.scss";
import { Card } from "@fluentui/react-components";
import { ICategory } from "../../models/ICategory";

interface ICategoryCardProps {
  category: ICategory;
  onClick?: (category: ICategory) => void;
}

const CategoryCard: React.FC<ICategoryCardProps> = ({
  category,
  onClick
}) => {

  return (
    <Card
      className={styles.card}
      onClick={() => onClick?.(category)}
    >

      <div className={styles.icon}>
        {category.icon ?? "📂"}
      </div>

      <div className={styles.title}>
        {category.title}
      </div>

      <div className={styles.count}>
        {category.articleCount} Articles
      </div>

    </Card>
  );
};

export default CategoryCard;