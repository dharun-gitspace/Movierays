import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/shared/Landingpage";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import Homepage from "./components/user/Homepage";
import UserProfile from "./components/user/UserProfile";
import AdminDashboard from "./components/admin/AdminDashboard";
import Subscription from "./components/user/Subscription";
import NotFound from "./components/NotFound";
import EditProfile from "./components/user/EditProfile";
import MovieDetailsPage from "./components/user/MovieDetailsPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/homepage" element={<Homepage />} />
        <Route exact path="/homepage/profile" element={<UserProfile />} />
        <Route exact path="/homepage/profile/edit" element={<EditProfile />} />
        <Route path="/movie/:movieId" element={<MovieDetailsPage />} /> {/* New Route */}
        <Route exact path="/admin" element={<AdminDashboard />} />
        <Route exact path="/subscription" element={<Subscription />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
