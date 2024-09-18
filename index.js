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
    const listItem = document.createElement('li');
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
});


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







