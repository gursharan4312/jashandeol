import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Lightbox from "react-image-lightbox";

const Gallery = ({ images }) => {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const toogleLightbox = (image) => {
    setSelectedImageIndex(images.indexOf(image) || 0);
    setOpenLightbox(!openLightbox);
  };

  var colNum = 0;
  var col1Images = [];
  var col2Images = [];
  var col3Images = [];
  var col4Images = [];
  images.forEach((image) => {
    if (colNum === 0) col1Images.push(image);
    else if (colNum === 1) col2Images.push(image);
    else if (colNum === 2) col3Images.push(image);
    else if (colNum === 3) col4Images.push(image);
    colNum = (colNum + 1) % 4;
  });
  return (
    <>
      <div className="col-10 col-lg-3 col-md-4 col-sm-6 mx-auto">
        {col1Images.map((image, i) => (
          <LazyLoadImage
            key={i}
            alt="category"
            src={image}
            className="img-fluid my-2"
            effect="blur"
            onClick={() => toogleLightbox(image)}
          />
        ))}
      </div>
      <div className="col-10 col-lg-3 col-md-4  col-sm-6 mx-auto">
        {col2Images.map((image, i) => (
          <LazyLoadImage
            key={i}
            alt="category"
            src={image}
            className="img-fluid my-2 img"
            effect="blur"
            onClick={() => toogleLightbox(image)}
          />
        ))}
      </div>
      <div className="col-10 col-lg-3 col-md-4  col-sm-6 mx-auto">
        {col3Images.map((image, i) => (
          <LazyLoadImage
            key={i}
            alt="category"
            src={image}
            className="img-fluid my-2"
            effect="blur"
            onClick={() => toogleLightbox(image)}
          />
        ))}
      </div>
      <div className="col-10 col-lg-3 col-md-4  col-sm-6 mx-auto">
        {col4Images.map((image, i) => (
          <LazyLoadImage
            key={i}
            alt="category"
            src={image}
            className="img-fluid my-2"
            effect="blur"
            onClick={() => toogleLightbox(image)}
          />
        ))}
      </div>
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
    </>
  );
};

export default Gallery;
