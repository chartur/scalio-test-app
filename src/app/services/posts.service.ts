import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Post} from "../models/post";
import {endpoints} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  constructor(
    private http: HttpClient
  ) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(endpoints.getPosts)
  }

  getPost(postId: string): Observable<Post>{
    const url = endpoints.getPost.replace(':id', postId);
    return this.http.get<Post>(url)
  }
}
