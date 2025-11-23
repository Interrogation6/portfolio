import { useMain } from "../hooks/useMain";

function Intro() {
    const { start, setStart } = useMain();  // Get the `start` state and `setStart` function

    return (
        <div>
            {/* position center of screen */}
            <button
                className="w-25 h-10 text-xl absolute top-1/2 left-1/2 bg-zinc-800/70 fugaz-one-regular"
                onClick={() => setStart(!start)}  // Use an anonymous function to call `setStart`
            >
                Start
            </button>
        </div>
    );
}

export default Intro;
