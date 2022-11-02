import { useState, useEffect } from "react";

const useLoadImages = (context) => {
  const [images, setImages] = useState([]);
  const [imgsLoaded, setImgsLoaded] = useState(false)
  
  const importAll = (r) => {
    return r.keys().map(r);
  };

  useEffect(() => {
    const loadImage = (path) => {

      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = path
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(path)
          }, 2000)

        loadImg.onerror = err => reject(err)
      });
    };

    const data = importAll(context);
    setImages(data);

    Promise.all(data.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err));
  }, [context])


  return {images: images, imgsLoaded: imgsLoaded};

}

export default useLoadImages;