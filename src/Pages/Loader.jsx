const Loader = () => {
    return (
        <>

            <div className="loader-container">
                <svg
                    id="svg"
                    viewBox="0 0 800 800"
                    xmlns="http://www.w3.org/2000/svg"
                    className="spin"
                >
                    <circle
                        className="spin2"
                        cx="400"
                        cy="400"
                        fill="none"
                        r="200"
                        strokeWidth="50"
                        stroke="#E387FF"
                        strokeDasharray="1257 1400"
                        strokeLinecap="round"
                    />
                </svg>
            </div>


        </>
    )

}

export default Loader;