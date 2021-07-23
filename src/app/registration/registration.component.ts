import { Component, OnInit } from '@angular/core';
import { StudentRegistrationService } from '../student-registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    user: User= new User("","","","",""); 
    message:any;


  constructor(private service:StudentRegistrationService ) { }

  ngOnInit(): void {
  }

  public registerNow(){

    let resp = this.service.doRegistration(this.user).subscribe((data)=>this.message=data);
    error=>console.log(error);

  }

}
