import { useMain } from "../hooks/useMain";

function Intro() {
    const { start, setStart, introHidden } = useMain();

    if(!introHidden)
    return (
        <div 
        className={`absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 transition-opacity ease-in-out duration-1000 z-100 ${start ? `opacity-0` : `opacity-100`}`}>
            <h1
            className="fugaz-one-regular text-7xl my-5"
            >Bem Vindo</h1>
            <button
                className="w-25 h-10 text-xl bg-zinc-800/70 fugaz-one-regular absolute right-0 z-100"
                onClick={() => setStart(!start)}  // Use an anonymous function to call `setStart`
            >
                Start
            </button>
        </div>
    );
}

export default Intro;
