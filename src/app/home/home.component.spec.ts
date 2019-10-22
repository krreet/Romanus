import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should activate on clicking the button once', () => {
    const button = fixture.debugElement.nativeElement.querySelector('#main-btn');
    button.click();
    expect(component.active).toBe(true);
  });


  it('should throw error in Alert if input is 0', () => {

    const swal = require('sweetalert2');
    spyOn(swal, 'fire');
    const button = fixture.debugElement.nativeElement.querySelector('#main-btn');
    button.click();
    component.inputVal = 0;
    button.click();
    fixture.detectChanges();
    expect(swal.fire).toHaveBeenCalledTimes(1);
  });

  it('should throw error in Alert if input is greater than 3999', () => {
    const swal = require('sweetalert2');
    spyOn(swal, 'fire');
    const button = fixture.debugElement.nativeElement.querySelector('#main-btn');
    button.click();
    component.inputVal = 4000;
    button.click();
    fixture.detectChanges();
    expect(swal.fire).toHaveBeenCalledTimes(1);
  });

  it('should throw error in Alert if input is a floating point', () => {
    const swal = require('sweetalert2');
    spyOn(swal, 'fire');
    const button = fixture.debugElement.nativeElement.querySelector('#main-btn');
    button.click();
    component.inputVal = 233.87;
    button.click();
    fixture.detectChanges();
    expect(swal.fire).toHaveBeenCalledTimes(1);
  });

  it('should navigate to result if input is a natural number', () => {
    component.inputVal = 123;
    const router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl').and.stub();
    const button = fixture.debugElement.nativeElement.querySelector('#main-btn');
    button.click();
    expect(router.navigateByUrl).toHaveBeenCalledWith('result/123');
  });
});
