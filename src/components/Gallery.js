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
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
      >
        <Masonry gutter="10px">
          {images.map((image, i) => (
            <LazyLoadImage
              key={i}
              alt="category"
              src={image}
              className="img-fluid my-1"
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
