import { useEffect, useState } from "react";

const useImageMapper = (imgData, imageContext) => {

  const [imgsMapped, setImgsMapped] = useState(false);

  useEffect(() => {

    const mappings = {
      small: '@1x',
      medium: '@2x',
      large: '@3x',
    };

    const mapImages = (imgData, images) => {
      console.log(images);
      for (let i = 0; i < imgData.length; i++) {
        var imgAssets = collectAssets(images, imgData[i].key);
        mapURLs(imgData[i], imgAssets);
      }
    }

    const mapURLs = (imgElement, imgAssets) => {
      imgElement.images.small = imgAssets.find(name => name.includes(mappings.small));
      imgElement.images.medium = imgAssets.find(name => name.includes(mappings.medium));
      imgElement.images.large = imgAssets.find(name => name.includes(mappings.large));
    }

    // Returns an array containing all the assets that pertain to a specific image
    const collectAssets = (images, key) => {
      return images.filter(name => name.includes(key))
    }

    if (imageContext.imgsLoaded) {
      mapImages(imgData, imageContext.images);
      setImgsMapped(true);
    }
  }, [imgData, imageContext])


  return { imgData, imgsMapped };

}

export default useImageMapper;