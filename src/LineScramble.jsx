import { useEffect, useState, useRef } from "react";
import Scrambler from "scrambling-text";

function LineScramble(props) {
    const [fired, setFired] = useState(false);
    const [text, setText] = useState("");
    const scramblerRef = useRef(new Scrambler());

    useEffect(() => {
        if (scramblerRef.current && !fired) {
            setFired(true);
            scramblerRef.current.scramble(props.text, setText, {
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