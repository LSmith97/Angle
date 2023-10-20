import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'http://localhost:4000/posts';

  async getPosts(): Promise<Post[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getPostById(id: Number): Promise<Post | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  async create(data: Post): Promise<Post | undefined>  {
    const res = await fetch(this.url, {
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
}
