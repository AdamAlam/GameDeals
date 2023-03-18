import React from "react";
import { Button, Card } from "react-bootstrap";
import { Deal } from "../../types/Deal.types";
import { saleCalculator } from "../../common/util/saleCalculator";

type Props = {
  deal: Deal;
};

const DealCard = ({ deal }: Props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={deal.thumb} />
      <Card.Body>
        <Card.Title>{deal.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <span style={{ textDecoration: "line-through" }}>
            {deal.normalPrice}
          </span>
          {` ${deal.salePrice}`}{" "}
          {Math.round(
            saleCalculator(Number(deal.salePrice), Number(deal.normalPrice))
          )}
          % Off!
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default DealCard;
