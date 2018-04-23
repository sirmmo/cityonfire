import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Injectable()
export class CityosService {
  constructor(
    private db: AngularFireDatabase,
    private sanitizer: DomSanitizer,
  ) {}

  getMaps(batch: number = 50, lastKey?): Observable<any[]> {
    return this.db
      .list('mappingspaces', ref => {
        let r = ref.orderByKey().limitToLast(batch);
        if (lastKey) {
          r = r.startAt(lastKey);
        }
        return r;
      })
      .valueChanges();
  }

  getMap(mapName: string, filters: any = {}): Observable<any[]> {
    return this.db
      .list('mappingspaces', ref => ref.orderByChild('slug').equalTo(mapName).limitToLast(1))
      .valueChanges();
  }

  getLocations(mapId: string, startAt = 0, itemsPerPage = 25): Observable<any[]> {
    // let xx = {};
    // return this.getMap(mapName).map(x => {
    //   xx = x;
    // }).map(x=>{
    //
    // });
    return this.db
      .list('locations', ref => ref.orderByChild('mapping_space').equalTo(mapId))
      .valueChanges();
  }

  getUsers(): Observable<any[]> {
    return this.db
      .list('mappers')
      .valueChanges();
  }


  getLocation(location_slug: any): any {
    return this.db
      .list('locations', ref => ref.orderByChild('slug').equalTo(location_slug).limitToLast(1))
      .valueChanges();
  }

  sanitizeUrlForStyle(url: string) {
    const r = this.sanitizer.bypassSecurityTrustStyle(url);
    return r;
  }
  sanitizeUrl(url: string) {
    const r = this.sanitizer.bypassSecurityTrustUrl(url);
    return r;
  }


  fixImage(medias: any) {
    if (medias) {
      let url = '';
      if (medias.length > 0) {
        url = medias[0].s3_file;
        return this.sanitizeUrl(url);
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  resizeImage(media: string) {
    return media;
  }
}
