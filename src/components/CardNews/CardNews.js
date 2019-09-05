import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

import "./style.css";

const CardNews = ({ cardTitle, cardBody, cardSubtitle }) => {
  return (
    <Card className="card">
      <CardBody className="card__body">
        <CardTitle className="body__title">{cardTitle}</CardTitle>
        <CardSubtitle className="body__subtitle">{cardSubtitle}</CardSubtitle>
        <CardText className="body__info">{cardBody}</CardText>
      </CardBody>
    </Card>
  );
};

export default CardNews;
