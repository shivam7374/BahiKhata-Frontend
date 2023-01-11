import { useContext } from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../config";
import AuthContext from "../contexts/authContext";

import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
  } from "@material-ui/core";
  const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(20),
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },
    
    },
    btn :{
        textDecoration: "none",
        color: "blue",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        borderRadius:"1rem",
        "&:hover": {
        //  color: "yellow",
          borderBottom: "1px solid white",
        },
        padding: "5px"

    }
  }));
  

function Header() {
    const { authUser, logout } = useContext(AuthContext);
    const classes = useStyles();
    return (
        <AppBar position="static">
        <CssBaseline />
        <Toolbar>
            
          <Typography variant="h4" className={classes.logo}>
          बही-खाता
          </Typography>
            
          
              
              {authUser.user && (
                    <>
                        <Link to="/users" className={classes.link}>
                            <p>Users</p>
                        </Link>
                        <Link to="/" className={classes.link}>
                            <p>Create-Transaction</p>
                        </Link>

                        <Link to="/friends" className={classes.link}>
                            <p>Friends</p>
                        </Link>
                        <button
                          //  className="btn btn-primary {classes.link}"
                          className = {classes.btn}
                     //     className = "btn btn-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                logout();
                            }}
                        >
                            Logout
                        </button>
                        <Link className="link" to="/account">
                            <div className="header-profile-img-wrapper">
                                <img
                                    src={`${BACKEND_URL}${authUser.user.profileImage}`}
                                    alt={authUser.user.username}
                                    className="profile-img"
                                />
                            </div>
                        </Link>
                    </>
                )}
          
        </Toolbar>
      </AppBar>
        

        // <header className="header">
        //     <Link className="link" to="/">
        //         <h3>Bahi-Khata</h3>
        //     </Link>
        //     <nav className="nav-menus">
        //         {authUser.user && (
        //             <>
        //                 <Link to="/users" className="link nav-menu-link">
        //                     <p>Users</p>
        //                 </Link>

        //                 <Link to="/friends" className="link nav-menu-link">
        //                     <p>Friends</p>
        //                 </Link>
        //                 <button
        //                     className="btn btn-primary"
        //                     onClick={(e) => {
        //                         e.preventDefault();
        //                         logout();
        //                     }}
        //                 >
        //                     Logout
        //                 </button>
        //                 <Link className="link" to="/account">
        //                     <div className="header-profile-img-wrapper">
        //                         <img
        //                             src={`${BACKEND_URL}${authUser.user.profileImage}`}
        //                             alt={authUser.user.username}
        //                             className="profile-img"
        //                         />
        //                     </div>
        //                 </Link>
        //             </>
        //         )}
        //     </nav>
        // </header>
    );
}

export default Header;
