// src/components/ResumePage.jsx
import { motion } from "framer-motion";
import { FaFilePdf, FaDownload } from "react-icons/fa";

export default function ResumePage() {
  return (
    <motion.div
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-100 to-white flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-[#d01c28] mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        My Resume
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* View Resume Button */}
        <motion.a
          href="/resume/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-[#d01c28] text-white px-6 py-3 rounded-md shadow-lg text-lg font-semibold transition hover:bg-[#a2161e]"
        >
          <FaFilePdf size={22} />
          View Resume
        </motion.a>

        {/* Download Resume Button */}
        <motion.a
          href="/resume/resume.pdf"
          download="Tanmay_Singh_Resume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-gray-800 text-white px-6 py-3 rounded-md shadow-lg text-lg font-semibold transition hover:bg-gray-700"
        >
          <FaDownload size={20} />
          Download Resume
        </motion.a>
      </div>
    </motion.div>
  );
}
