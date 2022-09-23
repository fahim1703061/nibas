import React, {useState, useEffect} from "react";
import { Link, BrowserRouter  } from "react-router-dom";
import { Navbar, Nav, Container, Row, NavDropdown, Dropdown, ToastContainer, Toast } from 'react-bootstrap'
import { browserHistory } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios'

import './Header.css'
import Notification from "../Notification/Notification";
import { uncheckedNotification } from "../../CONSTANTS/notificationConstant";

// import { Link } from 'react-router-dom'
// import placeholder from 'https://via.placeholder.com/728x90.png?text=Visit';

let profilePlaceholderUrl = "https://via.placeholder.com/728x90.png?text=Visit";
// let nolink = "javascript:void(0)";

function Header() {

	let history = ''
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
	
	const [keyword, setKeyword] = useState('')
	const [notifications, setNotofications] = useState([])

    // const userInfo = { 'name': 'Fahim'}

	useEffect(() => {
    
		async function fetchNotifications(){
	
		  //start- data from backend
		  const headers = { 
			'Content-type': 'application/json',
			  'Authorization': `Bearer ${userInfo.token}`,
			  // 'My-Custom-Header': 'foobar'
		  };
		  const { data } = await axios.get(`/api/notification/`, {headers})
		  setNotofications(data)
		  //end- data from backend
		  // const { data } = rentHomes_data
		  // setRentHomes(rentHomes_data)
		}
		fetchNotifications()
	
		
	  }, [uncheckedNotification])

	// let history = useHistory();
    //function for logout

	
    const logoutHandler = () => {
        console.log("logout");
		localStorage.removeItem('userInfo')
		this.setState({});
		// this.props.history.push('/path')

    }

	const searchHandler = (e) => {
		e.preventDefault()

		console.log(window.location.pathname);
		history = window.location.pathname
		if (keyword === '') {
			return
		}
		if(history === '/rent' || history === '/buy' || history === '/rent/' || history === '/buy/'){
			window.location.assign(window.location.pathname + '?keyword='+keyword)
		}
		
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
								<form class="d-flex searchForm" onSubmit={searchHandler}>
									<input
										class="form-control search"
										type="search"
										placeholder="Search on address"
										aria-label="Search"
										value={keyword}
										onChange={(e) => setKeyword(e.target.value)}
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

								{/* <span>
									<a
										href=" "
										class="nav-link favourite-link"
									>
										
										<i
											class="
                                    fa fa-regular fa-bell fa-lg
                                    d-inline
                                    badge
                                    favourite-icon 
                                "
								      style={{color :'#ab9797'}}
											value="0"
										></i>
									</a>
								</span> */}
								<NavDropdown className="notification"
									title={<i
										class="
								fa fa-regular fa-bell fa-lg
								d-inline
								badge
								favourite-icon 
							"
								  style={{color :'#ab9797'}}
										value="0"
									></i>}
								>
									{
										notifications.map(notification => (
											<NavDropdown.Item >
												
												<Notification notification={notification} />	
											</NavDropdown.Item>

										))
									}
								</NavDropdown>
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
									
									{(userInfo.isAdmin) ? (
										<div>

										<LinkContainer to='/admin/rentlist'>
											<NavDropdown.Item >
												Rent List
												
											</NavDropdown.Item>

										</LinkContainer>
										<LinkContainer to='/admin/selllist'>
											<NavDropdown.Item >
												Sell List
												
											</NavDropdown.Item>

										</LinkContainer>

										<LinkContainer to='/admin/userlist'>
											<NavDropdown.Item >
												Userlist
												
											</NavDropdown.Item>

										</LinkContainer>
										</div>

										
									) : null}
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
							<Link to="/rentout">Rent out</Link>
							<Link to="/rentout/mylist">My Rentout list</Link>
							<Link to="/buy">Buy</Link>
							<Link to="/sell">Sell</Link>
							<Link to="/sell/mylist">My Sell list</Link>
						</div>
					</nav>
					{/* <!-- sidenav ends --> */}
				</div>
			</header>
		</>
	);
}

export default Header;
