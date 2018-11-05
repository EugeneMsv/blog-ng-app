import { TestBed } from '@angular/core/testing';

import { PostRegisterCrudService } from './post-register-crud.service';

describe('PostRegisterCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostRegisterCrudService = TestBed.get(PostRegisterCrudService);
    expect(service).toBeTruthy();
  });
});
