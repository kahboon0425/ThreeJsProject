import * as THREE from 'three';
import TWEEN from 'three/addons/libs/tween.module.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';



const table = [
    'M', 'Nixon', '21', 1, 1,
    'M', 'Kenneth', '22', 18, 1,
    'F', 'Sophia', '21', 1, 2,
    'F', 'Yuki', '21', 2, 2,
    'F', 'Hui En', '21', 13, 2,
    'F', 'Mindy', '21', 14, 2,
    'M', 'Ethan', '21', 15, 2,
    'F', 'Serene', '21', 16, 2,
    'F', 'Li Ning', '21', 17, 2,
    'F', 'Eunice', '21', 18, 2,
    'M', 'Kah Shen', '21', 1, 3,
    'F', 'Renee', '21', 2, 3,
    'F', 'Kah Hui', '23', 13, 3,
    'F', 'Nicole', '21', 14, 3,
    'M', 'Naim', '22', 15, 3,
    'M', 'Hakim', '23', 16, 3,
    'M', 'Jordan', '21', 17, 3,
    'M', 'Joseph', '21', 18, 3,
    'M', 'Joseph David', '23', 1, 4,
    'F', 'Pearl', '20', 2, 4,
    'M', 'Yee Ning', '20', 3, 4,
    'M', 'Rayes', '20', 4, 4,
    'M', 'Gerard', '20', 5, 4,
    'M', 'Hadi', '24', 6, 4,
    'M', 'Jun Yee', '21', 7, 4,
    'M', 'Vignesh', '21', 8, 4,
    'M', 'Yulius', '21', 9, 4,
    'M', 'Joshua', '19', 10, 4,
    'M', 'Yusuf', '20', 11, 4,
    'M', 'Faisal', '21', 12, 4,
    'M', 'Kin Wah', '20', 13, 4,
    'M', 'Cajun', '22', 14, 4,
    'M', 'Han Xiang', '22', 15, 4,
    'F', 'Pretysha', '20', 16, 4,
    'F', 'Veyshankari', '21', 17, 4,
    'F', 'Kimberly', '21', 18, 4,
    'F', 'Qin Hui', '21', 1, 5,
    'M', 'Desmond', '21', 2, 5,
    'M', 'Carter', '21', 3, 5,
    'M', 'Rohit', '22', 4, 5,
    'M', 'Aaron', '24', 5, 5,
    'M', 'Ayman', '21', 6, 5,
    'F', 'Yee Fei', '21', 7, 5,
    'F', 'Caynee', '21', 8, 5,
    'M', 'Royce', '21', 9, 5,
    'F', 'Hui Ping', '21', 10, 5,
    'F', 'Bernice', '21', 11, 5,
    'M', 'Tze Yao', '20', 12, 5,
    'F', 'Han Yun', '18', 13, 5,
    'F', 'Ayumi', '21', 14, 5,
    'F', 'Jennis', '22', 15, 5,
    'F', 'Melody', '24', 16, 5,
    'M', 'Justin', '21', 17, 5,
    'F', 'Jing Yi', '21', 18, 5,
    'F', 'Ang', '21', 1, 6,
    'F', 'Chua', '21', 2, 6,
    'F', 'Chen Xin', '21', 4, 9,
    'F', 'Grace', '21', 5, 9,
    'F', 'You Yin', '21', 6, 9,
    'M', 'Juin', '21', 7, 9,
    'F', 'Jia Min', '21', 8, 9,
    'F', 'Jia Qi', '21', 9, 9,
    'F', 'Hui Xin', '21', 10, 9,
    'F', 'Jasmine', '21', 11, 9,
    'F', 'Yipink', '23', 12, 9,
    'F', 'Daphne', '21', 13, 9,
    'F', 'Chin Ru', '21', 14, 9,
    'F', 'Jyn', '21', 15, 9,
    'F', 'Joanne', '21', 16, 9,
    'F', 'Angela', '21', 17, 9,
    'F', 'Angeline', '23', 18, 9,
    'F', 'Penny', '21', 4, 6,
    'F', 'Patrine', '23', 5, 6,
    'M', 'Jia Jin', '22', 6, 6,
    'M', 'Xuan Qin', '22', 7, 6,
    'M', 'Budi', '22', 8, 6,
    'F', 'Sasa', '22', 9, 6,
    'M', 'Diviyan', '21', 10, 6,
    'M', 'Daniel', '20', 11, 6,
    'M', 'Eeashan', '21', 12, 6,
    'M', 'Jayson', '21', 13, 6,
    'M', 'Yi Xing', '21', 14, 6,
    'M', 'Jonathan', '20', 15, 6,
    'F', 'Hao Jin', '21', 16, 6,
    'F', 'Jovina', '20', 17, 6,
    'F', 'Kendra', '21', 18, 6,
    'F', 'Hui Xin', '21', 1, 7,
    'F', 'Ying Xuan', '23', 2, 7,
    'M', 'Vandyck', '23', 4, 10,
    'F', 'Enxi', '19', 5, 10,
    'M', 'Guo Bin', '21', 6, 10,
    'F', 'Shun Xin', '21', 7, 10,
    'M', 'Le Yang', '19', 8, 10,
    'M', 'Ryan', '20', 9, 10,
    'F', 'Wizi', '21', 10, 10,
    'M', 'Zhi Yan', '21', 11, 10,
    'F', 'Amanda', '24', 12, 10,
    'M', 'Jing Cheng', '21', 13, 10,
    'M', 'Harold', '24', 14, 10,
    'M', 'Dino', '21', 15, 10,
    'F', 'Casey', '21', 16, 10,
    'F', 'Dora', '22', 17, 10,
    'F', 'Angel', '21', 18, 10,
    'F', 'Zhi Rou', '21', 4, 7,
    'F', 'Zi Ying', '21', 5, 7,
    'M', 'Brian', '21', 6, 7,
    'M', 'Chuan Wei', '21', 7, 7,
    'F', 'Caynee', '21', 8, 7,
    'F', 'RuiNi', '21', 9, 7,
    'F', 'Wei Ling', '21', 10, 7,
    'F', 'Xynci', '21', 11, 7,
    'F', 'Hui Ping', '21', 12, 7,
    'F', 'Hui Min', '21', 13, 7,
    'F', 'Gabrielle', '21', 14, 7,
    'F', 'lqee', '21', 15, 7,
    'F', 'Megan', '20', 16, 7,
    'F', 'Eloise', '24', 17, 7,
    'F', 'Eva', '24', 18, 7
];

