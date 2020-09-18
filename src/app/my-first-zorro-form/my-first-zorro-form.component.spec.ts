import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstZorroFormComponent } from './my-first-zorro-form.component';

describe('MyFirstZorroFormComponent', () => {
  let component: MyFirstZorroFormComponent;
  let fixture: ComponentFixture<MyFirstZorroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstZorroFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstZorroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
