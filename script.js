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

  // x-axis
  fill("black");
  for (let x = -cx; x < cy; x++) {
    rect(cx + x, cy, 1, 1);
  }

  //y-axis
  fill("black");
  for (let y = -cx; y < cy; y++) {
    rect(cx, cy + y, 1, 1);
  }

  // 一次関数;
  fill("blue");
  for (let a = 0; a < wHeight; a++) {
    rect(a, wHeight - a, 1, 1);
  }

  // 二次関数
  fill("red");
  for (let b = 0; b < 400; b++) {
    rect(cx + b, cy - (b / 8) ** 2, 1, 1);
    rect(cx - b, cy - (b / 8) ** 2, 1, 1);
  }

  // マウス座標に円
  // clear();
  // circle(mouseX, mouseY, 100);

  // 円の関数
  fill("green");
  for (let c = 0; c < d; c = c + 0.1) {
    const divide = 10;
    rect(
      cx + Math.cos(c / divide) * 100,
      cy - Math.sin(c / divide) * 100,
      1,
      1
    );
  }
}
