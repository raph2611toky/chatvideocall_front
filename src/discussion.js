import "./discussion.css";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import recent from "./image/recent.svg";
import amis from "./image/amis.svg";
import groupe from "./image/groupe.svg";
import hero1 from "./image/hero1.jpg";
import hero2 from "./image/hero2.jpg";
import hero3 from "./image/hero3.jpg";
import profil from "./image/profil.jpg";
import appel from "./image/appel.svg";
import video from "./image/videp.svg";
import plus from "./image/plus.svg";
import micro from "./image/micro.svg";
import send from "./image/send.svg";
import file from "./image/file.svg";
import { useLocation } from "react-router-dom";
import DiscussionUser from "./discussionUser";
import ListeDiscussion from "./listeDiscussion";
function Discussion() {
  const [active, setActive] = useState("recent");
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchVisible, setSearchVisible] = useState(true);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setSearchVisible(true);
    }
  };
  const handleInputClick = () => {
    setSearchVisible(false);
  };
  const [user, setUser] = useState([
    {
      nom: "Jane Marie",
      imgSrc: profil,
    },
  ]);

  return (
    <div className="contenaireDiscussion">
      <div className="listeDiscussion">
        <div className="headerListeDiscussion">
          <div className="logo">LOGO</div>
          <div className="buttonMode"></div>
        </div>
        <div className="searchDiscussion">
          <input
            className="buttonSearchDiscussion"
            onClick={handleInputClick}
            onChange={handleInputChange}
            value={inputValue}
          />
          <div className="contenuSearchDiscussion">
            <FaSearch size={20} />
            {searchVisible && <p>Rechercher</p>}
          </div>
        </div>
        <div className="optionDiscussion">
          <div
            className={`recentDiscussion ${
              active === "recent" ? "active" : ""
            }`}
            onClick={() => setActive("recent")}
          >
            <img src={recent} alt="recent" />
            <p>Récents</p>
          </div>
          <div
            className={`amisDiscussion ${active === "amis" ? "active" : ""}`}
            onClick={() => setActive("amis")}
          >
            <img src={amis} alt="amis" />
            <p>Amis</p>
          </div>
          <div
            className={`groupeDiscussion ${
              active === "groupe" ? "active" : ""
            }`}
            onClick={() => setActive("groupe")}
          >
            <img src={groupe} alt="groupe" />
            <p>Groupes</p>
          </div>
        </div>
        <DiscussionUser />
      </div>
      <div className="contenuDiscussion">
        <div className="headerContenuDiscussion">
          <div className="profilMessage">
            <img src={user[0].imgSrc} alt="profile" />
          </div>
          <div className="nameSender">{user[0].nom}</div>
          <div className="optionMessage">
            <img src={appel} alt="appel" />
            <img src={video} alt="video" />
            <img src={plus} alt="plus" />
          </div>
        </div>
        <ListeDiscussion />
        <div className="sendMessage">
          <div className="voiceMessage">
            <img src={micro} alt="micro" />
          </div>
          <div className="textMessage">
            <input
              className="inputMessage"
              placeholder="Entrer un message"
            ></input>
            <img src={file} alt="file" />
          </div>
          <div className="iconMessage">
            <img src={send} alt="send" />
          </div>
        </div>
      </div>
      <div className="senderProfil">
        <div className="photoSender">
          <img src={user[0].imgSrc} alt="profile" />
          <br />
          {user[0].nom}
          <p>En ligne </p>
        </div>
        <div className="optionsender">
          <div className="icMessage">
            <img src={appel} alt="appel" />
          </div>
          <div className="icMessage">
            <img src={video} alt="video" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Discussion;
