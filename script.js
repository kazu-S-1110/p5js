function setup() {
  //キャンバスを作成
  const wHeight = windowHeight;
  const wWidth = windowWidth;
  createCanvas(wWidth, wHeight);
  //背景色
  background(255);
  noStroke();
}

function draw() {
  const wHeight = 500;
  const wWidth = 500;
  //オブジェクトの色
  //キャンバスの中心に直径100pxの丸を描画
  // ellipse(random(), random(height), 100);

  // 正方形を描画
  // fill("black");
  // for (let j = 0; j < 100; j++) {
  //   for (let i = 0; i < 100; i++) {
  //     rect(i, j, 1, 1);
  //   }
  // }

  const cx = wWidth / 2;
  const cy = wHeight / 2;
  const d = 200;

  const drawXaxis = (cx, cy) => {
    for (let i = -cx; i < cy; i++) {
      rect(cx + i, cy, 1, 1);
    }
  };

  const drawYaxis = (cx, cy) => {
    for (let i = -cx; i < cy; i++) {
      rect(cx, cy + i, 1, 1);
    }
  };

  const drawLinerFunc = (a) => {
    for (let i = -cx; i < cx; i = i + 0.1) {
      rect(cx + i, cy - i * a, 1, 1);
    }
  };

  const drawQuadraticFunc = (a) => {
    if (a > 0) {
      for (let i = -400; i < 400; i++) {
        rect(cx + i, cy - (i * a) ** 2, 1, 1);
      }
    } else if (a < 0) {
      for (let i = -400; i < 400; i++) {
        rect(cx + i, cy + (i * a) ** 2, 1, 1);
      }
    }
  };

  fill("pink");
  drawXaxis(cx, cy);
  fill("red");
  drawYaxis(cx, cy);

  // 一次関数;
  fill("blue");
  // drawLinerFunc(1);
  fill("orange");
  // drawLinerFunc(4);
  fill("purple");
  // drawLinerFunc(-2);

  // 二次関数
  fill("red");
  drawQuadraticFunc(1 / 8);
  fill("blue");
  drawQuadraticFunc(-1 / 8);

  // マウス座標に円
  // clear();
  // circle(mouseX, mouseY, 100);

  // 円の関数
  // fill("green");
  // for (let c = 0; c < d; c = c + 0.1) {
  //   const divide = 10;
  //   rect(
  //     cx + Math.cos(c / divide) * 100,
  //     cy - Math.sin(c / divide) * 100,
  //     1,
  //     1
  //   );
  // }
}
