const projects = {

   "Iris": {
       description: `
           <p>The first SoftCloud helper bot.</p>

           <p>
               Iris was built as a Discord companion and helper project,
               with features designed around conversation, little games,
               journaling, and remembering things over time.
           </p>
       `,
       status: "COMPLETE - RESTING"
   },

   "Rocky": {
       description: `
           <p>
               A Discord bot inspired by Rocky from
               <em>Project Hail Mary</em>.
           </p>

           <p>
               A small project built because the idea was fun.
           </p>
       `,
       status: "COMPLETE - RESTING"
   },

   "MRYOLO_But.hes.in.pain": {
       description: `
           <p>
               A Discord bot created just for fun.
           </p>

           <p>
               It started as one of those projects where the name
               probably explains more than the documentation ever could.
           </p>

           <p>
               Somehow it made it all the way to completion.
           </p>
       `,
       status: "COMPLETE",
       special: true
   },

   "Maki": {
       description: `
           <p>
               A project currently being worked on.
           </p>

           <p>
               More details will probably appear here once Maki
               has had a little more time to become a real thing.
           </p>
       `,
       status: "IN DEVELOPMENT"
   },

   "SoftFlow": {
       description: `
           <p>
               A desktop productivity app designed to bring notes,
               calendar management, time management, and task awareness
               into one place.
           </p>

           <p>
               SoftFlow started as a Flask web project before being
               turned into a desktop application using Tauri, with
               Flask continuing to handle the backend.
           </p>

           <p>
               The project currently includes:
           </p>

           <ul>
               <li>Notes</li>
               <li>Calendar planning</li>
               <li>AI assistance</li>
               <li>Activity monitoring</li>
               <li>User accounts and authentication</li>
               <li>Password recovery</li>
               <li>Internal error logging</li>
               <li>Error handling and security systems</li>
           </ul>

           <p>
               The activity monitor is currently being tested with
               sample data while the real-time implementation is
               being developed.
           </p>

           <p>
               The goal is simple: make a productivity tool that helps
               keep things organised and makes it harder to accidentally
               disappear into games or other distractions.
           </p>
       `,
       status: "IN DEVELOPMENT"
   }

};


function openProject(name) {

   const project = projects[name];

   if (!project) {
       return;
   }

   const popup = document.getElementById("projectPopup");
   const background = document.getElementById("popupBackground");

   const title = document.getElementById("popupTitle");
   const description = document.getElementById("popupDescription");
   const status = document.getElementById("popupStatus");

   title.textContent = name;
   description.innerHTML = project.description;
   status.textContent = project.status;

   popup.classList.toggle("mryolo-popup", project.special);

   background.classList.add("active");
   popup.classList.add("active");

   document.body.classList.add("no-scroll");
}


function closeProject(event) {

   if (
       event &&
       event.target &&
       event.target.id !== "popupBackground" &&
       !event.target.classList.contains("close-popup")
   ) {
       return;
   }

   const popup = document.getElementById("projectPopup");
   const background = document.getElementById("popupBackground");

   popup.classList.remove("active");
   popup.classList.remove("mryolo-popup");

   background.classList.remove("active");

   document.body.classList.remove("no-scroll");
}


function openImage(src, title) {

   const viewer = document.getElementById("imageViewer");
   const image = document.getElementById("viewerImage");
   const imageTitle = document.getElementById("viewerTitle");

   if (!viewer || !image) {
       return;
   }

   image.src = src;
   image.alt = title;

   if (imageTitle) {
       imageTitle.textContent = title;
   }

   viewer.classList.add("active");

   document.body.classList.add("no-scroll");
}


function closeImage(event) {

   if (
       event &&
       event.target &&
       event.target.id !== "imageViewer" &&
       !event.target.classList.contains("close-image")
   ) {
       return;
   }

   const viewer = document.getElementById("imageViewer");

   if (!viewer) {
       return;
   }

   viewer.classList.remove("active");

   document.body.classList.remove("no-scroll");
}


function openArchive() {

   const archive = document.getElementById("archivePopup");

   if (!archive) {
       return;
   }

   archive.classList.add("active");

   document.body.classList.add("no-scroll");
}


function closeArchive(event) {

   if (
       event &&
       event.target &&
       event.target.id !== "archivePopup" &&
       !event.target.classList.contains("close-archive")
   ) {
       return;
   }

   const archive = document.getElementById("archivePopup");

   if (!archive) {
       return;
   }

   archive.classList.remove("active");

   document.body.classList.remove("no-scroll");
}


function showDeer() {

   const deerMessage = document.getElementById("deer-message");

   if (!deerMessage) {
       return;
   }

   deerMessage.classList.add("active");

   document.body.classList.add("no-scroll");
}


function closeDeer(event) {

   if (
       event &&
       event.target &&
       event.target.id !== "deer-message" &&
       !event.target.classList.contains("close-deer")
   ) {
       return;
   }

   const deerMessage = document.getElementById("deer-message");

   if (!deerMessage) {
       return;
   }

   deerMessage.classList.remove("active");

   document.body.classList.remove("no-scroll");
}


const randomThings = [

   "i should probably work on one project instead of starting another one.",

   "why does every project somehow become a Discord bot.",

   "the server is probably fine. probably.",

   "somehow, this started as a simple idea.",

   "i probably don't need another computer.",

   "there is probably something broken somewhere.",

   "SoftCloud is retired. the projects aren't.",

   "i should really stop messing with the server at 2am.",

   "if it works, don't touch it.",

   "one day i'll actually finish all these projects.",

   "this website exists because apparently i needed another project.",

   "Iris is probably judging my code.",

   "MRYOLO somehow made it to completion.",

   "maybe i should go to sleep.",

   "nah, one more thing.",

   "i have no idea what i'm doing, but we're doing it anyway.",

   "why did i start this at 2am.",

   "this was supposed to be a small project.",

   "okay, this actually looks kinda cool.",

   "i'll fix it later.",

   "future me can deal with that.",

   "wait, i have another idea.",

   "that's probably enough projects for now.",

   "actually... one more project."

];


function randomThing() {

   const output = document.getElementById("randomOutput");

   if (!output) {
       return;
   }

   const randomIndex =
       Math.floor(Math.random() * randomThings.length);

   output.textContent = randomThings[randomIndex];
}


document.addEventListener("keydown", function(event) {

   if (event.key !== "Escape") {
       return;
   }

   closeProject();
   closeImage();
   closeArchive();
   closeDeer();

});