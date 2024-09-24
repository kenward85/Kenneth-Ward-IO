// Insert the current year, copyright logo, and student's name in the footer dynamically
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.getElementById('copyright');
copyright.innerHTML = `&copy; ${thisYear} Kenneth Ward Jr.`;

// Array of skills to be inserted into the Skills section dynamically
const skills = [
    'Video Editing',
    'JavaScript',
    'HTML',
    'Social Media',
    'Analytics',
    'Content Creation',
    'Content Strategy',
    'API Integration',
    'Photoshop',
    'InDesign',
    'WordPress'
];

// Insert skills array into the skills section of the page
const skillsList = document.getElementById('skills-list');
skills.forEach(skill => {
    const li = document.createElement('li'); // Create a list item for each skill
    li.textContent = skill; // Set the text content to the skill
    skillsList.appendChild(li); // Append the list item to the skills list
});

// Handle form submission for "Leave a Message" section
const form = document.getElementById('message-form');
const messagesList = document.getElementById('messages-list');
const messagesHeading = document.getElementById('messages-heading');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create new message list item
    const li = document.createElement('li');
    li.innerHTML = `<strong><a href="mailto:${email}">${name}</a></strong>: ${message} 
                    <button class="remove">Remove</button>`;

    messagesList.appendChild(li); // Append new message to messages list

    // Show messages heading if not already visible
    if (messagesList.children.length > 0) {
        messagesHeading.style.display = 'block';
    }

    // Clear form inputs after submission
    form.reset();

    // Add functionality to remove message when the 'Remove' button is clicked
    li.querySelector('.remove').addEventListener('click', () => {
        li.remove(); // Remove the message from the DOM
        // Hide messages heading if no messages remain
        if (messagesList.children.length === 0) {
            messagesHeading.style.display = 'none';
        }
    });
});

// GitHub username to fetch repositories
const GITHUB_USERNAME = 'kenward85';

// Fetch GitHub repositories and display them in the Projects section
fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
    })
    .then(repositories => {
        console.log('Repositories:', repositories); // Log the repositories data

        const projectList = document.getElementById('projects-list'); // Select the projects list

        // Loop through repositories and create list items for each
        repositories.forEach(repo => {
            const li = document.createElement('li'); // Create a list item for each repo
            li.textContent = repo.name; // Set the text content to the repository name
            projectList.appendChild(li); // Append the list item to the projects list
        });
    })
    .catch(error => {
        // Log and display an error message if the fetch fails
        console.error('There was a problem with the fetch operation:', error);

        const projectSection = document.querySelector('#projects'); // Select the project section
        const errorMessage = document.createElement('p'); // Create an error message element
        errorMessage.textContent = 'There was an error loading the repositories. Please try again later.'; // Set the error message
        projectSection.appendChild(errorMessage); // Append the error message to the project section
    });









