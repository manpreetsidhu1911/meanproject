import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { stringify } from '@angular/core/src/util';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
private posts: Post[] = [];
private postsUpdated = new Subject<Post[]>();
getPosts(){
  // return [...this.posts];
  this.http.get<{message:string,posts:Post[]}>('http://localhost:3000/api/posts')
  .subscribe((postData)=>{
    this.posts = postData.posts;
    this.postsUpdated.next([...this.posts]);
  });

}
getPostUpdateListener(){
  return this.postsUpdated.asObservable();
}
addPost(title:string,content:string){
  const post: Post = { id: null,title : title , content:content};
  this.http.post<{message: string}>('http://localhost:3000/api/posts',post)
  .subscribe((responsData)=>{
console.log(responsData.message);
this.posts.push(post);
this.postsUpdated.next([...this.posts]);
  })

}


  constructor(private http: HttpClient) { }
}
