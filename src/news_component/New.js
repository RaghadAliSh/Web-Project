import React, { useState, useEffect } from "react";
import { getnews } from "../firebase/firebase";
import "./New.css";
const News = () => {
  const [view, setview] = useState(2);

  const [allNew, setallNew] = useState([]);

  useEffect(() => {
    const fetchCitiesData = async () => {
      try {

        const newslist = await getnews();

        setallNew(newslist);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCitiesData(); 
  }, []);

  return (
    <div className="news_conteiner">
      <div className="App22">
        <div className="target">Today’s news </div>
        <div className="itemss">
          {allNew.map((item, index) => {
            if (index <= view) {
              return (
                <div className="">
                  <a className="opo" href={item.tit}>
                    {item.namees}
                  </a>
                  <div className="Time">{item.howeee}</div>
                </div>
              );
            }
            return null;
          })}
        </div>
        {view === 4 ? (
          <> </>
        ) : (
          <div
            className="repeat"
            onClick={() => {
              setview(4);
            }}
          >
            {" "}
            ... view all lastes news{" "}
          </div>
        )}
      </div>
    </div>
  );
};
export default News;
