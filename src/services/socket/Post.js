export function newPost(postObject, socket) {
  // Sending post
  socket.emit('newPost', postObject);
}
