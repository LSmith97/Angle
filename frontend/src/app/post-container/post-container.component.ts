import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../post';

@Component({
  selector: 'app-post-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent {
  @Input() post!: Post;
}
