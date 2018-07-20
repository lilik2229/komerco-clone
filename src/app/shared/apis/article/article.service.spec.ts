import { TestBed, inject } from '@angular/core/testing';
import { AngularFirestore } from 'angularfire2/firestore';

import {
  AngularFirestoreStubService
} from '../../../mock/angular-firestore.stub.service';
import { ArticleService } from './article.service';

describe('ArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ArticleService,
        {provide: AngularFirestore, useClass: AngularFirestoreStubService },
      ]
    });
  });

  it('should be created', inject([ArticleService], (service: ArticleService) => {
    expect(service).toBeTruthy();
  }));
});
