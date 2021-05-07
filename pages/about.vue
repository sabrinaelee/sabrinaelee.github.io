<template>
  <div class="overflow">
    <b-navbar toggleable="lg" class="navbarcolor">
      <b-navbar-brand class="brand" NuxtLink to="/">Sabrina Lee</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item NuxtLink to="/">Work</b-nav-item>
          <b-nav-item NuxtLink to="/artwork">Illustrations</b-nav-item>
          <b-nav-item NuxtLink to="/about">About</b-nav-item>
          <b-nav-item NuxtLink to="">Resume</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="welcome-container">
      <h1>About</h1>
      <img class="profile" src="~/static/assets/images/profile-pic.png" />
    </div>

    <div class="footer">
      Let’s connect!
      <div>
        <a href="https://github.com/sabrinaelee">
          <img src="~/static/assets/images/github-icon.svg" />
        </a>
        <a href="mailto:s592lee@uwaterloo.ca">
          <img src="~/static/assets/images/email-icon.svg" />
        </a>
        <a href="https://www.linkedin.com/in/sabrina-lee-82656a18b">
          <img src="~/static/assets/images/linkedin.svg" />
        </a>
      </div>
      Created with ☕ by Sabrina Lee 2021
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
@import "~/static/assets/css/main.css";
.profile {
  height: 100px;
  width: 70px;
}
</style>