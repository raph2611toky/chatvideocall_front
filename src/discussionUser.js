import { useState } from 'react';
import hero1 from './image/hero1.jpg'
import hero2 from './image/hero2.jpg'
import hero3 from './image/hero3.jpg'
import profil from './image/profil.jpg'
function DiscussionUser(){
    const [messages, setMessages] = useState([
        {
          id: 1,
          name: 'Liantsoa Tsiory',
          message: 'Bonjour!!',
          imgSrc: hero1
        },
        {
          id: 2,
          name: 'John Doe',
          message: 'Salut, comment ça va?',
          imgSrc: hero2
        },
        {
            id: 3,
            name: 'Tinah Joel',
            message: 'tu es là?',
            imgSrc: hero3
        },
        {
            id: 4,
            name: 'Jane marie',
            message: 'je suis passer chez toi hier mais il avait personne',
            imgSrc: profil
        },
        {
            id: 5,
            name: 'Lara Tsiory',
            message: 'Bonjour!!',
            imgSrc: hero1
          },
          {
            id: 6,
            name: 'Tinah Joe',
            message: 'tu es là?',
            imgSrc: hero3
        },
     
      ]);
      const truncateMessage = (msg, maxLength) => {
        return msg.length > maxLength ? msg.substring(0, maxLength) + '...' : msg;
      };
return(
    <div className='userDiscussion'>
    {messages.map((msg) => (
        <div key={msg.id} className='userMessage'>
        <div className='profilMessage'>
            <img src={msg.imgSrc} alt="profile" />
        </div>
        <div className='lastMessage'>
            <div className='userLast'>
            {msg.name}
            </div>
            <div className='userLastDiscussion'>
            {truncateMessage(msg.message, 30)}
            </div>
        </div>
        </div>
    ))}
 </div>

);

}

export default DiscussionUser