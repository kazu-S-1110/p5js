function setup() {
  //キャンバスを作成
  createCanvas(600, 600);
  //背景色
  background(255);

  noStroke();
}
function draw() {
  //オブジェクトの色
  //キャンバスの中心に直径100pxの丸を描画
  // ellipse(random(), random(height), 100);
  const cx = 300;
  const cy = 300;
  const d = 600;
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
  for (let b = 0; b < d; b++) {
    rect(cx + b, cy - (b / 8) ** 2, 1, 1);
    rect(cx - b, cy - (b / 8) ** 2, 1, 1);
  }
}
