<template>
  <!--collections-->
  <!--内容-->
  <div class="container" data-type="collections">
    <div class="search-results-header">
      <h2 class="results-title">collections "sum"</h2>
      <div class="breadcrumb">

      </div>
    </div>
    <div class="grid infinite-grid no-more-before grid-collections no-more-after">
      <div class="items-container">
        <!--loding-->
        <div class="spinner"></div>
        <!--结果为空-->
        <div class="empty-state-wrapper default" style="display: none;"><div class="no-result">No result</div>
        </div>
        <div class="filtered-state hidden" style="display: none;">
          <div class="no-result">No result</div>
        </div>

        <ul class="items">
          <li class="item" >
            <div class="collection-card" >

              <div class="collection-card-thumbnail">
                <div class="model-card-placeholder"></div>
                <div class="image-container" style="width: 100%; background-image: url(/static/image/256144.jpeg);">
                  <div style="padding-top: 64%;"></div>
                </div>

                <a class="collection-card-overlay"></a>

                <a class="model-card-preview" data-action="open-preview">
                  <i class="fa fa-search"></i>
                </a>

                <div class="model-card-information">
                  <div class="model-card-left-extra">
                    <div class="help subscribe-button count-subscribe-button btn-loading popover-container collection-card-subscribe-button collection-card-stats" data-action="subscribe-collection">
                      <span class="count">0</span>
                      <span class="tooltip subscribed-content tooltip-up">Subscribe</span>
                      <span class="tooltip unsubscribed-content tooltip-up">Unsubscribe</span>

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

              <div class="collection-card-meta collection-card-with-user">
                <div class="collection-card-name">
                  <a class="collection-name" href="https://sketchfab.com/talbot003/collections/sumo" title="sumo">
                    sumo
                  </a>
                </div>

                <div class="collection-card-extra">
                  <div class="collection-card-user">
                    <a class="user-name" >
                      <div class="wrapper js-summary-trigger" >
                        <div class="avatar user-summary-anchor" >
                          <div class="image-container" style="width: 34px; background-image: url(/static/image/userImg.jpeg);" >
                            <div style="padding-top: 100%;"></div>
                          </div>
                        </div>

                        <div class="text">
                          <div class="username-wrapper" >talbot003</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="collection-card-stats">
                    2 models
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


    <div class="search-empty-state">
      <h5>No results for "sum"</h5>
      <p>Try searching with broader keywords, or <a href="/collections/popular">explore all collections</a></p>
    </div>
    <div class="search-footer">
      <a href="/" class="logo">Sketchfab</a>
      <a href="#" data-action="back-to-top">Back to top</a>
    </div>
  </div>
  <!--collections end-->
</template>

<script>
	export default {
		name: 'collections',
		data () {
			return {}
		}
	}
</script>
