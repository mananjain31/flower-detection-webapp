import React, { useEffect } from "react";
import DetailsList from "./DetailsList";

const ResultSection = ({ result }) => {
  const data = result.data;
  const sectionRef = React.useRef(null);
  useEffect(() => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, [result]);
  return (
    <section className="flex flex-col gap-4 p-10 bg-purple-50" ref={sectionRef}>
      <div className=" flex flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-4 md:sticky top-10 h-min bg-purple-50">
          <a
            href={result?.data?.url}
            target="_blank"
            rel="noreferrer"
            className="text-4xl underline"
          >
            {data && data["Flower name"]}
          </a>
          <img src={result.inputImage} alt="result" className="w-full" />
        </div>
        {data ? (
          <DetailsList data={data} />
        ) : (
          <div className="text-2xl">Unable To Fetch Data</div>
        )}
      </div>
    </section>
  );
};

export default ResultSection;
