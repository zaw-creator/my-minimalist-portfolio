"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";

export default function StarParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
  
      await loadStarsPreset(engine); // Load the stars preset here

    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      preset: "stars",
      background: {
        color: "#000000",
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
    }),
    [],
  );

  if (!init) return null;

  return <Particles id="tsparticles" options={options}  />;
}
