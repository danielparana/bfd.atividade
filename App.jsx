import MouseTracker from "./MouseTracker";

function App() {
  return (
    <>
      <MouseTracker
        render={({ x, y }) => (
          <p>
            X: {x}, Y: {y}
          </p>
        )}
      />

      <MouseTracker
        render={({ x, y }) => (
          <div
            style={{
              position: "absolute",
              top: y - 10,
              left: x - 10,
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: "red",
            }}
          />
        )}
      />
    </>
  );
}

export default App;
