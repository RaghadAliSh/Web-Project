//import
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsThreeDots } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { getpost } from "../firebase/firebase";
import "./Post.css";
import { useState, useEffect } from "react";
import { CardBody } from "react-bootstrap";

//function
const Post = () => {
  const [allpost, setallpost] = useState([]);

  useEffect(() => {
    const fetchCitiesData = async () => {
      console.log(" CitiesData ");
      try {
        console.log(" CitiesData try ");
        const postlist = await getpost();
        console.log(" CitiesData list", postlist);

        setallpost(postlist);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCitiesData(); 
  }, []); 

  return (
    <Card className="post">
      {allpost.map((item) => {
        return (
          <Card.Body className="post-body">
            <div className="post-header">
              <Card.Text className="post-photo">
                <img className="post-img" src={item.image} alt />
              </Card.Text>
              &nbsp;&nbsp;
              <Card.Text className="post-info">
                <a className="page-name" href="#">
                  <h3>{item.name}</h3>
                </a>
                <p className="date">9 November at 23:29</p>
              </Card.Text>
              <Button variant="primary" className="button-icon">
                <BsThreeDots className="dot-icon" />
              </Button>
            </div>
            <Card.Text className="post-text">
              <p>{item.text}</p>
            </Card.Text>
            <div className="post-nav">
              <button className="button-post-react">
                <FcLike className="post-react" />
              </button>
              <p className="nav-text"> Louis, Billy and 126 others</p>
              <button className="nav-comment">
                <FaComment className="post-react-comment" />
              </button>
              <p className="nav-text">Comments (12)</p>
            </div>
            <di className="line">
              <hr />
            </di>
            <Card.Text className="post-nav-down">
              <button className="button1-nav-down">
                <CiHeart />
              </button>
              Liked ( {item.like} )
              <button className="button2-nav-down">
                <FaShare />
              </button>
              Share (3)
              <button className="button3-nav-down">
                <IoIosSend />
              </button>
              Send
            </Card.Text>
          </Card.Body>
        );
      })}

      <br />
      <br />
      <Card.Body className="comment-container">
        <ul className="comment-wrap list-unstyled">
          <li className="comment-item">
            <div className="d-flex position-relative">
              <div className="avatar avatar-xs">
                <a href="#!">
                  <img
                    className="avatar-img rounded-circle"
                    src="https://social.webestica.com/assets/images/avatar/06.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="ms-2">
                <div className="bg-light rounded-start-top-0 p-3 rounded">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-1"> Frances Guerrero </h6>
                    <small className="ms-2">5hr</small>
                  </div>
                  <p className="small mb-0">
                    Removed demands expense account in outward tedious do.
                    Particular way thoroughly unaffected projection.
                  </p>
                </div>
                <ul className="nav nav-divider py-2 small">
                  <li className="nav-item">
                    <a className="nav-link" href="#!">
                      {" "}
                      Like (3)
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">
                      {" "}
                      Reply
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">
                      {" "}
                      View 5 replies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="comment-item-nested list-unstyled">
              <li className="comment-item">
                <div className="d-flex">
                  <div className="avatar avatar-story avatar-xs">
                    <a href="#!">
                      <img
                        className="avatar-img rounded-circle"
                        src="https://social.webestica.com/assets/images/avatar/07.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ms-2">
                    <div className="bg-light p-3 rounded">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-1"> Billy Vasquez </h6>
                        <small className="ms-2">15min</small>
                      </div>
                      <p className="small mb-0">
                        Wishing calling is warrant settled was lucky.
                      </p>
                    </div>
                    <ul className="nav nav-divider py-2 small">
                      <li className="nav-item">
                        <a className="nav-link" href="#!">
                          {" "}
                          Like
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#!">
                          {" "}
                          Reply
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <a
              href="#!"
              role="button"
              className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5"
              data-bs-toggle="button"
              aria-pressed="true"
            >
              Load more replies{" "}
            </a>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};

//export
export default Post;
