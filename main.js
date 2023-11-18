let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: purple;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: purple;">Diseño de páginas web y desarrollo de software.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
