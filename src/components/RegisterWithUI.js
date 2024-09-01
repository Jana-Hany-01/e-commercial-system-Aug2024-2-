import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import React, { useState } from "react";
import useFormValidation from "../Custom Hooks/useFormValidation";
import useHandleSubmit from "../Custom Hooks/useHandleSubmit";

const RegisterWithUs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    id: 0,
    accessToken: "",
  });

  const {
    validateUserName,
    ValidateEmail,
    validatePassword,
    validateConfirmPassword,
    errors,
  } = useFormValidation();
  const handleSubmit = useHandleSubmit();

  const paperStyle = {
    width: 300,
    height: "80vh",
    marginTop: 50,
    padding: 20,
  };
  const avatarStyle = {
    backgroundColor: "#007bff",
    margin: "0px auto",
    marginTop: "15px",
  };
  const btnStyle = {
    backgroundColor: "#007bff",
    padding: "8px 0px",
    marginTop: 40,
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          const registerData = {
            username: user.name,
            email: user.email,
            password: user.password,
          };

          console.log(
            " ...user.name, ...user.email,...user.password",
            user.password
          );
          console.log(
            " in the handle submit  the ##RegisterData",
            registerData
          );
          handleSubmit(e, errors, registerData, "/register", setUser, "/");
        }}
      >
        <Grid align="center">
          <Paper elevation={4} style={paperStyle}>
            <Avatar style={avatarStyle}>
              <LocalMallOutlinedIcon />
            </Avatar>
            <h2>Register</h2>

            <Grid display="block" align="center" container>
              <Grid item>
                <TextField
                  style={{ marginBottom: 7 }}
                  name="userName"
                  label="username"
                  placeholder="user name "
                  value={user.name}
                  required
                  fullWidth
                  onChange={(e) => {
                    setUser({ ...user, name: e.target.value });
                  }}
                  onBlur={(e) => {
                    validateUserName(e.target.value);
                  }}
                  error={errors.userName}
                  helperText={errors.userName && `${errors.userName}`}
                />
              </Grid>
              <Grid item>
                <TextField
                  style={{ marginBottom: 7 }}
                  name="email"
                  label="email"
                  type="email"
                  placeholder="email"
                  value={user.email}
                  required
                  fullWidth
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                  onBlur={(e) => {
                    ValidateEmail(e.target.value);
                  }}
                  error={errors.email}
                  helperText={errors.email && `${errors.email}`}
                  // FormHelperTextProps={{
                  //   sx: {
                  //     marginBottom: "1px",
                  //   },
                  // }}
                />
              </Grid>
              <Grid item>
                <TextField
                  style={{ marginBottom: 7 }}
                  name="password"
                  label="password"
                  type="password"
                  placeholder="password"
                  value={user.password}
                  required
                  fullWidth
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                  onBlur={(e) => {
                    validatePassword(e.target.value);
                  }}
                  error={errors.password}
                  helperText={errors.password && `${errors.password}`}
                  // FormHelperTextProps={{
                  //   sx: {
                  //     marginBottom: "1px",
                  //   },
                  // }}
                />
              </Grid>
              <Grid item>
                <TextField
                  style={{ marginBottom: 7 }}
                  name="confirmPassword"
                  label="confirmPassword"
                  type="password"
                  placeholder="re-enter password"
                  value={user.confirmPassword}
                  required
                  fullWidth
                  onChange={(e) => {
                    setUser({ ...user, confirmPassword: e.target.value });
                  }}
                  onBlur={(e) => {
                    validateConfirmPassword(e.target.value, user.password);
                  }}
                  error={errors.confirmPassword}
                  helperText={
                    errors.confirmPassword && `${errors.confirmPassword}`
                  }
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={btnStyle}
            >
              <Typography style={{ fontSize: 17 }}>register </Typography>
            </Button>
          </Paper>
        </Grid>
      </form>
    </>
  );
};

export default RegisterWithUs;
