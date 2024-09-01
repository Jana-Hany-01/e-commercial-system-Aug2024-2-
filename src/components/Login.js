import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFormValidation from "../Custom Hooks/useFormValidation";
import useHandleSubmit from "../Custom Hooks/useHandleSubmit";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    id: 0,
    accessToken: "",
  });

  const { ValidateEmail, validatePassword, errors } = useFormValidation();
  const handleSubmit = useHandleSubmit();

  const paperStyle = {
    padding: "20px",
    height: "60vh",
    width: 280,
    margin: "50px auto",
  };
  const avatarStyle = { backgroundColor: "#007bff" };
  const btnStyle = {
    backgroundColor: "#007bff",
    padding: "8px 0px",
    marginBottom: "10px",
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, errors, user, "/login", setUser, "/");
      }}
    >
      <Grid align="center">
        <Paper elevation={4} style={paperStyle}>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Login</h2>

          <TextField
            label="email "
            placeholder="email "
            required
            fullWidth
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            onBlur={(e) => {
              ValidateEmail(e.target.value);
            }}
            error={errors.userName}
            helperText={errors.userName && `${errors.userName}`}
          />

          <TextField
            label="password"
            placeholder="password"
            required
            type="password"
            fullWidth
            onChange={(e) => {
              setUser({ ...user, ["password"]: e.target.value });
            }}
            onBlur={(e) => {
              validatePassword(e.target.value);
            }}
            error={errors.password}
            helperText={errors.password && `${errors.password}`}
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Remember me "
            style={{ marginRight: "125px" }}
          />
          <Button type="submit" variant="contained" fullWidth style={btnStyle}>
            Login
          </Button>
          <Typography variant="body2" component="h6" gutterBottom>
            <Link href="#">Forgot Password?</Link>
          </Typography>
          <Typography variant="body2" component="h6">
            Don't have an account?<Link href="/register">Signup</Link>
          </Typography>
        </Paper>
      </Grid>
      {/* <div>
      <p>Email:</p>{user.email}
       <p>Password: </p>  {user.password}
        </div> */}
    </form>
  );
};
export default Login;
