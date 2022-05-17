import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input()
  user: any
  constructor() { }

  ngOnInit(): void {
  }

}
