  var currentuser = localStorage.getItem('allusers');
    const Headerelement = document.createElement('header')



function createHeader(settings, valutes, languages, profilemenu, menu, navbar, categories) {



  Headerelement.innerHTML = `
  <article>
    <ul class="header_ul">

      <li id="settings_ul">
        Settings
        <ul></ul>
      </li>

      <li id="header_valyuta">
        USD
        <ul></ul>
      </li>

      <li id="header_language">
        <img src="https://htmldemo.net/rozer/rozer/assets/images/flag/1.jpg" alt="USA">
        English
        <ul></ul>
      </li>

    </ul>
  </article>


  <article class="header_search_article">

    <img src="./images/Gemini_Generated_Image_m8ygtm8ygtm8ygtm.png" class="header_logo">

    <img src="./images/Gemini_Generated_Image_sps5ubsps5ubsps5.png" class="header_logo_media">

    <form>
      <input type="search" placeholder="Search...">

      <button type="submit" class="submit_header_btn">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>

    <article class="profile_article">
      <button class="profile">
        <i class="fa-regular fa-circle-user"></i>
      </button>

      <ul class="profile_menu">

      </ul>
    </article>

    <article class="media_header_menu"></article>

  </article>


  <nav class="navbar">

    <button id="categories">
      <i class="fa-solid fa-list"></i>
    </button>

    <ul class="categories_ul"></ul>

    <ul class="navbar_ul"></ul>

    <span>Free Shipping on Orders $50+</span>

  </nav>
  `
var headers_settings = Headerelement.querySelector("#settings_ul")
var headers_settings_ul = Headerelement.querySelector("#settings_ul > ul")
var valyuta_header = Headerelement.querySelector("#header_valyuta")
var valyuta_header_ul = Headerelement.querySelector("#header_valyuta > ul")

var header_language = Headerelement.querySelector("#header_language")
var header_language_ul = Headerelement.querySelector("#header_language > ul")

// SETTINGS MENU
headers_settings.addEventListener("click", () => {
    // Toggle settings menu
    headers_settings.classList.toggle("open");
    headers_settings_ul.classList.toggle("open");

    // Close currency menu
    valyuta_header.classList.remove("open");
    valyuta_header_ul.classList.remove("open");

    // Close language menu
    header_language.classList.remove("open");
    header_language_ul.classList.remove("open");
});

// VALYUTA MENU
valyuta_header.addEventListener("click", () => {
    valyuta_header.classList.toggle("open")
    valyuta_header_ul.classList.toggle("open")

    headers_settings.classList.remove("open")
    headers_settings_ul.classList.remove("open")

    header_language.classList.remove("open")
    header_language_ul.classList.remove("open")
})

// LANGUAGE MENU
header_language.addEventListener("click", () => {
    header_language.classList.toggle("open")
    header_language_ul.classList.toggle("open")

    valyuta_header.classList.remove("open")
    valyuta_header_ul.classList.remove("open")

    headers_settings.classList.remove("open")
    headers_settings_ul.classList.remove("open")
})



// CATEGORIES MENU
var categories_button = Headerelement.querySelector("#categories")
var categories_ul = Headerelement.querySelector(".categories_ul")

categories_button.addEventListener("click", () => {

    if (categories_ul.style.height === "300px") {
        categories_ul.style.height = "0"
    } else {
        categories_ul.style.height = "300px"
        categories_ul.style.width = "200px"
    }

});


// PROFILE MENU
var profile_button = Headerelement.querySelector(".profile");
var profile_menu = Headerelement.querySelector(".profile_menu");

profile_button.addEventListener("click", () => {

    if (profile_menu.style.height === "auto") {
        profile_menu.style.height = "0px"
        profile_menu.style.padding = "0px 20px"
    } else {
        profile_menu.style.height = "auto"
        profile_menu.style.padding = "20px"
    }

});




  // SETTINGS
  settings.forEach(item => {

    const li = document.createElement('li')
    const button = document.createElement('button')

    button.textContent = item

    li.appendChild(button)

    Headerelement.querySelector('#settings_ul ul').appendChild(li)

  })


  // VALUTES
  valutes.forEach(item => {

    const li = document.createElement('li')
    const button = document.createElement('button')

    button.textContent = item

    li.appendChild(button)

    Headerelement.querySelector('#header_valyuta ul').appendChild(li)

  })


  // LANGUAGES
  languages.forEach(item => {

    const li = document.createElement('li')
    const button = document.createElement('button')

    button.textContent = item

    li.appendChild(button)

    Headerelement.querySelector('#header_language ul').appendChild(li)

  })


  // PROFILE MENU
  profilemenu.forEach(item => {

    const li = document.createElement('li')

    li.innerHTML = `<a href="${item.href}">${item.icon}</a>`

    Headerelement.querySelector('.profile_menu').appendChild(li)

  })


  // MEDIA HEADER MENU
  menu.forEach(item => {

    const button = document.createElement('a')

    button.innerHTML = item.icon
    button.href = item.href

    Headerelement.querySelector('.media_header_menu').appendChild(button)

  })


  // NAVBAR
  navbar.forEach(item => {

    const li = document.createElement('li')

    li.innerHTML = item

    Headerelement.querySelector('.navbar_ul').appendChild(li)

  })


  // CATEGORIES
  categories.forEach(item => {

    const li = document.createElement('li')

    li.innerHTML = item

    Headerelement.querySelector('.categories_ul').appendChild(li)

  })


  document.body.prepend(Headerelement)
}



  createHeader(

    ['My account', 'Checkout', 'Sign in'],

    ['AMD', 'EUR', 'RUB'],

    ['Русский', 'Հայերեն', '中文'],

    [
      {
        icon: `<i class='fa-solid fa-heart'></i>`,
        href: 'likes.html'
      },
      {
        icon: `<i class='fa-solid fa-cart-shopping'></i>`,
        href: 'product_cart.html'
      },
      {
        icon: `<i class='fa-solid fa-user'></i>`,
        href: `${!currentuser ? 'registr.html' : 'profile.html'}`
      }

    ],

    [{
      icon: `<i class='fa-solid fa-heart'></i>`,
      href: 'likes.html'
    },
    {
      icon: `<i class='fa-solid fa-cart-shopping'></i>`,
      href: 'product_cart.html'
    },
    {
      icon: `<i class='fa-solid fa-user'></i>`,
      href: !currentuser ? 'registr.html' : 'profile.html'
    }

    ],

    [
      `<a href="index.html" class="navbar_li">HOME</a>`,
      `<a href="shop.html" class="navbar_li">SHOP</a>`,
      `<a href="about.html" class="navbar_li">ABOUT</a>`,
      `<a href="blog.html" class="navbar_li">BLOG</a>`,
      `<a href="contact.html" class="navbar_li">CONTACT</a>`
    ],

    [
      `<a href="index.html" class="navbar_li">HOME</a>`,
      `<a href="shop.html" class="navbar_li">SHOP</a>`,
      `<a href="about.html" class="navbar_li">ABOUT</a>`,
      `<a href="blog.html" class="navbar_li">BLOG</a>`,
      `<a href="contact.html" class="navbar_li">CONTACT</a>`
    ]

  )



  function Footer(information, custom_links, newsletter) {
    const Footerelement = document.createElement('footer');
    Footerelement.innerHTML = `
    <section class="about_footer">
      <h3>ABOUT US</h3>
      <p>Weyzor Store is your trusted destination for quality electronics and smart tech essentials</p>
      <article class="footer_phone_info">
        <i class="fa-solid fa-phone"></i>
        <section class="number_footer">
          <h3>123456789</h3>
          <h3>123456789</h3>
        </section>
      </article>
    </section>

    <article class="custom_links">
      <h3>INFORMATION</h3>
      <ul class="information"></ul>
    </article>

    <article class="custom_links">
      <h3>CUSTOM LINKS</h3>
      <ul class="custom_links_ul"></ul>
    </article>

    <article class="footer_newsletter">
      <h3>NEWSLETTER</h3>
      <p>You may unsubscribe at any moment.</p>
      <form class="footer_form">
        <input type="email" placeholder="Enter your email here..." class="footer_email_input">
        <input type="submit" value="SIGN UP" href="#" class="footer_submit_btn">
      </form>
      <ul class="social_media_ul"></ul>
    </article>
  `;
    document.body.append(Footerelement)

    const infoUl = Footerelement.querySelector('.information');
    const customUl = Footerelement.querySelector('.custom_links_ul');
    const socialUl = Footerelement.querySelector('.social_media_ul');

    // INFORMATION
    information.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="#">${item}</a>`;
      infoUl.appendChild(li);
    });

    // CUSTOM LINKS
    custom_links.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="#">${item}</a>`;
      customUl.appendChild(li);
    });

    // SOCIAL
    newsletter.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<i class="${item} " id="footer_sm"></i>`;
      socialUl.appendChild(li);
    });
  }

  // вызов
  Footer(
    ['Delivery', 'About us', 'Secure Payment', 'Contact Us', 'Sitemap'], ['Prices Drop', 'New Products', 'Best Sales', 'Login', 'My Account'], [
    'fa-brands fa-facebook-f',
    'fa-brands fa-twitter',
    'fa-brands fa-instagram',
    'fa-brands fa-tiktok'
  ]
  );