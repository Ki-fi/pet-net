
function filterPostsOnId(storedUser, posts) {
    return posts.filter(post => post.creator === storedUser.id);
}

export default filterPostsOnId;