let camera, scene, renderer;
let controls;

const objects = [];
const targets = { table: [], sphere: [], helix: [], grid: [], cone: []};

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 3000;

    scene = new THREE.Scene();

    // table

    for ( let i = 0; i < table.length; i += 5 ) {

        const element = document.createElement( 'div' );
        element.className = 'element';
        if (table[i] == 'F'){
            element.style.backgroundColor = 'rgba(255,20,147,' + ( Math.random() * 0.5 + 0.25 ) + ')';}
        else{
            element.style.backgroundColor = 'rgba(0,0,255,' + ( Math.random() * 0.5 + 0.25 ) + ')';
        }

        const number = document.createElement( 'div' );
        number.className = 'number';
        number.textContent = ( i / 5 ) + 1;
        element.appendChild( number );

        const symbol = document.createElement( 'div' );
        symbol.className = 'symbol';
        symbol.textContent = table[ i ];
        element.appendChild( symbol );

        const details = document.createElement( 'div' );
        details.className = 'details';
        details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
        element.appendChild( details );
 
        const objectCSS = new CSS3DObject( element );
        objectCSS.position.x = Math.random() * 4000 - 2000;
        objectCSS.position.y = Math.random() * 4000 - 2000;
        objectCSS.position.z = Math.random() * 4000 - 2000;
        scene.add( objectCSS );

        objects.push( objectCSS );

        //

        const object = new THREE.Object3D();
        object.position.x = ( table[ i + 3 ] * 140 ) - 1330;
        object.position.y = - ( table[ i + 4 ] * 180 ) + 990;

        targets.table.push( object );

    }

    // sphere

    const vector = new THREE.Vector3();

    for ( let i = 0, l = objects.length; i < l; i ++ ) {

        const phi = Math.acos( - 1 + ( 2 * i ) / l );
        const theta = Math.sqrt( l * Math.PI ) * phi;

        const object = new THREE.Object3D();

        object.position.setFromSphericalCoords( 800, phi, theta );

        vector.copy( object.position ).multiplyScalar( 2 );

        object.lookAt( vector );

        targets.sphere.push( object );

    }

    // helix

    for ( let i = 0, l = objects.length; i < l; i ++ ) {

        const theta = i * 0.175 + Math.PI;
        const y = - ( i * 8 ) + 450;

        const object = new THREE.Object3D();

        object.position.setFromCylindricalCoords( 900, theta, y );

        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;

        object.lookAt( vector );

        targets.helix.push( object );

    }

    // grid

    for ( let i = 0; i < objects.length; i ++ ) {

        const object = new THREE.Object3D();

        object.position.x = ( ( i % 5 ) * 400 ) - 800;
        object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
        object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

        targets.grid.push( object );

    }

    // cone

    const coneRadius = 300;
    const coneHeight = 480;

    for ( let i = 0; i < objects.length; i ++ ) {
        const theta = i * 4 + Math.PI;
        const y = - ( i * 12 ) + 450;

        const object = new THREE.Object3D();
        
        const radius = (coneRadius / coneHeight) * (coneHeight - y);

        object.position.setFromCylindricalCoords(radius, theta, y );
        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;

        object.lookAt( vector );
     
        targets.cone.push( object );

    }

    renderer = new CSS3DRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById( 'container' ).appendChild( renderer.domElement );


    controls = new TrackballControls( camera, renderer.domElement );
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener( 'change', render );

    const buttonTable = document.getElementById( 'table' );
    buttonTable.addEventListener( 'click', function () {

        transform( targets.table, 2000 );

    } );

    const buttonSphere = document.getElementById( 'sphere' );
    buttonSphere.addEventListener( 'click', function () {

        transform( targets.sphere, 2000 );

    } );

    const buttonHelix = document.getElementById( 'helix' );
    buttonHelix.addEventListener( 'click', function () {

        transform( targets.helix, 2000 );

    } );

    const buttonGrid = document.getElementById( 'grid' );
    buttonGrid.addEventListener( 'click', function () {

        transform( targets.grid, 2000 );

    } );

    const buttonCone = document.getElementById( 'cone' );
    buttonCone.addEventListener( 'click', function () {

    	transform( targets.cone, 2000 );

    } );

    transform( targets.table, 2000 );

    window.addEventListener( 'resize', onWindowResize );

}

function transform( targets, duration ) {

    TWEEN.removeAll();

    for ( let i = 0; i < objects.length; i ++ ) {

        const object = objects[ i ];
        const target = targets[ i ];

        new TWEEN.Tween( object.position )
            .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
            .easing( TWEEN.Easing.Exponential.InOut )
            .start();

        new TWEEN.Tween( object.rotation )
            .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
            .easing( TWEEN.Easing.Exponential.InOut )
            .start();

    }

    new TWEEN.Tween( this )
        .to( {}, duration * 2 )
        .onUpdate( render )
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    render();

}

function animate() {

    requestAnimationFrame( animate );

    TWEEN.update();

    controls.update();

}

function render() {

    renderer.render( scene, camera );

}
