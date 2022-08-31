import React, {useState} from "react";
import { Link  } from "react-router-dom";
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { browserHistory } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap'
// import { Link } from 'react-router-dom'
// import placeholder from 'https://via.placeholder.com/728x90.png?text=Visit';

let profilePlaceholderUrl = "https://via.placeholder.com/728x90.png?text=Visit";
// let nolink = "javascript:void(0)";

function Header() {


    // const userInfo = { 'name': 'Fahim'}
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
	// let history = useHistory();
    //function for logout

	
    const logoutHandler = () => {
        console.log("logout");
		localStorage.removeItem('userInfo')
		this.setState({});
		// this.props.history.push('/path')

    }

	//  function for sidenav

	function openNav() {
		document.getElementById("mySidenav").style.width = "250px";
	}

	function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
	}
	return (
		<>
			<header>
				<div>
					Header
					<nav className="navbar navbar-expand-sm navbar-light bg-light nav-fill">
						<div class="container-fluid">
							<span
								className="nav-item humburger"
								style={{ fontSize: "30px", cursor: "pointer" }}
								onClick={openNav}
							>
								&#9776;
							</span>

							{/* <Link></Link> */}
							<Link
								to="/"
								className="navbar-brand nav-item"
								style={{
									fontFamily:
										"cursive, Copperplate, fantasy, Arial",
									fontSize: "20",
								}}
							>
								Nibas
							</Link>

							{/* <!-- <div style="width: 100%;">
        <input class="form-control search" type="search" placeholder="Search" aria-label="Search">

      </div> --> */}
							<div
								class="
                        d-flex
                        justify-content-center
                        align-items-center
                        container
                        nav-item
                    "
							>
								<form class="d-flex searchForm">
									<input
										class="form-control search"
										type="search"
										placeholder="Search"
										aria-label="Search"
									/>
									<button
										class="mybtn btn-outline-success"
										type="submit"
									>
										<i class="fa fa-search fa-1x"></i>
									</button>
									{/* <!-- <span class="input-text-group mybtn"><i class="fa fa-search"></i></span> --> */}
									{/* <!-- <button class="mybtn btn-outline-success" type="submit">Search</button> --> */}
								</form>
							</div>

							{/*  <!-- favourite starts --> */}
							<div class="nav-item">
								<span>
									<a
										href="{% url 'cart' %}"
										class="nav-link favourite-link"
									>
										<i
											class="
                                    fa fa-heart fa-lg
                                    d-inline
                                    badge
                                    favourite-icon
                                "
											value="{{favItems}}"
										></i>
									</a>
								</span>
							</div>
							{/* <!-- favourite endss -->
            <!-- login starts --> */}

							{userInfo ? (
                                
								<NavDropdown 
									title={userInfo.name}
									id="username"
								>
									{/* <LinkContainer to="/profile">
										<NavDropdown.Item>
											Profile
										</NavDropdown.Item>
									</LinkContainer> */}
									<LinkContainer to='/login'>
										<NavDropdown.Item onClick={logoutHandler}>
											Logout
											
										</NavDropdown.Item>

									</LinkContainer>
									
								</NavDropdown>
							) : (
								<LinkContainer to="/login">
									<Nav.Link className="nav-link loginlink">
										<i className="fa fa-user fa-lg d-inline"></i>Login
									</Nav.Link>
								</LinkContainer>
							)}

							{/* <div class="nav-item">
								<span>
									<Link
										to="/login"
										class="nav-link loginlink"
									>
										<i class="fa fa-user fa-lg d-inline"></i>
										Login
									</Link>
								</span>
							</div> */}
							{/* <!-- login endss --> */}
						</div>
					</nav>
					{/* <!-- sidenav starts --> */}
					<nav>
						<div id="mySidenav" class="sidenav">
							<div class="sidenav-profile-section">
								<div class="sidenav-profile-image">
									<img
										src={profilePlaceholderUrl}
										alt="Profile"
									/>
								</div>
								<h5 class="sidenav-profile-name">
									{userInfo ? userInfo.name : ' '}
								</h5>
							</div>
							<hr />
							<button
								/* href={nolink} */ class="closebtn"
								onClick={closeNav}
							>
								&times;
							</button>
							<Link to="/profile">Profile</Link>
							<Link to="/rent">Rent</Link>
							<Link to="/buy">Buy</Link>
							<Link to="/">Sell</Link>
						</div>
					</nav>
					{/* <!-- sidenav ends --> */}
				</div>
			</header>
		</>
	);
}

export default Header;
