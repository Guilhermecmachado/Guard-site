import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, OnDestroy {
  showPassword = false;
  message = '';

  ngOnInit(): void {
    document.body.classList.add('login-page');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('login-page');
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    this.message = 'Não foi possível concluir o acesso. Verifique seus dados e tente novamente.';
  }

  onForgot(event: Event): void {
    event.preventDefault();
    this.message = 'Entre em contato com a central de atendimento para recuperar o acesso.';
  }
}