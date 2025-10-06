// Initialize TFT Display
RGBTFT18.init()

// Clear screen - replaces whole screen with a black rectangle
RGBTFT18.clearScreen()

// Draw a single red pixel
RGBTFT18.drawPixel(10, 10, Color.Red)
basic.pause(1000)

// Draw a straight blue line
RGBTFT18.drawLine(0, 0, 100, 100, Color.Blue)
basic.pause(1000)

// Draw a yellow rectangle
RGBTFT18.drawRectangle(0, 0, 100, 120, Color.Yellow)
basic.pause(1000)

// Draw a green circle
RGBTFT18.drawCircle(50, 50, 50, Color.Green)
basic.pause(1000)

// Clear screen - replaces whole screen with a black rectangle
RGBTFT18.clearScreen()

// Show white text with black background
RGBTFT18.showString("I am your RGB-TFT1.8!", 10, 10, 1, Color.White, Color.Black)
basic.pause(1000)

// Turn off display
RGBTFT18.turnOff()
basic.pause(1000)

// Turn on display
RGBTFT18.turnOn()
