import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  OnInit,
  Input
} from '@angular/core';
import * as jquery from 'jquery';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/resizable';

const $ = jquery;

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[draggableResizer]'
})
export class DraggableResizerDirective implements OnInit {

  @Input() public draggableOnly: boolean;

  @Input() public resizableOnly: boolean;

  @Output() public sizeChanged: EventEmitter<Size> = new EventEmitter();
  @Output() public positionChange: EventEmitter<Position> = new EventEmitter();

  constructor(private _elemRef: ElementRef) { }

  ngOnInit() {

    const thisElement = <any>$(this._elemRef.nativeElement);
    const parent = $('.field-container');

    if (!this.draggableOnly) {

      thisElement.resizable({
        stop: (event, ui) => {
          this.sizeChanged.emit(ui.size);
        }
      });
    }


    if (!this.resizableOnly) {

      thisElement.draggable({
        containment: '.field-container',
        stop: (event, ui) => {
          this.positionChange.emit({
            top: $(this._elemRef.nativeElement).css('top'),
            left: $(this._elemRef.nativeElement).css('left')
          });
        }
      });
    }

  }
}

export interface Position {
  top: string;
  left: string;
}

export interface Size {
  height: number;
  width: number;
}
