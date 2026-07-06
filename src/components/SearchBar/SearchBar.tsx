import * as React from "react";
import { SearchBox } from "@fluentui/react-components";
import styles from "./SearchBar.module.scss";

export interface ISearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <SearchBox
        placeholder="Search articles..."
        value={value}
        onChange={(_, data) => onChange(data.value)}
      />
    </div>
  );
};

export default SearchBar;