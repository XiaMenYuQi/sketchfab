<template>
  <li class="item">
    <div class="model-card" >
      <div class="model-card-thumbnail">
        <div class="image-container" style="background-image: url('/static/image/256144.jpeg');">
          <div style="padding-top:62.6%;"></div>
        </div>
        <div class="model-card-overlay"></div>
        <a class="model-card-filter" ></a>
        <a class="model-card-preview" data-action="open-preview">
          <i class="fa fa-search"></i>
        </a>


        <div class="model-card-information">
          <div class="model-card-left-extra">
            <div class="model-card-stats">
              <span class="model-card-views">2.3k</span>
            </div>

            <div class="help like-button star-like-button popover-container model-card-like-button model-card-stats" data-action="like">
              <span class="count">122</span>
              <span class="tooltip liked-content tooltip-up">Like</span>
              <span class="tooltip unliked-content tooltip-up">Unlike</span>

              <!--分享-->
              <!--<div class="popover share-popover hidden down-arrow middle-arrow">-->
              <!--<p>Thanks!</p>-->
              <!--<p>Also share?</p>-->

              <!--<a data-action="share-on-twitter" class="icon fa fa-twitter"></a>-->
              <!--<a data-action="share-on-google-plus" class="icon fa fa-google-plus"></a>-->
              <!--<a data-action="share-on-facebook" class="icon fa fa-facebook"></a>-->
              <!--<a data-action="share-on-pinterest" class="icon fa fa-pinterest"></a>-->
              <!--</div>-->
            </div>
          </div>

          <div class="model-card-right-extra">
            <div class="model-card-stats download-start">
              <span class="model-card-downloads">178</span>
            </div>

            <div class="model-card-stats comments-stat">
              <a class="model-card-comments" >15</a>
            </div>
          </div>
        </div>
      </div>
      <div class="model-card-meta model-card-with-user">
        <div class="model-card-name">
          <span class="model-name">
              <a class="label"  title="Fishing Boat (200th Model)">Fishing Boat (200th Model)</a>
              <a href="/models/staffpicks" class="flag-staffpicked" title="See all staff picks"></a>
          </span>
        </div>

        <div class="model-card-extra">
          <div class="model-card-user" >
            <a class="user-name" @mouseover="overShow" @mouseout="outHide">
              <div class="wrapper js-summary-trigger">
                <div class="avatar user-summary-anchor">
                  <div class="image-container" style="width:34px; background-image: url('/static/image/userImg.jpeg');">
                    <div style="padding-top:100.0%;"></div>
                  </div>
                </div>
                <div class="text">
                  by
                  <div class="username-wrapper">Renafox</div>
                </div>
                <span class="flag flag-pro">Pro</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--隐藏部分 用户信息弹框-->
    <div class="user-summary summary-right summary-bottom" @mouseover="overShow" @mouseout="outHide" v-show="userHover">
      <!--用户信息-->
      <div class="user">
        <a>
          <div class="image-container" style="width: 104px; background-image: url(/static/image/userImg.jpeg);">
            <div style="padding-top: 100%;"></div>
          </div>
        </a>
        <div class="info">
          <!--用户名-->
          <p class="name" title="Adipriatna"><a href="/adipriatna">Adipriatna</a></p>
          <!--用户简介-->
          <p class="tagline" title="Hi~"><a href="/adipriatna">Hi~</a></p>

          <div class="follow-wrapper">
                    <span class="toggle-button follow-button" data-action="follow">
                        <a class="button btn-primary toggle btn-medium">
                            <i class="icon fa fa-plus"></i>Follow
                        </a>
                        <a class="button btn-important untoggle btn-medium">
                            <span class="toggled">
                                Following
                            </span>
                            <span class="untoggled">Unfollow</span>
                        </a>
                    </span>
            <p class="follow-count"><a><span>515</span> followers</a></p>
          </div>
        </div>
      </div>
      <!--用户作品列表-->
      <div class="models">
        <a href="https://sketchfab.com/models/abceb47289434de0b2702cec878ecc8c">
          <div class="image-container" style="width: 133px; background-image: url(&quot;https://dg5bepmjyhz9h.cloudfront.net/urls/abceb47289434de0b2702cec878ecc8c/dist/thumbnails/fa2e285d00c340ceb1e9f014fdaa05f9/200x200.jpeg&quot;);"><div style="padding-top: 66.1654%;"></div></div>
        </a>

        <a href="https://sketchfab.com/models/b1a27cb7a04f4a96a895e3565095765f">
          <div class="image-container" style="width: 133px; background-image: url(&quot;https://dg5bepmjyhz9h.cloudfront.net/urls/b1a27cb7a04f4a96a895e3565095765f/dist/thumbnails/591f0c8aca494b6d826af30743be3d72/200x200.jpeg&quot;);"><div style="padding-top: 66.1654%;"></div></div>
        </a>

        <a href="https://sketchfab.com/models/56cce93abd8a485cbdc5bfff37a59f11">
          <div class="image-container" style="width: 133px; background-image: url(&quot;https://dg5bepmjyhz9h.cloudfront.net/urls/56cce93abd8a485cbdc5bfff37a59f11/dist/thumbnails/252b3e39007e45368a40e067df4af514/256x144.jpeg&quot;);"><div style="padding-top: 66.1654%;"></div></div>
        </a>
      </div>
      <div class="stats">
        <p class="model-count">14 models</p>
        <p class="view-count">53k views</p>
        <p class="like-count">1.7k likes</p>
      </div>

    </div>
  </li>
</template>

<script>
	export default {
		name: 'model-box',
		data () {
			return {
        userHover : false
      }
		},
    methods : {
      overShow(){
      	this.userHover = true;
      },
      outHide(){
        this.userHover = false;
      }
    }
	}
</script>

