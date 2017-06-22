<template>
  <div class="viewer-viewport">
    <!--model-loaded-->
    <div class="viewer has-model  started transparent-pattern  ">

      <div class="landing" data-action="start">

        <div class="preview">
          <div class="image-container" style="width:100%; height:100%;  background-image: url(/static/image/fbx.jpg);">
            <div style="height:100%;"></div>
          </div>

        </div>

        <div class="start-button">
          <button class="play">
            <i class="fa fa-play"></i>
            <span class="label">3D</span>
          </button>
        </div>
      </div>

      <div class="overlays">

        <div class="overlay help hidden">
          <a href="#" class="close custom-icons icon-ion-close-round-icon"></a>
          <div class="inner">
            <ul class="tabs">
              <li class="active"><a href="#" data-target="basic">Navigation basics</a></li>
              <li><a href="#" data-target="all">All controls</a></li>
            </ul>
            <div class="tabs-container">
              <div class="tab active" data-tab="basic">
                <div class="tip">
                  <div>
                    <i class="fa fa-refresh"></i>
                  </div>
                  <div>
                    <b>Orbit around</b>
                    <div>
                      Left click + drag or<br>
                      One finger drag (touch)
                    </div>
                  </div>
                </div>
                <div class="tip">
                  <div>
                    <i class="fa fa-search-plus"></i>
                  </div>
                  <div>
                    <b>Zoom</b>
                    <div>
                      Double click on model<br>
                      or scroll anywhere or<br>
                      Pinch (touch)
                    </div>
                  </div>
                </div>
                <div class="tip">
                  <div>
                    <i class="fa fa-arrows"></i>
                  </div>
                  <div>
                    <b>Pan</b>
                    <div>
                      Right click + drag or<br>
                      Two fingers drag (touch)
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab" data-tab="all">
                <div>
                  <div class="section">
                    <h2>Orbit navigation</h2>
                    <b>Move camera:</b> 1 finger drag or Left Mouse Button<br>
                    <b>Pan:</b> 2-finger drag or Right Mouse Button or <kbd>SHIFT</kbd>+ Left Mouse Button<br>
                    <b>Zoom on object:</b> Double-tap or Double-click on object<br>
                    <b>Zoom out:</b> Double-tap or Double-click on background<br>
                    <b>Zoom:</b> Pinch in/out or Mousewheel or <kbd>CTRL</kbd> + Left Mouse Button<br>
                  </div>
                  <div class="section">
                    <h2>First-person navigation</h2>
                    <b>Move:</b> <kbd>↑</kbd>,<kbd>←</kbd>,<kbd>↓</kbd>,<kbd>→</kbd> (or <kbd>W</kbd>,<kbd>A</kbd>,<kbd>S</kbd>,<kbd>D</kbd>)<br>
                    <b>Look around:</b> 1-finger drag or Left Mouse Button<br>
                    <b>Adjust speed:</b> Mousewheel<br>
                  </div>
                  <div class="section rendering-shortcuts"><h2>Rendering</h2><b>Lit: </b><kbd>1</kbd><br><b>Shadeless: </b><kbd>2</kbd><br><b>MatCap: </b><kbd>3</kbd><br><b>Wireframe: </b><kbd>5</kbd><br></div>
                  <div class="section">
                    <h2>Lighting</h2>
                    <b>Rotate lighting:</b> 3-finger drag or <kbd>ALT</kbd> + Left Mouse Button<br>
                    <b>Rotate env. only:</b> <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + Left Mouse Button<br>
                  </div>
                  <div class="section annotation-shortcuts"><h2>Annotations</h2><b>Previous: </b><kbd>j</kbd> or <kbd>pageup</kbd><br><b>Next: </b><kbd>k</kbd> or <kbd>pagedown</kbd><br></div>
                  <div class="section animation-shortcuts"><h2>Animations</h2><b>Previous frame: </b><kbd>b</kbd> or <kbd>ctrl+b</kbd> or <kbd>shift+b</kbd><br><b>Next frame: </b><kbd>n</kbd> or <kbd>ctrl+n</kbd> or <kbd>shift+n</kbd><br><b>Go to time/frame : </b><kbd>enter</kbd><br></div>
                </div>
              </div>
            </div>

            <div class="action">
              <button class="button" data-action="reset-camera">Reset camera view</button>
            </div>

          </div>
        </div>
        <div class="overlay share hidden">
          <a href="#" class="close custom-icons icon-ion-close-round-icon"></a>
          <div class="inner">
            <div class="share-link">
              <div class="text-field">
                <label>Link</label>
                <input type="text" class="text" value="" readonly="">
                <button data-clipboard-target=".text-field .text">copy</button>
              </div>
            </div>
            <div class="share-social">
              <a data-action="share-on-facebook" target="_blank"><i class="fa fa-facebook"></i></a>
              <a data-action="share-on-twitter" target="_blank"><i class="fa fa-twitter"></i></a>
              <a data-action="share-on-reddit" target="_blank"><i class="fa fa-reddit"></i></a>
              <a data-action="share-on-tumblr" target="_blank"><i class="fa fa-tumblr"></i></a>
              <a data-action="share-on-google-plus" target="_blank"><i class="fa fa-google-plus"></i></a>
              <a data-action="share-on-linkedin" target="_blank"><i class="fa fa-linkedin"></i></a>
              <a data-action="share-on-pinterest" target="_blank"><i class="fa fa-pinterest"></i></a>
              <a class="share-mail" target="_blank"><i class="fa fa-envelope"></i></a>
            </div>
            <div class="share-embed">
              <a class="button" href="" target="_blank">
                <i class="fa fa-code"></i> Embed
              </a>
            </div>
          </div>
        </div>
        <div class="overlay hotspots-overlay hidden">
          <a href="#" class="close custom-icons icon-ion-close-round-icon"></a>
          <div class="inner">
            <h4 class="hotspot-title"></h4>
            <div class="hotspot-content markdown-rendered-content"></div>
          </div>
        </div>
        <div class="overlay helper-vr-overlay hidden">
          <i class="custom-icons icon-ion-close-round-icon close"></i>
          <div class="inner custom-scrollbar">
            <div class="header-helper">
              To view this model in virtual reality:
            </div>
            <div class="content-helper">
              <div class="row-helper">
                <div class="content-row">
                  <div class="image"><i class="fa fa-mobile"></i></div>
                  <div class="text">
                    <div class="title">on mobile phone</div>
                    <div>with Cardboard or similar</div>
                  </div>
                </div>
                <ul class="info">
                  <li>On your mobile, open this link: <a class="url" target="_blank" href="#"></a></li>
                  <li>Press the VR icon</li>
                  <li>Insert your mobile in a Cardboard headset</li>
                </ul>
              </div>
              <div class="row-helper">
                <div class="content-row">
                  <div class="image"><i class="fa fa-desktop"></i></div>
                  <div class="text">
                    <div class="title">on desktop PC <span class="flag-info">BETA</span></div>
                    <div>with a VR headset</div>
                  </div>
                </div>
                <ul class="info">
                  <li><a target="_blank" href="https://webvr.info/">Get a WebVR-compatible browser</a></li>
                  <li>Enable WebVR</li>
                  <li>Open this model</li>
                  <li>Click on the VR icon</li>
                </ul>
              </div>
            </div>
            <div class="footer-helper">
              <a target="_blank" href="https://help.sketchfab.com/hc/en-us/articles/204777439-Mobile-VR-and-Desktop-WebVR?utm_source=website&amp;utm_campaign=vr_hints">
                More info on Virtual reality.
              </a>
            </div>
          </div>
        </div>
        <div class="overlay sound-credits-overlay hidden">
          <a href="#" class="close custom-icons icon-ion-close-round-icon"></a>
          <div class="content">
            <div>
              <a href="https://soundcloud.com" target="_blank">
                <img src="https://d1jlf623bx36qa.cloudfront.net/static/builds/web/dist/soundcloud-1fe89c501f0d9d67c2c6b15da3bdc234.png" width="64">
              </a>
            </div>
            <div class="tracks"></div>
          </div>
        </div>
      </div>
      <div class="webgl">
        <div id="example">

        </div>
        <!--加载-->
        <!--<div class="loading-container">
                <div class="secondary-progress visible">
                    <div class="secondary-progress-percentage">8 %</div>
                    <div class="secondary-progress-display" style="width: 8.99281%;"></div>
                </div>
                <div class="main-progress">
                    <img src="https://dg5bepmjyhz9h.cloudfront.net/urls/63d3cac98954447d93412610ca3083ad/dist/thumbnails/3ae7403d38b44ed8a05417d60c3d16c0/64x36.jpeg" class="loading-thumbnail">
                    <div class="main-progress-wrapper">
                        <div class="main-progress-percentage loading-percentage">100 %</div>
                        <p>Loading 3D model</p>
                        <progress class="main-progress-display" value="1" max="1"></progress>
                    </div>
                </div>
            </div>-->
        <!--加载-->
        <div class="loading-container">
          <div class="main-progress">
            <img src="/static/image/fbx.jpg" class="loading-thumbnail">
            <div class="main-progress-wrapper">
              <div class="main-progress-percentage loading-percentage"></div>
              <p>加载3D模型中...</p>
              <img src="/static/image/loading.gif" class="model-loading">
            </div>
          </div>
        </div>

        <div class="gui enabled" >
          <!--动画不能加载时-->
          <div class="animation-not-supported hidden">
            <a href="#" class="close"></a>
            <p>Model is too heavy for your device and can not be rendered properly</p>
          </div>


          <div class="hotspot-controls-responsive">
            <div data-title="Previous Annotation" data-action="prev-annotation">
              <div class="icon fa fa-caret-left"></div>
            </div>
            <div data-title="Next Annotation" data-action="next-annotation">
              <div class="icon fa fa-caret-right"></div>
            </div>
          </div>


          <div class="controls">
            <!--动画控制-->
            <div class="animation-controls widget "  style="opacity: 1 !IMPORTANT">
              <div class="timeline">
                <div class="timeline-wrapper">
                  <div class="track">
                    <div class="bar">
                    </div>
                    <div class="knob">
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" class="control play fa pause"></a>
              <a href="#" class="control next fa"></a>
              <div class="animation-timer control progress help" data-unit="time">00:00.00</div>
            </div>




            <div class="spacer"></div>

            <div class="general-controls widget " style="opacity: 1 !IMPORTANT">
              <a class="control tooltip help" data-title="Help">
                <i class="fa fa-question"></i>
              </a>
              <a class="control tooltip settings has-menu" data-title="Settings">
                <i class="fa fa-gear"></i>
                <div class="control-menu settings-menu">

                </div>
                <!--<span class="control-badge active">HD</span>-->
              </a>
              <a class="control tooltip vr " data-title="View in VR">
                <i class="custom-icons icon-vr-icon"></i>
              </a>

              <a class="control tooltip theatre" data-title="Theater Mode">
                <i class="custom-icons icon-theater-icon"></i>
              </a>

              <a class="control tooltip tooltip-right-bound fullscreen" data-title="Fullscreen">
                <i class="custom-icons icon-fullscreen-icon"></i>
              </a>
            </div>
          </div>

          <div class="viewer-hint widget disabled">
            <div class="viewer-movehint">
              <i class="icon"></i>
              <span class="label">click &amp; hold<br>to rotate</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { FBX } from '../../../static/script/model/FBX.js';

  export default {
    name: 'model-fbx',
    data () {
      return {
      }
    },
    methods : {

    },
    mounted(){
      //初始化fbx模型
      var fbx=new FBX(document.getElementById( 'example' ));
      var render = function () {
        requestAnimationFrame( render );
        fbx.render();
      };
      var resizeWindow = function () {
        fbx.resizeDisplayGL();
      };
      fbx.initGL();
      fbx.initPosGL('../../../static/model/fbx/male/xsi_man_skinning.fbx');
      render();
      window.addEventListener( 'resize', resizeWindow, false );

      //        运动 暂停
      $(document).on('click','.control.play',function(){
        var isPlay = $(this).hasClass('pause');
        $(this)[ isPlay ? 'removeClass' : 'addClass']('pause');
        fbx.play(!isPlay);
        return false;
      });
//        控制器 开关
      $('.dg.main').appendTo('.control-menu');
      $(document).on('click','.control.settings i',function(){
        $(this).parent().toggleClass('active');
        return false;
      });

//        关闭动作控制
      $(document).on('mousedown','.webgl',function(){
        $(this).find('.viewer-hint').removeClass('active');
      });







      $('.webgl').on({
        'mouseover':function(){
          $('.controls .general-controls >div').css('opacity','1')
        },
        'mouseout':function(){
          $('.controls .general-controls >div').delay(800).css('opacity','0')
        }
      });
//        帮助
      $(document).on('click','.control.help',function(){
        $('.overlays').find('.help').toggleClass('hidden');
      });
//        vr
      $(document).on('click','.control.vr',function(){
        $('.overlays').find('.helper-vr-overlay').toggleClass('hidden');
      });
//        横屏
      $(document).on('click','.control.theatre',function(){
        var modelBox = $('#model-container');
        var T = modelBox.hasClass('theatre-on');
        modelBox[T ? 'removeClass': 'addClass']('theatre theatre-on');
        modelBox.find($('.right')).insertAfter(modelBox.find(T ? $('.left') : $('#comments')));
      });
//        全屏
      $(document).on('click','.control.fullscreen',function(e){
        $('#viewer').fullScreen({'callback':function(isFullScreen){
          $('#viewer')[isFullScreen ? 'addClass' : 'removeClass']('fullscreen');
        }});
        e.preventDefault();
      });
//        关闭
      $(document).on('click','.overlay .close',function(){
        $(this).parents('.overlay').addClass('hidden');
      });
      $(document).on('click','[data-action="close"]',function(){
        $(this).parent().addClass('hidden');
      })
    }
  }
</script>
