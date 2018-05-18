const canvas = {
    element: document.querySelector(".canvas"),
    drag: function () {

    },
    mouseDown: function() {
        console.log('mousedown');
    },
    mouseUp: function() {
        console.log('mouseup');
    },
    init: function () {

        this.element.addEventListener("mousedown", (event) => {
            this.mouseDown()
        })

        this.element.addEventListener("mouseup", (event) => {
            this.mouseUp()
        })

        console.log(this.element)
        console.log("canvas initialized")
    }
}

canvas.init()