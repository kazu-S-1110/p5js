function setup() {
  //キャンバスを作成
  createCanvas(600, 425);
  //背景色
  background(255);

  noStroke();
}
function draw() {
  //オブジェクトの色
  fill(random(255), random(255), random(255), 50);
  //キャンバスの中心に直径100pxの丸を描画
  ellipse(random(width), random(height), 100);
}
