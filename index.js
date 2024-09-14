const today = new Date();
const thisYear = today.getFullYear();

const footer = document.createElement('footer');
document.body.appendChild(footer);
const copyright = document.createElement('p');
copyright.innerHTML = `Kenneth Ward &copy; ${thisYear}`; 
footer.appendChild(copyright);

const skills = [
    'Video Editing',
    'JavaScript',
    'HTML',
    'Social Media',
    'Analytics',
    'Content Creation',
    'Content Strategy',
    'API',
    'Photoshop',
    'InDesign',
    'WordPress'
];

const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

skills.forEach(skill => {
    const skillItem = document.createElement('li');
    skillItem.textContent = skill;
    skillsList.appendChild(skillItem);
});





