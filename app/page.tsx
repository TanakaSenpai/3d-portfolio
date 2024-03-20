"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loading from "./components/Loading";
import Island from "./models/Island";

export default function Home() {
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
        Popup
      </div>
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loading />}>
          <Island />
        </Suspense>
      </Canvas>
    </section>
  );
}
