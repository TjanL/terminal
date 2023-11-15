import { useState } from "react";

function Login(props) {
    const [password, setPassword] = useState("");

    const handleInput = (event) => {
        setPassword(event.currentTarget.value);
    }

    const handleOK = () => {
        setPassword("");
        props.submit(password);
    }

    return (
        <div className="font-['Courier_New'] font-bold bg-black text-white p-2">
            <div className="text-3xl text-center">Password</div>
            <input autoFocus className="outline-none p-1 my-5 border-2 bg-transparent block w-full text-6xl" type="password" value={password} onChange={handleInput} />
            <div className="text-center">
                <button onClick={handleOK} className="text-2xl">OK</button>
            </div>
        </div>
    );
}

export default Login;