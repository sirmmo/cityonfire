import { Component, OnInit, Input, TemplateRef, ContentChild, ContentChildren, Directive, ViewChild, 
  QueryList, ViewContainerRef, ElementRef} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';

@Directive({
  selector:'slide'
})
export class MnSlideDirective implements OnInit {

  constructor(private _viewContainerRef: ViewContainerRef) { }

  @Input() url;
  @Input() title;
  @Input() text;
  @Input() idx = 0;
  @ContentChild(TemplateRef) content: TemplateRef<any>;

  private _contentPortal: TemplatePortal = null;

  ngOnInit() {
    this._contentPortal = new TemplatePortal(this.content, this._viewContainerRef);
  }
}


@Component({
  selector: '[mn-slideshow]',
  templateUrl: './mn-slideshow.component.html',
  styleUrls: ['./mn-slideshow.component.css'],
})
export class MnSlideshowComponent {
  @Input() height;
  @ContentChildren(MnSlideDirective) slides: QueryList<MnSlideDirective>;
  active_idx = 0;

  go(n) {
    let nidx = this.active_idx;
    nidx += n;
    nidx = nidx % (this.slides.length + 1);
    if (nidx < 0) {
      nidx = this.slides.length - 1;
    }
    this.active_idx = nidx;
  }

  setSlide(n){
    this.active_idx = n;
  }
}
