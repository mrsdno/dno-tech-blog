// update blog post

async function updateBlogPost(event) {
    event.preventDefault();
    const btnText = this.innerText
    const id = btnText.charAt(btnText.length - 1);

    const title = document.querySelector('#post-title').value.trim();
    const post_text = document.querySelector('#post-text').value.trim();

    if (title && post_text) {
        const response = await fetch(`/api/posts/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                title,
                post_text
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
        if (response.ok) {
            document.location.replace('/dashboard');
        }
    }

}

document.querySelector("#update-btn").addEventListener("click", updateBlogPost);