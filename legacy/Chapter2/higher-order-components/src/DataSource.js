//data
const comments = [
    {
        id: `sasfsfsf`,
        content: 'Hi, nice to meet you!',
    },
    {
        id: `fergdgdsfg`,
        content: 'Yep, me too',
    }
]

const blogPosts = [
    {
        id: 1,
        blogPost: 'Hi, nice to meet you!',
    },
    {
        id: 2,
        blogPost: 'Yep, me too',
    }
]

function getComments() {
    return comments;
}

function getBlogPost(id) {
    if(id<0 || id>=blogPosts.length) {
        return blogPosts[0];
    }
    return blogPosts[id];
}

export default {
    getComments,
    getBlogPost
}
