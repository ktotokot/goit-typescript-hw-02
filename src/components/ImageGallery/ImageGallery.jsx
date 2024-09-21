import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className={css.galleryList}>
      {items.map(({ id, alt_description, urls }) => (
        <li className={css.imageCard} key={id}>
          <ImageCard
            alt_description={alt_description}
            urls={urls}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
