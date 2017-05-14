import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
	constructor(private router: Router) { }
	signIn(data) {
		console.log(data);
		sessionStorage.setItem('currentUser', data.name);
		this.router.navigate(['./home']);
	}
}
