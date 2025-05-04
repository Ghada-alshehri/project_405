import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("googleEmail") || localStorage.getItem("manualEmail");
    setIsLoggedIn(!!email);

    if (email) {
      const fetchProfileData = async () => {
        try {
          const userRef = doc(db, "users", email);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            const data = userSnap.data();
            setUserName(data.name || "");
            setPhotoURL(data.photoURL || "");
          }
        } catch (err) {
          console.error("Failed to fetch user data for navbar:", err);
        }
      };
      fetchProfileData();
    }
  }, [location]);

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Volunteer Hub</h1>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            {!isLoggedIn && (
              <li className="login-btn"><Link to="/login">Login</Link></li>
            )}
            {isLoggedIn && (
              <li className="profile-summary" onClick={() => navigate("/profile")} style={{ cursor: "pointer" }}>
                {photoURL && (
                  <img
                    src={photoURL}
                    alt="User"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginBottom: "4px"
                    }}
                  />
                )}
                <div style={{ fontSize: "14px", color: "white", textAlign: "center" }}>{userName}</div>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
