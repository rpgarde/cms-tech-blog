
const postFormHandler = async (event) => {
  event.preventDefault();
  console.log('we are posting')
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();
  if (content) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Post successful!')
      document.location.replace('/dashboard');
    } else {
      alert('That did not work, please try again');
    }
  }
};

document
.querySelector('#post-form')
.addEventListener('submit', postFormHandler);