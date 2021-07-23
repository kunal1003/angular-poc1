import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StudentRegistrationService } from '../student-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

id:number;
users:any;
name:string;
pincode:string;
surname:string;
stringjson:any;

  public deleteuser(id:number){

    let resp = this.service.deleteuser(id);
    resp.subscribe((data)=>this.users=data);

  }

  public finduserbyid(){
    let resp= this.service.getUserbyid(this.id);
    resp.subscribe((data)=>this.users=data);

  }

  public finduserbyname(){
    let resp = this.service.getUserbyname(this.name);
    resp.subscribe((data)=>this.users=data);
  }

  public finduserbypin(){
    let resp = this.service.getuserbypin(this.pincode);
    resp.subscribe((data)=>this.users=data);
  }
  public finduserbysurname(){
    let resp = this.service.getUserBySurname(this.surname);
    resp.subscribe((data)=>this.users=data);
  }



  constructor(private service:StudentRegistrationService) { }

  ngOnInit() {

    let resp = this.service.getUser();
    resp.subscribe((data)=>this.users=data); 

    
  }

}
