import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../../services/posts.service";
import {AlertService} from "../../services/alert.service";
import {Post} from "../../models/post";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public post: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(({ id }) => this.initDetails(id))
  }

  async initDetails(postId: string): Promise<void> {
    try {
      this.post = await this.postsService.getPost(postId).toPromise();
    } catch (e: any) {
      this.alertService.alert({
        message: e.error.message,
        status: "danger"
      });
      this.router.navigate([''])
    }
  }

  goToHomeScreen() {
    this.router.navigate([''])
  }
}
