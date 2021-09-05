
const editPostFormHandler = async (event) => {
  event.preventDefault();
  const post_id = document.querySelector('#post-form').dataset.postid
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();
  if (content) {
    const response = await fetch(`/api/posts/edit/${post_id}`, {
      method: 'PUT',
      body: JSON.stringify({ post_id, title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Edit successful. Redirecting you to the dashboard.')
      document.location.replace('/dashboard');
    } else {
      alert('That did not work, please try again');
    }
  }
};

document
.querySelector('#post-form')
.addEventListener('submit', editPostFormHandler);