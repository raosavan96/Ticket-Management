import React, { useEffect, useState, useRef } from "react";

const DraggableTextBox = () => {
  const [text, setText] = useState("");
  const [boxes, setBoxes] = useState([]);

  // Load saved boxes from localStorage
  useEffect(() => {
    const savedBoxes = JSON.parse(localStorage.getItem("boxes")) || [];
    setBoxes(savedBoxes);
  }, []);

  // Save to localStorage whenever boxes change
  useEffect(() => {
    localStorage.setItem("boxes", JSON.stringify(boxes));
  }, [boxes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const newBox = {
      id: Date.now(),
      text,
      x: 100,
      y: 100,
    };
    setBoxes((prev) => [...prev, newBox]);
    setText("");
  };

  const handleDrag = (e, id) => {
    const updatedBoxes = boxes.map((box) =>
      box.id === id
        ? { ...box, x: e.clientX - 50, y: e.clientY - 20 }
        : box
    );
    setBoxes(updatedBoxes);
  };

  const handleMouseDown = (e, id) => {
    e.preventDefault();
    const handleMouseMove = (moveEvent) => handleDrag(moveEvent, id);
    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#f5f5f5",
        padding: "20px",
        position: "relative",
      }}
    >
      {/* Input form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            marginRight: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            border: "none",
            background: "#007bff",
            color: "#fff",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      {/* Draggable Boxes */}
      {boxes.map((box) => (
        <div
          key={box.id}
          onMouseDown={(e) => handleMouseDown(e, box.id)}
          style={{
            position: "absolute",
            left: box.x,
            top: box.y,
            padding: "20px",
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            cursor: "move",
            userSelect: "none",
          }}
        >
          {box.text}
        </div>
      ))}
    </div>
  );
};

export default DraggableTextBox;
