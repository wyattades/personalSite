import React from 'react';
import * as THREE from 'three';
import * as Animated from 'animated/lib/targets/react-dom';

import Orientation from './orientation';
import fontJson from '../fonts/montserrat.json';

const defaultOptions = {
  fontSize: 45,
  thickness: 10,
  specular: 0x777777,
  // followRate: 0.03,
  followRadius: 140,
  opacity: 0.8,
  yPos: 0,
  animateDist: -20,
};

const loadingManager = new THREE.LoadingManager(null, null, console.error);
const loader = new THREE.FontLoader(loadingManager);
const font = loader.parse(fontJson);

// Returns plain black texture
const getTexture = () => {
  const canvas = document.createElement('canvas');
  
  canvas.width = 64;
  canvas.height = 64;

  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#000000'; // `rgba(0,0,0,${opacity})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;

  return texture;
};

const renderText = (parent, string, options) => {

  // const listeners = [];

  const {
    specular, opacity, fontSize, thickness, followRadius, animateDist, yPos,
  } = options;

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });

  parent.appendChild(renderer.domElement);
    
  const camera = new THREE.PerspectiveCamera(60, parent.clientWidth / parent.clientHeight, 1, 1000);
  camera.position.z = 200;
  camera.position.y = -8;

  const scene = new THREE.Scene();

  const texture = getTexture(opacity);
  const material = new THREE.MeshPhongMaterial({
    specular, map: texture, transparent: true, opacity: 0,
  });

  let moveX = 0;
  // let lastW2 = 0;
  const chars = string.split('');
  const anchors = chars.map((char, i) => {

    const geometry = new THREE.TextGeometry(char, {
      font,
      size: fontSize,
      height: thickness,
    });
    const text = new THREE.Mesh(geometry, material.clone());
    const bbox = new THREE.Box3().setFromObject(text);
    const center = bbox.getCenter();
    text.position.sub(center);

    const anchor = new THREE.Group();

    const w2 = bbox.getSize().x / 2;
    if (i !== 0) moveX += 10;
    moveX += w2;
    anchor.position.x = moveX;
    moveX += w2;
    
    anchor.position.y = animateDist + yPos;
    anchor.add(text);
    scene.add(anchor);

    return anchor;
  });
  for (const anchor of anchors) anchor.position.x -= moveX / 2;

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = parent;

    renderer.setSize(w, h);
    camera.aspect = w / h;
    // Set FOV so letters fit in screen with some margin (20deg)
    camera.fov = 20 + (2 * Math.atan(moveX / (camera.aspect * 2 * camera.position.z)) * (180 / Math.PI));
    camera.updateProjectionMatrix();
  };
  window.addEventListener('resize', resize);
  resize();

  const addLight = (color, x, y, z, intensity = 1) => {
    const newLight = new THREE.DirectionalLight(color, intensity);
    newLight.position.set(x, y, z);
    newLight.lookAt(anchors[Math.floor(chars.length / 2)].position);
    scene.add(newLight);
  };

  // addLight(0xccb87a, 0, 4, 4, 1);
  // addLight(0xc9fff8, 0, 3, 1, 1);
  addLight(0xffffff, 0, 1, 4, 0.3);
  // addLight(0xff0000, -2, 1, 1);
  // addLight(0x0000ff, 0, -1, 0.5);
  // addLight(0xffff00, 2, -1, 2);
  // addLight(0x0000ff, 20, 0, 50);
  // addLight(0xffff00, -100, 0, 50);

  let mx = 0,
      my = 0;
  let animateId;
  let render = () => {
    
    let ratioX = 0;
    let ratioY = 0;

    const { clientWidth: w, clientHeight: h } = parent;
    
    ratioX = (mx / w) - 0.5;
    ratioY = (my / h) - 0.5;

    const target = new THREE.Vector3(ratioX * followRadius, -ratioY * followRadius, 2 * followRadius);
    // actualTarget.add(target.clone().sub(actualTarget).multiplyScalar(followRate));

    for (const anchor of anchors) anchor.lookAt(target);

    renderer.render(scene, camera);

    // animateId = requestAnimationFrame(render);
  };
  const onMouseMove = e => { mx = e.clientX; my = e.clientY; render(); };
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('click', onMouseMove);

  let orientation;
  if ('DeviceOrientationEvent' in window) {
    const enableOrient = () => {

      cancelAnimationFrame(animateId);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('click', onMouseMove);
    };
    orientation = Orientation(() => renderer.render(scene, camera), enableOrient, anchors);
  }

  const animTimer = setTimeout(() => {
    const anims = Array.from(string).map(() => new Animated.Value(0));

    Animated.stagger(100, anims.map(anim => Animated.spring(anim, { toValue: 1 }))).start();

    anims.forEach((anim, i) => anim.addListener(({ value }) => {
      anchors[i].position.y = ((1 - value) * animateDist) + yPos;

      anchors[i].children[0].material.opacity = value;
      render();
    }));

  }, 375);

  render();

  // Returns function that removes renderer
  return () => {
    clearTimeout(animTimer);
    renderer.domElement.remove();
    cancelAnimationFrame(animateId);

    // Remove event listeners
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('click', onMouseMove);
    window.removeEventListener('resize', resize);

    if (orientation) orientation.dispose();
  };
};


class BlockText extends React.Component {

  componentDidMount() {
    this._options = Object.assign(defaultOptions, this.props.options || {});
    this._createText();
  }

  componentWillUnmount() {
    this._destroyText();
  }

  _createText() {
    this._destroyText();
    this._removeRenderer = renderText(this._parent, this.props.text, this._options);
  }

  _destroyText() {
    this._removeRenderer && this._removeRenderer();
    this._removeRenderer = null;
  }

  // Use min width and height to prevent webGL crash when size is 0
  render() {
    return (
      <div ref={_ => { this._parent = _; }} style={{ minHeight: 10, minWidth: 10 }}/>
    );
  }
}

BlockText.defaultProps = {
  text: '',
};

export default BlockText;
