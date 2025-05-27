# 📘 JavaScript `Math.sin()` Complete Guide

Learn everything about `Math.sin()` in JavaScript — from basics to practical use cases, common mistakes, and bonus animations. This guide is perfect for beginners and developers who want to understand trigonometry in JavaScript clearly.

---

## 📌 What is `Math.sin()`?

`Math.sin()` is a built-in JavaScript method that returns the **sine** of a number (angle in radians).

### 🧪 Syntax:
```js
Math.sin(x)
x → A number in radians

🔁 Returns a value between -1 and 1

⚠️ Radians vs Degrees
JavaScript works in radians, not degrees.

To convert degrees to radians:

js
Copy
Edit
radians = degrees * (Math.PI / 180);
📐 What is Sine?
In trigonometry, the sine of an angle in a right-angled triangle is:

cpp
Copy
Edit
sin(θ) = opposite / hypotenuse
In programming, we often use it to model wave patterns, motion, and angles in radians.

✅ Examples
1. Basic usage:

console.log(Math.sin(0));             // 0
console.log(Math.sin(Math.PI / 2));   // 1
console.log(Math.sin(Math.PI));       // ~0 (very close to 0)
console.log(Math.sin(3 * Math.PI / 2)); // -1
2. Converting Degrees to Radians:

function sinDegrees(degrees) {
  let radians = degrees * (Math.PI / 180);
  return Math.sin(radians);
}

console.log(sinDegrees(90));  // 1
console.log(sinDegrees(180)); // ~0
🧠 Why use Math.sin()?
You can use Math.sin() for:

Animating objects in circular or wave motions

Creating sine waves

Sound/audio signal processing

Physics simulations

Game development and graphics

🎨 Visualizing the Sine Wave
lua
Copy
Edit
    1 |       .-‘’‘-.       .-‘’‘-.
      |    .-’       ‘-. .-’       ‘-.
    0 |---’-----------’-----------’--->
     -1 |
js
Copy
Edit
for (let angle = 0; angle <= 360; angle += 30) {
  let radians = angle * (Math.PI / 180);
  let value = Math.sin(radians).toFixed(2);
  console.log(`sin(${angle}°) = ${value}`);
}
⚠️ Common Mistakes
❌ Using degrees directly:

js
Copy
Edit
Math.sin(90); // WRONG — returns 0.893...
✅ Convert to radians:

js
Copy
Edit
Math.sin(90 * Math.PI / 180); // CORRECT — returns 1
❗ Expecting exact 0:

js
Copy
Edit
console.log(Math.sin(Math.PI)); // Not exactly 0 — small float error (~1.22e-16)
📚 Related Math Functions
Function	Description
Math.cos(x)	Cosine of x
Math.tan(x)	Tangent of x
Math.asin(x)	Inverse sine (returns radians)
Math.PI	Value of π (~3.14159)

🎮 Bonus: Animate a Sine Wave with Canvas
html
Copy
Edit
<canvas id="canvas" width="500" height="200"></canvas>
<script>
  const ctx = document.getElementById('canvas').getContext('2d');
  let x = 0;

  function draw() {
    ctx.clearRect(0, 0, 500, 200);
    ctx.beginPath();
    for (let i = 0; i < 500; i++) {
      let y = 100 + Math.sin((i + x) * 0.05) * 50;
      ctx.lineTo(i, y);
    }
    ctx.stroke();
    x += 1;
    requestAnimationFrame(draw);
  }
  draw();
</script>
🧪 Practice Quiz
What does Math.sin(0) return?

How do you convert 90 degrees to radians?

What is the expected output of Math.sin(Math.PI / 2)?

What’s the sine of 180° in JavaScript? (Hint: Convert it first)

✅ Summary
Key Concept	Details
Function	Math.sin(x)
Input Unit	Radians
Output Range	Between -1 and 1
Converts Degrees	Multiply by (Math.PI / 180)
Usage	Animation, waves, simulations