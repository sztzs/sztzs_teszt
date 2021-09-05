basic.show_icon(IconNames.HEART)
basic.pause(100)
basic.show_icon(IconNames.YES)
basic.pause(100)

def on_forever():
    basic.show_string("Hello!")
basic.forever(on_forever)
