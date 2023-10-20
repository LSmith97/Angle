import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../post';
import { PostContainerComponent } from 'src/app/post-container/post-container.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, PostContainerComponent],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  posts: Post[] = [
    {
      _id: '1',
      title: 'Test',
      body: 'Hello World',
      isEdited: false,
      comments: [],
      user: 'User id',
      userName: 'Username',
    },
    {
      _id: '2',
      title: 'Test2',
      body: 'Hello World2',
      isEdited: false,
      comments: [],
      user: 'User id2',
      userName: 'Username2',
    },
  ];
}
