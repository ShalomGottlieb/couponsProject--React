import {  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { useEffect, useState } from "react";
import {  useHistory } from "react-router-dom";
import { logoutUser } from "../../redux/authState";
import store from "../../redux/store";
import PersonIcon from '@mui/icons-material/Person';
import "./header.css";
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Header(): JSX.Element {
    const [ClientType, setType] = useState(store.getState().authState.userDetails.clientType);
    const [openLogoutBox, setOpenLogoutBox] = useState(false);

    useEffect(() => {
        const unsubscribeMe = store.subscribe(() => setType(store.getState().authState.userDetails.clientType));
        return () => unsubscribeMe();
    }, []);

    let history = useHistory();

    function handleLogoutBox() {
        setOpenLogoutBox(!openLogoutBox);
    }


    function logout() {
        setOpenLogoutBox(!openLogoutBox);
        store.dispatch(logoutUser())
        console.log(store.getState().authState.userDetails.clientType);
        home();
    }

    function logIn() {
        history.push("/login");
    }

    function home() {
        history.push("/guest/main");
    }

    function privateArea() {
        history.push("/private/screen");
    }

    function about() {
        history.push("/about");
    }


    return (
        <div className="header">
            <div className="title">
                <h1>BETTER LIFE</h1>
                <h3>BETTER LIFE IN CHEEPER PRICE</h3>
            </div>

            <div className="buttons">
                <div>
                <Button startIcon={<LoginIcon />} onClick={!ClientType?logIn:handleLogoutBox}></Button>
                    <Dialog
                        open={openLogoutBox}
                        onClose={handleLogoutBox}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Sure you want to logout?"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                you will go to home page
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleLogoutBox}>NO, Go Back</Button>
                            <Button onClick={logout} autoFocus>YES</Button>
                        </DialogActions>
                    </Dialog>
                    <Button startIcon={<PersonIcon />} onClick={privateArea} ></Button>
                    <Button startIcon={<HomeIcon />} onClick={home} ></Button>
                    <Button startIcon={<InfoOutlinedIcon />} onClick={about} ></Button>
                </div>

            </div>
        </div>
    );
}

export default Header;
