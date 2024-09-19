
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











