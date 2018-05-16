# Grid

Beam's grid is written entirly in scss with the [BEM Methodology](https://css-tricks.com/bem-101/) in mind. Beam's grid features easy to use mixins allowing developers to rapidly create layouts for bespoke designs.

## Getting started

To get started you must install in the grid via **npm**:

```sh
npm install origin-beam-grid -S
```

In your scss file define the import statement and ensure you are using the border-box model:

```scss
@import "variables";
@import "node_modules/origin-beam-grid/grid";

* {
    box-sizing: border-box;
}
```

## Usage

Creating Containers, rows and columns in beam is straight forward and flexible. Defining your own class names gives you more control over the variations you can create using the included mixins.

### Varibles

Included with Beam are some sensible defaults for your grid layout all of which can be overwritten.

**Grid Size**

Grid size refers to the number of columns you want defined in a row.

```scss
$grid-size: 12;
```

**Breakpoints**

Breakpoints are defined with a key and value sass map the key is the name of the breakpoint followed by the value which is the window size in which to break.

```scss
$breakpoints: (
    xs: 544px,
    sm: 768px,
    md: 992px,
    lg: 1200px
);
```

**Container**

The default Container sass map follows a similar structure to breakpoints only this time the key refers to the breakpoint and the value refers to the size of the container at that breakpoint.

```scss
$container: (
    xs: 576px,
    sm: 720px,
    md: 940px,
    lg: 1140px
);
```

**Gutter**

The gutter can be defined like so. By default the gutter is set to **30px**

```scss
$gutter: 30px;
```

**Fluid Container**

The fluid container size is set to **100%** by default but can be overwritten with the following:

```scss
$fluid-container-max: 100%;
```

## Containers

Containers can be defined using the `make-container` mixin this will build a container based on the `$container`, `$breakpoints` & `$gutter` variables.

`make-container` also accepts arguments so you can define your own custom containers for different selectors.

```scss
.container {
    @include make-container(
        $container,
        $gutter,
        $breakpoints
    );
}
```

Alternatively you may want a fluid container which can be created like so:

```scss
.fluid-container {
    @include make-fluid-container(
        $maximum,
        $gutter
    );
}
```

## Rows

Much like containers Rows can be created using the `make-row` mixin. This mixin creates columns based on `$grid-size`, `$gutter` & `$breakpoints` variables.

The first argument of `make-row` accepts a boolean which allows you to disable offsets if you are not using them. This reduces the css output and helps improve overall css loading times.

```scss
$offsets: true;

.row {
    @include make-row(
        $offsets, 
        $grid-size,
        $gutter,
        $breakpoints
    );
}
```

Designs that mix grid sizes for example 12 and 10 column grids can be a pain to implement, using `make-row` makes this process extremly easy.

```scss
.row--ten {
    @include make-row(
        false, 
        10,
        30px
    );
}
```

```html
<div class="row--ten">
    <div class="column--sm-2">
        One
    </div>

    <div class="column--sm-2">
        Two
    </div>

    <div class="column--sm-2">
        Three
    </div>

    <div class="column--sm-2">
        Four
    </div>

    <div class="column--sm-2">
        Five
    </div>
</div>
```

## Media 

Included is a mixin for minimum and maximum media breakpoints allowing you to specify your own css at your defined breakpoints.

```scss
@include media-min(sm) {
    body {
        background: green;
    }
}

@include media-max(sm) {
    body {
        background: green;
    }
}
```