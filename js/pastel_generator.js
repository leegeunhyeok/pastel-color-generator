/**
 * @description Pastel color generator
 * @author Leegeunhyeok
 * 
 * 2018.11.23
 */

window.onload = function () {
  // @namespace
  var pastelColorGenerator = {}

  // RGB Code
  pastelColorGenerator.r = 255
  pastelColorGenerator.g = 255
  pastelColorGenerator.b = 255

  // Generate pastel color
  pastelColorGenerator.generateColor = function (colorConst) {
    this.r = parseInt(Math.random() * 128 + colorConst)
    this.g = parseInt(Math.random() * 128 + colorConst)
    this.b = parseInt(Math.random() * 128 + colorConst)
    return this
  }

  // Reset color to white
  pastelColorGenerator.resetColor = function () {
    this.r = this.g = this.b = 255
    return this
  }

  // Get color code (#HEX)
  pastelColorGenerator.getColor = function () {
    let r = this.r.toString(16),
        g = this.g.toString(16),
        b = this.b.toString(16) 
    return `#${r}${g}${b}`
  }

  // Generate button click event
  document.getElementById("generate-button").onclick = function () {
    let color = pastelColorGenerator
      .generateColor(127) // Pastel color constant
      .getColor()

    // Set color code text and background color
    document.getElementById("color-code").textContent = color
    document.getElementById("wrap").style.backgroundColor = color
  }
}