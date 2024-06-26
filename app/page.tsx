"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loading from "./components/Loading";
import Island from "./models/Island";
import Sky from "./models/Sky";
import Bird from "./models/Bird";
import Plane from "./models/Plane";

export default function Home() {
  const [isRotating, setRotating] = useState(false);

  const respIsland = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    const rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const respPlane = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.2, 1.2, 1.2];
      screenPosition = [0, 0, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -1, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = respIsland();
  const [planeScale, planePosition] = respPlane();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
        Popup
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loading />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight />
          <hemisphereLight
            skyColor="b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setRotating}
          />
          <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0, 20.3, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}
