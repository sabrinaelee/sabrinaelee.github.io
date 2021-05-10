
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

    <div class="td-header">
      <h1>TD Lab Internship</h1>
      <img class="td-thumbnail" src="~/static/assets/images/td-pic-temp.png" />

      <div class="td-row">
        <div class="td-column">
          <h5>TIMELINE</h5>
          <h6>January 2021 — Present</h6>
        </div>
        <div class="td-column">
          <h5>MY ROLE</h5>
          <h6>Journey mapping</h6>
          <h6>User research</h6>
          <h6>Prototyping</h6>
          <h6>Usability testing</h6>
          <h6>Illustration</h6>
          <h6>Visual design</h6>
        </div>
      </div>

      <div data-aos="fade-up">
        <div class="td-body">
          <h7> 📎 Key Takeaways </h7>
          <div class="td-body-text">
            <h5>1. Inclusive Design</h5>
            <div class="td-body-text-indent">
              <h4>
                Always consider the needs of the users which you are designing
                for, especially the needs that are often excluded or overlooked.
                This requires designers to gain a full understanding of the
                diversity of users and ensure that they address the wide range
                of user needs, motivations, and aspirations within the final
                solution.
              </h4>
            </div>
            <h5>2. Perspective</h5>
            <div class="td-body-text-indent">
              <h4>
                Don’t assume that the users that you are designing for share the
                same needs or opinions as you. It’s important to understand that
                you are designing for a diverse range of individuals with unique
                behaviours and reactions. Therefore, it’s essential to conduct
                usability testing to understand how your designs are percieved
                by real users.
              </h4>
            </div>
            <h5>3. Don't make the user think</h5>
            <div class="td-body-text-indent">
              <h4>
                Strive to create designs that do not confuse users and “don’t
                make them think”. Good design involves ensuring that the flow of
                a design is clear to the user and is easy to understand and use.
                Your designs are meant to make the lives of users easier not
                more difficult.
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up">
        <h7> 📦 What I’ve been working on </h7>
        <h4>
          Over the course of this term I had the opportunity to devote my
          efforts to two main projects and several side projects pursued by TD
          Lab. Althought, I am happy to present one of the side projects that I
          designed this term,
          <b> Coordina. </b>
        </h4>
        <h4>
          🔒 Details regarding the main projects that I worked on this term,
          remain confidential and cannot be shared until further notice
        </h4>
      </div>
    </div>

    <div data-aos="fade-up">
      <div class="coordina-intro">
        <h3>Coordina</h3>
        <h4>
          While working at the lab, we had a few opportunities to team up with
          other interns to explore common problem space and how we might solve
          them. For this project, I teamed up with Brayden, a software developer
          intern at the lab, to address the struggles of mental health that many
          students experience on a daily basis.
        </h4>
        <div class="td-row">
          <div class="td-column">
            <h5>TIMELINE</h5>
            <h6>4 days</h6>
          </div>
          <div class="td-column">
            <h5>TEAM</h5>
            <h6>Me — UX Designer</h6>
            <h6>Brayden Roysten — Software Developer</h6>
          </div>
        </div>
      </div>
    </div>

    <div data-aos="fade-up">
      <div class="coordina-problem-space">
        <h7> What problem(s) are we trying to solve?</h7>
        <h4>
          I started off by doing some background research into the difficulties
          of mental heatlh amongst students in order to gain a better
          understanding of the problem space.
        </h4>
        <div class="coordina-ps-1">
          <h5>PROBLEM #1</h5>
          <h6>
            How might we help students improve their organizational skills in
            order to decrease the stress of academic pressure that often
            accompanies procrastination?
          </h6>
        </div>
        <div class="coordina-ps-1">
          <h5>PROBLEM #2</h5>
          <h6>
            How might we help students understand their mental health journey,
            track their goals, and reflect on their progress?
          </h6>
        </div>
      </div>
    </div>

    <div data-aos="fade-up">
      <div class="coordina-persona">
        <h7> Who are we designing for? </h7>
        <h4>
          I continued my research into the specific userbase that we were trying
          to design for. It was important to get to know our users, this meant
          developing an understanding of their needs, their motivations and
          behaviours. This information was essential to the design process as it
          helped me to create the optimal solution for the intended user.
        </h4>
        <img
          class="persona-coordina-image"
          src="~/static/assets/images/persona-coordina.png"
        />
      </div>
    </div>

    <div data-aos="fade-up">
      <div class="td-body">
        <h7>Solution Overview</h7>
        <div class="td-body-text">
          <h5><b>1. Organizational tool</b></h5>
          <div class="td-body-text-indent">
            <h6>
              a. Create a daily task list tool to help students organize their
              day to reduce extra stress and improve focus
            </h6>
            <h6>
              b. Include mandatory preset tasks designed to improve mental
              health
            </h6>
          </div>

          <h5><b>2. Mental wellness check</b></h5>
          <div class="td-body-text-indent">
            <h6>
              a. Create a tool that allows users to document their emotional
              wellbeing
            </h6>
            <h6>
              b. Emotional rating based on 5 basic emotions: Happy, Okay,
              Neutral, Sad, Very sad
            </h6>
            <h6>
              c. Allow the user to gain insight on their emotions and helps
              people understand how their academic life impacts their emotional
              wellbeing
            </h6>
          </div>
        </div>
      </div>
    </div>

    <div data-aos="fade-up">
      <div class="coordina-ideation">
        <h7>Ideation</h7>
        <img
          class="ideation-coordina-image"
          src="~/static/assets/images/ideation-coordina.png"
        />
      </div>
    </div>

    <div data-aos="fade-up">
      <div class="coordina-ideation">
        <h7>Final Design</h7>
        <img
          class="coordina-final-image"
          src="~/static/assets/images/final-image-coordina.png"
        />
      </div>
    </div>

    <div data-aos="fade-up">
      <div class="coordina-ideation">
        <h7>What's next</h7>
        <div class="td-body-text">
          <h5><b>1. Research and testing</b></h5>
          <div class="td-body-text-indent">
            <h6>
              ‣ Conduct more user testing to gain a more accurate understanding
              of student struggles and needs
            </h6>
            <h6>‣ Conduct usability testing for user feedback</h6>
          </div>
          <h5><b>2. Features</b></h5>
          <div class="td-body-text-indent">
            <h6>
              ‣ Incorportate a more diverse range of emotions and
              recommendations
            </h6>
            <h6>‣ Add to-do list categories</h6>
            <h6>‣ Connect the application to a dedicated database</h6>
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
