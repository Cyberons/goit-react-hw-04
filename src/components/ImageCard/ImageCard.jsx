import PropTypes from 'prop-types';
import css from "./ImageCard.css";

export default function ImageCard({
  alt_description,
  urls: { small },
  likes,
  views,
  downloads,
}) {
  return (
    <div className={css.container}>
      <img className={css.img} src={small} alt={alt_description} />
      <ul className={css.list}>
        <li className={css.item}>
          Likes<p className={css.text}>{likes}</p>
        </li>
        <li className={css.item}>
          Views<p className={css.text}>{views}</p>
        </li>
        <li className={css.item}>
          Downloads<p className={css.text}>{downloads}</p>
        </li>
      </ul>
    </div>
  );
}

ImageCard.propTypes = {
  alt_description: PropTypes.string.isRequired,
  urls: PropTypes.shape({
    small: PropTypes.string.isRequired
  }).isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired
};
