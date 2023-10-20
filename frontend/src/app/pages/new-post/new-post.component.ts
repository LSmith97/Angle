import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Post } from  'src/app/post'
import { PostService } from 'src/app/post.service';
@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [CommonModule, FormBuilder, PostService],
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
 postForm = this.formBuilder.group({
  title: '',
  body: '', 
 })
 onSubmit(): void { 
  this.postService.create(this.postForm.value)
 }
 constructor(
  private postService: PostService,
  private formBuilder: FormBuilder,
) {}
}

