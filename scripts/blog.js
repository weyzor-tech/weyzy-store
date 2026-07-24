class Blog {
    constructor(src, name, description, date) {
        this.src = src
        this.name = name
        this.description = description
        this.date = date
    }

    render() {
        let blog_cart = document.createElement('article');
        blog_cart.classList.add('blog_cart');

        blog_cart.innerHTML = `
        <img src="${this.src}" alt="">
        <div>
            <h3>${this.name}</h3>
            <div class="blog_cart_info">
                <p>${this.description}</p>
                <span>${this.date}</span>
            </div>
        </div>
        `

   document.querySelector('.blog_box').append(blog_cart)
    }
}



const blog_data = [
    new Blog(
        "https://htmldemo.net/rozer/rozer/assets/images/blog-image/blog-2.jpg",
        "This is Third Post For XipBlog",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eius expedita hic, vel minima minus reiciendis consequuntur ab beatae necessitatibus amet magni itaque, nostrum vero eosnobis modi temporibus recusandae.",
        "Since11.03.2026"


    ),
    new Blog(
        "https://png.pngtree.com/thumb_back/fh260/background/20251104/pngtree-work-from-home-aesthetic-sunlit-desk-image_20154438.webp",
        "This is Third Post For XipBlog",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eius expedita hic, vel minima minus reiciendis consequuntur ab beatae necessitatibus amet magni itaque, nostrum vero eosnobis modi temporibus recusandae.",
        "Since11.03.2026"


    ),
    new Blog(
        "https://png.pngtree.com/thumb_back/fh260/background/20221201/pngtree-chic-home-office-setup-with-white-desk-devices-and-stationery-photo-image_42770088.jpg",
        "This is Third Post For XipBlog",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eius expedita hic, vel minima minus reiciendis consequuntur ab beatae necessitatibus amet magni itaque, nostrum vero eosnobis modi temporibus recusandae.",
        "Since11.03.2026"


    ),
    new Blog(
        "https://thumbs.dreamstime.com/b/aesthetic-freelance-work-place-notepad-mock-up-laptop-phone-headphones-tulips-online-listening-to-music-taking-247648339.jpg",
        "This is Third Post For XipBlog",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eius expedita hic, vel minima minus reiciendis consequuntur ab beatae necessitatibus amet magni itaque, nostrum vero eosnobis modi temporibus recusandae.",
        "Since11.03.2026"


    ),
    new Blog(
        "https://careergirlmeets.com/wp-content/uploads/2022/06/homeofficeaesthetic.jpg",
        "This is Third Post For XipBlog",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eius expedita hic, vel minima minus reiciendis consequuntur ab beatae necessitatibus amet magni itaque, nostrum vero eosnobis modi temporibus recusandae.",
        "Since11.03.2026"


    ),
]
blog_data.map((e)=>{
    e.render()
})
