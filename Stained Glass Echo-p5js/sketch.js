let theShader;
let sound, fft, cam;
let prevFrame;
let interactionScore = 0; 
let colorOffset = 0;      

function preload() {
  theShader = loadShader('shader.vert', 'shader.frag');
  sound = loadSound('music.mp3', 
    () => console.log("Music Ready"), 
    (e) => console.error("Music Load Failed: ", e)
  ); 
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  pixelDensity(1); 
  cam = createCapture(VIDEO);
  cam.size(640, 480);
  cam.hide();

  fft = new p5.FFT();
  fft.setInput(sound);
}

function draw() {
  background(0);
  cam.loadPixels();
  if (cam.pixels.length > 0) {
    let diff = 0;
    for (let i = 0; i < cam.pixels.length; i += 800) {
      let currentBright = cam.pixels[i];
      let prevBright = prevFrame ? prevFrame[i] : 0;
      diff += abs(currentBright - prevBright);
    }
    if (diff > 35000) { 
      colorOffset += 0.08; 
    }
    
    interactionScore = lerp(interactionScore, map(diff, 0, 50000, 0, 1.0, true), 0.1);
    prevFrame = Array.from(cam.pixels);
  }
  if (theShader) {
    shader(theShader);

    fft.analyze();
    let b = map(fft.getEnergy("bass"), 0, 255, 0, 1.0);
    let t = map(fft.getEnergy("treble"), 0, 150, 0, 1.0);

    theShader.setUniform("u_resolution", [width, height]);
    theShader.setUniform("u_time", millis() / 1000.0);
    theShader.setUniform("u_bass", b);
    theShader.setUniform("u_treble", t);
    theShader.setUniform("u_interaction", interactionScore);
    theShader.setUniform("u_colorOffset", colorOffset);

    resetMatrix(); 
    noStroke();
    beginShape(TRIANGLES);
      vertex(-1, -1, 0); vertex( 1, -1, 0); vertex( 1,  1, 0);
      vertex(-1, -1, 0); vertex( 1,  1, 0); vertex(-1,  1, 0);
    endShape();
  }
}

function mousePressed() {
  if (sound.isLoaded()) {
    sound.isPlaying() ? sound.pause() : sound.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}