function setup() {
  //キャンバスを作成
  createCanvas(600, 425);
  //背景色
  background(255);

  noStroke();
}
function draw() {
  //オブジェクトの色
  fill(0);
  //キャンバスの中心に直径100pxの丸を描画
  // ellipse(random(), random(height), 100);
  const cx = 50;
  const cy = 50;
  const d = 10;

  rect(cx, cy, 1, 1);

  for (let i = 0; i < d; i++) {
    for (let j = 0; j < d; j++) {
      rect(Math.abs(i + d), j, 1, 1);
    }
  }
}
