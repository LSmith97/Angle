const BASE_URL = `${process.env.REACT_APP_BASE_URL}/posts`

export async function create(id, data) {
    const url = `${BASE_URL}/${id}/uploads`;
    const res = await fetch(url, { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      enctype: "multipart/form-data",
      body: JSON.stringify(data),
    });
     if (res.ok) {
      return res.json();
    } else {
      console.log(res);
      throw new Error("Invalid Request");
    }
  }

    
