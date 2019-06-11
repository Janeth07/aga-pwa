import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private authService:AuthService, private router:Router){}
  canActivate(){
    if (this.authService) {//despues del authservice va el metodo de autentificacion 
      //Login True
      return true;
    }else{
      this.router.navigate(['login'])///adentro de los parentesis va la ruta a donde se va a direccionar
return false;
    }
   
  }
}
