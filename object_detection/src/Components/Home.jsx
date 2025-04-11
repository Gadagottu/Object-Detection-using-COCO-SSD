import React from "react";
import { motion } from "framer-motion";

const Home = ({ onStart }) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-start justify-start p-10"
      style={{
        backgroundImage: `url('https://t3.ftcdn.net/jpg/03/18/11/14/360_F_318111476_ijsCRAGJGBP5ilNwMDKpMtIBcoHzrHEP.jpg')`,
      }}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className=" bg-opacity-70 p-10 rounded shadow-lg text-left">
        <h1 className="text-3xl font-bold mb-6 text-green-400">
           Object Detection App
        </h1>
        <p className="text-lg text-white max-w-xl mx-auto mb-6">
          Welcome to the Real-Time Object Detection App Using your webcam and
          the powerful COCO-SSD AI model from TensorFlow.js, this app detects
          and labels everyday objects around you — like people, bottles, books,
          and more — live on screen. Click "Start Camera" to begin detecting in
          real time
        </p>

        <button
          onClick={onStart}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">Start Camera</button>
      </motion.div>
      <p className="absolute bottom-4 right-6 text-white text-sm opacity-80">copyright @ by <span className="font-semibold">Chandra</span></p>

    </div>
  );
};

export default Home;
