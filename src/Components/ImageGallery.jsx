import React from "react";
import { useEffect } from "react";
import { createApi } from "unsplash-js";

const fetchAndUpdateUnspashImages = (name, setter) => {
  const unsplash = createApi({
    accessKey: "MEr891HYPhFvQZ2hXpi6Yd_wXNyw0u4vuvGnlUqLKW4",
    fetch,
  });
  unsplash.search
    .getPhotos({
      query: `${name}`,
      orderBy: "latest",
      page: 1,
      perPage: 8,
    })
    .then(({ response: { results } }) => {
      console.log(results);
      if (results) setter(results.map(({ urls }) => urls.small));
    });
};

const ImageGallery = ({ name }) => {
  const [images, setImages] = React.useState([]);

  useEffect(() => {
    fetchAndUpdateUnspashImages(name, setImages);
  }, [name]);

  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-4 p-10 bg-gray-400">
      {images.map((url) => (
        <img src={url} alt="result" className="w-full h-full object-cover" />
      ))}
    </section>
  );
};

export default ImageGallery;
