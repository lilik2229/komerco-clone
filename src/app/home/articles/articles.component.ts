import { Component, OnInit } from '@angular/core';

import { Article } from '../../shared/models/article/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles:Article[] = new Array;
  
  constructor() { }

  ngOnInit() {
  }

}
