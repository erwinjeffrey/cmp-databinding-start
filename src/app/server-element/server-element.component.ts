import { element } from 'protractor';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None,Native
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy {
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: String;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchanges called');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDocheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log(
      'Text Content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
  ngOnInit() {
    console.log('ngOnInit called!');
    console.log(
      'Text Content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }
}
