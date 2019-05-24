import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post} from '../post.model';
import { PostServiceService } from '../post-service.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy {
  // posts = [
  //   { title: 'First Post', content: 'This is my first post'},
  //   { title: 'Second Post', content: 'This is my second post'},
  //   { title: 'Third Post', content: 'This is my third post'},

  // ]
  @Input()
  posts: Post[] = [];
  postSub:Subscription;


  constructor(public post : PostServiceService) { }

  ngOnInit() {
     this.post.getPosts();
    this.postSub=this.post.getPostUpdateListener()
    .subscribe((posts: Post[])=>{
      this.posts=posts;
    }
    );
  }
  ngOnDestroy(){
    this.postSub.unsubscribe();//so this will unsubscribe and prevent memory leaks
  }

}
