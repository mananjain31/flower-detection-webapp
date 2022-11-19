import React from "react";
import UploadFormSection from "Components/UploadFormSection";
import withLayout from "Utils/withLayout";
import MiniResultSection from "Components/MiniResultSection";
import ImageGallery from "Components/ImageGallery";

const MainPage = () => {
  const [imageData, setImageData] = React.useState(null);
  const [imageName, setImageName] = React.useState(null);
  const [result, setResult] = React.useState({
    show: false,
    // inputImage: "https://garden.org/pics/2020-01-01/csandt/b0fbde-500.jpg",
    inputImage: null,
    // data: DUMMY_RESULT_DATA,
    // data: { name: "Blue Daisy (Felicia amelloides)", Accuracy: "90" },
    data: null,
  });

  const openResult = (inputImage, data) => {
    setResult({ show: true, inputImage, data });
  };

  return (
    <div>
      <UploadFormSection
        imageData={imageData}
        setImageData={setImageData}
        imageName={imageName}
        setImageName={setImageName}
        openResult={openResult}
      />
      {result.show && (
        <>
          <MiniResultSection result={result} />
          <ImageGallery name={result?.data?.name} />
        </>
      )}
    </div>
  );
};

export default withLayout(MainPage);
