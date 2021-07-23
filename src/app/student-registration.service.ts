import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationService {

  constructor( private http:HttpClient) { }


  public doRegistration(user){
  return  this.http.post("http://localhost:8081/adduser1",user,{responseType:'text' as 'json'});

  }

  public getUser(){
  
  return this.http.get("http://localhost:8081/getuser/");
  }

  public getUserbyid(id){
 return this.http.get("http://localhost:8081/getuserbyid/"+id);

  }

  public getUserbyname(name){
 return this.http.get("http://localhost:8081/getuserbyname/"+name);
  }

  public getUserBySurname(surname){
    return this.http.get("http://localhost:8081/getuserbysurname/"+surname);

  }

  public getuserbypin(pincode){
   
    return this.http.get("http://localhost:8081/getuserbypin/"+pincode);
  }

  public deleteuser(id){

    return this.http.delete("http://localhost:8081/delete/"+id);

  }

}
