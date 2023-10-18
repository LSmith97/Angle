import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../post';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent {
  testPost: Post = {
    _id: "1",
    title: "Test",
    body: "Hello World",
    isEdited: false,
    comments: [],
    user: "User id",
    userName: "Username",
  }
}
