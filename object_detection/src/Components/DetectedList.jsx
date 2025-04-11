import React from "react";

const DetectedList = ({ objects }) => {
  return (
    <div className="mt-4 text-left p-4 ">
      <h3 className="font-bold text-green-400"> Detected Objects:</h3>
      {objects.size > 0 ? (
        <ul className="list-disc ml-6 text-green-400">
          {[...objects].map((obj, idx) => (
            <li key={idx}>{obj}</li>
          ))}
        </ul>
      ) : (
        <p>No objects detected yet...</p>
      )}
    </div>
  );
};

export default DetectedList;
