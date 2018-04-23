import { CityosService } from './../cityos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-maps',
  templateUrl: './page-maps.component.html',
  styleUrls: ['./page-maps.component.css']
})
export class PageMapsComponent implements OnInit {
  items: Observable<any[]>;

  constructor(private cos: CityosService) {
    this.items = this.cos.getMaps();
  }

  ngOnInit() { }

}
