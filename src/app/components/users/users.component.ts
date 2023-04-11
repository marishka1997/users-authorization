import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/services/models/user.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[] = [];
  subscription!: Subscription;
  clicked = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.subscription = this.apiService
      .getUsers()
      .subscribe((users: User[]) => (this.users = users));
  }

  onClick() {
    this.clicked = true;
  }

  removeUser(id: number) {
    this.apiService.delete(id).subscribe(() => {
      this.users = this.users.filter((user) => user.id !== id);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
