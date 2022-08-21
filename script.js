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
  const wHeight = windowHeight;
  const wWidth = windowWidth;
  //オブジェクトの色
  //キャンバスの中心に直径100pxの丸を描画
  // ellipse(random(), random(height), 100);
  const cx = wWidth / 2;
  const cy = wHeight / 2;
  const d = 200;

  fill("black");

  for (let x = -cx; x < cy; x++) {
    rect(cx + x, cy, 1, 1);
  }

  fill("black");
  for (let y = -cx; y < cy; y++) {
    rect(cx, cy + y, 1, 1);
  }

  // 一次関数
  // fill("blue");
  // for (let a = 0; a < d; a++) {
  //   rect(a, d - a, 1, 1);
  // }

  // 二次関数
  fill("red");
  // for (let b = 0; b < 400; b++) {
  //   rect(cx + b, cy - (b / 8) ** 2, 1, 1);
  //   rect(cx - b, cy - (b / 8) ** 2, 1, 1);
  // }

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
