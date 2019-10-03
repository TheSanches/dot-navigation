# dots-menu
Dot menu for the site, in native JavaScript

The script is intended for implementation on the site, with further use.
It is written in native JavaScript and does not require connecting libraries.
The script has settings that allow you to make a visual component for every taste, you can also easily edit css styles to achieve an even more individual design.

### [Example](http://dots-menu.surge.sh/)

<hr>

## Connect to the site

Css connection
```html
<link rel = "stylesheet" href = "dots.css">
```

Connection js should be made after your file, for example ...

```html
<script src = "your.js"> </script>
```
```html
<script src = "dots.js"> </script>
```
Add the following code to your js file ...
```html
function dotsSettings() {
  return set = {
    
  }
}
```
<hr>

## Settings

>dots to the left
>
>`posL: true`

>dots to the top
>
>`posT: true`

>dots below
>
>`posB: true`

>dots horizontally
>
>`orientX: true`

>color of dots example "#ffffff"
>
>`dotsColor: red`

>enable bordet at dots, initially false (off)
>
>`dotsBorder: true`

>make square dots initially false (off)
>
>`dotsSquare: true`

>set the width and height of the dots, for example [15, 30], initially false (off) the width and height [10, 10]
>
>`dotsSquare: [10, 10]`

>border color for example 'rgba (255,0,0, .5)' or 'red'
>
>`dotsBorderColor: rgba (255,0,0, .5)`

>we set from which tag or class the name of the section will be taken, for example 'h2' or '.your-class', classes should beat the same in all sections
>
>`dotsHeading: '.your-class'`

>what class the sections have, '.your-class', which should be taken into account in the program, the classes should beat the same in all sections, one dot = one section
>
>`dotsClass: '.your-class'`

<hr>

## Usage example

```html
function dotsSettings() {
  return set = {
    dotsClass: '.your-class',
    dotsHeading: '.your-class'
  }
}
```
