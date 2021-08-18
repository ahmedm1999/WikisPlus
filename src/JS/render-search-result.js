var res_container = document.querySelector('.res-container');

export const renderBlogsResult = (res) => {
    const blog = document.createElement('div');
    console.log(res)
    blog.innerHTML = res.map(r => {
        return `
        <div class="blog-res bot_border pb-3">
            <a href="#" class="blog-res-link w-100 p-3">
                <div class="blog-sec">
                    <p class="blog-title">
                        ${r['blog_title']}
                    </p>
                </div>
                <div class="blog-sec">
                    <p class="blog-auth">Ahmed Mukahal</p>
                </div>
                <div class="blog-sec">
                    <img src="https://hkandala.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1599232799251%2F6BlYhNrsz.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
                        alt="blog-search-img" class="blog-img">
                </div>
            </a>
        </div>` ;
    }).join('') ;
    res_container.appendChild(blog) ;
    res = [] ;
}

export const renderUsersResult = (res) => {
    console.log('users result rendered')
}

export const renderTagsResult = (res) => {
    console.log('tags result rendered')
}