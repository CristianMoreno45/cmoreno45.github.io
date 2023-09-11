import { useLayoutEffect, useState } from 'react';
const WindowHook = () => {

    const [currentindow, setCurrentindow] = useState(new Currentindow());

    useLayoutEffect(() => {
        function updateSize() {
            const currentindow = new Currentindow();
            currentindow.Width = window.innerWidth;
            currentindow.Width = window.innerHeight;
            if (window.innerWidth <= 576) {
                currentindow.Dispositive = 'mobile';
            } else if (window.innerWidth <= 900) {
                currentindow.Dispositive = 'tablet';
            } else {
                currentindow.Dispositive = 'desktop';
            }
            setCurrentindow(currentindow);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return currentindow;
}
export class Currentindow {
    constructor() {
        this.Width = 0;
        this.Height = 0;
        this.Dispositive = 'desktop';
    }
}
export default WindowHook;