import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import Layout from "./components/Layouts/Layout";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
