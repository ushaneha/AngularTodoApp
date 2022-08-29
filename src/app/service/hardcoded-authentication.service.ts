import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
 
  authenticate(username: any, password: any){
    if(username==="ADMIN" && password ==="ADMIN"){
      sessionStorage.setItem('authenticateUser', username)
    return true;
    }
    return false;
    }
    isUserLoggedIn(){
      let user = sessionStorage.getItem('authenticateUser')
      return !(user === null)
      }
      logout(){
        sessionStorage.removeItem('authenticateUser')
        }  
  constructor() { }
}
