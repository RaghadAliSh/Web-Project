//import
import './FollowCard.css'
import { MdOutlineAdd } from "react-icons/md";
import { BsFillPersonCheckFill } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CardBody } from 'react-bootstrap';

//function
const FollowCard = () => {
    return (
        <Card className="card">
            <Card.Title className="card-title"><h3>Who to follow</h3></Card.Title>

            <Card.Body className="card-body">
                <Card.Text className="card-photo">
                    <img className="card-img" src="https://social.webestica.com/assets/images/avatar/04.jpg" alt />
                </Card.Text>
                &nbsp;&nbsp;
                <Card.Text className="card-name">
                    <a className="name" href="#">Judy Nguyen</a>
                    <p className="bio">News anchor</p>
                </Card.Text>
                <Button variant="primary" className="button"><MdOutlineAdd className="add" /></Button>
            </Card.Body>

            <Card.Body className="card-body">
                <Card.Text className="card-photo">
                    <img className="card-img" src="	https://social.webestica.com/assets/images/avatar/05.jpg" alt />
                </Card.Text>
                &nbsp;&nbsp;
                <Card.Text className="card-name">
                    <a className="name" href="#"> Amanda Reed</a>
                    <p className="bio">Web Developer</p>
                </Card.Text>
                <Button variant="primary" className="button"><MdOutlineAdd className="add" /></Button>
            </Card.Body>

            <Card.Body className="card-body">
                <Card.Text className="card-photo">
                    <img className="card-img" src="https://social.webestica.com/assets/images/avatar/11.jpg" alt />
                </Card.Text>
                &nbsp;&nbsp;
                <Card.Text className="card-name">
                    <a className="name" href="#"> Biily Vasquez</a>
                    <p className="bio">News anchor</p>
                </Card.Text>
                <Button variant="primary" className="button-added"><BsFillPersonCheckFill className="added" /></Button>
            </Card.Body>

            <Card.Body className="card-body">
                <Card.Text className="card-photo">
                    <img className="card-img" src="	https://social.webestica.com/assets/images/avatar/01.jpg" alt />
                </Card.Text>
                &nbsp;&nbsp;
                <Card.Text className="card-name">
                    <a className="name" href="#"> Lori Ferguson</a>
                    <p className="bio">Web Developer..</p>
                </Card.Text>
                <Button variant="primary" className="button"><MdOutlineAdd className="add" /></Button>
            </Card.Body>

            <Card.Body className="card-body">
                <Card.Text className="card-photo">
                    <img className="card-img" src="	https://social.webestica.com/assets/images/avatar/placeholder.jpg" alt />
                </Card.Text>
                &nbsp;&nbsp;
                <Card.Text className="card-name">
                    <a className="name" href="#"> Carolyn Ortiz</a>
                    <p className="bio">News anchor</p>
                </Card.Text>
                <Button variant="primary" className="button"><MdOutlineAdd className="add" /></Button>
            </Card.Body>
            <CardBody className="veiw-more">
            <Button variant="primary" size="lg"className="veiw-more-button">Veiw more</Button>
            </CardBody>
        </Card>

    );
};

//export
export default FollowCard;