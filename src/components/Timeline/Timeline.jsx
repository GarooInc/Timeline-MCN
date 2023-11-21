import React, {useState, useRef, useEffect} from "react"
import PropTypes from "prop-types"

const Timeline = ({ imgsource, text, left }) => {
    const [highlight, setHighlight] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const { top } = ref.current.getBoundingClientRect();
                const { innerHeight } = window;
                
                if (top <= innerHeight * 0.2) { // Ajusta este valor según sea necesario
                    setHighlight(true);
                } else {
                    setHighlight(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return(
        <div className="mt-8" ref={ref}>
        <div className="z-0 absolute w-2 h-full bg-mcn-blue shadow-md inset-0 left-17 md:mx-auto md:rigth-0 md:left-0 grow-line-animation">

        </div>
        <div className="relative z-10">
            <div className="w-full h-24 md:flex md:justify-center md:items-center md:absolute">
                <img src={imgsource}
                alt="timeline"
                className="timeline-img" 
            />
            </div>
            <div className={left ? "timeline-container timeline-container-left" : "timeline-container"}>
                <div aria-hidden="true" 
                className={left ? "timeline-pointer timeline-pointer-left" : "timeline-pointer"}>
                </div>
                <div className={`bg-white p-6 rounded-md custom-shadow ${highlight ? "highlighted-content" : ""}`}>
                    <span className="text-mcn-orange font-bold text-lg w-full">Lorem ipsum dolor sit amet</span>
                    <p className="text-gray-500 text-sm mt-2">{text}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

Timeline.propTypes = {
    imgsource: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    left: PropTypes.bool.isRequired
}



export default Timeline