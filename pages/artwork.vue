<template>
  <div class="overflow">
    <b-navbar toggleable="lg" class="navbarcolor">
      <b-navbar-brand class="brand" NuxtLink to="/">Sabrina Lee</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item NuxtLink to="/">Work</b-nav-item>
          <b-nav-item NuxtLink to="/artwork">Illustration</b-nav-item>
          <a class="nav-link" href="/summer-2022-res.pdf">Resume</a>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="welcome-container">
      <h1>Illustrations</h1>
    </div>
    <div class="illustrations">
      <div class="column">
        <img
          src="~/static/assets/images/IMG_1738.jpg"
          width="500"
          height="500"
        />
      </div>
      <div class="column">
        <img
          src="~/static/assets/images/IMG_1741.jpg"
          width="500"
          height="520"
        />
      </div>
      <div class="column">
        <img
          src="~/static/assets/images/IMG_1692.jpg"
          width="500"
          height="600"
        />
      </div>
      <div class="column">
        <img
          src="~/static/assets/images/IMG_1628.jpg"
          width="650"
          height="500"
        />
      </div>
      <div class="column">
        <img
          src="~/static/assets/images/IMG_1740.jpg"
          width="500"
          height="600"
        />
      </div>
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
</style>