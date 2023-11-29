import {useState, useRef, useEffect} from "react"
import PropTypes from "prop-types"

const Timeline = ({ imgsource, text, left, handleVerMasClick, date, event, ficha, link, links }) => {

    const [highlight, setHighlight] = useState(false)
    const ref = useRef(null)
    const showVerMasButton = ficha || (links && links.length > 0);


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
        <div className="z-2 absolute w-2 h-full bg-mcn-blue inset-0 left-17 md:mx-auto md:rigth-0 md:left-0 grow-line-animation">

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
                <div className={`bg-white flex flex-col p-6 mb-2 rounded-md custom-shadow ${highlight ? "highlighted-content" : ""}`}>
                    <span className="text-mcn-orange font-bold text-lg w-full">{event}</span>
                    <span className="text-gray-800 text-sm mt-2 pt-2">{date}</span>
                    <p className="text-gray-500 text-sm mt-2">{text}</p>
                    {
                        link && (
                        <div className="flex flex-col justify-center items-start gap-2">
                            <a href={link} target="_blank" rel="noopener noreferrer" className="text-mcn-blue hover:text-blue-800 py-4 text-xs md:text-l font-bold ">
                            Ver Recurso
                            </a>
                        </div>
                        )
                    }
                    {
                    showVerMasButton && (
                        <button onClick={handleVerMasClick} className="my-2 hover:text-mcn-orange pt-2 border border-mcn-orange text-xs md:text-l rounded-md px-4 py-2 hover:bg-white bg-mcn-orange text-white font-bold">
                            Ver más
                        </button>
                    )
                    }
                </div>
            </div>
        </div>
        </div>
    )
}

Timeline.propTypes = {
    imgsource: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    left: PropTypes.bool.isRequired,
    handleVerMasClick: PropTypes.func.isRequired,
    date: PropTypes.string.isRequired,
    event: PropTypes.string.isRequired,
    ficha: PropTypes.string,
    link: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.string)
}



export default Timeline