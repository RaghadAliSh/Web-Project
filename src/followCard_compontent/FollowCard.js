//import
import "./FollowCard.css";
import { MdOutlineAdd } from "react-icons/md";
import { BsFillPersonCheckFill } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CardBody } from "react-bootstrap";
import { getfollow } from "../firebase/firebase";
import { useState, useEffect } from "react";
//function
const FollowCard = () => {
  const [allfriend, setallfriend] = useState([]);

  useEffect(() => {
    const fetchCitiesData = async () => {
      console.log(" CitiesData ");
      try {
        console.log(" CitiesData try ");
        const friendlist = await getfollow();

        setallfriend(friendlist);
        console.log("friendlist", friendlist);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCitiesData();
  }, []); 

  return (
    <Card className="card">
      <Card.Title className="card-title">
        <h3 className="follow-title">Who to follow</h3>
      </Card.Title>

      {allfriend.map((item) => {
        return (
          <Card.Body className="card-friend">
            <Card.Text className="card-photo">
              <img className="card-img" src={item.addimage} alt />
            </Card.Text>
            &nbsp;&nbsp;
            <Card.Text className="card-name">
              <a className="name" href="#">
                {" "}
                {item.name}
              </a>
              <p className="bio">{item.objec}</p>
            </Card.Text>
            <Button variant="primary" className="buttonFollow">
              <MdOutlineAdd className="add" />
            </Button>
          </Card.Body>
        );
      })}

      <CardBody className="veiw-more">
        <Button variant="primary" size="lg" className="veiw-more-button">
          Veiw more
        </Button>
      </CardBody>
    </Card>
  );
};

//export
export default FollowCard;
