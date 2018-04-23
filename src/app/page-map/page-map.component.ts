import { CityosService } from './../cityos.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-map',
  templateUrl: './page-map.component.html',
  styleUrls: ['./page-map.component.css']
})
export class PageMapComponent implements OnInit {

  items: Observable<any[]>;
  map: string;
  mapItem: any;
  data: any;
  constructor(
    private cos: CityosService,
    private route: ActivatedRoute
  ) {
    this.map = this.route.snapshot.params.map;
    cos.getMap(this.map).subscribe(x => {
      this.mapItem = x[0];
      this.items = cos.getLocations(this.mapItem['id']);
    });
  }

  ngOnInit() {
    console.log(this.map);
    console.log(this.mapItem);
    console.log(this.items);
    this.data = {type: 'FeatureCollection', features: []};
    this.items.subscribe(x => {
      this.data.features.push({type: 'Feature', geometry: x['point'], properties: x});
    });
  }


}
