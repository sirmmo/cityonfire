import { CityosService } from './../cityos.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-item',
  templateUrl: './page-item.component.html',
  styleUrls: ['./page-item.component.css']
})
export class PageItemComponent implements OnInit {

  item: any;
  map: string;
  item_name: string;
  mapItem: any;
  constructor(
    private cos: CityosService,
    private route: ActivatedRoute
  ) {
    this.map = this.route.snapshot.params.map;
    this.item_name = this.route.snapshot.params.item;
    cos.getMap(this.map).subscribe(x => {
      this.mapItem = x;
      cos.getLocation(this.item_name).subscribe(y => {
        this.item = y;
      });
    });
    console.log(this.route.snapshot.params);
  }

  ngOnInit() {
    console.log(this.map);
  }

}
