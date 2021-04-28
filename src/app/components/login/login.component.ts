import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as userSelectors from 'app/store/user/user.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  constructor(private store: Store) { }

  ngOnInit(): void {
    
  }

}
