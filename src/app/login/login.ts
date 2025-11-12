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
  err:number = 0;
  constructor(public auth : Auth,
private router: Router) { }
  onLoggedin() {
  this.auth.login(this.user).subscribe((data) => {
      let jwToken = data.headers.get('Authorization')!;
      this.auth.saveToken(jwToken);
      this.router.navigate(['/']);
    },
    (erreur) => { this.err = 1; }
  );
}
}
