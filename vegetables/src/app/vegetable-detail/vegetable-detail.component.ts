import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vegetable-detail',
  templateUrl: './vegetable-detail.component.html',
  styleUrls: ['./vegetable-detail.component.css']
})
export class VegetableDetailComponent implements OnInit {

  @Input() verdura;

  constructor() { }

  ngOnInit() {
  }

}
