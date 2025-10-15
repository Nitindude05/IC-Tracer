import React, { useState, useRef, useEffect } from "react";
import { Camera, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";

export default function ScanInterface() {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [opencvReady, setOpenCvReady] = useState(false);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // ✅ Check if OpenCV is loaded
  useEffect(() => {
    const checkOpenCV = setInterval(() => {
      if (window.cv && window.cv.imread) {
        setOpenCvReady(true);
        clearInterval(checkOpenCV);
        console.log("✅ OpenCV.js is ready to use");
      }
    }, 500);
    return () => clearInterval(checkOpenCV);
  }, []);

  // 🧠 Start webcam
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
    } catch (err) {
      setError("Unable to access camera");
    }
  };

  // ⚙️ Handle Scan
  const handleScan = async () => {
    setScanning(true);
    setResult(null);
    setError(null);

    if (!opencvReady) {
      setError("OpenCV not loaded yet. Please wait a moment.");
      setScanning(false);
      return;
    }

    try {
      // Capture a frame from the video
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Read the frame with OpenCV
      const src = cv.imread(canvas);
      const gray = new cv.Mat();
      const edges = new cv.Mat();

      // Convert to grayscale and detect edges
      cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);
      cv.Canny(gray, edges, 80, 150, 3, false);

      // Display processed image
      cv.imshow(canvas, edges);

      // Clean up memory
      src.delete();
      gray.delete();
      edges.delete();

      // ✅ Simulate fake IC detection result (you can later replace this with real AI/ML API)
      setTimeout(() => {
        setResult({
          status: "Authenticity Verified",
          details: "No counterfeit patterns detected in surface analysis.",
        });
        setScanning(false);
      }, 1500);
    } catch (err) {
      console.error(err);
      setError("Error processing image with OpenCV.");
      setScanning(false);
    }
  };

  return (
    <section className="bg-[#0b1b23] text-white py-20 px-6 flex flex-col items-center">
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">
          Integrated Circuit Scanner
        </h2>
        <p className="text-gray-400 mb-10">
          Scan or capture your IC using the built-in camera. Our system uses
          computer vision to detect authenticity through surface analysis.
        </p>

        <div className="flex justify-center mb-6">
          <button
            onClick={startCamera}
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
          >
            <Camera size={22} />
            Enable Camera
          </button>
        </div>

        {/* Video feed */}
        <div className="flex flex-col items-center mb-8">
          <video
            ref={videoRef}
            width="400"
            height="300"
            className="rounded-lg border border-cyan-500 mb-4"
          />
          <canvas
            ref={canvasRef}
            width="400"
            height="300"
            className="rounded-lg border border-cyan-500 hidden"
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleScan}
            disabled={scanning}
            className={`flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 ${
              scanning ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {scanning ? (
              <>
                <Loader2 className="animate-spin" size={22} />
                Scanning...
              </>
            ) : (
              <>
                <Camera size={22} />
                Start Scan
              </>
            )}
          </button>
        </div>

        {/* Result Section */}
        <div className="mt-10 bg-[#10242e] border border-cyan-600/40 rounded-2xl p-6 shadow-lg min-h-[150px]">
          {scanning && (
            <p className="text-cyan-400 animate-pulse">
              Processing image... please wait.
            </p>
          )}

          {result && (
            <div className="flex flex-col items-center">
              <CheckCircle2 className="text-green-400 mb-3" size={40} />
              <h3 className="text-2xl font-semibold mb-2">{result.status}</h3>
              <p className="text-gray-300">{result.details}</p>
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center text-red-400">
              <AlertTriangle size={40} className="mb-2" />
              <p>{error}</p>
            </div>
          )}

          {!scanning && !result && !error && (
            <p className="text-gray-400">
              Click <span className="text-cyan-400 font-medium">Enable Camera</span> and then{" "}
              <span className="text-cyan-400 font-medium">Start Scan</span> to analyze your IC.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
