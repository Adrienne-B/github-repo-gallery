const overview = document.querySelector(".overview"); //your profile information will appear.

const username = "Adrienne-B";
//Create a global variable with your github username.

const gitUserInfo = async function () {
const userInfo = await fetch(`https://api.github.com/users/${username}`);
//Target the "users" endpoint and use a tempate literal to add the global username variable (line #3) to the endpoint: users/${username}. Surround the URL in backticks instead of quotation marks.
	
const data = await userInfo.json();
displayUserInfo(data);
//In this await statement, resolve the JSON response and log out the response to the console and call your function to see the results.	
};

gitUserInfo();


const userInfo = function (data) {
	const div = document.createElement("div");
	div.classList.add("user-info");
	//Create a new div and give it a class of "user-info" inside of the function.
	
	
	div.innerHTML = `
		<figure>
      		<img alt="user avatar" src=${data.avatar_url} />
    	</figure>
    <div>
		  <p><strong>Name:</strong> ${data.name}</p>
		  <p><strong>Bio:</strong> ${data.bio}</p>
		  <p><strong>Location:</strong> ${data.location}</p>
		  <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>
  `;
 overview.append(div);
 gitRepos();
};

const gitRepos = async function () {
  const fetchRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
  const repoData = await fetchRepos.json();
  displayRepos(repoData);
};

const displayRepos = function (repos) {
  for (const repo of repos) {
    const repoItem = document.createElement("li");
    repoItem.classList.add("repo");
    repoItem.innerHTML = `<h3>${repo.name}</h3>`;
    repoList.append(repoItem);
  }
};





