import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function canva(){
    useEffect(() => {
        const scene=new THREE.Scene()
        const camera=new THREE.PerspectiveCamera(75,window.innerWidth/500,0.1,100)
        camera.position.set(0,0,5)
        const canva=document.querySelector("canvas.canvass")
        const renderer=new THREE.WebGLRenderer({canvas:canva,antialias:true})
        renderer.setSize(window.innerWidth,500)
        const controls=new OrbitControls(camera,canva)

        const model={box:new THREE.Mesh}
        const blendLoad=new GLTFLoader()
        blendLoad.load("/models/cube.glb",(gltf) => {
            model.box=gltf.scene;
            scene.add(model.box);
        })

        const point1=new THREE.PointLight("white",5000)
        const point2=new THREE.PointLight("white",5000)
        const point3=new THREE.PointLight("white",5000)
        const point4=new THREE.PointLight("white",5000)
        const point5=new THREE.PointLight("white",5000)
        const point6=new THREE.PointLight("white",5000)
        point1.position.set(0,0,40)
        point2.position.set(0,40,0)
        point3.position.set(0,-40,0)
        point4.position.set(40,0,0)
        point5.position.set(-40,0,0)
        point6.position.set(0,0,-40)

        scene.add(point1,point2,point3,point4,point5,point6,camera)

        scene.background=new THREE.Color(0x0c0707);

        window.addEventListener("resize",()=>{
            camera.aspect=window.innerWidth/500;
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth,500)
        })

        controls.enableDamping=true
        const renderloop=()=>{
            controls.update()
            model.box.rotation.y-=0.003
            window.requestAnimationFrame(renderloop)
            renderer.render(scene,camera)
        }
        renderloop()
    },[])
    return(
        <canvas className="canvass"/>
    )
}

export default canva