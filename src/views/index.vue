<template>
    <div>
      <header-part index="true"></header-part>
      <!--内容-->
      <div class="content ">
        <div class="home-section home-hero">
          <div class="container">
            <div class="home-hero-infos">
              <h1 class="home-hero-title">Enter new dimensions</h1>
              <p class="home-hero-subtitle">Publish, share and discover 3D content online and in VR.</p>

              <div class="home-hero-actions">
                <a href="/signup" class="button btn-full btn-large btn-primary" data-action="open-signup">Join for free</a>
              </div>
            </div>
          </div>


          <div class="home-hero-viewer">
            <iframe src="https://sketchfab.com/models/8d06874aac5246c59edb4adbe3606e0e/embed?ui_controls=1&amp;ui_theatre=0&amp;ui_stop=0&amp;ui_help=0&amp;ui_settings=0&amp;ui_fullscreen=0&amp;ui_watermark=0&amp;scrollwheel=0&amp;transparent=1&amp;ui_snapshots=0&amp;ui_animations=0&amp;ui_annotations=0&amp;autostart=1&amp;ui_infos=0&amp;ui_fadeout=0&amp;internal=1" data-src="https://sketchfab.com/models/8d06874aac5246c59edb4adbe3606e0e/embed?ui_controls=1&amp;ui_theatre=0&amp;ui_stop=0&amp;ui_help=0&amp;ui_settings=0&amp;ui_fullscreen=0&amp;ui_watermark=0&amp;scrollwheel=0&amp;transparent=1&amp;ui_snapshots=0&amp;ui_animations=0&amp;ui_annotations=0&amp;autostart=1&amp;ui_infos=0&amp;ui_fadeout=0&amp;internal=1" width="500" height="300" allowtransparency="true" allowvr="" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel="">
            </iframe>
            <div class="home-hero-viewer-author">
              <div class="home-hero-viewer-author-item">
                <span class="model-name">
                    <a class="label"  title="Mech Drone">Mech Drone</a>
                </span>
                by <a >Willy Decarpentrie</a>
              </div>
            </div>
          </div>
        </div>
        <div class="home-section home-why">
          <div class="container">
            <div class="home-why-benefits animate">
              <div class="home-why-benefit help">
                <img src="/static/image/icon/icon-why-upload.png" width="60" height="60" class="home-why-benefit-icon">
                <div class="home-why-benefit-copy">
                  <h3>Free unlimited uploads</h3>
                </div>
                <div class="tooltip tooltip-up">
                  Upload an unlimited number of models from your software or your browser.
                </div>
              </div>

              <div class="home-why-benefit help">
                <img src="/static/image/icon/icon-why-viewer.png" width="60" height="60" class="home-why-benefit-icon">
                <div class="home-why-benefit-copy">
                  <h3>Universal 3D/VR viewer</h3>
                </div>
                <div class="tooltip tooltip-up">
                  Display your models out of the box in most browsers and smartphones.
                </div>
              </div>

              <div class="home-why-benefit help">
                <img src="/static/image/icon/icon-why-share.png" width="60" height="60" class="home-why-benefit-icon">
                <div class="home-why-benefit-copy">
                  <h3>Embed anywhere</h3>
                </div>
                <div class="tooltip tooltip-up">
                  Embed your models on Facebook, portfolios, blogs, forums or any website.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="home-why-actions">
          <a href="/features" class="button btn-huge btn-primary js-video-tour">See more cool features</a>
        </div>
        <!--列表 wrap-->
        <div class="home-section home-browse">
          <div class="container">
            <h2>Discover a million things in 3D and VR</h2>
            <!--分类-->
            <ul class="sidebar horizontal home-explore-navigation">
              <li class="item tab-summary active">
                <a class="link" href="/models/staffpicks">
                  Staff Picks
                </a>
              </li>
              <li class="item tab-models">
                <a class="link" href="/models/popular">
                  Popular
                </a>
              </li>
              <li class="item tab-collections">
                <a class="link" href="/models?date=week&amp;features=animated&amp;sort_by=-likeCount">
                  Animated
                </a>
              </li>
              <li class="item tab-collections">
                <a class="link" href="/virtual-reality">
                  Virtual Reality
                </a>
              </li>
            </ul>
            <!--标签分类-->
            <ul class="home-browse-categories">
              <li class="home-browse-cat"><a href="/categories/gaming">Gaming</a></li>
              <li class="home-browse-cat"><a href="/categories/cultural-heritage">Cultural Heritage</a></li>
              <li class="home-browse-cat"><a href="/categories/characters">Characters</a></li>
              <li class="home-browse-cat"><a href="/categories/cars-vehicles">Cars &amp; Vehicles</a></li>
              <li class="home-browse-cat"><a href="/categories/places-scenes">Places &amp; Scenes</a></li>
              <li class="home-browse-cat"><a href="/categories/animals-creatures">Animals &amp; Creatures</a></li>
              <li class="home-browse-cat"><a href="/categories/products-technology">Products &amp; Technology</a></li>
              <li class="home-browse-cat"><a href="/categories/weapons">Weapons</a></li>
              <li class="home-browse-cat"><a href="/categories/architecture">Architecture</a></li>
              <li class="home-browse-cat"><a href="/categories/science-nature-education">Science, Nature &amp; Education</a></li>
            </ul>

            <!--列表-->
            <div data-is-offset-pagination="0" data-prefetch-query="/i/models?example_models" data-first-page="" data-last-page="" data-page-size="24" class="grid grid-models no-more-before no-more-after">

              <div class="items-container">
                <div class="spinner"></div>
                <!--列表为空-->
                <div class="empty-state-wrapper hidden default" style="display: none;"><div class="no-result">No result</div>
                </div>
                <!-- 查询结果为空-->
                <div class="filtered-state hidden" style="display: none;">
                  <div class="no-result">No result</div>
                </div>

                <ul class="items">
                  <model-box v-for="item in data" key="index"></model-box>
                </ul>
              </div>
            </div>
            <div class="browse-actions">
              <router-link to="/list" class="button btn-huge btn-primary">查看更多</router-link>
            </div>
          </div>
        </div>
        <!-- 分类列表-->
        <div class="home-section home-categories">
          <h2>Sketchfab is for everyone</h2>
          <p>Discover the great things people do with Sketchfab. What will you do?</p>

          <ul class="home-categories-items">
            <li class="home-categories-item loaded" style="display: block;">
              <a href="/categories/gaming">
                <div class="ratio-16-10 home-categories-item-gaming">
                  <div class="ratio-inner">
                    <span>Gaming</span>
                  </div>
                </div>
              </a>
            </li>

            <li class="home-categories-item loaded" style="display: block;">
              <a href="/categories/cultural-heritage">
                <div class="ratio-16-10 home-categories-item-cultural-heritage">
                  <div class="ratio-inner">
                                <span>
                                    Cultural Heritage
                                </span>
                  </div>
                </div>
              </a>
            </li>

            <li class="home-categories-item loaded" style="display: block;">
              <a href="/categories/characters">
                <div class="ratio-16-10 home-categories-item-characters">
                  <div class="ratio-inner">
                                <span>
                                    Characters
                                </span>
                  </div>
                </div>
              </a>
            </li>

            <li class="home-categories-item loaded" style="display: block;">
              <a href="/categories/cars-vehicles">
                <div class="ratio-16-10 home-categories-item-cars-vehicles">
                  <div class="ratio-inner">
                                <span>
                                    Cars &amp; Vehicles
                                </span>
                  </div>
                </div>
              </a>
            </li>

            <li class="home-categories-item loaded" style="display: block;">
              <a href="/categories/places-scenes">
                <div class="ratio-16-10 home-categories-item-places-scenes">
                  <div class="ratio-inner">
                                <span>
                                    Places &amp; Scenes
                                </span>
                  </div>
                </div>
              </a>
            </li>

            <li class="home-categories-item loaded" style="display: block;">
              <a href="/categories/animals-creatures">
                <div class="ratio-16-10 home-categories-item-animals-creatures">
                  <div class="ratio-inner">
                                <span>
                                    Animals &amp; Creatures
                                </span>
                  </div>
                </div>
              </a>
            </li>

            <li class="home-categories-item loaded" style="display: block;">
              <a href="/categories/products-technology">
                <div class="ratio-16-10 home-categories-item-products-technology">
                  <div class="ratio-inner">
                                <span>
                                    Products &amp; Technology
                                </span>
                  </div>
                </div>
              </a>
            </li>

            <li class="home-categories-item loaded" style="display: block;">
              <a href="/categories/weapons">
                <div class="ratio-16-10 home-categories-item-weapons">
                  <div class="ratio-inner">
                                <span>
                                    Weapons
                                </span>
                  </div>
                </div>
              </a>
            </li>

            <li class="home-categories-item loaded" style="display: block;">
              <a href="/categories/architecture">
                <div class="ratio-16-10 home-categories-item-architecture">
                  <div class="ratio-inner">
                                <span>
                                    Architecture
                                </span>
                  </div>
                </div>
              </a>
            </li>

            <li class="home-categories-item loaded" style="display: block;">
              <a href="/categories/science-nature-education">
                <div class="ratio-16-10 home-categories-item-science-nature-education">
                  <div class="ratio-inner">
                                <span>
                                    Science, Nature &amp; Education
                                </span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <!--加入按钮-->
        <div class="home-section home-cta">
          <div class="container">
            <a href="/signup" class="button btn-full btn-large btn-primary" data-action="open-signup">Join Sketchfab for free</a>
          </div>
        </div>
        <!--底部-->
        <footer-part></footer-part>
      </div>
    </div>
</template>

<script>
  import modelBox from '../components/model/modelBox'

	export default {
		name: 'index',
    components: {
      modelBox
    },
		data () {
			return {
				data : [{},{},{},{},{},{},{},{},{},{},{},{}]
      }
		}
	}
</script>
