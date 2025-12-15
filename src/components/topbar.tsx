import { useMain } from '../hooks/useMain';
import '../styles/topbar.css';

export function Topbar() {
    const { introHidden } = useMain();
    return (
        <div className={`!fixed top-0 transition-opacity duration-2000 ${introHidden ? `opacity-100` : `opacity-0`} left-0 w-full h-16 border-b border-gray-600 flex items-center px-4 z-100 animated-wave`}>
            {/* <h1 className="fugaz-one-regular text-2xl text-white">Kelvyn Dantas</h1> */}
        </div>
    );
}

export default Topbar;