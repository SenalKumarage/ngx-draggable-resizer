import {
    Directive,
    ElementRef,
    Output,
    EventEmitter,
    OnInit
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

    @Output() public sizeChanged: EventEmitter<Size> = new EventEmitter();
    @Output() public positionChange: EventEmitter<Position> = new EventEmitter();

    constructor(private _elemRef: ElementRef) { }

    ngOnInit() {

        this.loadIfNot('./draggable.css', 'draggable-stylesheet');
        this.loadIfNot('./resizable.css', 'resizable-stylesheet');

        const thisElement = <any>$(this._elemRef.nativeElement);
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

    loadIfNot(url, cssId) {

        if (!document.getElementById(cssId)) {
            const head = document.getElementsByTagName('head')[0];
            const link = document.createElement('link');
            link.id = cssId;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = url;
            link.media = 'all';
            head.appendChild(link);
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
