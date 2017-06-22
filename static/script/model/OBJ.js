/**
 * Created by Administrator on 2017/6/20.
 */
var OBJ = (function () {

    function OBJ( element ) {
        this.renderer = null;
        this.container = element;
        this.scene = null;
        this.cameraDefaults = {
            posCamera: new THREE.Vector3( 0.0, 175.0, 500.0 ),
            posCameraTarget: new THREE.Vector3( 0, 0, 0 ),
            near: 1,
            far: 2000,
            fov: 65
        };
        this.camera = null;
        this.cameraTarget = this.cameraDefaults.posCameraTarget;

        this.controls = null;
        this.pivot = null;
        this.objModel=null;
        this.ambientLight=null;
        this.panel=null;
        this.material=null;
        this.stats = null;
    }

    OBJ.prototype.initGL = function () {
        this.renderer = new THREE.WebGLRenderer( );
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.setClearColor( 0x333333 );
        this.container.appendChild( this.renderer.domElement );;

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera( this.cameraDefaults.fov, window.innerWidth / window.innerHeight, this.cameraDefaults.near, this.cameraDefaults.far );
        this.resetCamera();
//					控制器
        this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
        this.controls.target.set( 0, 12, 0 );
        this.controls.update();
//					灯光
        this.ambientLight = new THREE.AmbientLight( 0xffffff );
        var directionalLight1 = new THREE.DirectionalLight( 0xC0C090 );
        var directionalLight2 = new THREE.DirectionalLight( 0xC0C090 );

        directionalLight1.position.set( -100, -50, 100 );
        directionalLight2.position.set( 100, 50, -100 );
        directionalLight2.castShadow = true;




        this.scene.add( directionalLight1 );
        this.scene.add( directionalLight2 );
        this.scene.add( this.ambientLight );
//					网格
//					var helper = new THREE.GridHelper( 600, 28, 0xFF4444, 0x404040 );
//					helper.position.set( 0, - 110, 0 );
//					this.scene.add( helper );

        var geometry = new THREE.BoxGeometry( 10, 10, 10 );
        this.material = new THREE.MeshBasicMaterial( { wireframe: true } );


        this.pivot = new THREE.Object3D();
        this.pivot.name = 'Pivot';
        this.scene.add( this.pivot );

        this.stats = new Stats();
        this.container.appendChild( this.stats.dom );

        this.createPanel();
    };

    OBJ.prototype.initPostGL = function ( objDef ) {

        var scope = this;

        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.setPath( objDef.texturePath );
        mtlLoader.setCrossOrigin( 'anonymous' );
        mtlLoader.load( objDef.fileMtl, function( materials ) {
            materials.preload();
            var objLoader = new THREE.OBJLoader2();
            objLoader.setSceneGraphBaseNode( scope.pivot );
            objLoader.setPath( objDef.path );
            objLoader.setDebug( false, false );
            objLoader.setMaterials( materials.materials );

            //模型加载成功
            var onSuccess = function ( object3d ) {
                console.log( ' 加载成功');
                scope.objModel=object3d;
                $('.viewer .loading-container').hide();
            };
            //模型加载时
            var onProgress = function ( event ) {
                if ( event.lengthComputable ) {
                    var percentComplete = event.loaded / event.total * 100;
                    var output = '加载进度： "' + objDef.fileObj + '": ' + Math.round( percentComplete ) + '%';
                    console.log(output);
                }
            };
            //模型加载失败
            var onError = function ( event ) {
                console.error('加载'+ event.src + '时，发生错误，错误类型： ' + event.type);
                $('.viewer .animation-not-supported').removeClass('hidden');
            };
            objLoader.load( objDef.fileObj, onSuccess, onProgress, onError );
        });
        return true;
    };

    OBJ.prototype.resizeDisplayGL = function () {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
    };


    OBJ.prototype.resetCamera = function () {
        var model=this;
        model.camera.position.copy( model.cameraDefaults.posCamera );
        model.cameraTarget.copy( model.cameraDefaults.posCameraTarget );

        model.updateCamera();
    };

    OBJ.prototype.updateCamera = function () {
        this.camera.lookAt( this.cameraTarget );
        this.camera.updateProjectionMatrix();
    };

    OBJ.prototype.render = function () {
        if ( ! this.renderer.autoClear ) this.renderer.clear();
        this.controls.update();
        this.renderer.render( this.scene, this.camera );
    };
    OBJ.prototype.createPanel = function () {
        this.panel = new dat.GUI( { width: 185} );
        this.panel.open();

        var model=this;

        settings = {
            '模型':            true,
            '灯光':1.0
        };
        this.panel.add( settings, '模型' ).onChange( function() {//模型
            model.objModel.visible = settings[ '模型'];
        } );
        this.panel.add(settings, '灯光', { 暗光: 0.2, 正常: 1.0, 亮光: 2 ,强光:5 } ).onChange(function(){
            model.ambientLight.intensity=settings[ '灯光' ]
        });
    };
    OBJ.prototype.showPanel = function (isShow) {
        isShow ? this.panel.open() : this.panel.close();
    };
    OBJ.prototype.showModel = function (isShow) {
        this.objModel.visible = isShow;
    };
    OBJ.prototype.modifyLight = function (light) {
        this.ambientLight.intensity = light;
    };
    return OBJ;
})();

