import { authService } from "fbase";
import React, { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) => {
        const {target: {name, value}, } = event;
        if (name==="email"){
            setEmail(value);
        }
        else if(name==="password"){
            setPassword(value);
        }
    }

    const onSubmmit = async(event) => {
        event.preventDefault();
        try{
            let data;
            if(newAccount){
                //create newAccount
                data = await authService.createUserWithEmailAndPassword(email, password);
            } else {
                //login
                data = await authService.signInWithEmailAndPassword(email, password);
            }
        } catch(error){
            setError(error.message.substr(9));
        }
    };

    const toggleAccount = () => setNewAccount((prev) => !prev);

    return (
        <div>
            <form onSubmit={onSubmmit}>
                <span onClick={toggleAccount}>
                    {newAccount ? "Sign in" : "Create Account"}
                </span>
                <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange}/>
                <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
                <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
                {error}
            </form>

            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>

        </div>
    )
}

export default Auth;