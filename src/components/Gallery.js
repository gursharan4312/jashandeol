import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Lightbox from "react-image-lightbox";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = ({ images }) => {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const toogleLightbox = (image) => {
    setSelectedImageIndex(images.indexOf(image) || 0);
    setOpenLightbox(!openLightbox);
  };

  return (
    <div className="gallery">
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          420: 1,
          600: 2,
          768: 3,
          1200: 4,
          1920: 5,
        }}
      >
        <Masonry gutter="0.3rem">
          {images.map((image, i) => (
            <LazyLoadImage
              key={i}
              alt="category"
              src={image}
              className="img-fluid"
              effect="blur"
              onClick={() => toogleLightbox(image)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {images && openLightbox && (
        <Lightbox
          mainSrc={images[selectedImageIndex]}
          nextSrc={images[(selectedImageIndex + 1) % images.length]}
          prevSrc={
            images[(selectedImageIndex + images.length - 1) % images.length]
          }
          onCloseRequest={toogleLightbox}
          onMovePrevRequest={() =>
            setSelectedImageIndex(
              (selectedImageIndex + images.length - 1) % images.length
            )
          }
          onMoveNextRequest={() =>
            setSelectedImageIndex((selectedImageIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default Gallery;
