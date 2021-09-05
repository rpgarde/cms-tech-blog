
const deletePostHandler = async (event) => {
  event.preventDefault();
  console.log('I am deleting')
  const post_id = document.querySelector('#deleteBtn').dataset.postid
  const response = await fetch(`/api/posts/delete/${post_id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    alert('Successfully deleted post. Redirecting you to the dashboard.')
    document.location.replace('/dashboard');
  } else {
    alert('That did not work, please try again');
  }
};

document
  .querySelector('#deleteBtn')
  .addEventListener('click', deletePostHandler);