type ImageItemProps = {
  src: string,
  alt: string
}

function ImageItem({ src, alt }: ImageItemProps): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={src} alt={alt} />
    </div>
  );
}

type ImagesGalleryProps = {
  images: string[],
  type: string
}

export default function ImagesGallery({images, type} : ImagesGalleryProps): JSX.Element {
  const MAX_IMAGES_COUNT = 6;
  const photos = images.slice(0, MAX_IMAGES_COUNT);

  return (
    <div className="property__gallery">
      {photos.map((src) => (
        <ImageItem
          key={src}
          src={src}
          alt={type}
        />
      ))}
    </div>
  );
}
