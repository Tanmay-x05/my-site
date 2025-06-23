// src/components/ResumePage.jsx
export default function ResumePage() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">My Resume</h1>
        <iframe
          src="/public/resume/resume.pdf"
          className="w-full h-screen"
          title="Resume"
        ></iframe>
      </div>
    );
  }
  