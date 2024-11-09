"use client";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
const PdfViewer = ({ url }: any) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="h-screen w-screen">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <div className="w-4/5 h-4/5 mx-auto my-auto">
            <Viewer
            fileUrl={url}
            plugins={[defaultLayoutPluginInstance]}
            />
        </div>
        
      </Worker>
    </div>
  );
};
export default PdfViewer;