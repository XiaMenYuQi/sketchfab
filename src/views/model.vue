<template>
  <div>
    <header-part></header-part>
    <!--内容-->
    <div class="content ">
      <section class="two-columns container view sidebar-right model-container  " id="model-container">
        <!--模型名称 大屏-->
        <div class="header">
          <h1 class="model-name">
            <span class="model-name">
              <span class="label">Flyingmage</span>
            </span>
          </h1>
        </div>
        <!--内容-->
        <div class="columns-wrapper">
          <!--左边-->
          <div class="left">
            <div class="main">
              <!--模型 Wrap-->
              <main class="viewer-container" style="transition: all 500ms ease-in-out;">
                <model-fbx></model-fbx>
              </main>

              <!--模型名称 中小屏-->
              <div class="responsive-model-name">
                <h2 class="model-name" itemprop="name">
                                <span class="model-name">
                                    <span class="label">Flyingmage</span>
                                </span>
                </h2>
              </div>

              <!--模型其他信息-->
              <div class="additional">
                <!--状态-->
                <div class="stats">
                  <!--点赞人数-->
                  <div class="help likes has-likes" data-action="open-likes-popup">
                    <div class="icon fa fa-star"></div>
                    <span class="count">2</span>
                    <div class="tooltip tooltip-down">
                      <span class="count">2</span> Likes
                    </div>
                  </div>
                  <!--浏览人数-->
                  <div class="views help">
                    <div class="icon custom-icons icon-eye-icon"></div>
                    <span class="count">5.1k</span>
                    <div class="tooltip tooltip-down">
                      <span class="count">5.1k</span> Views
                    </div>
                  </div>
                </div>
                <!--操作-->
                <div class="actions">
                  <!--加入收藏-->
                  <a class="button btn-medium btn-secondary" data-action="open-collection-popup">
                    <div class="add-to">
                      <i class="icon fa fa-plus"></i>Add to
                    </div>
                  </a>

                  <a class="button btn-medium btn-secondary" data-action="open-embed-popup" title="Embed">
                    <i class="icon fa fa-code"></i>
                    <span class="button-label">Embed</span>
                  </a>
                  <!--分享-->
                  <a class="button btn-medium btn-secondary" data-action="open-share-popup" title="Share">
                    <i class="icon fa fa-share"></i>
                    <span class="button-label">Share</span>
                  </a>
                  <!--点赞-->
                  <div class="button btn-medium btn-secondary like like-button popover-container liked" data-action="like">
                    <i class="icon fa fa-star"></i>Like
                    <!--<div class="popover share-popover hidden middle-arrow">-->
                    <!--<p>Thanks!</p>-->
                    <!--<p>Also share?</p>-->

                    <!--<a data-action="share-on-twitter" class="icon fa fa-twitter"></a>-->
                    <!--<a data-action="share-on-google-plus" class="icon fa fa-google-plus"></a>-->
                    <!--<a data-action="share-on-facebook" class="icon fa fa-facebook"></a>-->
                    <!--<a data-action="share-on-pinterest" class="icon fa fa-pinterest"></a>-->
                    <!--</div>-->
                  </div>
                  <!--工具-->
                  <div class="button btn-medium btn-secondary show-hover-menu" title="Options">
                    <i class="fa fa-cog"></i>
                    <i class="fa fa-caret-down caret"></i>
                    <ul class="hover-menu hover-menu-left" style="">
                      <!--举报-->
                      <li>
                        <a href="https://help.sketchfab.com/hc/en-us/requests/new?type=report_abuse&amp;utm_campaign=report_abuse&amp;utm_source=website&amp;model=bb46466034824303a0f5bbda6d9cc57f&amp;report_string=Flyingmage%20by%20wemyg" class="report-link" target="_blank">
                          Report model
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!--评论-->
              <div class="comments-wrapper">
                <section class="comments" id="comments">

                  <!-- hackish tag to jump a bit higher than comments section to compensate the header height -->
                  <p class="new-comment-page-start"></p>
                  <div class="comment-pagination">
                    <div class="total">1 comment</div>
                  </div>


                  <!--写评论-->
                  <form class="new" data-action="send-comment">
                    <div class="comment">
                      <!--用户登录时-->
                      <div class="avatar">
                        <div class="image-container" style="width:48px;  background-image: url('/static/image/avatar.jpeg');">
                          <div style="padding-top:100.0%;"></div>
                        </div>
                      </div>
                      <div class="inner">
                        <textarea class="editor" placeholder="Leave a comment, share your feedback. Don't be shy ;)" required=""></textarea>
                        <button type="submit" class="button btn-medium btn-primary submit" title="Shortcut: CTRL + Enter">Post comment</button>
                      </div>
                      <!--用户未登录-->
                      <!--<div class="avatar">
                          <div class="image-container" style="width:48px;  background-image: url('../image/avatar_unlogin.jpeg');">
                              <div style="padding-top:100.0%;"></div>
                          </div>
                      </div>
                      <div class="inner login-to-comment">
                          <button class="button btn-medium btn-primary" data-action="open-login">Log in to comment</button>
                      </div>-->
                    </div>
                  </form>

                  <!--评论列表-->
                  <div class="comment-list">
                    <div class="comment ">
                      <!--用户头像-->
                      <div class="avatar js-summary-trigger user-summary-anchor" >
                        <div class="image-container" style="width: 48px; background-image: url('/static/image/avatar.jpeg');">
                          <div style="padding-top: 100%;"></div>
                        </div>
                      </div>

                      <article class="body">
                        <!--用户名-->
                        <div class="name">
                          <a class="user-name">
                            <div class="wrapper js-summary-trigger">
                              <div class="text">
                                <div class="username-wrapper" title="houstonko">houstonko</div>
                              </div>
                              <span class="flag flag-free"></span>
                            </div>
                          </a>
                        </div>
                        <!--评论内容-->
                        <div class="text" >
                          <p>Any chance of adding landing and rising animations.</p>
                        </div>

                        <div class="comment-meta">
                          <button class="comment-reply button btn-textified" data-action="reply">Reply</button>
                          <!--评论时间-->
                          <time class="date datefuzz" datetime="2017-01-06T01:51:33.470468" title="2017-01-06T01:51:33.470468">
                            5 months ago
                          </time>
                        </div>
                        <!--工具:举报-->
                        <div class="comment-options">
                          <i class="fa fa-cog"></i>
                          <ul class="hover-menu hover-menu-left" style="">
                            <li>
                              <a class="report-link" target="_blank">
                                Report comment
                              </a>
                            </li>
                          </ul>
                        </div>
                      </article>
                    </div>
                  </div>

                  <!--评论页数-->
                  <div class="comment-paginator">
                    <ul class="paginator monopage">
                      <li class="page current">
                        <a class="link" data-action="goto-page" data-page="0">1</a>
                      </li>
                    </ul>
                  </div>
                </section>

              </div>
            </div>
          </div>
          <!--右边-->
          <div class="right" id="right">

            <div class="navigation">
              <!--作者-->
              <div class="sidebar-box owner" id="data-author" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                <a href="" itemprop="url" class="avatar">
                  <div class="image-container" style="width:90px; ;  background-image: url(https://dg5bepmjyhz9h.cloudfront.net/avatars/f95e420c5928469081e9ebca21587a48/2b9848bd6beb4bb6a5a28c99e5b42720.jpeg);">
                    <div style="padding-top:100.0%;"></div>
                  </div>
                </a>
                <div class="whoami">
                  <div class="display-name"><span class="by">by</span>
                    <a class="user-name" href="">
                      <div class="wrapper " >
                        <div class="text">
                          <div class="username-wrapper" itemprop="name" title="wemyg">wemyg</div>
                        </div>
                        <span class="flag flag-pro">Pro</span>
                      </div>
                    </a>
                  </div>
                  <!--关注-->
                  <div class="actions owner-actions-buttons">
                                    <span class="toggle-button follow-button" data-action="follow" >
                                        <a class="button btn-primary toggle btn-medium"><i class="icon fa fa-plus"></i>Follow</a>
                                        <a class="button btn-important untoggle btn-medium">
                                          <span class="toggled">Following</span>
                                          <span class="untoggled">Unfollow</span>
                                        </a>
                                    </span>
                    <a href="https://sketchfab.com/wemyg" class="button btn-medium btn-tertiary view-profile">
                      View Profile
                    </a>
                  </div>
                </div>
              </div>

              <!--模型信息-->
              <div class="sidebar-box informations">
                <h5 class="sidebar-title">About this model</h5>
                <section class="description markdown-rendered-content">
                  <p>idle attack1 attack2attack3attack4attack5attack6buff1attackedattacked_f_strongattacked_Battacked_Lattacked_Rdowndown_idledown_risestun1stun2deadmovefwdmovebwdmoverightmoveleft</p>
                  <pre><code>Flying Mage</code></pre>
                </section>

                <!--发布时间-->
                <section class="model-meta-row publication">
                  <i class="model-meta-icon icon fa fa-clock-o"></i>
                  <span class="model-meta-info">Published <time datetime="2016-11-20T06:12:24.852582">7 months ago</time></span>
                </section>
                <!--类别-->
                <section class="model-meta-row categories">
                  <i class="model-meta-icon icon custom-icons icon-categories-01-icon"></i>
                  <ul class="model-meta-info item-list list-static category-list"><li>
                    <a class="item category-item" href="/categories/characters">Characters</a>
                  </li></ul>
                </section>
                <!--标签-->
                <section class="model-meta-row tags">
                  <i class="model-meta-icon icon custom-icons icon-tags-icon"></i>
                  <ul class="model-meta-info item-list list-static" ><li>
                    <a class="item tag-item" href="/tags/mage">mage</a>
                  </li><li>
                    <a class="item tag-item" href="/tags/character">character</a>
                  </li><li>
                    <a class="item tag-item" href="/tags/casting">casting</a>
                  </li><li>
                    <a class="item tag-item" href="/tags/magician">magician</a>
                  </li><li>
                    <a class="item tag-item" href="/tags/flyingmage">flyingmage</a>
                  </li></ul>
                </section>


                <section class="triangles model-meta-row">
                  <i class="model-meta-icon icon custom-icons icon-triangle-icon"></i>
                  <p class="model-meta-info"><span class="count">41.1k</span> faces</p>
                </section>

                <section class="vertices model-meta-row">
                  <i class="model-meta-icon icon custom-icons icon-vertex"></i>
                  <p class="model-meta-info"><span class="count">20.7k</span> vertices</p>
                </section>


                <!--收藏-->
                <h5 class="sidebar-title">In collections</h5>
                <section class="collections">
                  <ul class="related-collection">
                    <li>
                      <div class="collection-smallcard" >
                        <div class="thumbnail">
                          <div class="image-container">
                            <!--默认图片-->
                            <!--<img src="../image/data-image-bg.jpg" style="width: 125px;height:80px;">-->
                            <img src="/static/image/256144.jpeg" style="width: 125px;height:80px;">
                          </div>
                        </div>

                        <div class="meta">
                          <div class="name">
                            <a class="collection-name" href="" title="personagem">
                              <span itemprop="name">personagem</span>
                            </a>
                          </div>
                          <div class="stats">
                            <div class="length">863 models</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="collection-smallcard" >
                        <div class="thumbnail">
                          <div class="image-container">
                            <!--默认图片-->
                            <!--<img src="../image/data-image-bg.jpg" style="width: 125px;height:80px;">-->
                            <img src="/static/image/256144.jpeg" style="width: 125px;height:80px;">
                          </div>
                        </div>

                        <div class="meta">
                          <div class="name">
                            <a class="collection-name" href="" title="personagem">
                              <span itemprop="name">Модели</span>
                            </a>
                          </div>
                          <div class="stats">
                            <div class="length">4 models</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="collection-smallcard" >
                        <div class="thumbnail">
                          <div class="image-container">
                            <!--默认图片-->
                            <!--<img src="../image/data-image-bg.jpg" style="width: 125px;height:80px;">-->
                            <img src="/static/image/256144.jpeg" style="width: 125px;height:80px;">
                          </div>
                        </div>

                        <div class="meta">
                          <div class="name">
                            <a class="collection-name" href="" title="personagem">
                              <span itemprop="name">fighter animation</span>
                            </a>
                          </div>
                          <div class="stats">
                            <div class="length">5 models</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>

              <!--作者的其他作品-->
              <div class="related">
                <h5 class="sidebar-title">From the same author</h5>
                <ul class="related-user">
                  <li>
                    <div class="model-smallcard" >
                      <a class="thumbnail">
                        <div class="image-container" style="width:125px;">
                          <!--默认图片-->
                          <!--<img src="../image/data-image-bg.jpg" width="125" height="80">-->
                          <img src="/static/image/200200.jpeg" style="width: 125px;height:80px;">
                        </div>
                      </a>
                      <div class="meta">
                        <div class="name" itemprop="name">
                                            <span class="model-name">
                                                <a class="label" title="Oriental Sword Animation">Oriental Sword Animation</a>
                                            </span>
                        </div>
                        <div class="stats">
                          <div class="views">988</div>
                          <!--liked 喜欢-->
                          <div class="help like-button star-like-button popover-container model-card-like-button model-subscribe liked" data-action="like">
                            <span class="count">6</span>
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
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="model-smallcard" >
                      <a class="thumbnail">
                        <div class="image-container" style="width:125px;">
                          <!--默认图片-->
                          <!--<img src="../image/data-image-bg.jpg" width="125" height="80">-->
                          <img src="/static/image/200200.jpeg" style="width: 125px;height:80px;">
                        </div>
                      </a>
                      <div class="meta">
                        <div class="name" itemprop="name">
                                            <span class="model-name">
                                                <a class="label" title="Oriental Sword Animation">Oriental Sword Animation</a>
                                            </span>
                        </div>
                        <div class="stats">
                          <div class="views">988</div>
                          <div class="help like-button star-like-button popover-container model-card-like-button model-subscribe" data-action="like">
                            <span class="count">6</span>
                            <span class="tooltip liked-content tooltip-up">Like</span>
                            <span class="tooltip unliked-content tooltip-up">Unlike</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="model-smallcard" >
                      <a class="thumbnail">
                        <div class="image-container" style="width:125px;">
                          <!--默认图片-->
                          <!--<img src="../image/data-image-bg.jpg" width="125" height="80">-->
                          <img src="/static/image/200200.jpeg" style="width: 125px;height:80px;">
                        </div>
                      </a>
                      <div class="meta">
                        <div class="name" itemprop="name">
                                            <span class="model-name">
                                                <a class="label" title="Oriental Sword Animation">Oriental Sword Animation</a>
                                            </span>
                        </div>
                        <div class="stats">
                          <div class="views">988</div>
                          <div class="help like-button star-like-button popover-container model-card-like-button model-subscribe" data-action="like">
                            <span class="count">6</span>
                            <span class="tooltip liked-content tooltip-up">Like</span>
                            <span class="tooltip unliked-content tooltip-up">Unlike</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

                <!--相关推荐-->
                <h5 class="sidebar-title">Suggested models</h5>
                <ul class="related-algo">
                  <li>
                    <div class="model-smallcard" >
                      <a class="thumbnail">
                        <div class="image-container" style="width: 125px;">
                          <!--默认图片-->
                          <!--<img src="../image/data-image-bg.jpg" width="125" height="80">-->
                          <img src="/static/image/200200.jpeg" style="width: 125px;height:80px;">
                        </div>
                      </a>
                      <div class="meta">
                        <div class="name" itemprop="name">
                                                <span class="model-name">
                                                    <a class="label" title="Yuel Atra">Yuel Atra</a>
                                                    <span class="flag-staffpicked" title="Staff Picks"></span>
                                                </span>
                        </div>
                        <div class="stats">
                          <a class="model-card-comments">18</a>
                          <div class="views">11.9k</div>
                          <div class="help  like-button star-like-button popover-container model-card-like-button model-subscribe" data-action="like">
                            <span class="count">559</span>
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
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="model-smallcard" >
                      <a class="thumbnail">
                        <div class="image-container" style="width: 125px;">
                          <!--默认图片-->
                          <!--<img src="../image/data-image-bg.jpg" width="125" height="80">-->
                          <img src="/static/image/200200.jpeg" style="width: 125px;height:80px;">
                        </div>
                      </a>
                      <div class="meta">
                        <div class="name" itemprop="name">
                                                <span class="model-name">
                                                    <a class="label" title="Yuel Atra">Yuel Atra</a>
                                                    <span class="flag-staffpicked" title="Staff Picks"></span>
                                                </span>
                        </div>
                        <div class="stats">
                          <a class="model-card-comments">18</a>
                          <div class="views">11.9k</div>
                          <div class="help like-button star-like-button popover-container model-card-like-button model-subscribe" data-action="like">
                            <span class="count">559</span>
                            <span class="tooltip liked-content tooltip-up">Like</span>
                            <span class="tooltip unliked-content tooltip-up">Unlike</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="model-smallcard" >
                      <a class="thumbnail">
                        <div class="image-container" style="width: 125px;">
                          <!--默认图片-->
                          <!--<img src="../image/data-image-bg.jpg" width="125" height="80">-->
                          <img src="/static/image/200200.jpeg" style="width: 125px;height:80px;">
                        </div>
                      </a>
                      <div class="meta">
                        <div class="name" itemprop="name">
                                                <span class="model-name">
                                                    <a class="label" title="Yuel Atra">Yuel Atra</a>
                                                    <span class="flag-staffpicked" title="Staff Picks"></span>
                                                </span>
                        </div>
                        <div class="stats">
                          <a class="model-card-comments">18</a>
                          <div class="views">11.9k</div>
                          <div class="help like-button star-like-button popover-container model-card-like-button model-subscribe" data-action="like">
                            <span class="count">559</span>
                            <span class="tooltip liked-content tooltip-up">Like</span>
                            <span class="tooltip unliked-content tooltip-up">Unlike</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <a href="#" class="load-more button btn-small btn-primary" data-count="3">Load more</a></ul>
              </div>
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

  import modelFbx from '../components/model/modelFbx'

  export default {
    name: 'model',
    components: {
      modelFbx
    },
    data () {
    return {
      data : [{},{},{},{},{},{},{},{},{},{},{},{}]
    }
  }
  }
</script>
