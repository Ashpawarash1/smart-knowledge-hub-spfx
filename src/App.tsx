import * as React from "react";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;