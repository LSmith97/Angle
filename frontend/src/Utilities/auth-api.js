const BASE_URL = `${process.env.REACT_APP_BASE_URL}/users`

export async function login(user) {
    const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    });
    
    if (res.ok) {
        return res.json();
    } else {
      throw new Error("Invalid Request");
    }
  }