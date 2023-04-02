import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function CardProduct(props) {
  return (
    <div className="col">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Link to={`/detail/${props.id}`}>
          <Card.Link href="#">Detail</Card.Link>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardProduct;
