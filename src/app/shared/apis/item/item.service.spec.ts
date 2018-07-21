import { TestBed, inject } from '@angular/core/testing';
import { AngularFirestore } from 'angularfire2/firestore';

import {
  AngularFirestoreStubService
} from '../../../mock/angular-firestore.stub.service';
import { ItemService } from './item.service';

describe('ItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItemService,
        {provide: AngularFirestore, useClass: AngularFirestoreStubService },
      ]
    });
  });

  it('should be created', inject([ItemService], (service: ItemService) => {
    expect(service).toBeTruthy();
  }));
});
