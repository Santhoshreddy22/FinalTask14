import { useState } from "react";

function Profile() {

  const [loggedIn, setLoggedIn] =
    useState(false);

  const [name, setName] =
    useState("ShopSphere User");

  return (
    <section className="profile-page">

      <div className="profile-card">

        <div className="profile-avatar">
          👤
        </div>

        <span className="small-title">
          MY ACCOUNT
        </span>

        <h1>
          {name}
        </h1>

        <p>
          {loggedIn
            ? "Welcome back! You are signed in."
            : "You are currently signed out."}
        </p>

        {loggedIn && (
          <div className="profile-details">

            <p>
              <strong>Email:</strong>{" "}
              user@shopsphere.com
            </p>

            <p>
              <strong>Member Since:</strong>{" "}
              2026
            </p>

            <p>
              <strong>Status:</strong>{" "}
              Active
            </p>

          </div>
        )}

        <input
          type="text"
          value={name}
          onChange={e =>
            setName(e.target.value)
          }
          placeholder="Enter your name"
        />

        <button
          className="primary-btn"
          onClick={() =>
            setLoggedIn(!loggedIn)
          }
        >
          {loggedIn
            ? "Sign Out"
            : "Sign In"}
        </button>

      </div>

    </section>
  );
}

export default Profile;