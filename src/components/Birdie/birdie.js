import birdie_pic from "./assets/birdie.png";
import './birdie.css'

function Birdie() {
  document.addEventListener("mousemove", (e) => {
    let anchor = document.querySelector("#birdie");

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;

    let angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    const eyes = document.querySelectorAll(".eye");

    eyes.forEach((eye) => {
      eye.style.transform = `rotate(${angleDeg + 10}deg)`;
    });
  });

  function angle(cx, cy, ex, ey) {

    // This is the 'angle' function that calculates the
    //  angle between two points (in this case, the mouse
    //  pointer and the 'anchor' element) in degrees. It uses 
    // the arctangent function (Math.atan2) to calculate the angle
    //  in radians and then converts it to degrees. The function returns 
    // the angle in degrees.

    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;

    return deg;
  }

  return (
    <div id="birdie">
      <img id="anchor" src={birdie_pic} alt="birdie" />
      <div className="eye" id="eye-1">
        <div className="eye-ball"></div>
      </div>
      <div className="eye" id="eye-2">
        <div className="eye-ball"></div>
      </div>
    </div>
  );
}

export default Birdie;