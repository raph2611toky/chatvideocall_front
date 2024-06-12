import './signup.css';
import bus_map from './image/bus-map.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import rigth from './image/arrowr.svg';
import left from './image/arrowp.svg';
import leftPrecedent from './image/arrow(1) 1.png';
import line from './image/Line 2.png';
import importImage from './image/image.svg';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [id, setId] = useState('')
  const [nom, setNom] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [sexe, setSexe] = useState('');
  const [images, setImages] = useState([]);
  const [motDePasse, setMotDePasse] = useState('');
  const [ConfirmMotDePasse, setConfirmMotDePasse] = useState('');
  const [etape, setEtape] = useState(1); 
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(false);
  const navigate = useNavigate();
  const api = process.env.REACT_APP_API_URL;
  const handleImageChange = (event) => {
    setImages(event.target.files[0]);
  };
    const handleImageClick = () => {
      document.getElementById('imageInput').click();
    };

  const handleNextStep = () => {
    setEtape(etape + 1);
  };
  
  const handlePrevStep = () => {
    setEtape(etape - 1);
  };
  
  const togglePrevActive = () => {
    setIsPrevActive(!isPrevActive);
  };
  
  const toggleNextActive = () => {
    setIsNextActive(!isNextActive);
  };
  const handleSignup = async() => {
    navigate("./signup")
  }
  const handleValider = async() => {
    const formData = new FormData();
    formData.append('name', nom);
    formData.append('contact', contact);
    formData.append('email', email);
    formData.append('genre', sexe);
    formData.append('password', motDePasse);
    formData.append('confirm_password', ConfirmMotDePasse);
    if (images) {
      formData.append('photo', images);
    }
    
    try {
      const response = await axios.post(`${api}api/users/register/`, formData ,{
        headers: {
          'Content-Type': 'multipart/form-data'
         
        }
      });
       setId(JSON.stringify(response.data.id))
       localStorage.setItem("id", id)
       navigate("../discussion")
       console.log(localStorage.getItem('id'))
      
     
    } catch (error) {
       
      console.error('Erreur lors de l\'envoi des données:', error);   }
  }
  
  return (
    <div className="ContainerSignup">
      <div className="ContenuSignup">
       
          
          {etape == 1 && ( 
            <>
            <div className="titleSignup">
            <h1>Information sur le compte</h1>
            </div>
            <div className='contenaireContact'>
              <div className="emailSignup">
                  <label htmlFor="emailSignup">Adresse e-mail</label>
                  <input
                    type="email"
                    id="emailSignup"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='example@gamil.com'
                    className="inputEmailSignup"
                  />
              </div>
              <div className="contactSignup">
                  <label htmlFor="contactSignup">Contact</label>
                  <input
                    type="text"
                    id="contactSignup"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="contactSignup"
                    placeholder='+261 xx xx xxx xx'
                  />
              </div>
            </div>
            <div className="passwordSignup">
              <label htmlFor="passwordSignup">Mot de passe</label>
              <input
                type="password"
                id="passwordSignup"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                className="inputPasswordSignup"
              />
            </div> 
            <div className="confirmPasswordSignup">
              <label htmlFor="confirmPasswordSignup">Confirmation du mot de passe</label>
              <input
                type="password"
                id="ConfirmPassword"
                value={ConfirmMotDePasse}
                onChange={(e) => setConfirmMotDePasse(e.target.value)}
                className="inputConfirmPasswordSignup"
              />
            </div> 
            <div className='buttonSignup'>
                  <button className='buttonPrecedent'> <img src={leftPrecedent} alt="left" /> précédent </button>
                
                
                  <button className='buttonSuivant'onClick={handleNextStep}> <img src={rigth} alt="left" /> suivant </button>
            </div>
           
           
             
            <div className='step'>
              <div className={etape <= 2 ? 'stepOne' : 'stepTwo'}>
                <div className={etape == 1 ? 'ellipseStepOne' : 'ellipseStepTwo'}>
                  1
                </div>
                <img src={line} alt='line' />
              </div>
              <div className='stepTwo'>
                <div className={etape == 3 ? 'ellipseStepOne' : 'ellipseStepTwo'}>
                  2
                </div>
                <img src={line} alt='line' />
              </div>
              <div className='stepTree'>
                <div className={etape == 3 ? 'ellipseStepOne' : 'ellipseStepTwo'}>
                  3
                </div>
                <div className='lineTree'>
                  
                </div>
              </div>
            </div>

            </>
          )}
          {etape == 2 && ( 
            <>
            <div className="titleSignup">
            <h1>Information personnelle</h1>
            </div>
            <div className="nomSignup">
              <label htmlFor="nomSignup">Nom</label>
              <input
                type="nom"
                id="nomSignup"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="nomSignup"
              />
            </div> 


            <div className="genreSignup">
              <label>Genre</label>
              <div className='radioGenre'>
                <input
                  type="radio"
                  id="masculin"
                  name="sexe"
                  value="masculin"
                  checked={sexe === "masculin"}
                  onChange={() => setSexe("masculin")}
                />
                <label htmlFor="masculin">Homme</label>
                <input
                  type="radio"
                  id="feminin"
                  name="sexe"
                  value="feminin"
                  checked={sexe === "feminin"}
                  onChange={() => setSexe("feminin")}
                />
                <label htmlFor="feminin">Femme</label>
              </div>
              
            </div>


            <div className='photoProfilSignup'>
              Photo de profil
              <div className='photoSignup'>       
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  onChange={handleImageChange}
                />
               <div className='textSignupPhoto'>
                 <p>Glisser votre photo ici, ou </p> <p className='creerCompte'>importer</p>
               </div>
               
            </div>
            </div>
          
            <div className='buttonSignup'>
              
                <button className='precedentbuttonClick' onClick={handlePrevStep}> <img src={left} alt="left" /> précédent </button>
              
                <button className='buttonSuivant' onClick={handleNextStep}> <img src={rigth} alt="left" /> suivant </button>
                
            </div>
           
            <div className='step'>
              <div className={etape <= 2 ? 'stepOne' : 'stepTwo'}>
                <div className='ellipseStepOne'>
                  1
                </div>
                <img src={line} alt='line' />
              </div>
              <div className='stepTwo'>
                <div className={etape == 2 ? 'ellipseStepOne' : 'ellipseStepTwo'}>
                  2
                </div>
                <img src={line} alt='line' />
              </div>
              <div className='stepTree'>
                <div className={etape === 3 ? 'ellipseStepOne' : 'ellipseStepTwo'}>
                  3
                </div>
                <div className='lineTree'>

                </div>
              </div>
            </div>

            </>
          )}
          {etape == 3 && ( 
            <>
            <div className="titleSignup">
            <h1>Identification</h1>
            </div>
           
            <div className='photoIdentiteSignup'>
              <div className='photoIdentiteSignupTitre'>
              Photo de profil
              </div>
              <div className='photoIdentiteSignupText'>
              Téléchargez une photo recto de votre Carte Étudiant. Assurez-vous que tous les détails sont clair.
              </div>
              <div className='identiteSignup'>
               
                  <input
                      type="file"
                      id="imageInput"
                      style={{ display: 'none' }}
                      accept="image/*"
                      onChange={handleImageChange}
                    />
               <div className='textSignupPhoto'>
                 <p>Glisser votre photo ici, ou </p> <p className='creerCompte'>importer</p>
               </div>
               
           </div>
            </div>
          
            <div className='buttonSignup'>
               
              <button className='precedentbuttonClick' onClick={handlePrevStep}> <img src={left} alt="left" /> précédent </button>       
               
              <button className="validerbutton" onClick={handleValider}> valider  </button>
                
            </div>
           
            <div className='step'>
              <div className={etape <= 2 ? 'stepOne' : 'stepTwo'}>
                <div className='ellipseStepOne'>
                  1
                </div>
                <img src={line} alt='line' />
              </div>
              <div className='stepTwo'>
                <div className='ellipseStepOne'>
                  2
                </div>
                <img src={line} alt='line' />
              </div>
              <div className='stepTree'>
                <div className={etape == 3 ? 'ellipseStepOne' : 'ellipseStepTwo'}>
                  3
                </div>
                <div className='lineTree'>

                </div>
              </div>
            </div>

            </>
          )}
      </div>
    </div>
  );
}

export default Signup;
