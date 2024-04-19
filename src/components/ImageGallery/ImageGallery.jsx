import css from "./ImageGallery.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.objectID}>
          <ImageCard />
        </li>
      ))}
    </ul>
  );
}