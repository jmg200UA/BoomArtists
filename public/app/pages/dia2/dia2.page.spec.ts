import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dia2Page } from './dia2.page';

describe('Dia2Page', () => {
  let component: Dia2Page;
  let fixture: ComponentFixture<Dia2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Dia2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
