<template>
  <div class="popup-container popup-signup">
    <div class="popup-overlay" style="width:100%; height: 100%;">
    </div>
    <form class="popup" method="post" >
      <header class="popup-header">
        <div class="popup-title">
          Sign up
        </div>
        <div class="popup-actions">
          <a class="popup-close" @click="close()">
            <i class="fa fa-times"></i>
          </a>
        </div>
      </header>
      <div class="popup-content">
        <div class="popup-content-overlay"></div>
        <div class="form-column-layout" data-action="process-signup">
          <div class="form-global-error cloaked">
            <i class="icon fa fa-warning"></i>
            <span class="message"></span>
          </div>
          <div class="fields">
            <div class="form-field username-field username">
              <label class="form-label focused" for="username">Choose a username</label>
              <div class="form-content">
                <label class="form-error focused" data-error-for="username" for="username"></label>
                <label class="form-prefixed-input username focused" for="username">
                  <div class="prefix">sketchfab.com/</div>
                  <input id="username" class="input form-input" type="text" name="username" value="" placeholder="username" required="" data-error-for="username" autofocus="" pattern="^[a-zA-Z0-9._-]{2,30}$" title="Letters, numbers, -, _ and . only">
                </label>
              </div>
            </div>
            <div class="form-field email">
              <label class="form-label" for="email">Email</label>
              <div class="form-content">
                <label class="form-error" data-error-for="email" for="email"></label>
                <input id="email" class="form-input" type="email" name="email" value="" placeholder="you@email.com" required="" data-error-for="email">
                <span id="correction-suggestion">Did you mean <a data-action="insert-suggestion"></a>?</span>
              </div>
            </div>

            <div class="form-field password">
              <label class="form-label" for="password">Create password <span class="hint">(8 characters minimum)</span></label>
              <div class="form-content">
                <label class="form-error" data-error-for="password" for="password"></label>
                <input id="password" class="form-input" type="password" name="password" value="" required="" pattern=".{8,}" minlength="8" data-error-for="password" title="8 characters minimum">
              </div>
            </div>

            <div class="form-field form-buttons signup-field">
              <div class="form-content">
                <button type="submit" class="form-button btn-large btn-primary">
                  <span class="state-normal">Create Account</span>
                  <span class="state-progress"><i class="loading loading-light"></i> Loading</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        <hr class="form-separator">

        <p>Or sign up with</p>

        <div class="social">
          <div class="form-field form-buttons">
            <a  class="form-button btn-large btn-secondary" data-action="signup-facebook"><i class="fa fa-facebook"></i> Facebook</a>
            <a class="form-button btn-large btn-secondary" data-action="signup-google"><i class="fa fa-google"></i> Google</a>
            <a href="https://sketchfab.com/social/login/twitter/" class="form-button btn-large btn-secondary" data-action="signup-twitter"><i class="fa fa-twitter"></i> Twitter</a>
          </div>

        </div>

        <hr class="form-separator">
        <div class="terms">
          <p>
            By signing up you agree to our
            <br>
            <a href="/terms" target="_blank">Terms of Use</a> and <a href="/privacy" target="_blank">Privacy Policy</a>.
          </p>
        </div>
      </div>
      <footer class="popup-footer">
        <div class="bridge">
          已经有账户? <a @click="openLogin">点我登陆</a>
        </div>
      </footer>
    </form>
  </div>
</template>

<script>
	export default {
		name: 'register',
		data () {
			return {}
		},
    methods:{
      close(){
        this.$parent.registerF = false;
      },
      openLogin(){
        this.$parent.registerF = false;
        this.$parent.loginF = true;
      }
    }
	}
</script>
