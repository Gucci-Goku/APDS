import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private token!: string;


  constructor(private http: HttpClient) { }
signup (username:string, userpassword: string){
  this.http.post('https://localhost:3000/api/users/signup', {username:username,password: userpassword})
  .subscribe(response =>{
    console.log(response)


  });
}

login (username: string, userpassword:string){
  this.http.post<{token:string}>('https://localhost:3000/api/users/login', {username:username,password: userpassword})
  .subscribe(response =>{
    
    const token = response.token;
    this.token = token;
    console.log(token)

  });
}

getToken(){
  return this.token
;}

}
