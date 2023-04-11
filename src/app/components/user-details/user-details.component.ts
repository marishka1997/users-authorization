import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/services/models/user.model';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user!: User;
  params!: Params;
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(data => {this.params = data;})
    this.apiService.getUsersID(this.params).subscribe(user => {
      this.user = user;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
