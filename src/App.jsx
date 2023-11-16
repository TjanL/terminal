import { useState } from "react"
import Login from "./Login"
import Line from "./Line";
import LineScramble from "./LineScramble";

function App() {
    const [loggedin, setLoggedin] = useState(false);
    const [hideMessage, setHideMessage] = useState(false);
    const [lines] = useState([
        { text: "Crack the enigma embedded in the code and unlock the complete details of your mission.", scramble: false },
        { text: "If decoding proves challenging, seek Agent Mojca for discreet assistance in your private chambers to uncover additional clues.", scramble: false },
        { text: "&nbsp;", scramble: false },
        { text: "79.529931071070629, 48.589516428482855", scramble: true },
    ]);
    const [index, setIndex] = useState(1);

    const handleLogin = (password) => {
        if (password.toLowerCase() == "racoon") {
            setLoggedin(true);
            setTimeout(() => {
                setHideMessage(true);
            }, 1500);
        } else {
            window.location.href = "https://www.cia.gov/";
        }
    }

    const onComplete = () => {
        setIndex(index + 1);
    }

    return (
        <div>
            {
                (!loggedin) ? (
                    <div className="p-2 h-screen flex flex-col justify-center">
                        <Login submit={handleLogin} />
                    </div>
                ) : (
                    (!hideMessage) ? (
                        <div className="p-2 h-screen flex flex-col justify-center">
                            <div className="text-center text-5xl bg-green-500 py-4 font-bold font-['Courier_New']">Access granted</div>
                        </div>
                    ) : (
                        <div className="flex flex-col p-1 text-xl font-semibold font-['Courier_New'] gap-1">
                            {
                                lines.slice(0, index).map((line) => (
                                    (!line.scramble) ? (
                                        <Line text={line.text} onComplete={onComplete} />
                                    ) : (
                                        <LineScramble text={line.text} onComplete={onComplete} />
                                    )
                                ))
                            }
                        </div>
                    )
                )
            }
        </div >
    )
}

export default App
