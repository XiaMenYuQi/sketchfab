<template>
    <div>
      <header-part></header-part>
      <div class="content">
        <header class="profile-header">
          <div class="container">
            <div class="infos">
              <div class="avatar">
                <div class="image-container" style="width:100px; ;  background-image: url(/static/image/avatar.jpeg);">
                  <div style="padding-top:100.0%;"></div>
                </div>

              </div>
              <div class="meta">
                <div class="name">
                  <a class="user-name">
                    <div class="wrapper ">
                      <div class="text">
                        <div class="username-wrapper" title="dlfon99">dlfon99</div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="location">
                  <i class="fa fa-map-marker"></i>Temecula,CA
                </div>

                <div class="about">
                  <div class="tagline">
                    Like a page from a self help book...
                  </div>
                </div>
                <div class="actions">
                  <!--关注-->
                  <span class="toggle-button follow-button" data-action="follow" >
                                <a class="button btn-primary toggle btn-small">
                                    <i class="icon fa fa-plus"></i>
                                    Follow
                                </a>
                                <a class="button btn-important untoggle btn-small">
                                    <span class="toggled">
                                        Following
                                    </span>
                                    <span class="untoggled">
                                        Unfollow
                                    </span>
                                </a>
                            </span>


                  <div class="button btn-small btn-secondary button-report">
                    <i class="fa fa-cog"></i>

                    <ul class="hover-menu" >
                      <li>
                        <a class="report-link" target="_blank">
                          Report user
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="stats">
                  <a class="follower-count" href="https://sketchfab.com/dlfon99/followers">
                    <span class="count">1</span> Follower
                  </a>
                  <a class="following-count" href="https://sketchfab.com/dlfon99/followings">
                    <span class="count">30</span> Followings
                  </a>
                </div>
              </div>
            </div>
            <div class="social">
              <div class="user-social-buttons">

              </div>
            </div>
          </div>
        </header>

        <header class="profile-tabs">
          <div class="container">
            <ul class="sidebar horizontal">
              <li class="item tab-summary active">
                <a class="link" href="user_center.html">
                  Summary
                </a>
              </li>

              <li class="item tab-models">
                <a class="link" href="user_center_model.html">
                  <span class="count">0</span> Models
                </a>
              </li>

              <li class="item tab-collections">
                <a class="link" href="user_center_likes.html">
                  Collections
                </a>
                <ul class="hover-menu" style="">
                  <li><a><span class="count">5</span> by them</a></li>
                  <li><a><span class="count">43</span> subscribed</a></li>
                </ul>
              </li>

              <li class="item tab-likes">
                <a class="link" href="user_center_likes.html">
                  <span class="count">336</span> Likes
                </a>
              </li>
            </ul>
          </div>
        </header>




        <!--summary-->
        <section class="two-columns container sidebar-right profile-container profile-summary">
          <div class="header"></div>
          <div class="columns-wrapper">
            <div class="left">
              <div class="models">
                <div class="info">
                  <h2 class="subtitle">Popular models</h2>
                  <div class="more">
                    <a href="https://sketchfab.com/dlfon99/models">View all (<span class="count">0</span>) <i class="fa fa-chevron-right"></i></a>
                  </div>
                </div>
                <div class="grid grid-models empty no-more-before no-more-after">
                  <div class="items-container">
                    <!--loading-->
                    <div class="spinner"></div>

                    <div class="empty-state-wrapper default"  style="display: none;">
                      <div class="no-result">No result</div>
                    </div>
                    <div class="filtered-state hidden" style="display: none;">
                      <div class="no-result">No result</div>
                    </div>

                    <ul class="items">
                      <li class="item" style="-webkit-animation-delay: 630ms; animation-delay:1258ms;" >
                        <div class="model-card" >
                          <div class="model-card-thumbnail">
                            <div class="model-card-placeholder"></div>
                            <div class="image-container" style="width: 100%; background-image: url(/static/image/256144.jpeg);">
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
                                  <span class="model-card-views">148</span>
                                </div>

                                <div class="help like-button star-like-button popover-container model-card-like-button model-card-stats" data-action="like">
                                  <span class="count">4</span>
                                  <span class="tooltip liked-content tooltip-up">Like</span>
                                  <span class="tooltip unliked-content tooltip-up">Unlike</span>

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
                                <div class="model-card-stats comments-stat">
                                  <a class="model-card-comments" >9</a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="model-card-meta">
                            <div class="model-card-name">
                                                    <span class="model-name">
                                                        <a class="label" title="MULTIPLICATION &quot;TABLE&quot; (digit sums)">MULTIPLICATION "TABLE" (digit sums)</a>
                                                    </span>
                            </div>
                            <div class="model-card-extra">
                              <div class="model-card-date">
                                a  year ago
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>



                  <button class="button btn-huge load-previous" data-action="load-previous">
                    Load previous items
                  </button>

                  <button class="button btn-huge btn-primary load-next" data-action="load-next">
                    Load more
                    <i class="icon fa fa-arrow-down can-scroll"></i>
                  </button>

                </div>
              </div>
            </div>

            <div class="right">
              <div class="sidebar-box resume">
                <h5 class="sidebar-title">About</h5>
                <p>I programmed my TI-84+SE -- using TI-BASIC. Never again.</p>
                <h5 class="sidebar-title">Member since</h5>
                <p>September 19th 2016</p>
              </div>

              <div class="sidebar-box">
                <h5 class="sidebar-title">Stats</h5>
                <section class="icon custom-icons views ">
                  <p>
                    <span class="count">0</span> views
                  </p>
                </section>

                <section class="likes">
                  <p>
                    <span class="count">0</span> likes
                  </p>
                </section>

                <section class="icon custom-icons icon-triangle-icon triangles">
                  <p class="help">
                    <span class="count">0</span> triangles
                  </p>
                </section>

                <section class="icon custom-icons icon-vertex vertices">
                  <p class="help">
                    <span class="count">0</span> vertices
                  </p>
                </section>
              </div>
              <div class="sidebar-box">
                <h5 class="sidebar-title">Skills</h5>

                <ul class="item-list list-static">
                  <a><li class="item">Blender</li></a>
                  <a ><li class="item">GIMP</li></a>
                </ul>
              </div>
            </div>
          </div>
        </section>


        <!--底部-->
        <footer-part></footer-part>
      </div>
    </div>
</template>

<script>

	export default {
		name: 'userCenter',
		data () {
			return {}
		}
	}
</script>


<style>
  .profile-tabs .sidebar,
  .two-columns.sidebar-right .right .sidebar-box{text-align: left}
</style>
