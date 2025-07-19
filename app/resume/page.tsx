const resume = () => {
    return (
        <>
            <div className="h-[200vh] w-full relative">
                <div className="h-[150vh] w-[50%] m-auto relative flex rounded-lg justify-center items-center top-10">

                    <iframe
                        src="https://drive.google.com/file/d/1uIRtIOgtNeHI1Xw-kO39y5cNbfQNq_eY/preview?usp=embed_googleplus"
                        style={{
                            position: 'absolute',
                            display: 'flex',
                            width: '80%',
                            height: '80%',
                            border: 0,
                        }}
                        className="rounded-lg justify-center items-center scale-[125%]"
                        allowFullScreen
                        
                    ></iframe>
                </div>
            </div>
        </>
    )
};

export default resume;