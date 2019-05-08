# ngx-draggable-resizer

A light-weight jquery-ui based directive in Angular for resizing and dragging elements. 

DEMO: https://senalkumarage.github.io/ngx-draggable-resizer-demo/

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

import { NgxDraggableResizerModule } from 'ngx-draggable-resizer';

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
- **Step 3:** Including jQuery
    - This step is not relevant if you have already setup jQuery in your project
    - In your `angular.json` file
    ```json
    "scripts": [
        "./node_modules/jquery/dist/jquery.min.js"
    ]
    ```
## Usage
```html
<div draggableResizer style="background:red;width: 100px;height: 100px;"></div>
```
## Options

| Option        | Type    | Default | Description                             |
| ------------- | ------- | ------- | --------------------------------------- |
| draggableOnly | boolean | false   | Whether the element can only be dragged |
| resizableOnly | boolean | false   | Whether the element can only be resized |

## Events

| Name           | Description                            | Returns                           |
| -------------- | -------------------------------------- | --------------------------------- |
| sizeChanged    | Triggers when the element gets resized | `{width: number, height: number}` |
| positionChange | Triggers when the element gets moved   | `{top: string, left: string}`     |

## License
MIT
