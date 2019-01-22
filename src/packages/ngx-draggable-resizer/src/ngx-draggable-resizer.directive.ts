import {
    Directive,
    ElementRef,
    Output,
    EventEmitter,
    OnInit
} from '@angular/core';

declare let $: any;

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[draggableResizer]'
})
export class DraggableResizerDirective implements OnInit {

    @Output() public sizeChanged: EventEmitter<Size> = new EventEmitter();
    @Output() public positionChange: EventEmitter<Position> = new EventEmitter();

    constructor(private _elemRef: ElementRef) { }

    ngOnInit() {

        const thisElement = $(this._elemRef.nativeElement);
        const parent = $('.field-container');

        thisElement.resizable({
            stop: (event, ui) => {
                this.sizeChanged.emit(ui.size);
            }
        });

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

export interface Position {
    top: string;
    left: string;
}

export interface Size {
    height: number;
    width: number;
}
