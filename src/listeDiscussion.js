import profil from './image/profil.jpg'
import { useState } from 'react';
function ListeDiscussion(){
    const [user,setUser]= useState([
        {
            nom:"Jane Marie",
            imgSrc: profil,
        },

        ]);
        return(
            <div className='ListeMessage'>
                        <div className='messageReceive'>
                            <div className='messageReceiver'>
                                bonjour!!!
                            </div>
                        </div>
                        <div className='messageSender'>
                            <div className='messageSend'>
                                Tu étais où je te chercher tout la journée et c'est la que tu viens me saluer
                            </div>
                            <div className='profilMessageSender'>
                                <img src={user[0].imgSrc} alt="profile" />
                            </div>
                            
                        </div>
                        
                </div>
        );


}
export default ListeDiscussion