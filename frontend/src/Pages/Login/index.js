import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { authLogin, checkAuth } from "../../Utilities/auth-service";
import "./Login.css";

function Login() {
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await authLogin(formData);
    } catch (error) {
      console.log(error);
      setErrorMessage(error)
    }
  }

  useEffect(() => {
    handleRequest()
  },[])

  async function handleRequest() {
    try {
      const data = await checkAuth();
      if (data.isLoggedIn) navigate('/')
    } catch (error) {
      console.log(error)
      setErrorMessage(error)
    }
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Log in:</h2>
      <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
