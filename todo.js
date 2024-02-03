document.addEventListener('DOMContentLoaded',  async function () {
  const projectsContainer = document.getElementById('projects');

  const projects = [
    { name: 'Task Tracker App', category: 'HTML-CSS' },
    { name: 'E-commerce Website', category: 'HTML-CSS' },
    { name: 'Portfolio Website', category: 'HTML-CSS' },
    { name: 'Weather App', category: 'HTML-CSS' },
    { name: 'HTML/CSS Project 5', category: 'HTML-CSS' },
    { name: 'Blog Platform', category: 'JavaScript' },
    { name: 'Expense Tracke', category: 'JavaScript' },
    { name: 'Social Media Dashboard', category: 'JavaScript' },
    { name: 'To-Do List with Notifications', category: 'JavaScript' },
    { name: 'Online Bookstore', category: 'JavaScript' },
    { name: 'Machine Learning Chatbot', category: 'Python' },
    { name: 'Task Automation Script', category: 'Python' },
    { name: 'Python Project 3', category: 'Python' },
    { name: 'Python Project 4', category: 'Python' },
    { name: 'Python Project 5', category: 'Python' },
    { name: 'Event Management System', category: 'MongoDB' },
    { name: 'Portfolio CMS (Content Management System)', category: 'MongoDB' },
    { name: 'Location-based Reminder App', category: 'MongoDB' },
    { name: 'Code Review Platform', category: 'MongoDB' },
    { name: 'MongoDB Project 5', category: 'MongoDB' }
  ];

  // Function to create project cards
  function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4');

    card.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${project.name}</h5>
          <p class="card-text">${project.category}</p>
          <div class="form-check form-check-inline mb-2">
            <input type="checkbox" class="form-check-input" id="${project.name.replace(/\s/g, '-')}-completed"
            data-project-name="${project.name}">
            <label class="form-check-label" for="${project.name.replace(/\s/g, '-')}-completed">Completed</label>
          </div>
          <button type="button" class="btn btn-danger btn-sm delete-btn">Delete</button>
        </div>
      </div>
    `;

    return card;
  }

  // Render project cards
  function renderProjects() {
    projectsContainer.innerHTML = '';

    const categories = ['HTML-CSS', 'JavaScript', 'Python', 'MongoDB'];

    categories.forEach(category => {
      const categoryContainer = document.createElement('div');
      categoryContainer.classList.add('mb-5');

      const categoryHeading = document.createElement('h2');
      categoryHeading.textContent = category;
      categoryContainer.appendChild(categoryHeading);

      const row = document.createElement('div');
      row.classList.add('row');

      const categoryProjects = projects.filter(project => project.category === category);
      categoryProjects.forEach(project => {
        const card = createProjectCard(project);
        row.appendChild(card);
      });

      categoryContainer.appendChild(row);
      projectsContainer.appendChild(categoryContainer);
    });
  }
  console.log("running ....")
  renderProjects();
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('username');
  console.log("todo page .....")
  console.log('Username:', username);
  
  projectsContainer.addEventListener('change', async function (event) {
    if (event.target.type === 'checkbox') {
      const projectName = event.target.dataset.projectName;
      const completed = event.target.checked;
      console.log(projectName)
      console.log(completed)
      // Send the updated state to the backend
      try {
        const response = await fetch('http://localhost:5500/updateTodoState', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, projectName, completed }),
        });
       
        const data = await response.json();
        console.log(data); // Log the response data to the console
        if (!completed) {
          const projectCard = event.target.closest('.card');
          
        }
      } catch (error) {
        console.error('Error updating todo state:', error);
      }
    }
  });
});

