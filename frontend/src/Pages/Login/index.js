import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import "./Login.css"

function Login() {
    const navigate = useNavigate()

    useEffect(() => {

    }, [])

    function handleSubmit() {

    }

    return(
        <form className="login-form">
            <h2>Log in:</h2>
            <input type="email" name="email" placeholder="Email Address" required/>
            <input type="password" name="password" placeholder="Password" required/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login