let x;
let y;
let ballCount = 20; // ボールの個数をここで指定

function setup() {
    createCanvas(400, 400);
    x = 0;
    y = [];
    for (let i = 0; i < ballCount; i++) {
        // 上端0、下端heightにぴったり並ぶように等間隔で配置
        y.push(i * (height / (ballCount - 1)));
    }
}

function draw() {
    background(0, 0, 0, 20);
    x = x + 10;
    if (x > width) {
        x = 0
    }
    fill(128, 255, 255);
    for (let i = 0; i < y.length; i++) {
        circle(x, y[i], random(10))
    }
}
