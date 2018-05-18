const canvas = {
    element: document.querySelector(".canvas"),
    startX: 0,
    startY: 0,
    drag: function (event) {

        if(this.startX > event.pageX) {
            let draggedPixels = this.startX - event.pageX;


        } else {
            // console.log(this.startX  - event.pageX);
        }

        // this.element.style.top = this.element.style.top - event.clientY + "px";
        // this.element.style.left = this.element.style.left - event.clientX + "px";

        // console.log("drag", event.pageX, event.pageY)
    },
    dragStart: function(event) {
        this.startX = event.pageX;
        this.startY = event.pageY;

        console.log("start", this.startX, this.startY)
    },
    dragEnd: function(event) {
        console.log("start", this.startX, this.startY)
    },
    init: function () {

        this.element.addEventListener("dragstart", (event) => {
            this.dragStart(event)
        })

        this.element.addEventListener("drag", (event) => {
            this.drag(event)
        })

        this.element.addEventListener("dragend", (event) => {
            this.dragEnd(event)
        })

        console.log(this.element)
        console.log("canvas initialized")
    }
}

canvas.init()