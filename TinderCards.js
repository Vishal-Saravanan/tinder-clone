import React, { useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';


function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Rayan Gosling',
      url: 'https://th.bing.com/th/id/R.1b5dcb48890204732ba6befacb385d96?rik=Gx1WkcxNeCyijA&riu=http%3a%2f%2fath2.unileverservices.com%2fwp-content%2fuploads%2fsites%2f4%2f2017%2f12%2fryan-gosling-comb-over.jpg&ehk=i7nP1KOBB3ml4qXNX42ypQHZ9NScRNXTx0fY5FRe3h4%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      name: 'Rayan Reynolds',
      url: 'https://th.bing.com/th/id/R.96bccfcf3e00ca731a97649fce827d4c?rik=IJowxURtZ52niA&riu=http%3a%2f%2finfostarr.com%2fwp-content%2fuploads%2f2018%2f01%2fRyan-Reynolds-actor-802x1024.jpg&ehk=8K40rMsYtR9xr6pyc6bBoPQsG0tTTP1z0lHQlqnkiHY%3d&risl=&pid=ImgRaw&r=0',
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    // setLastDirection(direction)
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen');
  };

  return (
    <div className='tinderCards'>
      <div className='tinderCards__cardContainer'>
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
            style={{ backgroundImage: `url(${person.url})` }}
            className='card'
            >
                <h3>{person.name}</h3>
                
            </div>

            
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
