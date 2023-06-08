toggleFullscreen(element) {
   if (document.fullscreenElement) { 
     return document.exitFullscreen() // exit fullscreen on next click
   }
   if (element.requestFullscreen) {
     element.requestFullscreen()
   } else if (this.element.webkitRequestFullscreen) {
     element.webkitRequestFullscreen() // Safari
   } else if (this.element.msRequestFullscreen) {
     element.msRequestFullscreen() // IE11
   }
 }
