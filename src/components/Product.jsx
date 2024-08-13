import PropTypes from "prop-types";

export const Product = ({ name, imgUrl, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img
        src={imgUrl}
        alt={name}
        style={{ width: "480px", height: "320px" }}
      />
      <p>Price: {price} credits</p>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};
