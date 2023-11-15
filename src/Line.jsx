import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Line(props) {
    const ref = useRef(null);

    useEffect(() => {
        let typed;
        if (ref.current) {
            typed = new Typed(ref.current, {
                strings: [props.text],
                typeSpeed: 50,
                showCursor: false,
                onComplete: onComplete
            });
        }

        return () => {
            typed.destroy();
        }
    }, []);

    const onComplete = () => {
        props.onComplete();
    }

    return (
        <div ref={ref}></div>
    );
}

export default Line;