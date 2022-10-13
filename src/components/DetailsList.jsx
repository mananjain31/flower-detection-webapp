import React from "react";

const DetailsList = ({ data }) => {
  return (
    <div className="flex flex-col gap-6">
      {Object.keys(data).map((key) => {
        let val = data[key];
        if (Array.isArray(val)) {
          val = val.filter((a) => a.length);
          if (val.length === 0) {
            val = "None";
          }
        } else if (!val || val.length === 0) val = "None";
        return (
          <div className="flex flex-col gap-2 text-2xl">
            <div className="font-bold">{key}</div>
            <p className="text-xl">{val}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DetailsList;
