
<template>
  <div class="overflow">
    <b-navbar toggleable="lg" class="navbarcolor">
      <b-navbar-brand class="brand" NuxtLink to="/">Sabrina Lee</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item NuxtLink to="/">Work</b-nav-item>
          <b-nav-item NuxtLink to="/artwork">Illustration</b-nav-item>
          <a class="nav-link" href="/sabrina-lee-resume-fall-2021.pdf"
            >Resume</a
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="td-header">
      <h1>UpBudget</h1>
      <img
        class="td-thumbnail"
        src="~/static/assets/images/upbudget-thumbnail.png"
      />

      <div class="td-row">
        <div class="td-column">
          <h5>TEAM</h5>
          <h6>2 UX Designers</h6>
        </div>
        <div class="td-column">
          <h5>TIMELINE</h5>
          <h6>February 2021 [23 hours]</h6>
        </div>
        <div class="td-column">
          <h5>MY ROLE</h5>
          <h6>Journey mapping</h6>
          <h6>User research</h6>
          <h6>Personas</h6>
          <h6>Competitive Analysis</h6>
          <h6>Prototyping</h6>
        </div>
      </div>
    </div>

    <div data-aos="fade-up">
      <div class="upbudget-body">
        <h7> Introduction </h7>
        <h4>
          This project was designed for TILE Designathon, a 23 hour designathon
          that I participated in along with a fellow designer. We were given an
          intial prompt and were encouraged to explore the problem space and
          design a solution for it. I was initially tasked with addressing the
          problem of how one might better equip people with tools for financial
          planning by leveraging my design experience. Many young adults do not
          practice any financial planning and lack basic financial literacy.
          Overall, majority of young adults live in a reality where they have
          little knowledge of how to start saving up for long term financial
          goals, investing their income, or budgeting their expenses.
        </h4>
      </div>
    </div>

    <div data-aos="fade-up">
      <div class="coordina-ideation">
        <h7>Design Process</h7>
        <div class="td-body-text">
          <h5><b>1. Define the problem space</b></h5>
          <div class="td-body-text-indent">
            <h6>‣ Brainstormed different concepts for our final solution</h6>
          </div>
          <h5><b>2. Research</b></h5>
          <div class="td-body-text-indent">
            <h6>
              ‣ Utilized user surveys to develop empathy for the users that we
              were designing for which gave us further insight into the needs,
              motivations, and goals of a potential user
            </h6>
            <h6>
              ‣ Conducted high level market research through secondary research
            </h6>
            <h6>‣ Conducted competitive analysis</h6>
          </div>
          <h5><b>3. Analysis</b></h5>
          <div class="td-body-text-indent">
            <h6>‣ Drew insights from the data collected</h6>
            <h6>‣ Formed a user persona and user journey map</h6>
          </div>
          <h5><b>4. Design</b></h5>
          <div class="td-body-text-indent">
            <h6>
              ‣ Referred to our analysis of the user and created a final design
            </h6>
            <h6>‣ Completed two iterations of our design</h6>
          </div>
        </div>
      </div>
    </div>

    <div data-aos="fade-up">
      <div class="upbudget-body">
        <h7>Solution</h7>

        <div class="td-body-text-indent">
          <h6>
            The solution to the initial prompt came down to a mobile financial
            app designed to assist users with the planning of their financial
            future while leveraging a user’s monthly savings into
            micro-investments to boost returns.
          </h6>
        </div>
      </div>
    </div>

    <div data-aos="fade-up">
      <div class="upbudget-prototype">
        <a>
          <iframe
            style="border: 1px solid rgba(0, 0, 0, 0.1)"
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FqaLTOHTSbOg9x6gGlkFIas%2Fupbudget%3Fpage-id%3D0%253A1%26node-id%3D1%253A1287%26viewport%3D1590%252C301%252C0.5220688581466675%26scaling%3Dcontain"
            allowfullscreen
          ></iframe
        ></a>
      </div>
    </div>

    <div data-aos="fade-up">
      <div class="coordina-ideation">
        <h7>Next steps</h7>
        <div class="td-body-text">
          <h5><b> Research and testing</b></h5>
          <div class="td-body-text-indent">
            <h6>
              ‣ conduct expanded user research in the form of user interviews
              where I would have the opportunity to improve the scope of the
              problem space and further enhance my understanding of the users
              that we were designing for
            </h6>
            <h6>
              ‣ conduct usability testing to validate if the solution solved the
              problem and collect feedback for future iterations of the solution
            </h6>
          </div>
        </div>
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

<style scoped>
@import "~/static/assets/css/main.css";

.overflow {
  overflow: hidden;
}
</style>
