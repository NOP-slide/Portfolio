const homeHTML = `
    <div class="container">

    <!-- Project 1 -->
    <div class="row row-1">
        <div class="col m6 hide-on-small-only">
            <div class="img-content">
                <h3>DevBook - Social Media App</h3>
                <p>RESTful API using NodeJS and Express. Front-end using ReactJS + Redux. Full CRUD functionality via MongoDB.</p>
                <p class="hide-on-med-and-down">Go ahead -- create your account and start posting!</p>
            </div>
        </div>
        <div class="col m6">
            <div class="card z-depth-5">
                <div class="card-image">
                    <img src="img/project1.jpg" alt="Project 1">
                    <span class="card-title"></span>
                    <a href="#project1"
                        class="hide-on-med-and-up btn-floating halfway-fab pulse waves-effect waves-light red modal-trigger">
                        <i class="material-icons">add</i>
                    </a>
                </div>
                <div class="card-content center">
                    <a class="hide-on-small-only waves-effect waves-light btn" href="https://aj-devbook.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i class="fas fa-desktop"></i>
                        Live
                    </a>
                    <a class="hide-on-small-only waves-effect waves-light btn" href="https://github.com/NOP-slide/dev-book" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i>
                        GitHub
                    </a>
                    <h6 class="dark hide-on-med-and-up">DevBook - Full-Stack Social Media App</h6>
                </div>
            </div>
        </div>
    </div>

    <!-- Project 2 -->
    <div class="row row-2">
        <div class="col m6">
            <div class="card z-depth-5">
                <div class="card-image">
                    <img src="img/project2.jpg" alt="Project 2">
                    <span class="card-title"></span>
                    <a href="#project2"
                        class="hide-on-med-and-up btn-floating halfway-fab pulse waves-effect waves-light red modal-trigger">
                        <i class="material-icons">add</i>
                    </a>
                </div>
                <div class="card-content center">
                    <a class="hide-on-small-only waves-effect waves-light btn" href="https://aj-contact-manager.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i class="fas fa-desktop"></i>
                        Live
                    </a>
                    <a class="hide-on-small-only waves-effect waves-light btn" href="https://github.com/NOP-slide/contact-manager" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i>
                        GitHub
                    </a>
                    <h6 class="dark hide-on-med-and-up">Contact Manager - Full-Stack App</h6>
                </div>
            </div>
        </div>
        <div class="col m6 hide-on-small-only">
            <div class="img-content">
                <h3>Contact Manager - Full Stack App</h3>
                <p>Front-end using ReactJS with Hooks and the Context API. RESTful back-end API using NodeJS/Express. MongoDB integration.</p>
            </div>
        </div>
    </div>

    <!-- Project 3 -->
    <div class="row row-3">
        <div class="col m6 hide-on-small-only">
            <div class="img-content">
                <h3>Calorie Tracker - VanillaJS App</h3>
                <p>Programmed with vanilla JavaScript, using the module design pattern (IIFE-driven). Sessions are saved to local storage for future use.</p>
            </div>
        </div>
        <div class="col m6">
            <div class="card z-depth-5">
                <div class="card-image">
                    <img src="img/project3.jpg" alt="Project 3">
                    <span class="card-title"></span>
                    <a href="#project3"
                        class="hide-on-med-and-up btn-floating halfway-fab pulse waves-effect waves-light red modal-trigger">
                        <i class="material-icons">add</i>
                    </a>
                </div>
                <div class="card-content center">
                    <a class="hide-on-small-only waves-effect waves-light btn" href="https://nop-slide.github.io/VanillaJS-CalorieTracker/" target="_blank" rel="noopener noreferrer"><i class="fas fa-desktop"></i>
                        Live
                    </a>
                    <a class="hide-on-small-only waves-effect waves-light btn" href="https://github.com/NOP-slide/VanillaJS-CalorieTracker" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i>
                        GitHub
                    </a>
                    <h6 class="dark hide-on-med-and-up">Calorie Tracker - VanillaJS App</h6>
                </div>
            </div>
        </div>
    </div>

    <!-- Project 4 -->
    <div class="row row-4">
        <div class="col m6">
            <div class="card z-depth-5">
                <div class="card-image">
                    <img src="img/project4.jpg" alt="Project 4">
                    <span class="card-title"></span>
                    <a href="#project4"
                        class="hide-on-med-and-up btn-floating halfway-fab pulse waves-effect waves-light red modal-trigger">
                        <i class="material-icons">add</i>
                    </a>
                </div>
                <div class="card-content center">
                    <a class="hide-on-small-only waves-effect waves-light btn"><i class="fas fa-desktop"></i>
                        Live
                    </a>
                    <a class="hide-on-small-only waves-effect waves-light btn"><i class="fab fa-github"></i>
                        GitHub
                    </a>
                    <h6 class="dark hide-on-med-and-up">My Portfolio - VanillaJS</h6>
                </div>
            </div>
        </div>
        <div class="col m6 hide-on-small-only">
            <div class="img-content">
                <h3>My Portfolio - VanillaJS</h3>
                <p>You're looking at it! Coded in vanilla JavaScript, with a smooth single page application feel.</p>
            </div>
        </div>
    </div>
</div>`;



