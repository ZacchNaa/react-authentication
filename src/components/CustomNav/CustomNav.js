import React from "react";
import { Nav } from "react-bootstrap";
// import { useAuth } from "../../contexts/AuthContext";
import "./CustomNav.css";

export default function CustomNav() {
	// get current user
	// const { currentUser, logout } = useAuth();
	return (
		<Nav>
			<Nav.Item>
				<Nav.Link eventKey="1" href="#/home">
					devchallenges
				</Nav.Link>
			</Nav.Item>
			
			<h4 className="ui header">
				<i className="trophy icon"></i>
				{/* <img className="ui avatar image" src="" /> */}
				<div className="content">
					Trending repos
					<div className="ui inline dropdown">
						<div className="text">today</div>
						<i className="dropdown icon"></i>
						<div className="menu">
							<div className="header">Adjust time span</div>
							<div className="active item" data-text="today">
								Today
							</div>
							<div className="item" data-text="this week">
								This Week
							</div>
							<div className="item" data-text="this month">
								This Month
							</div>
						</div>
					</div>
				</div>
			</h4>
		</Nav>
	);
}
