<template>
  <div class="container">
    <div class="search-results-header">
      <h2 class="results-title">everything "sum"</h2>
      <!-- 筛选条件 filter-->
      <div class="breadcrumb">

      </div>
    </div>
    <div class="multi-results-container grid-everything">
      <!--模型-->
      <div class="models results">
        <div class="models-header">
          <h4>Models</h4>
          <a href="#" class="all-models">View all results</a>
        </div>

        <div class="grid infinite-grid no-more-before ">
          <div class="items-container">
            <!--加载-->
            <div class="spinner"></div>
            <!--查询结果为空-->
            <div class="empty-state-wrapper default" style="display: none;">
              <div class="no-result">No result</div>
            </div>
            <div class="filtered-state hidden" style="display: none;">
              <div class="no-result">No result</div>
            </div>

            <!--模型列表-->
            <ul class="items">
              <model-box v-for="item in data" key="index"></model-box>
            </ul>
          </div>

          <button class="button btn-huge btn-primary load-next" data-action="load-next">
            Load more
            <i class="icon fa fa-arrow-down can-scroll"></i>
          </button>
        </div>
      </div>

      <div class="right">
        <!--user-->
        <div class="users results">
          <h4>Users</h4>
          <div class="list">
            <div>
              <div class="user-smallcard" >
                <!--头像-->
                <div class="card-user-avatar " >
                  <div class="image-container" style="width: 60px; background-image: url(/static/image/avatar-blue.jpeg);">
                    <div style="padding-top: 100%;"></div>
                  </div>
                </div>

                <div class="card-user-meta">
                  <div class="card-user-name">
                    <a class="user-name">

                      <div class="wrapper " >
                        <div class="text">
                          <div class="username-wrapper" title="sum">sum</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="card-user-stats">
                    <div class="smallcard-user-follower-count">
                      0 Followers
                    </div>
                    <div class="smallcard-user-model-count">
                      0 Models
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="user-smallcard" >
                <!--头像-->
                <div class="card-user-avatar " >
                  <div class="image-container" style="width: 60px; background-image: url(/static/image/avatar-blue.jpeg);">
                    <div style="padding-top: 100%;"></div>
                  </div>
                </div>

                <div class="card-user-meta">
                  <div class="card-user-name">
                    <a class="user-name">

                      <div class="wrapper " >
                        <div class="text">
                          <div class="username-wrapper" title="sum">sum</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="card-user-stats">
                    <div class="smallcard-user-follower-count">
                      0 Followers
                    </div>
                    <div class="smallcard-user-model-count">
                      0 Models
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="empty-state-wrapper" style="display: none;">No results for users "sum"</div>
        </div>

        <!--收藏-->
        <div class="collections results">
          <h4>Collections</h4>
          <div class="list">
            <div>
              <div class="collection-smallcard" >
                <div class="thumbnail">
                  <div class="image-container" style="width: 125px; background-image: url(/static/image/256144.jpeg);">
                    <div style="padding-top: 64%;"></div>
                  </div>
                </div>

                <div class="meta">
                  <div class="name">
                    <a class="collection-name" >
                      Digit Sum
                    </a>
                  </div>

                  <div class="stats">
                    <div class="length">
                      5 models
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="collection-smallcard" >
                <div class="thumbnail">
                  <div class="image-container" style="width: 125px; background-image: url(/static/image/256144.jpeg);">
                    <div style="padding-top: 64%;"></div>
                  </div>
                </div>

                <div class="meta">
                  <div class="name">
                    <a class="collection-name" >
                      Digit Sum
                    </a>
                  </div>

                  <div class="stats">
                    <div class="length">
                      5 models
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="empty-state-wrapper" style="display: none;">No results for collections "sum"</div>
        </div>
      </div>
    </div>

    <!--搜索内容为空-->
    <div class="search-empty-state hidden">
      <h5>Type something to search</h5>
      <p>Try "PBR", "diorama" or "dinosaur" for some cool results.</p>
    </div>

    <div class="search-footer">
      <a href="/" class="logo">Sketchfab</a>
      <a href="#" class="backToTop" data-action="back-to-top">Back to top</a>
    </div>
  </div>
</template>

<script>
  import modelBox from '../model/modelBox'

	export default {
		name: 'everything',
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


<style>
  .search-overlay > .container .search-results-header{
    display: block;
  }
  .search-overlay .results-title{
    margin-bottom: 0;
    text-align: left;
  }
  .search-overlay .multi-results-container .models.results .models-header{
    overflow: hidden;
  }
  .search-overlay .multi-results-container .models.results h4{
    float: left;
  }
</style>