const aboutHTML = `<div class="container">

<!-- Project 1 -->
<div class="row ">
    <div class="col m6 slide-in-content slide-from-left">
        <img class="responsive-img z-depth-5" src="img/me.jpg">
    </div>

    <div class="col m6 slide-in-content slide-from-right">
        <h3>Who Am I?</h3>
        <hr>
        <p>I'm a professional keyboard player turned computer programmer. I've always been a
            computer geek at heart, and I spent many
            years missing my true calling -- until now.
        </p>
        <p>I am a self-taught programmer, passionate about web development, and relentless in
            my pursuit of learning new technologies.
        </p>
        <p>I hope you'll enjoy browsing my site and perusing my code on GitHub. <i
                class="fab fa-github"></i></p>
    </div>
</div>

<div class="row">
    <div class="col s12">
        <h3 class="center">My Skills</h3>
        <hr>
    </div>
</div>

<div class="row">
    <div class="col s4 l2 center"><i class="fab fa-html5 fa-5x"></i>
        <h5>HTML5</h5>
    </div>
    <div class="col s4 l2 center"><i class="fab fa-css3 fa-5x"></i>
        <h5>CSS3</h5>
    </div>
    <div class="col s4 l2 center"><i class="fab fa-js-square fa-5x"></i>
        <h5>JavaScript</h5>
    </div>
    <div class="col s4 l2 center"><i class="fab fa-react fa-5x"></i>
        <h5>ReactJS</h5>
    </div>
    <div class="col s4 l2 center"><i class="fab fa-node fa-5x"></i>
        <h5>NodeJS</h5>
    </div>
    <div class="col s4 l2 center"><i class="fas fa-database fa-5x"></i>
        <h5>MongoDB</h5>
    </div>
</div>
</div>`;


const contactHTML = `<div class="container">
<h3 class="center">Get In Touch</h3>
<br><br>
<div class="row">
    <form id="msgform" class="col s12" method="POST" data-netlify="true" name="contactsubmit" enctype="application/x-www-form-urlencoded" onsubmit="submitForm(event)">
    <input type="hidden" name="form-name" value="contactsubmit">
        <div class="row">
            <div class="input-field col s6">
                <i class="material-icons prefix">account_circle</i>
                <input name="name" id="icon_prefix" type="text" class="wht" required>
                <label for="icon_prefix">Name</label>
            </div>
            <div class="input-field col s6">
                <i class="material-icons prefix">subject</i>
                <input name="subject" id="icon_telephone" type="text" class="wht" required>
                <label for="icon_telephone">Subject</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <i class="material-icons prefix">mode_edit</i>
                <textarea name="message" id="textarea1" class="materialize-textarea wht" required></textarea>
                <label for="textarea1">Message</label>
            </div>
        </div>
        <div class="row">
            <div class="col s12 center">
                <button type="submit" class="btn waves-effect waves-light">Submit
                    <i class="material-icons right">send</i>
                </button>
            </div>
        </div>
    </form>
</div>
</div>`;

const submitForm = e => {
    e.preventDefault();

    const form = document.getElementById('msgform');
    console.log(form);
    const postbody = new URLSearchParams(new FormData(form));
    console.log(...postbody);
    fetch('/', {
        method: 'post',
        body: postbody,
    }).then(res => res.text())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}
