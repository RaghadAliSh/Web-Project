import React from 'react';
import './StoryPeople.css';
const StoryP = (props) => {
  return (
  
    <div className="wrapper">
      <div className='storyp'>
        <img src={props.photo} className="img" alt="..." />
        <div className="overlay">
          <h6 className="name">{props.title}</h6>
        </div>
      </div>
    </div>
  
   
  );
}

export default StoryP;
