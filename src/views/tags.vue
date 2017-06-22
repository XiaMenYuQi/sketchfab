<template>
    <div>
      <header-part></header-part>
      <div class="content">
        <!--内容头部-->
        <header class="topic-header">
          <div class="container">
            <div class="infos">
              <div class="meta">
                <div class="name">
                  mage
                </div>
                <div class="tagline">
                  3D models tagged mage
                </div>
              </div>
            </div>
          </div>
        </header>



        <!--tags-->
        <section class="two-columns container view sidebar-right tags-container">
          <div class="header"></div>
          <div class="columns-wrapper">

            <div class="left">
              <div class="models">
                <div class="info">
                  <h1 class="subtitle">Popular mage Models</h1>
                  <div class="more">
                    <a>View all <i class="fa fa-chevron-right"></i></a>
                  </div>
                </div>


                <div class="grid grid-models no-more-before no-more-after">
                  <div class="items-container">
                    <!--loading -->
                    <div class="spinner"></div>
                    <!--结果为空-->
                    <div class="empty-state-wrapper hidden default" style="display: none;">
                      <div class="no-result">No result</div>
                    </div>
                    <div class="filtered-state hidden" style="display: none;">
                      <div class="no-result">No result</div>
                    </div>
                    <!--列表-->
                    <ul class="items">
                      <model-box v-for="item in data" key="index"></model-box>
                    </ul>

                  </div>

                </div>


                <a class="button btn-huge btn-primary topic-load-next">
                  View all
                </a>

              </div>
            </div>

            <div class="right">
              <div class="navigation">
                <div class="sidebar-box informations">
                  <h5 class="sidebar-title">Related tags</h5>
                  <section>
                    <ul class="item-list list-static">
                      <li>
                        <a class="item tag-item" href="/tags/ice">ice</a>
                      </li>
                      <li>
                        <a class="item tag-item" href="/tags/fantasy">fantasy</a>
                      </li>
                      <li>
                        <a class="item tag-item" href="/tags/work">work</a>
                      </li>
                      <li>
                        <a class="item tag-item" href="/tags/character">character</a>
                      </li>
                      <li>
                        <a class="item tag-item" href="/tags/blender3d">blender3d</a>
                      </li>
                      <li>
                        <a class="item tag-item" href="/tags/low-poly">low-poly</a>
                      </li>
                      <li>
                        <a class="item tag-item" href="/tags/horns">horns</a>
                      </li>
                      <li>
                        <a class="item tag-item" href="/tags/cloak">cloak</a>
                      </li>
                      <li>
                        <a class="item tag-item" href="/tags/demon">demon</a>
                      </li>
                      <li>
                        <a class="item tag-item" href="/tags/sorcerer">sorcerer</a>
                      </li>
                      <li>
                        <a class="item tag-item" href="/tags/queen">queen</a>
                      </li>
                      <li>
                        <a class="item tag-item" href="/tags/undead">undead</a>
                      </li>
                      <li>
                        <a class="item tag-item" href="/tags/female">female</a>
                      </li>
                      <li>
                        <a class="item tag-item" href="/tags/staff">staff</a>
                      </li>
                      <li>
                        <a class="item tag-item" href="/tags/zombie">zombie</a>
                      </li>
                      <li>
                        <a class="item tag-item" href="/tags/wizard">wizard</a>
                      </li>
                      <li>
                        <a class="item tag-item" href="/tags/sculpt">sculpt</a>
                      </li>
                      <li>
                        <a class="item tag-item" href="/tags/chibi">chibi</a>
                      </li>

                    </ul>
                  </section>
                </div>

                <div class="sidebar-box suggested-follow">
                  <h5 class="sidebar-title">Top contributors</h5>
                  <ul>
                    <li class="follow-item" >
                      <a class="user-name" >
                        <div class="wrapper js-summary-trigger" >
                          <div class="avatar user-summary-anchor">
                            <div class="image-container" style="width:32px; ;  background-image: url(../image/200200.jpeg);">
                              <div style="padding-top:100.0%;"></div>
                            </div>
                          </div>

                          <div class="text">
                            <div class="username-wrapper"  title="Fabioka4">Fabioka4</div>
                          </div>

                        </div>
                      </a>

                      <span class="toggle-button follow-button" data-action="follow" >
                        <a class="button btn-primary toggle btn-medium">
                            <i class="icon fa fa-plus"></i>
                            Follow
                        </a>
                        <a class="button btn-important untoggle btn-medium">
                            <span class="toggled">Following</span>
                            <span class="untoggled">Unfollow</span>
                        </a>
                    </span>
                    </li>

                    <li class="follow-item" >
                      <a class="user-name" >
                        <div class="wrapper js-summary-trigger" >
                          <div class="avatar user-summary-anchor">
                            <div class="image-container" style="width:32px; ;  background-image: url(../image/200200.jpeg);">
                              <div style="padding-top:100.0%;"></div>
                            </div>
                          </div>

                          <div class="text">
                            <div class="username-wrapper"  title="Fabioka4">Fabioka4</div>
                          </div>

                        </div>
                      </a>

                      <span class="toggle-button follow-button" data-action="follow" >
                        <a class="button btn-primary toggle btn-medium">
                            <i class="icon fa fa-plus"></i>
                            Follow
                        </a>
                        <a class="button btn-important untoggle btn-medium">
                            <span class="toggled">Following</span>
                            <span class="untoggled">Unfollow</span>
                        </a>
                    </span>
                    </li>

                    <li class="follow-item" >
                      <a class="user-name" >
                        <div class="wrapper js-summary-trigger" >
                          <div class="avatar user-summary-anchor">
                            <div class="image-container" style="width:32px; ;  background-image: url(../image/200200.jpeg);">
                              <div style="padding-top:100.0%;"></div>
                            </div>
                          </div>

                          <div class="text">
                            <div class="username-wrapper"  title="Fabioka4">Fabioka4</div>
                          </div>

                        </div>
                      </a>

                      <span class="toggle-button follow-button" data-action="follow" >
                          <a class="button btn-primary toggle btn-medium">
                              <i class="icon fa fa-plus"></i>
                              Follow
                          </a>
                          <a class="button btn-important untoggle btn-medium">
                              <span class="toggled">Following</span>
                              <span class="untoggled">Unfollow</span>
                          </a>
                      </span>
                    </li>
                  </ul>

                  <a href="#" class="show-more" data-action="show-more">
                    <i class="icon fa fa-plus"></i> Show More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--tags  end-->

        <!--底部-->
        <footer-part></footer-part>
      </div>
    </div>
</template>

<script>
  import modelBox from '../components/model/modelBox'

  export default {
    name: 'tags',
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
