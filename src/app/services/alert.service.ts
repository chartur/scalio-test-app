import {Injectable} from "@angular/core";
import {interval, Observable, take, BehaviorSubject} from "rxjs";
import {Alert} from "../models/alert";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class AlertService {
  private _alert: BehaviorSubject<Alert> = new BehaviorSubject<Alert>(null);
  public alert$: Observable<Alert> = this._alert.asObservable();

  constructor() {
  }

  alert(alert: Alert) {
    this._alert.next(alert);
    interval(environment.alertTimeOut)
      .pipe(
        take(1)
      )
      .subscribe(() => this.dismiss())
  }

  dismiss() {
    this._alert.next(null)
  }
}
