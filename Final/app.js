document.addEventListener('DOMContentLoaded', function () {

  // Initial fetch for the first page
  let currentPage = 1, total_pages = 1;
  const baseUrl = 'http://localhost:8000/projects';  // Base API URL
  let sortSelect = 'difficultyRating';
  let orderSelect = 'asc';
  let updatedRequirements = '';
  const style = document.getElementById('pagination').style.display;
  fetchprojects(currentPage, sortSelect, orderSelect, updatedRequirements);

  function fetchprojects(page, sort, order, requirements) {
    apiUrl = `${baseUrl}?page=${page}&sort=${sort},${order}&requirements=${requirements}`;
    console.log(apiUrl);
    axios.get(apiUrl)
      .then(function (response) {
        if (response.data && response.data.projects) {
          const projects = response.data.projects;
          total_pages = response.data.total_pages;
          const projectsContainer = document.getElementById('projectsContainer');
          projectsContainer.innerHTML = '';

          projects.forEach(function (project) {
            const card = document.createElement('div');
            card.classList.add('card');

            const difficulty = document.createElement('div');
            difficulty.classList.add('difficulty');
            difficulty.textContent = project.difficulty;
            card.appendChild(difficulty);

            const name = document.createElement('div');
            name.classList.add('name');
            name.textContent = project.projectName;
            card.appendChild(name);

            const description = document.createElement('p');
            description.textContent = project.description;
            card.appendChild(description);

            const prerequisitesHeader = document.createElement('h3');
            prerequisitesHeader.textContent = 'Prerequisites';
            card.appendChild(prerequisitesHeader);

            const requireList = document.createElement('ul');
            requireList.classList.add('require');

            project.requirements.forEach(function (requirement) {
              const listItem = document.createElement('li');
              listItem.innerHTML = `✅ ${requirement}`;
              requireList.appendChild(listItem);
            });

            card.appendChild(requireList);

            const linkButton = document.createElement('button');
            linkButton.classList.add('link');
            const link = document.createElement('a');
            link.href = project.projectLink;
            link.target = '_blank';
            link.textContent = 'Link';
            linkButton.appendChild(link);
            card.appendChild(linkButton);

            const todoButton = document.createElement('button');
            todoButton.classList.add('todo');
            const todo = document.createElement('a');
            todo.textContent = 'Add to To-Do List';
            todoButton.appendChild(todo);
            card.appendChild(todoButton);

            projectsContainer.appendChild(card);
            const pagination = document.getElementById('pagination');
            pagination.style.display = style;
            const video = document.getElementById('vid');
            video.style.display = 'none';
          });
          if (projects.length === 0) {
            const pagination = document.getElementById('pagination');
            pagination.style.display = 'none';
            const video = document.getElementById('vid');
            video.style.display = 'block';
          }
        }
      })
      .catch(function (error) {
        console.error('Error fetching projects:', error);
      });
  }


  // Function to handle pagination
  function handlePagination(action) {
    if (action === 'prev' && currentPage > 1) {
      fetchprojects(--currentPage, sortSelect, orderSelect, updatedRequirements);
    } else if (action === 'next' && currentPage < total_pages) {
      fetchprojects(++currentPage, sortSelect, orderSelect, updatedRequirements);
    }
  }

  // function handleSortingChange() {
  //   sortSelect = document.getElementById('sortSelect').value;
  //   orderSelect = document.getElementById('orderSelect').value;
  //   // Update apiUrl based on the selected sorting options
  //   currentPage=1;
  //   // Fetch projects with the updated apiUrl
  //   fetchprojects(currentPage, sortSelect, orderSelect, updatedRequirements);
  // }

  const requirementCheckboxes = document.querySelectorAll('.requirementCheckbox');
  function handleRequirements() {

    const enabledRequirements = Array.from(requirementCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

    updatedRequirements = enabledRequirements.length > 0 ? `${enabledRequirements.join(',')}` : '';
    currentPage = 1;
    fetchprojects(currentPage, sortSelect, orderSelect, updatedRequirements);
  }

  // Attach event listeners to pagination buttons
  document.getElementById('prevPageButton').addEventListener('click', function () {
    handlePagination('prev');
  });

  document.getElementById('nextPageButton').addEventListener('click', function () {
    handlePagination('next');
  });

  // document.getElementById('sortSelect').addEventListener('change', handleSortingChange);
  // document.getElementById('orderSelect').addEventListener('change', handleSortingChange);
  requirementCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', handleRequirements);
  });

});
