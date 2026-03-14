const up_sections = document.querySelectorAll('.up_section');
const left_sections = document.querySelectorAll('.left_section');
const right_sections = document.querySelectorAll('.right_section');
const process_box = document.querySelectorAll('.process_box');



function up(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('up_animate');
        }
    });
}
function left(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('left_animate');
        }
    });
}
const up_observer = new IntersectionObserver((entries) => up(entries), { threshold: 0.3 });
const left_observer = new IntersectionObserver((entries) => left(entries), { threshold: 0.5 });
const right_observer = new IntersectionObserver((entries) => left(entries), { threshold: 0.5 });

up_sections.forEach(section => up_observer.observe(section));
left_sections.forEach(section => left_observer.observe(section));
right_sections.forEach(section => right_observer.observe(section));


