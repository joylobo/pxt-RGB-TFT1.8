# MakeCode Package for the RGB-TFT1.8 (ST7735S 1.8" TFT Display)

## Connection

The display needs to be connected with seven pins to the Micro:bit:

| RGB-TFT1.8     | Micro:bit     |
| ------------- |:-------------:|
| GND           | GND           |
| VCC           | 3V            |
| SCL           | P13           |
| SDA           | P15           |
| RST           | 3V            |
| DC            | P1            |
| CS            | P16           |

## Color possibilities

All graphical objects (e.g. pixels, lines, rectangles) can be drawn in different colors. The following color options are available:

* Black
* Navy
* Dark Green
* Dark Cyan
* Maroon
* Purple
* Olive
* Light Grey
* Dark Grey
* Blue
* Green
* Cyan
* Red
* Magenta
* Yellow
* White
* Orange
* Green Yellow
* Pink

## Initialize display

The TFT display needs to be initialized before it is ready to use. All necessary TFT-Commands will be transferred via SPI here.

```typescript
// Initialize TFT Display
RGBTFT18.init()
```

## Single pixels

Single pixels can be shown on the screen. The function takes three values. The x and y coordinates as well as the color for the pixel.

```typescript
// Draw a single red pixel
RGBTFT18.drawPixel(10, 10, Color.Red)
```

## Straight lines

Straight lines can be drawn across the screen (horizontal, vertical and diagonal). The function takes five values: The x and y coordinates of the starting point, the x and y coordinates of the ending point and the color for the line.

```typescript
// Draw a straight blue line
RGBTFT18.drawLine(0, 0, 100, 100, Color.Blue)
```

## Rectangles

Rectangles can be drawn on the screen. The function takes four five values: The x and y coordinate of the rectangles origin, the width of the rectangle, the height of the rectangle and the color for the rectangle.

```typescript
// Draw a yellow rectangle
RGBTFT18.drawRectangle(0, 0, 100, 120, Color.Yellow)
```

## Circles

Circles can be drawn on the screen as well. Depending on the size of the circle, the drawing process can take a little more time than drawing straight lines or rectangles. The function takes four values: The x and y coordinate (center point) of the circle, the radius and the color of the circle.

```typescript
// Draw a green circle
RGBTFT18.drawCircle(50, 50, 50, Color.Green)
```

## Show text

You can also show text on the display. The font size can be set in 5 different zoom levels (1-5). You can specify the font color as well as the background color. The function takes six arguments: The string, the x and y coordinates of the starting point, the zoom level, the text color and the background color.

```typescript
// Show white text with black background
RGBTFT18.showString("I am your RGB-TFT1.8!", 10, 10, 1, Color.White, Color.Black)
```

## Clear screen

New objects never replace already drawn objects on the screen. Instead, they are drawn in front of them. The clearScreen()-function will draw a black rectangle across the whole screen dimensions. The function does not expect any parameters.

```typescript
// Clear screen - replaces whole screen with a black rectangle
RGBTFT18.clearScreen()
```

## Turn off display

You can turn off the display. In this mode, the frame memory is disabled and a blank (white) page will be shown. The function does not expect any parameters.

```typescript
// Turn off display
RGBTFT18.turnOff()
```

## Turn on display

You turn the display on again and enable the output from the frame memory. The function does not expect any parameters.

```typescript
// Turn on display
RGBTFT18.turnOn()
```

## Supported targets

* for PXT/microbit

## License

MIT
