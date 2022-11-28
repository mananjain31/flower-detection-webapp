import { useState, useEffect, useRef } from "react";
import DetailsList from "./DetailsList";

const MiniResultSection = ({ result }) => {
  const [data, setData] = useState({});
  const sectionRef = useRef(null);
  useEffect(() => {
    if (!result || !result.data) return;
    setData({ accuracy: result.data.accuracy, ...result.data.info });
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, [result]);
  return (
    <section className="flex flex-col gap-4 p-10 bg-purple-50" ref={sectionRef}>
      <div className=" flex flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-4 md:sticky top-10 h-min bg-purple-50">
          <img src={result.inputImage} alt="result" className="w-full" />
        </div>
        {data && <DetailsList data={data} />}
      </div>
    </section>
  );
};

export default MiniResultSection;
