import { useEffect, useState, useRef } from "react";
import Scrambler from "scrambling-text";

function LineScramble(props) {
    const [fired, setFired] = useState(false);
    const [text, setText] = useState(props.text);
    const scramblerRef = useRef(new Scrambler());

    useEffect(() => {
        if (scramblerRef.current && !fired) {
            setFired(true);
            scramblerRef.current.scramble(text, setText, {
                characters: Scrambler.CHARACTERS.ALPHABET,
            });
        }
        if (props.text === text && fired) {
            props.onComplete();
        }
    }, [text]);

    return (
        <div>{text}</div>
    );
}

export default LineScramble;