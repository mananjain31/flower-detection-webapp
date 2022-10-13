import React from "react";
import DetailsList from "./DetailsList";

const ResultSection = ({ result }) => {
  const data = result.data;
  if (!data) return null;
  return (
    <section className="flex flex-col gap-4 p-10 bg-purple-50">
      <div className=" flex flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-4 md:sticky top-10 h-min bg-purple-50">
          <a
            href={result?.data?.url}
            target="_blank"
            rel="noreferrer"
            className="text-4xl underline"
          >
            {data["Flower name"]}
          </a>
          <img src={result.inputImage} alt="result" className="w-full" />
        </div>
        <DetailsList data={data} />
      </div>
    </section>
  );
};

export default ResultSection;
