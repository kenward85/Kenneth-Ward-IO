// GitHub Fetch Section
const GITHUB_USERNAME = 'kenward85';

fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(repositories => {
        console.log('Repositories:', repositories); 
        
        const projectSection = document.querySelector('#projects');
        const projectList = projectSection.querySelector('ul');

        for (let i = 0; i < repositories.length; i++) {
            const repo = repositories[i];

            const project = document.createElement('li');
            project.innerText = repo.name;

            projectList.appendChild(project);
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);

        const projectSection = document.querySelector('#projects');
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'There was an error loading the repositories. Please try again later.';
        projectSection.appendChild(errorMessage);
    });

// Footer Section
const today = new Date();
const thisYear = today.getFullYear();

const footer = document.createElement('footer');
document.body.appendChild(footer);

const copyright = document.createElement('p');
copyright.innerHTML = `Kenneth Ward &copy; ${thisYear}`; 
footer.appendChild(copyright);

// Skills Section
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
    const listItem = document.createElement('li');
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
});

// Message Form Section
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log('Name:', usersName);
    console.log('Email:', usersEmail);
    console.log('Message:', usersMessage);

    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');

    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>
        <span>: ${usersMessage}</span>
    `;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', function() {
        newMessage.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});








