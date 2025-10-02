const HeroLights = () => {
  return (
    <>
      <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        intensity={40}
        penubra={0.5}
        color="#4cc9f0"
      />
      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        intensity={60}
        penubra={1}
        color="#9d4edd"
      />

      {/*<primitive object={new ThreeMFLoader.RectAreaLight("#A259FF")} />*/}
    </>
  );
};

export default HeroLights;
