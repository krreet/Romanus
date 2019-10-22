import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  active = false;
  focus = false;
  animate = true;
  inputVal: number;
  interval: any;

// This method is a click listener on the button which either converts an input to roman no or shows an error
  clickEvent() {
    if (this.inputVal <= 3999 && this.inputVal > 0 && Number.isInteger(this.inputVal)) {
      this.router.navigateByUrl('result' + '/' + this.inputVal);

    } else {

      if (this.active && typeof this.inputVal !== 'undefined') {

        Swal.fire({
          title: 'This System expects a natural number in the range of 1 to 3999',
          html:
            '<a href="https://en.wikipedia.org/wiki/Roman_numerals#cite_ref-12">Help</a> ',
          animation: false,
          customClass: {
            popup: 'animated tada'
          }
        });
      } else {
        this.active = !this.active;
      }
    }


  }

  ngOnInit() {
  }

}
