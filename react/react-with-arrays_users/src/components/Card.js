import React from "react";
import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";

function Card({ user }) {
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        {user.roles.map((role) => (
          <Tag key={role} tag={role} />
        ))}
      </ul>
      <p>{user.about}</p>
      <Button>редагувати</Button>
      <Button buttonType="danger">рахунок</Button>
    </article>
  );
}

export default Card;
