
<template>
  <div class="overflow">
    <b-navbar toggleable="lg" class="navbarcolor">
      <b-navbar-brand class="brand" NuxtLink to="/">Sabrina Lee</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item NuxtLink to="/">Work</b-nav-item>
          <b-nav-item NuxtLink to="/artwork">Illustration</b-nav-item>
          <a class="nav-link" href="/Sabrina-Lee-Resume-fall-2021.pdf"
            >Resume</a
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="welcome">
      <div class="hello">
        <div class="hello-column1">
          <img class="drawing" src="~/static/assets/images/girl-1.png" />
        </div>
        <div class="hello-column2">
          <h1>Hi, I'm Sabrina 👋</h1>
          <h2>
            I'm a product designer and Systems Design Engineering student @
            University of Waterloo
          </h2>
          <div class="previous">
            UX design intern @ <a href="https://tdlab.io/"> TD Labs </a>
          </div>
        </div>
      </div>
    </div>

    <div class="projects-below">
      <h4>View Projects ↓</h4>
    </div>

    <div data-aos="fade-up">
      <div class="td-container">
        <a href="/td-internship">
          <div class="td-row1">
            <div class="td-column1">
              <img
                class="talk-thumbnail"
                src="~/static/assets/images/coordina-1.png"
              />
            </div>
            <div class="td-column2">
              <h3>TD Lab Internship</h3>
              <h4>
                Designing innovative digital experiences to address user
                problems and enhance the user journey
              </h4>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div data-aos="fade-up">
      <div class="upbudget-container">
        <a href="/upbudget">
          <div class="td-row1">
            <div class="td-column1">
              <img
                class="talk-thumbnail"
                src="~/static/assets/images/work/group 183.png"
              />
            </div>
            <div class="td-column2">
              <h3>UpBudget</h3>
              <h4>
                Optimizing personal finance by tracking spending and investing
                responsibly.
              </h4>
            </div>
          </div>
        </a>
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
export default {
  mounted() {
    import("aos").then((AOS) => AOS.init());
  },
};
</script>

<style scoped>
@import "~/static/assets/css/main.css";

.overflow {
  overflow: hidden;
}

a {
  text-decoration: none;
}
</style>
