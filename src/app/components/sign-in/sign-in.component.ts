import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  signInForm!: FormGroup;
  private subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  signIn() {
    const username = this.signInForm.get('username')?.value;
    const password = this.signInForm.get('password')?.value;

    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['./users']);
    } else {
      alert('Username or password is incorrect');
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
