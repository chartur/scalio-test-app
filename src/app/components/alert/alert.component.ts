import { Component, OnInit } from '@angular/core';
import {AlertService} from "../../services/alert.service";
import {Observable} from "rxjs";
import {Alert} from "../../models/alert";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  public alert$: Observable<Alert>;

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.alert$ = this.alertService.alert$;
  }
}
