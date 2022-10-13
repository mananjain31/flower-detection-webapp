import React from "react";
import ResultSection from "Components/ResultSection";
import UploadFormSection from "Components/UploadFormSection";
import withLayout from "Utils/withLayout";
import { DUMMY_RESULT_DATA } from "Constants/dummyData";

const MainPage = () => {
  const [imageData, setImageData] = React.useState(null);
  const [imageName, setImageName] = React.useState(null);
  const [result, setResult] = React.useState({
    show: true,
    inputImage: "https://garden.org/pics/2020-01-01/csandt/b0fbde-500.jpg",
    data: DUMMY_RESULT_DATA,
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
      {result.show && <ResultSection result={result} />}
    </div>
  );
};

export default withLayout(MainPage);
