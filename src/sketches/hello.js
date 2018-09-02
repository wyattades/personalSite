export default (p5, width, height) => {

  const RADIUS = 50;

  p5.setup = () => {
    p5.createCanvas(width, height);
    p5.textSize(25);
    p5.textAlign(p5.CENTER, p5.CENTER);
  };

  p5.draw = () => {
    p5.background(255);

    const time = Date.now() / 1000;
    p5.text('Hello World!!', width / 2 + RADIUS * Math.cos(time), height / 2 + RADIUS * Math.sin(time));
  };

};
