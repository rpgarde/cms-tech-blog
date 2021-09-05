
const deleteCommentHandler = async (event) => {
  event.preventDefault();
  const commentId = document.querySelector('#deleteBtn').dataset.commentid
  const postId = document.querySelector('#deleteBtn').dataset.postid
  const response = await fetch(`/api/posts/comments/delete/${commentId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    alert('Successfully deleted comment. Redirecting you to the post.')
    document.location.replace(`/post/${postId}`);
  } else {
    alert('That did not work, please try again');
  }
};

document
  .querySelector('#deleteBtn')
  .addEventListener('click', deleteCommentHandler);