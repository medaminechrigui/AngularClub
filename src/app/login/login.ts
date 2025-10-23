import { Component } from '@angular/core';
import { User } from '../model/User';
import { FormsModule } from '@angular/forms';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styles: ``
})
export class Login {
  user = new User();
  erreur=0;
  constructor(public auth : Auth,
private router: Router) { }
  onLoggedin(){
console.log(this.user);
 let isValidUser: Boolean = this.auth.SignIn(this.user);
if (isValidUser)
this.router.navigate(['/']);
else
//alert('Login ou mot de passe incorrecte!');
this.erreur=1;
}

}
