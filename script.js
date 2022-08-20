function setup() {
  //キャンバスを作成
  createCanvas(600, 425);
  //背景色
  background(255);

  noStroke();
}
function draw() {
  //オブジェクトの色
  //キャンバスの中心に直径100pxの丸を描画
  // ellipse(random(), random(height), 100);
  const cx = 50;
  const cy = 50;
  const d = 10;
  fill("black");

  for (let x = -50; x < 50; x++) {
    rect(cx + x, cy, 1, 1);
  }

  fill("black");
  for (let y = -50; y < 50; y++) {
    rect(cx, cy + y, 1, 1);
  }

  // 一次関数
  // fill("blue");
  // for (let a = 0; a < 100; a++) {
  //   rect(a, 100 - a, 1, 1);
  // }

  // 二次関数
  fill("red");
  for (let b = 0; b < 100; b++) {
    for (let c = 0; c < 30; c++) {
      rect(50 + b, 50 - b + c ** 2, 1, 1);
    }
  }
}
