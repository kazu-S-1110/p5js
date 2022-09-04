// function setup() {
//   //キャンバスを作成
//   const wHeight = windowHeight;
//   const wWidth = windowWidth;
//   createCanvas(wWidth, wHeight);
//   //背景色
//   background(255);
//   noStroke();
// }

// function draw() {
//   const wHeight = 500;
//   const wWidth = 500;
//   const cx = wWidth / 2;
//   const cy = wHeight / 2;

//   const drawXaxis = (cx, cy) => {
//     for (let i = -cx; i < cy; i++) {
//       rect(cx + i, cy, 1, 1);
//     }
//   };

//   const drawYaxis = (cx, cy) => {
//     for (let i = -cx; i < cy; i++) {
//       rect(cx, cy + i, 1, 1);
//     }
//   };

//   const drawLinerFunc = (a) => {
//     for (let i = -cx; i < cx; i = i + 0.1) {
//       rect(cx + i, cy - i * a, 1, 1);
//     }
//   };

//   const drawQuadraticFunc = (a) => {
//     if (a > 0) {
//       for (let i = -400; i < 400; i++) {
//         rect(cx + i, cy - (i * a) ** 2, 1, 1);
//       }
//     } else if (a < 0) {
//       for (let i = -400; i < 400; i++) {
//         rect(cx + i, cy + (i * a) ** 2, 1, 1);
//       }
//     }
//   };

//   fill("black");
//   drawXaxis(cx, cy);
//   drawYaxis(cx, cy);

//   // // 一次関数;
//   // fill("blue");
//   // // drawLinerFunc(1);
//   // fill("orange");
//   // // drawLinerFunc(4);
//   // fill("purple");
//   // // drawLinerFunc(-2);

//   // // 二次関数
//   // fill("red");
//   // drawQuadraticFunc(1 / 8);
//   // fill("blue");
//   // drawQuadraticFunc(-1 / 8);

//   // マウス座標に円
//   // clear();
//   // circle(mouseX, mouseY, 100);

//   // 円の関数
//   // fill("green");
//   // for (let c = 0; c < d; c = c + 0.1) {
//   //   const divide = 10;
//   //   rect(
//   //     cx + Math.cos(c / divide) * 100,
//   //     cy - Math.sin(c / divide) * 100,
//   //     1,
//   //     1
//   //   );
//   // }
// }

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255);

  // 中心線
  strokeWeight(1);
  stroke(200);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);

  // 星
  noFill();
  strokeWeight(2);
  stroke(200, 0, 0);
  drawStar(width / 2, height / 2, 150, 5); // 横の位置、縦の位置、中心点とトゲの頂点までの距離、トゲの数
}

function drawStar(x, y, r, prickleNum) {
  let vertexNum = prickleNum * 2; // 頂点数(トゲの数*2)
  let R; // 中心点から頂点までの距離

  push();
  translate(x, y);
  rotate(-90);

  beginShape();
  for (let i = 0; i < vertexNum; i++) {
    R = i % 2 == 0 ? r : r / 2;

    vertex(R * cos((360 * i) / vertexNum), R * sin((360 * i) / vertexNum));
  }
  endShape(CLOSE);

  pop();
}
