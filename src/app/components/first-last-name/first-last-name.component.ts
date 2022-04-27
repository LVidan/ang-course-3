import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-last-name',
  templateUrl: './first-last-name.component.html',
  styleUrls: ['./first-last-name.component.scss']
})
export class FirstLastNameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  userFirstName: string;

  inputValue(userInfo: string): void {
    this.userFirstName = userInfo;
  }
}
