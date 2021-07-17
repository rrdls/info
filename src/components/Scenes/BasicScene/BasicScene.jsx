import React, {useEffect, useRef} from "react";
import styles from './Scene.module.css';
import {
    AmbientLight,
    AxesHelper,
    DirectionalLight,
    GridHelper,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const BasicScene = (props) => {

    const canvasRef = useRef(null);

    function newBasicScene() {

        const threeCanvas = canvasRef.current;

        //Creates the Three.js scene
        const scene = props.scene || new Scene();

        //Object to store the size of the viewport
        const size = {
            width: threeCanvas.clientWidth,
            height: threeCanvas.clientHeight,
        };

        //Creates the camera (point of view of the user)
        const camera = new PerspectiveCamera(75, size.width / size.height);
        camera.position.z = 15;
        camera.position.y = 13;
        camera.position.x = 8;

        //Creates the lights of the scene
        const lightColor = 0xffffff;

        const ambientLight = new AmbientLight(lightColor, 0.5);
        scene.add(ambientLight);

        const directionalLight = new DirectionalLight(lightColor, 1);
        directionalLight.position.set(0, 10, 0);
        directionalLight.target.position.set(-5, 0, 0);
        scene.add(directionalLight);
        scene.add(directionalLight.target);

        //Sets up the renderer, fetching the canvas of the HTML
        const renderer = new WebGLRenderer({canvas: threeCanvas, alpha: true});
        renderer.setSize(size.width, size.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        //Creates grids and axes in the scene
        const grid = new GridHelper(50, 30);
        scene.add(grid);

        const axes = new AxesHelper();
        axes.material.depthTest = false;
        axes.renderOrder = 1;
        scene.add(axes);

        //Creates the orbit controls (to navigate the scene)
        const controls = new OrbitControls(camera, threeCanvas);
        controls.enableDamping = true;
        controls.target.set(-2, 0, 0);

        //Adjust the viewport to the size of the browser
        window.addEventListener("resize", () => {
            size.width = threeCanvas.clientWidth;
            size.height = threeCanvas.clientHeight;
            camera.aspect = size.width / size.height;
            camera.updateProjectionMatrix();
            renderer.setSize(size.width, size.height);
        });

        //Animation loop
        const animate = () => {
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

    }

    useEffect(() => {
        if (canvasRef) {
            newBasicScene();
        }
    })

    return <canvas className={styles.threeCanvas} ref={canvasRef}/>
}
