import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users =[];

  user = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    pass_con:"",
    address: "",
    unit: "",
    city: "",
    state: "",
    answer: ""
  }
  success = "";


  onSubmit() {
    console.log("submit function lanuch");
    this.success = "Thank you so much " + this.user.first_name + "we will need send you confirmation email at " + this.user.email;
    this.users.push(this.user); 

    // redefine here as function. Means when this user submit this form request, his data will be cleared.
    // prevent the same user re-submit this form as the second time
    this.user = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      pass_con:"",
      address: "",
      unit: "",
      city: "",
      state: "",
      answer: ""
    }
  }

}
