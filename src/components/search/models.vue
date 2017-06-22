<template>
  <!--内容-->
  <div class="container" data-type="models">
    <div class="search-results-header">
      <h2 class="results-title">models "sum"</h2>
      <div class="breadcrumb">
      </div>
    </div>
    <div class="grid infinite-grid no-more-before grid-models">
      <div class="items-container">
        <div class="spinner"></div>
        <div class="empty-state-wrapper default" style="display: none;">
          <div class="no-result">No result</div>
        </div>
        <div class="filtered-state hidden" style="display: none;">
          <div class="no-result">No result</div>
        </div>

        <ul class="items">
          <model-box v-for="item in data" key="index"></model-box>
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
      <p>Try searching with broader keywords, or <a href="/models/popular">explore all models</a></p>
    </div>
    <div class="search-footer">
      <a href="/" class="logo">Sketchfab</a>
      <a href="#" data-action="back-to-top">Back to top</a>
    </div>
  </div>
  <!--model end-->

</template>

<script>
  import modelBox from '../model/modelBox'

	export default {
		name: 'models',
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
