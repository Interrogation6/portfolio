import { useMain } from "../hooks/useMain";

function Background() {
    const { start, introHidden, setIntroHidden } = useMain();
    return (
        <div>
            {!introHidden && <>
                <div
                    className={`
                        fixed top-0 left-0 w-full h-full -z-99 bg-black outline outline-gray-400
                        transition-transform duration-3000 ease-[cubic-bezier(.46,.01,.82,.46)] 
                        ${start ? "-translate-y-full" : "translate-y-0"}
                    `}
                />
                <div
                    className={`
                        fixed top-0 left-0 w-full h-full -z-99 bg-black/50 outline outline-gray-400
                        transition-transform duration-3000 delay-1000 ease-[cubic-bezier(.46,.01,.82,.46)] 
                        ${start ? "-translate-y-full" : "translate-y-0"}
                    `}
                />
                <div
                    className={`
                        fixed top-0 left-0 w-full h-full -z-99 bg-black/50 outline outline-gray-400
                        transition-transform duration-3000 delay-2000 ease-[cubic-bezier(.46,.01,.82,.46)] 
                        ${start ? "-translate-y-full" : "translate-y-0"}
                    `}
                />
                <div
                    onTransitionEnd={() =>{setIntroHidden(true);}}
                    className={`
                        fixed top-0 left-0 w-full h-full -z-99 bg-black/50 outline outline-gray-400
                        transition-transform duration-3000 delay-3000 ease-[cubic-bezier(.46,.01,.82,.46)] 
                        ${start ? "-translate-y-full" : "translate-y-0"}
                    `}
                />
            </>}
            <div className="fixed top-0 left-0 w-full h-full -z-100 bg-gradient-to-br from-sky-950 to-purple-900" />
        </div>
    );
}

export default Background;
