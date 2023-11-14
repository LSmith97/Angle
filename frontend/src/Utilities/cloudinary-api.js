const BASE_URL = 'https://api.cloudinary.com/v1_1/angle-uploads/image/upload'

export async function create(data) {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Invalid Request");
    }
  }
  