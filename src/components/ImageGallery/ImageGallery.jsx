import PropTypes from 'prop-types';
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard.jsx";

export default function ImageGallery({ items }) {
  return (
    <ul className={css.list}>
      {items && items.map((item) => (
        <li key={item.objectID}>
          <ImageCard
            alt_description={item.alt_description}
            urls={item.urls}
            likes={item.likes}
            views={item.views}
            downloads={item.downloads}
          />
        </li>
      ))}
    </ul>
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
