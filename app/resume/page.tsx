'use client';

const Resume = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center px-4 py-8 relative">
            <div className="w-full max-w-6xl h-[90vh] rounded-lg overflow-hidden shadow-lg">
                <iframe
                    src="https://drive.google.com/file/d/1uIRtIOgtNeHI1Xw-kO39y5cNbfQNq_eY/preview"
                    className="w-full h-full"
                    allow="autoplay"
                    loading="lazy"
                    style={{ backgroundColor: 'white' }}
                ></iframe>
            </div>
        </div>
    );
};

export default Resume;
