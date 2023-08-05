import React, { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (event) => {
        const {target: {name, value}, } = event;
        if (name==="email"){
            setEmail(value);
        }
        else if(name==="password"){
            setPassword(value);
        }
    }

    const onSubmmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={onSubmmit}>
                <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange}/>
                <input name="password" type="text" placeholder="Password" required value={password} onChange={onChange}/>
                <input type="submit" value="Login" />
            </form>

            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>

        </div>
    )
}

export default Auth;