import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post} from '../post.model';
import { NgForm, FormGroup, FormControl,  Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PostServiceService } from '../post-service.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  // @Output()
  // postCreated = new EventEmitter<Post>();
  postForm: FormGroup;


  onAddPost(form: NgForm) {
    if(form.invalid){
      return;
    }
    // const post: Post ={
    //   title: form.value.enteredTitle,
    //   content: form.value.enteredContent
    // }
    // this.postCreated.emit(post);
    this.post.addPost(form.value.enteredTitle,form.value.enteredContent);
    form.resetForm();
  }

  constructor(public post : PostServiceService) { }

  ngOnInit() {

    }


  }

