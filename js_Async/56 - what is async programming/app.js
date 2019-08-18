// SYNCHRONOUS CODE
posts = loadPostsSync();
// Wait until posts are fetched
// Do something with posts

doTheNextThing();

// ASYNCHRONOUS CODE
loadPostsAsync(function() {
  // Wait til posts are fetched
  // Do something with posts
});

doTheNextThing(); // Doesn't have to wait until posts load

// WAYS TO HANDLE ASYNC CODE
// Callbacks
// Promises
// Async / Await
