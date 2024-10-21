import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LandingPage from "./components/shared/Landingpage";
import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
import AdminDashboard from "./components/admin/AdminDashboard";
import Homepage from "./components/user/Homepage";
// import SignUp from "./components/auth/Register";
import Subscription from "./components/user/Subscription";
import LandingPage from "./components/shared/Landingpage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/homepage" element={<Homepage />} />
        <Route exact path="/admin" element={<AdminDashboard />} />
        <Route exact path="/subscription" element={<Subscription />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        {/* <Route exact path="/register" component={SignUp} /> */}
      </Routes>
    </Router>
  );
}

export default App;
