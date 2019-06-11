/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoryItemsService } from './categoryItems.service';

describe('Service: CategoryItems', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryItemsService]
    });
  });

  it('should ...', inject([CategoryItemsService], (service: CategoryItemsService) => {
    expect(service).toBeTruthy();
  }));
});
