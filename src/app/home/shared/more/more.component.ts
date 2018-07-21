import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
