import "./LoginFC.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import LoginDetails from "../../model/LoginDetails";
import store from "../../redux/store";
import { Typography, TextField, Select, MenuItem, ButtonGroup, Button } from "@material-ui/core";
import { loginAxios } from "../../axios/GeneralAxiosService";

function LoginFC(): JSX.Element {
    const { register, handleSubmit, setError, formState: { errors } } = useForm<LoginDetails>();
    const history = useHistory();

    async function send(loginDetails: LoginDetails) {
        console.log(loginDetails.clientType);
        await loginAxios(loginDetails);
        if (store.getState().authState.userDetails.clientType != "") { history.push("/private/screen") }
    }




    return (
        <div className="LoginFC">

            <form onSubmit={handleSubmit(send)}>
                <Typography variant="h4" className="HeadLine">Sign In</Typography><br />
                <TextField label="email" variant="outlined"
                    {...register("email", {
                        required: { value: true, message: "field is required" }, pattern: {
                            value: /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Invalid Email'
                        }
                    })} />
                <span className="errors" > {errors.email && <p>{errors.email.message}</p>}</span>
                <br /><br />
                <TextField label="password" variant="outlined" type="password"
                    {...register("password", { required: true, minLength: 3, maxLength: 10 })} />
                <br /><br />
                select user type <br />
                <Select style={{ width: 250 }} defaultValue="Customers"/*"select user type"*/ {...register("clientType", { required: true })}>
                    <MenuItem id="1" value="Administrator">System Administrator</MenuItem>
                    <MenuItem id="2" value="Companies">Company</MenuItem>
                    <MenuItem id="3" value="Customers">Client</MenuItem>
                </Select>
                <br /><br />

                <ButtonGroup variant="contained" >
                    <Button type="submit" color="primary" > LOGIN </Button>
                </ButtonGroup>

            </form>

        </div>
    );
}

export default LoginFC;

