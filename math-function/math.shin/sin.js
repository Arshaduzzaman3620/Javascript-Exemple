// 🔢 1. Sine from Degrees
function sinFromDegrees(degrees) {
  // Convert degrees to radians before using Math.sin()
  const radians = degrees * (Math.PI / 180);
  return Math.sin(radians);
}
console.log("sin(90°) =", sinFromDegrees(90)); // Output: 1

// 🧮 2. Calculator Style: Show Result on Button Click
function calculateSineFromInput() {
  const angle = document.getElementById("angleInput").value; // Get value from input box
  const radians = angle * (Math.PI / 180); // Convert to radians
  const result = Math.sin(radians).toFixed(4); // Get sine and round to 4 decimals
  document.getElementById("result").textContent = `sin(${angle}°) = ${result}`;
}

// 🟢 3. Sine Wave Points Logger (0° to 360°)
function logSineWavePoints() {
  for (let angle = 0; angle <= 360; angle += 30) {
    const radians = angle * (Math.PI / 180);
    const value = Math.sin(radians).toFixed(2);
    console.log(`sin(${angle}°) = ${value}`);
  }
}
logSineWavePoints();

// 🎨 4. Draw Static Sine Wave on Canvas
function drawStaticSineWave() {
  const canvas = document.getElementById("sineCanvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous

  ctx.beginPath();
  for (let x = 0; x < canvas.width; x++) {
    const radians = x * 0.05;
    const y = 100 + Math.sin(radians) * 50; // Centered wave
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = "green";
  ctx.stroke();
}

// 🔄 5. Animate a Circle Moving in a Sine-Cosine Path
function animateSineMotion() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  let angle = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const x = 200 + Math.cos(angle) * 100;
    const y = 100 + Math.sin(angle) * 50;

    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();

    angle += 0.05;

    requestAnimationFrame(draw); // Keep animating
  }

  draw();
}

// ✨ 6. Use Sine to Create Smooth Opacity Animation
function animateOpacity() {
  let t = 0;

  function fade() {
    const opacity = (Math.sin(t) + 1) / 2; // Normalize to 0–1
    document.getElementById("fadingBox").style.opacity = opacity;
    t += 0.05;

    requestAnimationFrame(fade);
  }

  fade();
}
