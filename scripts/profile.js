var currentuser = JSON.parse(localStorage.getItem('currentuser'))


var profile = document.createElement('div')
profile.style.display="flex"
profile.innerHTML = ` 
<div class="profile_main">
    
<img src = "${currentuser.img}" id="profile_img"/></div>
    <div class="profile_name">       
        <h1>${currentuser.firstname} </h1> 
        <hr>
        <h1>${currentuser.lastname}</h1>
    </div>

</div>
<div>
    <h3>${currentuser.email}</h3>
    <p>Mersi shat ${currentuser.firstname} ${currentuser.lastname} vor yntrel eq mer cragiry</p>    
</div>
<div>
    <button class="shop_button">
        <a href="shop.html">
            <i class="fa-solid fa-basket-shopping"></i> Go to Shop
        </a>
    </button>
</div>
`

profile.classList.add('profilehtml_main')
document.body.append(profile)