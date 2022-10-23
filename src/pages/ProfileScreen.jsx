import React from "react";
import { useDispatch } from "react-redux";
import Nav from "../components/Nav";
import "./ProfileScreen.scss";
import { logout } from "../features/user/userSlice";
const ProfileScreen = () => {
  const dispatch = useDispatch();
  return (
    <div className="profileScreen">
      <Nav />
      <div className="prfileScreen__body">
        <div className="header">
          <h1>Edit Profile</h1>
        </div>
        <div className="content">
          <div className="avatar">
            <img
              src="https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
              alt=""
            />
          </div>
          <div className="details">
            <div className="nameLanguage">
              <p className="userName">Shahidullah</p>
              <p>Language:</p>
              <select name="" id="">
                <option value="">English</option>
                <option value="">Spanish</option>
                <option value="">Hindi</option>
                <option value="">Persian</option>
                <option value="">Pashto</option>
              </select>
            </div>

            <div className="gameHandle">
              <h2>Game Handle:</h2>
              <p>
                Your handle is a unique name that will be used for plaing with
                other Netflix members across all Netflix Games{" "}
                <a href="https://help.netflix.com/en/node/126159">
                  {" "}
                  Learn More
                </a>
              </p>
              <input type="text" placeholder="Create Game Handle" />
            </div>
            <div className="marturitySettings">
              <h2>Maturity Settings</h2>
              <p className="allMaturity">All Maturity Ratings</p>
              Show titles of all marturit ratings for this profile
              <button>Edit</button>
            </div>
            <div className="autoplayControls">
              <h2>Autoplay controls</h2>
              <div>
                <input type="checkbox" />{" "}
                <p>Autoplay next episode in a seris on all devices</p>
              </div>
              <div>
                <input type="checkbox" />{" "}
                <p>Autoplay previous while browsing on all devices</p>
              </div>
            </div>
          </div>
        </div>
        <div className="profileScreen__footer">
          <button className="save">Save</button>
          <button className="cancel">Cancel</button>
          <button className="signOut" onClick={() => dispatch(logout())}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
