import React, { useRef, useEffect, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import DetectedList from "./DetectedList";

const Camera = ({ onBack }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [detectedObjects, setDetectedObjects] = useState(new Set());

  useEffect(() => {
    const runDetection = async () => {
      const model = await cocoSsd.load();
      console.log(" Model runing successfull");

      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();

      setInterval(async () => {
        const predictions = await model.detect(videoRef.current);
        updateDetected(predictions.map((p) => p.class));
        draw(predictions);
      }, 300);
    };

    const updateDetected = (current) => {
      setDetectedObjects((prev) => {
        const updated = new Set(prev);
        current.forEach((item) => updated.add(item));
        return updated;
      });
    };

    const draw = (predictions) => {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      predictions.forEach((pred) => {
        const [x, y, width, height] = pred.bbox;
        ctx.strokeStyle = "#00FF00";
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);
        ctx.fillStyle = "#00FF00";
        ctx.font = "14px Arial";
        ctx.fillText(`${pred.class} (${(pred.score * 100).toFixed(1)}%)`, x, y > 10 ? y - 5 : 10);
      });
    };

    runDetection();
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center relative p-4"
    style={{
      backgroundImage:
        "url('https://img.freepik.com/free-photo/ai-technology-brain-background-digital-transformation-concept_53876-124672.jpg?semt=ais_hybrid&w=740')",
    }}>
      <button
        onClick={onBack}
        className="bg-green-400 text-white px-4 py-2 mt-4 rounded hover:bg-gray-800 absolute left-90 top-125 z-10"
      >
         Back to Home
      </button>

      <div className="relative mx-auto w-[640px]">
        <video ref={videoRef} width="640" height="480" className="absolute" />
        <canvas ref={canvasRef} width="640" height="480" className="absolute" />
      </div>

      <DetectedList objects={detectedObjects} />
    </div>
  );
};

export default Camera;
