// src/components/ParticleBackground.js
import React from 'react';
import Particles from 'react-tsparticles';

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    // You can add custom presets or configurations here if needed
  };

  const particlesLoaded = (container) => {
    // You can handle the event when particles are loaded
  };

  const options = {
    autoPlay: true,
    background: {
      color: { value: "#000" },
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
      opacity: 1,
    },
    backgroundMask: {
      composite: "destination-out",
      cover: { color: { value: "#fff" }, opacity: 1 },
      enable: false,
    },
    clear: true,
    fullScreen: { enable: true, zIndex: 0 },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: { enable: false, mode: {} },
        onDiv: { selectors: {}, enable: false, mode: {}, type: "circle" },
        onHover: {
          enable: false,
          mode: {},
          parallax: { enable: false, force: 2, smooth: 10 },
        },
        resize: { delay: 0.5, enable: true },
      },
      modes: {
        trail: { delay: 1, pauseOnStop: false, quantity: 1 },
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 1,
          maxSpeed: 50,
          speed: 1,
        },
        bounce: { distance: 200 },
        bubble: { distance: 200, duration: 0.4, mix: false },
        connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
        grab: { distance: 100, links: { blink: false, consent: false, opacity: 1 } },
        push: { default: true, groups: [], quantity: 4 },
        remove: { quantity: 2 },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
        },
        slow: { factor: 3, radius: 200 },
        light: {
          area: {
            gradient: { start: { value: "#ffffff" }, stop: { value: "#000000" } },
            radius: 1000,
          },
          shadow: { color: { value: "#000000" }, length: 2000 },
        },
      },
    },
    manualParticles: [],
    particles: {
      bounce: { horizontal: { value: 1 }, vertical: { value: 1 } },
      collisions: {
        absorb: { speed: 2 },
        bounce: { horizontal: { value: 1 }, vertical: { value: 1 } },
        enable: false,
        maxSpeed: 50,
        mode: "bounce",
        overlap: { enable: true, retries: 0 },
      },
      color: {
        value: "random",
        animation: { h: { count: 0, enable: false, speed: 1 }, s: { count: 0, enable: false, speed: 1 }, l: { count: 0, enable: false, speed: 1 } },
      },
      effect: { close: true, fill: true },
      groups: [],
      move: {
        angle: { offset: 0, value: 90 },
        attract: { distance: 200, enable: false, rotate: { x: 3000, y: 3000 } },
        center: { x: 50, y: 50, mode: "percent", radius: 0 },
        decay: 0,
        distance: {},
        direction: "none",
        drift: 0,
        enable: true,
        gravity: { acceleration: 9.81, enable: false, inverse: false, maxSpeed: 50 },
        path: { clamp: true, delay: { value: 0 }, enable: false },
        outModes: { default: "destroy", bottom: "destroy", left: "destroy", right: "destroy", top: "destroy" },
        random: false,
        size: false,
        speed: 5,
        spin: { acceleration: 0, enable: false },
        straight: false,
        trail: { enable: false, length: 10 },
        vibrate: false,
        warp: false,
      },
      number: { density: { enable: true, width: 1920, height: 1080 }, limit: { mode: "delete", value: 0 }, value: 0 },
      opacity: {
        value: 1,
        animation: { count: 0, enable: false, speed: 2 },
      },
      reduceDuplicates: false,
      shadow: { blur: 0, color: { value: "#000" }, enable: false },
      shape: { close: true, fill: true, type: "circle" },
      size: {
        value: { min: 1, max: 20 },
        animation: { count: 0, enable: true, speed: 5 },
      },
      stroke: { width: 0 },
      zIndex: { value: 0, opacityRate: 1, sizeRate: 1, velocityRate: 1 },
      destroy: { bounds: {}, mode: "none", split: { count: 1, factor: { value: 3 }, rate: { value: { min: 4, max: 9 } }, sizeOffset: true } },
      roll: { darken: { enable: false, value: 0 }, enable: false, enlighten: { enable: false, value: 0 }, mode: "vertical", speed: 25 },
      tilt: { value: 0, animation: { enable: false, speed: 0 }, direction: "clockwise", enable: false },
      twinkle: { lines: { enable: false, frequency: 0.05, opacity: 1 }, particles: { enable: false, frequency: 0.05, opacity: 1 } },
      wobble: { distance: 5, enable: false, speed: { angle: 50, move: 10 } },
      life: { count: 0, delay: { value: 0 }, duration: { value: 0 } },
      rotate: { value: 0, animation: { enable: false, speed: 0 }, direction: "clockwise", path: false },
      orbit: { animation: { count: 0, enable: false, speed: 1 }, enable: false, opacity: 1, rotation: { value: 45 }, width: 1 },
      links: { blink: false, color: { value: "#ffffff" }, consent: false, distance: 150, enable: false, opacity: 0.4 },
      repulse: { value: 0, enabled: false, distance: 1, duration: 1, factor: 1, speed: 1 },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: false,
    style: {},
    themes: [],
    zLayers: 100,
    name: "Growing",
    emitters: {
      autoPlay: true,
      fill: true,
      life: { wait: false },
      rate: { quantity: 2, delay: 0.1 },
      shape: { options: {}, replace: { color: false, opacity: false }, type: "square" },
      startCount: 0,
      size: { mode: "percent", height: 0, width: 100 },
      direction: "top",
      particles: {},
      position: { x: 50, y: 100 },
    },
    motion: { disable: false, reduce: { factor: 4, value: true } },
  };

  return (
    <Particles
      id="tsparticles"
      options={options}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};

export default ParticleBackground;