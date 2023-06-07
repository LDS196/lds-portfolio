import {useCallback} from "react";
import {Container, Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles";

export const MyParticles = () => {
    const particlesInit = useCallback(async (engine: Engine) => {

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {

    }, []);
    return (
        <Particles className={'particles'}
                   id="tsparticles"
                   init={particlesInit}
                   loaded={particlesLoaded}
                   options={{
                       background: {
                           color: {
                               value: "",
                           },
                       },
                       fpsLimit: 200,
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
                               value: "#ffffff",
                           },
                           links: {
                               color: "#ffffff",
                               distance: 150,
                               enable: true,
                               opacity: 0.5,
                               width: 1,
                           },
                           collisions: {
                               enable: true,
                           },
                           move: {
                               direction: "none",
                               enable: true,
                               outModes: {
                                   default: "bounce",
                               },
                               random: false,
                               speed: 4,
                               straight: false,
                           },
                           number: {
                               density: {
                                   enable: true,
                                   area: 1200,
                               },
                               value: 80,
                           },
                           opacity: {
                               value: 0.3,
                           },
                           shape: {
                               type: "circle",
                           },
                           size: {
                               value: { min: 1, max: 5 },
                           },
                       },
                       detectRetina: false,
                   }}
        />
    );
};