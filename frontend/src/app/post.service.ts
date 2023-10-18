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
}
