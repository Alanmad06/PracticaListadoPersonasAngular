import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { loginService } from "./login.service";

@Injectable()
export class loginGuardian{
 constructor(private loginService: loginService,
    private router : Router){

 }
 canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
  {
    if(this.loginService.isAutentificado()){
 return true;
    }else{
 this.router.navigate(['login'])
 return false;
    }
  
  }

 

}