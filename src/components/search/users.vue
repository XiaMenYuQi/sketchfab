<template>
    <!--user-->
    <!--内容-->
    <div class="container" data-type="users">
      <div class="search-results-header">
        <h2 class="results-title">users "sum"</h2>
        <div class="breadcrumb">
        </div>
      </div>
      <div data-is-offset-pagination="0" data-prefetch-query="" data-cursor-previous="" data-cursor-next="" data-first-page="" data-last-page="" data-page-size="24" class="grid infinite-grid no-more-before grid-users no-more-after">

        <div class="items-container">
          <div class="spinner"></div>

          <div class="empty-state-wrapper default" style="display: none;"><div class="no-result">No result</div>
          </div>
          <div class="filtered-state hidden" style="display: none;">
            <div class="no-result">No result</div>

          </div>

          <ul class="items">
            <li class="item" >
              <div class="card-user">
                <div class="card-user-avatar " >
                  <div class="model-card-placeholder hidden"></div>
                  <div class="image-container"  style="width: 90px; background-image: url(/static/image/avatar.jpeg);">
                    <div style="padding-top: 100%;"></div>
                  </div>
                </div>
                <div class="card-user-meta">
                  <div class="card-user-name">

                    <a class="user-name" >

                      <div class="wrapper " >
                        <div class="text">

                          <div class="username-wrapper"  title="sum1512">sum1512</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="card-user-location">
                    sfsdfdsf
                  </div>
                  <div class="card-user-stats">

                                      <span class="toggle-button follow-button" data-action="follow">
                                          <a class="button btn-primary toggle btn-medium">
                                              <i class="icon fa fa-plus"></i>
                                              Follow
                                          </a>
                                          <a class="button btn-important untoggle btn-medium">
                                              <span class="toggled">
                                                  Following
                                              </span>
                                              <span class="untoggled">
                                                  Unfollow</span>
                                          </a>
                                      </span>

                    <div class="card-user-metrics-container">
                      <div class="card-user-follower-count help">
                        <span>0</span>
                        <div class="tooltip tooltip-up">Followers</div>
                      </div>
                      <div class="card-user-model-count help">
                        2
                        <div class="tooltip tooltip-up">Models</div>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="card-user-skills">
                  <ul class="item-list list-monoline list-static">

                  </ul>
                </div>



                <div class="card-user-examples">
                  <a class="overlay btn-container" href="https://sketchfab.com/sum1512">
                    <div class="button btn-small btn-primary">View full profile</div>
                  </a>

                  <ul class="card-user-models">
                    <li>
                      <div class="model-card-placeholder hidden"></div>
                      <div class="image-container"  style="width: 100%; background-image: url(/static/image/200200.jpeg);">
                        <div style="padding-top: 57.5163%;"></div>
                      </div>
                    </li>
                    <li>
                      <div class="model-card-placeholder hidden"></div>
                      <div class="image-container"  style="width: 100%; background-image: url(/static/image/200200.jpeg);">
                        <div style="padding-top: 57.5163%;"></div>
                      </div>
                    </li>
                    <li>
                      <div class="model-card-placeholder hidden"></div>
                      <div class="image-container"  style="width: 100%; background-image: url(/static/image/200200.jpeg);">
                        <div style="padding-top: 57.5163%;"></div>
                      </div>
                    </li>

                  </ul>
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

      <!--搜索结果为空-->
      <div class="search-empty-state">
        <h5>No results for "sum"</h5>
        <p>Try searching with broader keywords, or <a href="/members">explore all users</a></p>
      </div>

      <div class="search-footer">
        <a href="/" class="logo">Sketchfab</a>
        <a href="#" data-action="back-to-top">Back to top</a>
      </div>
    </div>
    <!--user end-->
</template>

<script>
	export default {
		name: 'users',
		data () {
			return {}
		}
	}
</script>
