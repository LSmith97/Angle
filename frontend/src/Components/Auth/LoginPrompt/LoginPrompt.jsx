import LoginButton from "../LoginButton"
import "./LoginPrompt.css"

function LoginPrompt () {
    return (
        <div className="login-prompt">
            <h2>To continue, please sign in</h2>
            <LoginButton/>
        </div>
    )
}

export default LoginPrompt