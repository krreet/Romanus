import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RomanService } from '../roman.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private romanService: RomanService) { }
  arabNum: number;
  result = 'pending';
  ngOnInit() {
    this.arabNum = this.activatedRoute.snapshot.params.id;
    this.result = this.romanService.getRoman(this.arabNum);
  }
}
