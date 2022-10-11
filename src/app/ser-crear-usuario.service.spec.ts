import { TestBed } from '@angular/core/testing';

import { SerCrearUsuarioService } from './ser-crear-usuario.service';

describe('SerCrearUsuarioService', () => {
  let service: SerCrearUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerCrearUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
