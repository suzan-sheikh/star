import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    let isMounted = true; // Flag to track component mount status

    const initializeParticles = async () => {
      try {
        await initParticlesEngine(async (engine) => {
          await loadFull(engine);
        });
        if (isMounted) {
          setInit(true);
        }
      } catch (error) {
        console.error("Error initializing particles:", error);
      }
    };

    initializeParticles();

    return () => {
      isMounted = false; // Cleanup flag when component unmounts
    };
  }, []);

  const particlesLoaded = (container) => {
    // You can handle the loaded event here if needed
    console.log("Particles loaded:", container);
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            zIndex: 1,
          }}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#f90000",
              },
              links: {
                color: "#f90000",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1.2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 160,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}


// npm install tsparticles @tsparticles/react
