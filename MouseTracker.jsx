import { useState } from "react";

function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ width: "100vw", height: "100vh" }}
    >
      {render(position)}
    </div>
  );
}

export default MouseTracker;
