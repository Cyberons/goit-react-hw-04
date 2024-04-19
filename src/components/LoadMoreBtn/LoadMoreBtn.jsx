import PropTypes from 'prop-types';
import css from "./LoadMoreBtn.module.css";
import { MdOutlineCloudDownload } from "react-icons/md";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={onClick} type="button">
        <MdOutlineCloudDownload size="18" />
        Load more
      </button>
    </div>
  );
}

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired
};