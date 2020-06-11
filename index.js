console.log('Before');
console.log('After');

// getUser(1)
//   .then((user) => getRepositories(user))
//   .then((repos) => getCommits(repos[0]))
//   .then((commits) => console.log('Commit', commits))
//   .catch((error) => console.log('Error', error));

async function displayCommits() {
  const user = await getUser(1);
  const repos = await getRepositories(user);
  const commit = await getCommits(repos[0]);
  console.log(commit);
}
try {
  displayCommits();
} catch (error) {
  console.log(error);
}
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from database');
      resolve({ id: id, gitHubUsername: 'mosh' });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    const repos = ['repo1', 'repo2', 'repo3'];
    setTimeout(() => {
      console.log('Getting repos from the github repository');
      resolve(repos);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Getting commits from Git');
      //   resolve(['commit1', 'commit2', 'commit3']);
      reject(new Error('Could not get Github commits'));
    }, 2000);
  });
}
