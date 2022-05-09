import React from 'react'
// import placeholder from 'https://via.placeholder.com/728x90.png?text=Visit';

let profilePlaceholderUrl = "https://via.placeholder.com/728x90.png?text=Visit";
// let nolink = "javascript:void(0)";


function Header() {
    //  function for sidenav

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
  return (
    <header>
        <div>
            Header
            <nav className="navbar navbar-expand-sm navbar-light bg-light nav-fill">
        <div class="container-fluid">
            <span className="nav-item humburger" style={{fontSize: "30px", cursor: "pointer"}}
                onClick={openNav}>&#9776;</span>
            <a className="navbar-brand nav-item" href="{% url 'home' %}">Nibas</a>

            {/* <!-- <div style="width: 100%;">
        <input class="form-control search" type="search" placeholder="Search" aria-label="Search">

      </div> --> */}
            <div class="
                        d-flex
                        justify-content-center
                        align-items-center
                        container
                        nav-item
                    ">
                <form class="d-flex searchForm">
                    <input class="form-control search" type="search" placeholder="Search" aria-label="Search" />
                    <button class="mybtn btn-outline-success" type="submit">
                        <i class="fa fa-search fa-1x"></i>
                    </button>
                    {/* <!-- <span class="input-text-group mybtn"><i class="fa fa-search"></i></span> --> */}
                    {/* <!-- <button class="mybtn btn-outline-success" type="submit">Search</button> --> */}
                </form>
            </div>

           {/*  <!-- cart starts --> */}
            <div class="nav-item">
                <span><a href="{% url 'cart' %}" class="nav-link cartlink"><i class="
                                    fa fa-shopping-cart fa-lg
                                    d-inline
                                    badge
                                    cart-icon
                                " value="{{cartItems}}"></i></a></span>
            </div>
            {/* <!-- cart endss -->
            <!-- login starts --> */}
            <div class="nav-item">
                <span><a href="/" class="nav-link loginlink"><i
                            class="fa fa-user fa-lg d-inline"></i>Login</a></span>
            </div>
            {/* <!-- login endss --> */}
        </div>
        </nav>
         {/* <!-- sidenav starts --> */}
    <nav>
        <div id="mySidenav" class="sidenav">
            <div class="sidenav-profile-section">
                <div class="sidenav-profile-image">

                    <img src={profilePlaceholderUrl} alt="Profile"/>
                </div>
                <h5 class="sidenav-profile-name">CustomerName</h5>

            </div>
            <hr/>
            <button /* href={nolink} */ class="closebtn" onClick={closeNav}>&times;</button>
            <a href="/">Profile</a>
            <a href="/">Rent</a>
            <a href="/">Buy</a>
            <a href="/">Sell</a>
        </div>
    </nav>

    {/* <!-- sidenav ends --> */}
            
        </div>
    </header>
    


  )
}

export default Header;
