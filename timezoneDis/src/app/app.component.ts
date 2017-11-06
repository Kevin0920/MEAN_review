import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // num: number = 1;
  // logNum() {
  //   console.log('Click on the button shows: ', this.num);
  // }

  time = new Date();
  theTimeZoneSelected = null;

  getDateByZone(timezone) {
    // call time function
    this.time = new Date();
    if(timezone === 'MST'){
      this.time.setHours(this.time.getHours() + 1);
    }
    else if(timezone === 'CST') {
      this.time.setHours(this.time.getHours() + 2);
    }
    else if(timezone === 'EST') {
      this.time.setHours(this.time.getHours() + 3);
    }
    this.theTimeZoneSelected = timezone;
  }


}
