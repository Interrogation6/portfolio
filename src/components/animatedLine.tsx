import '../styles/animatedLine.css';
import { useMain } from '../hooks/useMain';

export default function AnimatedLine() {
    const { introHidden } = useMain();
    if(introHidden)
        return <div className="fixed bottom-0 animated-line bg-gray-700/50 -z-100"></div>;
}