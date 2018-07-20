import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Article } from '../../shared/models/article/article';
import { ArticleService } from '../../shared/apis/article/article.service';
import { ArticleStubService } from '../../shared/apis/article/article.stub.service';
import { ArticlesComponent } from './articles.component';

@Component({selector: 'app-article', template: ''})
class ArticleStubComponent {
  @Input() article: Article;
}

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArticlesComponent,
        ArticleStubComponent
      ],
      providers: [
        {provide: ArticleService, useClass: ArticleStubService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
