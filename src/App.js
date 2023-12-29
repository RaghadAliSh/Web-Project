import React from "react";
import StoryAdd from "./Story/StoryAdd";
import StoryPeople from "./Story/StoryPeople";
import "./Story/StoryAdd.css";
import "./Story/StoryPeople.css";
import NavigationBar from "./navbar_component/Navbar";
import ProfileMenu from "./profileMenu-component/ProfileMenu";
import FollowCard from "./followCard_compontent/FollowCard";
import Createpost from "./createPost_component/CreatePost";
import Post from "./post_component/Post";
import { getstory } from "./firebase/firebase";
import { useState, useEffect } from "react";
import News from "./news_component/New";
import "./App.css";
function App() {
  const [allStory, setAllStory] = useState([]);

  useEffect(() => {
    const fetchCitiesData = async () => {
      try {
        const storylist = await getstory();

        setAllStory(storylist);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCitiesData(); 
  }, []); 

  return (
    <div>
      <header className="Navbar">
        <NavigationBar />
      </header>
      <div className="all-component">
        <div>
          <ProfileMenu />
        </div>
        <div className="design">
          <div className="appBasic">
            <div className="scroll">
              <div className="body">
                <div className="story-gallary">
                  <StoryAdd />
                  {allStory.map((item) => {
                    return (
                      <StoryPeople title={item.forname} photo={item.imgg} />
                    );
                  })}

                </div>
              </div>
            </div>
          </div>
          <div className="postes">
            <div className="App">
              <Createpost />
            </div>
            <div className="App">
              <Post />
            </div>
          </div>
        </div>

        <div>
          <FollowCard />
          <News />
        </div>
      </div>
    </div>
  );
}

export default App;
