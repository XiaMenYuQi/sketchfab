/**
 * Created by Administrator on 2017/6/19.
 */
import $ from 'jquery'

let THREE = require('three');
let OrbitControls = require('three-orbit-controls')(THREE);
require('./loader/FBXLoader2');
// import dat  from './libs/dat.gui.min'
// import Stats  from './libs/stats.min'

export let FBX=(function(){
    function FBX(element){
        this.container=element;
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        this.fbxModel = null;
        this.skeleton = null;
        this.hemiLight = null;
        this.light = null;
        this.clock = null;
        this.mixers = [];
        this.loader = null;
        this.action = null;
        this.stats = null;
        this.panel = null;
    }
    FBX.prototype.initGL = function(){

        this.clock = new THREE.Clock();
//					渲染器
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.setClearColor( 0x333333 );
        this.container.appendChild( this.renderer.domElement );

//					相机
        this.camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 1, 2000 );
        this.camera.position.set( 2, 18, 28 );

//					网格
//					var gridHelper = new THREE.GridHelper( 28, 28, 0x303030, 0x303030 );
//					gridHelper.position.set( 0, - 0.04, 0 );
//					scene.add( gridHelper );

//					画布
        this.scene = new THREE.Scene();

//					控制器
        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        this.controls.target.set( 0, 12, 0 );
        this.controls.update();
//					光线
        this.hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0);
        this.hemiLight.position.set(0, 1, 0);
        this.hemiLight.castShadow = true;
        this.scene.add(this.hemiLight);
//					光线
        this.light = new THREE.DirectionalLight(0xffffff, 1.0);
        this.light.position.set(0, 1, 0);
        this.light.castShadow = true;
        this.scene.add(this.light);

        this.stats = new Stats();
        this.container.appendChild( this.stats.dom );
//					控制器
        this.createPanel();

    };
    FBX.prototype.initPosGL=function(obj){
        var scope = this;

//					 model
        var manager = new THREE.LoadingManager();
        manager.onProgress = function( item, loaded, total ) {
            console.log( item, loaded, total );
        };
        var onProgress = function( xhr ) {
            if ( xhr.lengthComputable ) {
                var percentComplete = xhr.loaded / xhr.total * 100;
                console.log( Math.round( percentComplete, 2 ) + '% downloaded' );

            }
        };

        var onError = function( xhr ) {
            console.error( xhr );
            $('.viewer .animation-not-supported').removeClass('hidden');
        };

        this.loader = new THREE.FBXLoader( manager );
        this.loader.load(obj, function( object ) {
            object.mixer = new THREE.AnimationMixer( object );
            scope.mixers.push( object.mixer );

            scope.action = object.mixer.clipAction( object.animations[ 0 ] );
            scope.action.play();

            scope.scene.add( object );


            scope.skeleton = new THREE.SkeletonHelper( object );
            scope.skeleton.visible = false;
            scope.scene.add( scope.skeleton );

            scope.fbxModel=object;
            console.log(object.mixer);

            $('.viewer .loading-container').hide();
        }, onProgress, onError );

    };
    FBX.prototype.resizeDisplayGL = function () {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
    };
    FBX.prototype.render = function () {
        this.controls.update();
        if ( this.mixers.length > 0 ) {
            for ( var i = 0; i < this.mixers.length; i ++ ) {
                this.mixers[ i ].update( this.clock.getDelta() );
            }
        }
        this.stats.update();
        this.renderer.render( this.scene, this.camera );
        if(this.skeleton){//骨骼
            this.skeleton.update();
        }
    };
    let settings;
    FBX.prototype.createPanel = function () {
        this.panel = new dat.GUI({width:185} );
        this.panel.open();

        var model=this;

        settings = {
            '模型':     true,
            '骨骼':     false,
            '速度':     1.0,
            //'暂停':     false,
            //'运动':					function(){
            //    model.action.play();
            //},
            //'暂停':					function(){
            //    model.action.stop();
            //},
            '灯光':1.0
        };
        this.panel.add( settings, '模型' ).onChange( function() {//模型
            model.fbxModel.visible = settings[ '模型'];
        } );
        this.panel.add( settings, '骨骼' ).onChange( function() {//骨骼
            model.skeleton.visible = settings[ '骨骼' ];
        } );
        this.panel.add(settings, '灯光', { 暗光: 0.5, 正常: 1.0, 亮光: 3 ,强光:10 } ).onChange(function(){
            model.hemiLight.intensity=settings[ '灯光' ]
        });
        //this.panel.add( settings, '暂停' ).onChange( function() {//骨骼
        //    settings[ '暂停' ] ? model.action.stop() : model.action.play();
        //} );
        this.panel.add(settings, '速度', { 'x 0.1': 0.1, 'x 0.5': 0.5, 'x 1': 1 ,'x 2':2 } ).onChange(function(){
            model.fbxModel.mixer.timeScale = settings[ '速度' ]
        });

        //var folder1 = this.panel.addFolder( '动作' );//运动
        //folder1.add( settings, '运动' );//运动
        //folder1.add( settings, '暂停' );//暂停
        //
        //folder1.add( settings, '速度', 0.0, 1.5, 0.01 ).onChange( function() {//速度
        //    model.fbxModel.mixer.timeScale = settings[ '速度' ];
        //} );
        //folder1.open();
    };
    FBX.prototype.showPanel = function (isShow) {
        isShow ? this.panel.open() : this.panel.close();
    };
    FBX.prototype.showModel = function (isShow) {
        this.fbxModel.visible = isShow;
    };
    FBX.prototype.showSkeleton = function (isShow) {
        this.skeleton.visible = isShow;
    };
    FBX.prototype.play = function (isPlay) {
        isPlay ? this.action.play() : this.action.stop();
    };
    FBX.prototype.modifySpeed = function (speed) {
        this.fbxModel.mixer.timeScale = speed;
    };
    FBX.prototype.modifyLight = function (light) {
        this.hemiLight.intensity = light;
    };

    return FBX;
})();

