<template>
    <div>
      <header-part></header-part>
      <!--内容-->
      <div class="content ">
        <!--顶部-->
        <header>
          <div class="header-content">
            <div class="header-menu container">
              <div class="elements">
                <div class="item title active">
                  <a>
                    <i class="fa custom-icons icon-cube-outline-01"></i>
                    <span>All categories</span>
                  </a>
                </div>
                <div class="item">
                  <a data-value="3badf36bd9f549bdba295334d75e04d3" class="active">
                    <i class="fa gaming"></i>
                    <span>Gaming</span>
                  </a>
                </div>
                <div class="item">
                  <a data-value="86f23935367b4a1f9647c8a20e03d716">
                    <i class="fa cultural-heritage"></i>
                    <span>Cultural Heritage</span>
                  </a>
                </div>
                <div class="item">
                  <a data-value="2d643ff5ed03405b9c34ecdffff9d8d8">
                    <i class="fa characters"></i>
                    <span>Characters</span>
                  </a>
                </div>
                <div class="item">
                  <a data-value="22a2f677efad4d7bbca5ad45f9b5868e">
                    <i class="fa cars-vehicles"></i>
                    <span>Cars &amp; vehicles</span>
                  </a>
                </div>
                <div class="item out">
                  <a data-value="c51b29706d4e4e93a82e5eea7cbe6f91">
                    <i class="fa places-scenes"></i>
                    <span>Places &amp; scenes</span>
                  </a>
                </div>
                <div class="item out">
                  <a data-value="ed9e048550b2478eb1ab2faaba192832">
                    <i class="fa animals-creatures"></i>
                    <span>Animals &amp; Creatures</span>
                  </a>
                </div>
                <div class="item out">
                  <a data-value="d7cebaeca8604ebab1480e413404b679">
                    <i class="fa products-technology"></i>
                    <span>Products &amp; Technology</span>
                  </a>
                </div>
                <div class="item out">
                  <a data-value="3f8d0eab859c45ae8ea3af1033d6f3e4">
                    <i class="fa weapons"></i>
                    <span>Weapons</span>
                  </a>
                </div>
                <div class="item out">
                  <a data-value="f825c721edb541dbbc8cd210123616c7">
                    <i class="fa architecture"></i>
                    <span>Architecture</span>
                  </a>
                </div>
                <div class="item out">
                  <a data-value="17d20ca7b35243d4a45171838b50704c">
                    <i class="fa science-nature-education"></i>
                    <span>Science, Nature &amp; Education</span>
                  </a>
                </div>
              </div>

              <div class="more filter" style="display: block;">
                <a>More <i class="fa fa-angle-down fa-1"></i></a>
                <div class="menu">
                  <ul class="form-menu-select">
                    <li class="item">
                      <a class="label">Places &amp; scenes</a>
                    </li>
                    <li class="item ">
                      <a class="label" >Animals &amp; Creatures</a>
                    </li>
                    <li class="item">
                      <a class="label">Products &amp; Technology</a>
                    </li>
                    <li class="item">
                      <a class="label">Weapons</a>
                    </li>
                    <li class="item">
                      <a class="label" >
                        Architecture</a>
                    </li>
                    <li class="item">
                      <a class="label">Science, Nature &amp; Education</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="responsive-header-menu">
              <a class="element all" ><span>All categories</span> <i class="fa fa-angle-down fa-1"></i></a>
              <a class="element model-filters">FILTERS <i class="fa fa-angle-down fa-1"></i></a>
            </div>

          </div>


          <div class="container responsive">

            <div class="page-title">
              <h1 class="actual-title">
                Models
              </h1>
              <div class="breadcrumb">
                <div class="filter-element">
                  <a data-action="clear-filter" data-filter="date" data-value="7">
                    This week</a>
                </div>
              </div>
            </div>

            <div class="query-parameters explore">
              <div class="query-filters">
                <div class="filter filters">
                  <a class="name">
                    <label>Filters</label>
                  </a>
                </div>

                <div class="explore-filters-container model-filters js-menu-filters">

                  <div class="filter features js-menu-features">
                    <a class="name">
                      <label>Features</label>
                    </a>
                    <div class="menu">
                      <ul class="form-menu-toggle">
                        <li class="item togglable" data-value="downloadable">
                          <a class="label">
                            Downloadable
                          </a>
                          <div class="checkbox"></div>
                        </li>
                        <li class="item togglable" data-value="animated">
                          <a class="label">
                            Animated
                          </a>
                          <div class="checkbox"></div>
                        </li>
                        <li class="item togglable" data-value="staffpicked">
                          <a class="label">
                            Staff picks
                          </a>
                          <div class="checkbox"></div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="filter date js-menu-date">
                    <a class="name">
                      <label>Date</label>
                    </a>
                    <div class="menu">
                      <ul class="form-menu-select">
                        <li class="item" data-value="default">
                          <a class="label">
                            All time
                          </a>
                        </li>

                        <li class="item" data-value="31">
                          <a class="label">
                            This month
                          </a>
                        </li>

                        <li class="item active" data-value="7">
                          <a class="label">
                            This week
                          </a>
                        </li>

                        <li class="item" data-value="1">
                          <a class="label">
                            This day
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="filter security js-menu-restricted">
                    <a class="name">
                      <label>Safety</label>
                    </a>
                    <div class="menu">
                      <ul class="form-menu-toggle">
                        <li class="item togglable">
                          <a class="label">
                            Show age-restricted
                          </a>
                          <div class="checkbox"></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="query-sorts">
                <label class="query-label">
                  Sort by
                </label>
                <div class="options">
                  <a class="option help active" data-value="-likeCount"><div class="tooltip tooltip-down">Most liked</div><i class="icon fa fa-star"></i></a>
                  <a class="option help" data-value="-viewCount"><div class="tooltip tooltip-down">Most viewed</div><i class="icon custom-icons icon-eye-icon"></i></a>
                  <a class="option help" data-value="-publishedAt"><div class="tooltip tooltip-down">Most recent</div><i class="icon fa fa-clock-o"></i></a>
                </div>
              </div>
            </div>


          </div>
        </header>
        <!--列表 wrap-->
        <section class="one-column container explore-container">
          <div class="header"></div>
          <div class="middle">
            <div class="explore-content">
              <div class="grid infinite-grid grid-models no-more-before">
                <div class="items-container">
                  <div class="spinner"></div>

                  <div class="empty-state-wrapper hidden default" style="display: none;"><div class="no-result">No result</div>
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
            </div>

          </div>

        </section>
        <!--底部-->
        <footer-part></footer-part>
      </div>

      <div class="overlay" style="display: none;" id="model-filters">
        <i class="custom-icons icon-ion-close-round-icon" data-action="close-overlay"></i>
        <div class="content">
          <div class="responsive-filters">
            <section class="features">
              <div class="title">FEATURES</div>

              <div class="form-checkbox-list">
                <input id="Downloadable" class="form-checkbox" type="checkbox" name="Downloadable" value="downloadable">
                <label class="form-checkbox-actor" for="Downloadable">
                  <span>Downloadable</span>
                </label>
              </div>

              <div class="form-checkbox-list">
                <input id="Animated" class="form-checkbox" type="checkbox" name="Animated" value="animated">
                <label class="form-checkbox-actor" for="Animated">
                  <span>Animated</span>
                </label>
              </div>

              <div class="form-checkbox-list">
                <input id="Staff picks" class="form-checkbox" type="checkbox" name="Staff picks" value="staffpicked">
                <label class="form-checkbox-actor" for="Staff picks">
                  <span>Staff picks</span>
                </label>
              </div>

            </section>

            <section class="order-by">
              <div class="title">ORDER BY</div>
              <ul class="horizontal-button-list">
                <li class="horizontal-button-block" data-value="-likeCount">
                  <a>Likes</a>
                </li>

                <li class="horizontal-button-block" data-value="-viewCount">
                  <a>Views</a>
                </li>

                <li class="horizontal-button-block" data-value="-publishedAt">
                  <a>Date</a>
                </li>
              </ul>
            </section>

            <section class="date">
              <div class="title">DATE</div>
              <ul class="horizontal-button-list">
                <li class="horizontal-button-block" data-value="">
                  <a>All time</a>
                </li>

                <li class="horizontal-button-block" data-value="1">
                  <a>Today</a>
                </li>

                <li class="horizontal-button-block" data-value="7">
                  <a>Week</a>
                </li>

                <li class="horizontal-button-block active" data-value="31">
                  <a>Month</a>
                </li>
              </ul>
            </section>

            <section class="security">
              <div class="title">SECURITY</div>

              <div class="form-checkbox-list">
                <input id="Show age-restricted" class="form-checkbox" type="checkbox" name="Show age-restricted" value="restricted">
                <label class="form-checkbox-actor" for="Show age-restricted">
                  <span>Show age-restricted</span>
                </label>
              </div>
            </section>

            <section>
              <button class="apply-responsive button btn-primary">APPLY</button>
            </section>
          </div>
        </div>
      </div>
      <div class="overlay" style="display: none;" id="all">
        <i class="custom-icons icon-ion-close-round-icon"  data-action="close-overlay"></i>
        <div class="content categories">
          <div class="item title active">
            <a class="active">
              <i class="fa custom-icons icon-cube-outline-01"></i>
              <span>All categories</span>
            </a>
          </div>

          <div class="item">
            <a data-value="3badf36bd9f549bdba295334d75e04d3">
              <i class="fa gaming"></i>
              <span>Gaming</span>
            </a>
          </div>

          <div class="item">
            <a data-value="86f23935367b4a1f9647c8a20e03d716">
              <i class="fa cultural-heritage"></i>
              <span>Cultural Heritage</span>
            </a>
          </div>

          <div class="item">
            <a data-value="2d643ff5ed03405b9c34ecdffff9d8d8">
              <i class="fa characters"></i>
              <span>Characters</span>
            </a>
          </div>

          <div class="item">
            <a data-value="22a2f677efad4d7bbca5ad45f9b5868e">
              <i class="fa cars-vehicles"></i>
              <span>Cars &amp; vehicles</span>
            </a>
          </div>

          <div class="item">
            <a data-value="c51b29706d4e4e93a82e5eea7cbe6f91">
              <i class="fa places-scenes"></i>
              <span>Places &amp; scenes</span>
            </a>
          </div>

          <div class="item">
            <a data-value="ed9e048550b2478eb1ab2faaba192832">
              <i class="fa animals-creatures"></i>
              <span>Animals &amp; Creatures</span>
            </a>
          </div>

          <div class="item">
            <a data-value="d7cebaeca8604ebab1480e413404b679">
              <i class="fa products-technology"></i>
              <span>Products &amp; Technology</span>
            </a>
          </div>

          <div class="item">
            <a data-value="3f8d0eab859c45ae8ea3af1033d6f3e4">
              <i class="fa weapons"></i>
              <span>Weapons</span>
            </a>
          </div>

          <div class="item">
            <a data-value="f825c721edb541dbbc8cd210123616c7">
              <i class="fa architecture"></i>
              <span>Architecture</span>
            </a>
          </div>

          <div class="item">
            <a data-value="17d20ca7b35243d4a45171838b50704c">
              <i class="fa science-nature-education"></i>
              <span>Science, Nature &amp; Education</span>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import modelBox from '../components/model/modelBox'

	export default {
		name: 'modelList',
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
