import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public postId: number;

  constructor(
    private router: Router,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
  }

  goToDetailsScreen(): void {
    if (!this.postId) {
      return this.alertService.alert({
        message: 'Id of post is mandatory to input!',
        status: "danger"
      })
    }

    this.router.navigate(['details', this.postId])
  }
}
