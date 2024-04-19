import PropTypes from 'prop-types';
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard.jsx";

export default function ImageGallery({ items }) {
  return (
    <div>
      <ul className={css.list}>
        {items.map((item) => (
          <li className={css.item} key={item.id}>
            <ImageCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      alt_description: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired
      }).isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired
    })
  ).isRequired
};
