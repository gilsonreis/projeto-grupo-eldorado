import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public Usuario = {
    status: "",
    email: "",
    password: "",
    data: {
      token: ""
    }
  }
  public hasErrors;
  public errors = [];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  Logar() {
    this.authService.Autenticar(this.Usuario).subscribe(user => {
      const token = user.data.token
      window.localStorage.setItem("_token", token);
      
      this.router.navigate(["/dashboard"])

    }, error => {
      this.hasErrors = true;

      if (error.status === 401) {
        this.errors.push(error.error.data.title)
      }

      for(let err of error.error.message) {
        this.errors.push(err.message);
      }
    })
  }

}
