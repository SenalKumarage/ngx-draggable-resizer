# ngx-draggable-resizer

A light-weight jquery-ui based directive in Angular for resizing and dragging elements. 

DEMO:

## Features
- Element resize
- Element drag
- OnPositionChange event listener
- OnSizeChange event listener

## Dependencies
- Angular 7.x
- jquery 3.x
- jquery-ui 1.x

## Install
```bash
npm install ngx-draggable-resizer --save
```

## Setup
- **Step 1:** Importing the module
```typescript
import { CommonModule } from '@angular/common';

import { NgxDraggableResizerModule } from 'NgxDraggableResizerModule';

@NgModule({
  imports: [
    CommonModule,
    NgxDraggableResizerModule // NgxDraggableResizerModule added
  ],
  bootstrap: [App],
  declarations: [App]
})
class MainModule {}
```
- **Step 2:** Adding styles
    - If you are using sass you can import the css
    ```scss
    // regular style toast
    @import '~ngx-draggable-resizer/css/ngx-draggable-resizer.css';
    ```
    - Or if you are using angular-cli you can add this to your angular.json
    ```ts
    "styles": [
        "styles.scss",
        "./node_modules/ngx-draggable-resizer/css/ngx-draggable-resizer.css"
    ]
    ```

## Usage
```html
<div draggableResizer style="background:red;width: 100px;height: 100px;"></div>
```

## Options

| Name              | Description                            |                                                              | ----------------- | -------------------------------------- | 
| sizeChanged       | Triggers when the element gets resized |
| positionChange    | Triggers when the element gets moved   |

## Events

| Option            | Type                           | Default           | Description                                                                                                                               |
| ----------------- | ------------------------------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| draggableOnly    | boolean                      | false             | Whether the element can only be dragged                                                                                                       |
| resizableOnly       | boolean                        | false             | Whether the element can only be resized

## License
MIT
