import PropTypes from 'prop-types';
import css from "./ImageCard.module.css";
import { FcLike } from "react-icons/fc";
import { FaUserAlt } from "react-icons/fa";

export default function ImageCard({
  item: {
    alt_description,
    urls: { small },
    likes,
    user: { name },
  },
  onClick
}) {
  return (
    <div className={css.container}>
      <div className={css.imgWrapper}>
        <img
          onClick={() => onClick(small.regular, alt_description)}
          className={css.img}
          src={small}
          alt={alt_description}
          width="210"
          height="130"
        />
      </div>
      <div className={css.textWrapper}>
        <ul className={css.list}>
          <li className={css.item}>
            <FaUserAlt color="rgb(51, 49, 49)" size="12" />
            <p className={css.text}>{name}</p>
          </li>
          <li className={css.item}>
            <FcLike size="12" />
            <p className={css.text}>{likes}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

ImageCard.propTypes = {
  item: PropTypes.string.isRequired,
  urls: PropTypes.shape({
    small: PropTypes.string.isRequired
  }).isRequired,
  
};
