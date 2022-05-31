import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {
  notificationsCount = 0;
  notificationsCount$: Observable<number>;
  constructor(private notificationsService:NotificationsService) { }

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationsService.count$;
  }


  getCountValue(calback){
    this.notificationsCount$.pipe(first()).subscribe(calback);
  }

  addNotification() {
    this.getCountValue((value) => {
      this.notificationsService.setCount(++value);
    })
  }

  /*

    function add(val1, val2){
return val1+val2;
    }

    x = add(1,2)
    x = (y,z) => y+z;

    k=x(1,2)
  */

  removeNotification() {
    
    this.getCountValue((value) => {
      if(value == 0){
        return;
      }
      this.notificationsService.setCount(--value);
    })
  }

  resetCount() {
    this.getCountValue((value) => {
      this.notificationsService.setCount(0);
    })
  }

}
