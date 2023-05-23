import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Navbar from "./components/Navbar";
import ReferralPage from "./screens/ReferralPage";
import Breadcrumbs from "./components/BreadCrumb";

const App = () => {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
          handle={{
            crumb: () => <Link to="/home">Home</Link>,
          }}
        />
        <Route
          path="/FriendsRefer"
          element={<ReferralPage />}
          handle={{
            crumb: () => <Link to="/">refral</Link>,
          }}
        />
      </Routes>
    </>
  );
};

export default App;
