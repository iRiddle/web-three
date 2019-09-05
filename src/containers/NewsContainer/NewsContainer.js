import React from "react";
import { NavLink } from "reactstrap";

import CardNews from "../../components/CardNews/CardNews";
import Title from "../../components/Title/Title";

import { news } from "../../core/mocks";

import './style.css'

const NewsContainer = () => {
  return (
    <div>
      <div className="news__header">
        <Title h1="Новости" />
        <NavLink href="/">Расходы</NavLink>
      </div>
      {news.map(item => (
        <CardNews
          key={item.id}
          cardTitle={item.title}
          cardSubtitle={item.subtitle}
          cardBody={item.body}
        />
      ))}
    </div>
  );
};

export default NewsContainer;
