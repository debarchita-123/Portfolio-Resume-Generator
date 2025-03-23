const mainContent = document.getElementById("main-content");

const contentData = {
    home: `
        <div class="home-img">
            <img src="main.jpg" alt="">
        </div>
        <div class="home-content">
            <h1>Hi, It's <span class="name">Alex</span></h1>
            <h3 class="typing-text skills">I'm a <span></span></h3>
            <p class="summary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="social-icons">
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#"><i class="fa-brands fa-github"></i></a>
                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
            </div>
            <a href="#" class="btn">Hire me</a>
        </div>
    `,
    skills: `
        <h2>My Skills</h2>
        <ul>
            <li>Web Development</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
        </ul>
    `,
    education: `
        <h2>My Education</h2>
        <p>Bachelor's Degree in Computer Science</p>
        <p>High School Diploma in Science</p>
    `,
    experience: `
        <h2>My Experience</h2>
        <p>Software Developer at XYZ Corp (2020-Present)</p>
        <p>Web Developer Intern at ABC Ltd (2018-2019)</p>
    `,
    contact: `
        <h2>Contact Me</h2>
        <p>Email: alex@example.com</p>
        <form>
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Your Name">
            <label for="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
        </form>
    `
};

document.querySelectorAll("nav a").forEach((navItem) => {
    navItem.addEventListener("click", (e) => {
        e.preventDefault();
        const sectionId = navItem.id.replace("nav-", "");
        mainContent.innerHTML = contentData[sectionId];

        // Update active state
        document.querySelectorAll("nav a").forEach((link) => link.classList.remove("active"));
        navItem.classList.add("active");
    });
});
