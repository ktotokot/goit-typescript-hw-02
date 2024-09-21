import css from "./ImageCard.module.css";
const ImageCard = ({
  alt_description,
  urls: { small, regular },
  openModal,
}) => {
  return (
    <div>
      <img
        className={css.imageItem}
        onClick={() => openModal(regular, alt_description)}
        src={small}
        alt={alt_description}
      />
    </div>
  );
};

export default ImageCard;
