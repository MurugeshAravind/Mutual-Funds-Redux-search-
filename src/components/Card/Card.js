import { Link } from "react-router-dom";

const Card = (props) => {
  console.log("props sent to card -->", props.cardsData);
  return (
    props.cardsData.length > 0 &&
    props.cardsData.map((card) => (
      <div
        style={{
          border: "1px solid",
          width: "20rem",
          height: "auto",
          float: "left",
          margin: "2rem",
        }}
        key={card.schemeName}
      >
        <Link to={`/${card.schemeCode}`}>{card.schemeName}</Link>
      </div>
    ))
  );
};
export default Card;
