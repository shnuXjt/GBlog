
import { Scene, PerspectiveCamera, WebGLRenderer, BufferGeometry, Vector3, Float32BufferAttribute, ShaderMaterial,AdditiveBlending, Points, Clock } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


export function renderThree(w: number, h: number, container: HTMLElement) {
    const scene = new Scene();
    const camera = new PerspectiveCamera(60, w / h, 0.001, 1000);
    camera.position.set(0, 3, 24);
    camera.lookAt(scene.position);
    const renderer = new WebGLRenderer({antialias: true});
    renderer.setSize(w, h);
    renderer.setClearColor(0x160016, 1.0);
    container.children.length > 0 && container.removeChild(container.children[0]);
    container.appendChild(renderer.domElement);
    
    const controls = new OrbitControls(camera, renderer.domElement);
    const { mesh, material } = drawStars(scene);

    function render() {
        // time += 0.05;
        let time = clock.getElapsedTime();
        mesh.rotation.y = time * 0.01;
        material.uniforms.uTime.value = time;
        renderer.render(scene, camera);
        controls.update();
      
        requestAnimationFrame(render);
    }

    render();
}

function drawStars(scene: Scene) {
    const count1 = 50000;
    const count2 = 100000;

    const geometry = new BufferGeometry();
    const positions = [];
    const sizes = [];
    const shifts = [];

    for(let i = 0; i < count1 + count2; i++) {
        let theta = Math.random() * Math.PI * 2;
        // 解释一下这行代码
        let phi = Math.acos(Math.random() * 2 - 1);
        let angle  = (Math.random() * 0.9 + 0.1) * Math.PI * 0.1;
        let strength = Math.random() * 0.9 + 0.1; // 0.1-1.0
        shifts.push(theta, phi, angle, strength);
        let size = Math.random() * 1.5 + 0.5; // 0.5-2.0
        sizes.push(size);

        if (i < count1) {
            // 中心球体粒子
            // let r = 10;
            let r = Math.random() * 0.5 + 9.5;
            // let x = r * Math.sin(phi) * Math.cos(theta);
            // let y = r * Math.sin(phi) * Math.sin(theta);
            // let z = r * Math.cos(phi);
            let { x, y, z } = new Vector3()
              .randomDirection()
             .multiplyScalar(r);
            positions.push(x, y, z);
          } else {
            // 外围圆盘粒子
            let r = 10;
            let R = 40;
            let rand = Math.pow(Math.random(), 1.5);
            let radius = Math.sqrt(R * R * rand + (1 - rand) * r * r); // 通过 rand=0-1 数值去线性插值 R^2 和 r^2 大概是按圆圈面积采样粒子分布更均匀
            let { x, y, z }  = new Vector3().setFromCylindricalCoords(
              radius, // 半径
              Math.random() * 2 * Math.PI, // 角度
              (Math.random() - 0.5) * 2 // 高度y -1-1
            );
            positions.push(x, y, z);
          }
    }

    geometry.setAttribute(
        "position",
        new Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute("aSize", new Float32BufferAttribute(sizes, 1));
    geometry.setAttribute("aShift", new Float32BufferAttribute(shifts, 4));
    const material = shaderMaterial();
    const mesh = new Points(geometry, material);
    mesh.rotation.order = "ZYX";
    mesh.rotation.z = 0.2;
    scene.add(mesh);
    return {
        mesh,
        material
    }

}
const clock = new Clock();

function shaderMaterial() {
    const vertexShader = /* GLSL */ `
        attribute float aSize;
        attribute vec4 aShift;

        uniform float uTime;

        varying vec3 vColor;

        const float PI = 3.141592653589793238;

        void main() {
            // float d = abs(position.y) / 10.0;
            float d = length(abs(position) / vec3(40., 10., 40.)); // 中间黄色、外面紫色
            d = clamp(d, 0., 1.);
            
            // rgb(227, 155, 0)
            // rgb(100, 50, 255)
            vec3 color1 = vec3(227., 155., 0.);
            vec3 color2 = vec3(100., 50., 255.);

            vColor = mix(color1, color2, d) / 255.;

            vec3 transformed = position;

            float theta = mod(aShift.x + aShift.z * uTime, PI * 2.);
            float phi = mod(aShift.y + aShift.z * uTime, PI * 2.);
            transformed += vec3(sin(phi) * cos(theta), cos(phi), sin(phi) * sin(theta)) * aShift.w;
            
            vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
            gl_PointSize = aSize * 50.0 / -mvPosition.z;
            gl_Position = projectionMatrix * mvPosition;
        }
        `;

    const fragmentShader = /* GLSL */ `
        varying vec3 vColor;

        void main() {
            float d = length(gl_PointCoord.xy - 0.5);
            if (d > 0.5) discard;
            // gl_FragColor = vec4(vColor, step(0.5, 1.0 - d));
            gl_FragColor = vec4(vColor, smoothstep(0.5, 0.1, d));
        }
        `;
    return new ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTime: { value: 0 },
        },
        transparent: true,
        blending: AdditiveBlending,
        depthTest: false,
      });
}

