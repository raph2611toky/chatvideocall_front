import './login.css';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {message} from 'antd';



function Login() {
    const [ip, setIp]  = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
   

    const handleSignupLogin = () => {
        navigate('../signup');
    }

    const handleLogin = async () => {
        const api = process.env.REACT_APP_API_URL;
        try {
            const response = await axios.post(`${api}api/users/login/`, { email, password });
            console.log(response.data.id);
            message.success('Connecté avec succès');
            localStorage.setItem("user", JSON.stringify(response.data.id));
            navigate('../discussion',{ state: { email } });
        } catch (error) {
            console.error(error);
            message.error('Une erreur s\'est produite lors de la connexion.');
        }
    }

        
  return (
    <div className="ContenaireLogin">
        <div className='BackgroundLogin'>
           
        </div>
        <div className='LoginForm'>          
            <div className="login" >
                <div className='titreLogin'>
                    <p>
                        Connexion
                    </p>
                </div>
               
                <div className='email'>
                    <label>
                        Adresse e-mail
                    </label>
                    <input className='inputEmail' placeholder='example@gmail.com' type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>

                    </input>
                </div>
                <div className='password'>
                    <label>
                        Password
                    </label>
                    <input className='inputPassword' placeholder='Entrer votre password' type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>

                    </input>
                </div>
                <div className='oublier'>
                        <p>
                            Mot de passe oublié
                        </p>
                </div>
                <div className='connexion'>
                    <button className='buttonLogin' onClick={handleLogin}>
                        SE CONNECTER
                    </button>
                </div>
                <div className='signupLogin'>
                    <p className='pasDeCompte'>
                        Vous n’avez pas un compte?  
                    </p>
                    <p className='creerCompte' style={{ cursor: 'pointer'}} onClick={handleSignupLogin }>
                        Créer un compte
                    </p>
                </div>
               
            </div>
        </div>
    </div>
  );
}

export default Login;