import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(null);

  constructor() { }

  addUser(nom: string) {
    if (this.users.value === null) {
      { this.users.next([nom])}
    } else {
      const users = this.users.value.slice();
      users.push(nom);
      this.users.next(users);
    }
  }
}
