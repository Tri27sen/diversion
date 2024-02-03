document.addEventListener('DOMContentLoaded', async function () {
  const projectsContainer = document.getElementById('projects');
  function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4');

    card.innerHTML = `
    <div class="card h-100">
    <div class="card-body">
        <h5 class="card-title">${project.projectName}</h5>
        <div class="form-check form-check-inline mb-2">
            <!-- Checkbox removed from here -->
            <button type="button" class="btn btn-danger btn-sm delete-btn">Delete</button>
        </div>
    </div>
</div>`;

    return card;
  }
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const response = await fetch(`http://localhost:5500/getTodoList?username=${username}`)
    console.log(" the response is --------------------")
    console.log(response.todoList)
    const data = await response.json();
    console.log(data)
    console.log("this id todolog.js")
    if (data.error) {
      console.error('Error fetching project list:', data.message);
      return;
    }

    const projects = data.todoList;
    projects.forEach(project => {
      const card = createProjectCard(project);
      projectsContainer.appendChild(card);


      // Add event listener to the delete button
      const deleteButton = card.querySelector('.delete-btn');
      deleteButton.addEventListener('click', async () => {
        const projectName = project.projectName;

        try {
          const deleteResponse = await fetch('http://localhost:5500/deltodo', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              projectName: projectName,
              username: username,
            }),
          });

          const deleteData = await deleteResponse.json();

          if (deleteData.error) {
            console.error('Error deleting project:', deleteData.message);
          } else {
            // Remove the project card from the UI
            card.remove();
            console.log('Project deleted successfully');
          }
        } catch (error) {
          console.error('Error deleting project:', error);
        }
      });
    });
  }

  catch (error) {
    console.error('Error fetching project list:', error);
  }



})