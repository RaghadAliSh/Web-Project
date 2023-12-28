import React, { useState, useEffect } from 'react';
import './ProfileMenu.css';

import { FcHome } from "react-icons/fc";//for buttons
import { FcBusinessman } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcPlanner } from "react-icons/fc";
import { FcSms } from "react-icons/fc";
import { IoIosNotifications } from "react-icons/io";
import { FcSettings } from "react-icons/fc";


const ProfileMenu = () => {
  const [followersCount, setFollowersCount] = useState('2.5k');//default value 
  const [followingCount, setFollowingCount] = useState('356');
  const [postsCount, setPostsCount] = useState('256');
  const [coverPhoto, setCoverPhoto] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const [bio, setBio] = useState('Id love to change the word,but they wont give me the source code');
  const [username, setUsername] = useState('Sam Lanson');
  const [employmentStatus, setEmploymentStatus] = useState('Web Developer at webestica');

  useEffect(() => { //fetch the number of post,following,followers from the server 
    const fetchData = async () => {
      try {
        
        const followersResponse = await fetch('');
        const followersData = await followersResponse.json();//find the followers
        setFollowersCount(followersData.followersCount);//find the count

        const followingResponse = await fetch('');
        const followingData = await followingResponse.json();
        setFollowingCount(followingData.followingCount);

        const postsResponse = await fetch('');
        const postsData = await postsResponse.json();
        setPostsCount(postsData.postsCount);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  

  return (
    <div className="container">
    <div class="row g-4">
      <div class="col-lg-3">
      <div className="profile-menu">
      <div className="cover-photo" style={{ backgroundImage: `url(${coverPhoto})` }}>
      <a href="p"><img className="cover-img"  src="	https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg" alt=""></img></a>
      </div>

      <div className="profile-details">
      <div className="profilePhoto profilePhoto-lg mt-n5 mb-3" style={{ backgroundImage: `url(${profilePhoto})` }}>
        <a href="p"><img className="profile-img"  src="https://social.webestica.com/assets/images/avatar/07.jpg
" alt=""></img></a>
      </div>
        <div className="user-details">
          <div h3 className="username">{username}</div>
          <div p className="eStatus" >{employmentStatus}</div>
          <div p className="bio"> {bio} </div>
        </div>
        
        <div className="stats">
        
          <div className="stat1"> 
          <div className="count">{postsCount}</div> 
          <p>Posts</p>
          </div>

          <div className="stat2">
          <div className="count">{followingCount}</div> 
          <p> Following</p> 
          </div>

          <div className="stat3"> 
          <div className="count">{followersCount}</div> 
          <p>Followers</p> 
          </div>

        </div>
      </div>

      <div className="buttons">
        
        
        <li button className="button" href=""><FcHome siza='15px' /> Feed</li>
        <li button className="button"><FcBusinessman siza='15px'/> Connections</li>
        <li button className="button"><FcGlobe siza='15px'/> Latest News</li>
        <li button className="button"><FcPlanner siza='15px'/> Events</li>
        <li button className="button"><FcSms siza='15px'/> Groups</li>
        <li button className="button"><IoIosNotifications color ='yellow' border ='black' siza='15px' /> Notifications</li>
        <li button className="button"><FcSettings siza='15px' /> Settings</li>
        
      </div>
      
      <div className="viewProfile">
      <button className="buttonn" >view profile</button>
      </div>
      </div>
      </div>
    </div>
    <div className="more">
    <table> 
    <tbody>
        <tr className ="access">
            <td className="accessButton">About</td>
            <td className="accessButton">Settings</td>
            <td className="accessButton">Support</td>
        </tr>
        <tr className ="access">
            <td className="accessButton">Docs</td>
            <td className="accessButton">Help</td>
            <td className="accessButton">Privacy&terms</td>
        </tr>
        <tr className ="access">
            <td className="accessButtonF">@2023Webstica</td>
        </tr>
    </tbody>
</table>
    </div>
    
      </div>
    
  

  );
};


export default ProfileMenu;
