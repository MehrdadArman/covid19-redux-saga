import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Formik, Field, Form } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import { formSchema } from "./components/Schemas";
import CircularProgress from "@material-ui/core/CircularProgress";
import { mainStyles } from "./styles/styles";

import "./styles/styles.css";

const HomePage = (props) => {
  const classes = mainStyles();
  return (
    <div className={"root"}>
      <Container maxWidth="md">
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" align={"left"}>
                Sign In
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                }}
                onSubmit={async (values, actions) => {
                  await new Promise((resolve) => setTimeout(resolve, 2000));
                  localStorage.setItem(
                    "userData",
                    JSON.stringify({
                      firstName: values.firstName,
                      lastName: values.lastName,
                    })
                  );
                  props.history.push("/countries");
                }}
                validationSchema={formSchema}
              >
                {({ isSubmitting, isValid, errors, touched }) => (
                  <Form>
                    <Field
                      name="firstName"
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          helperText={
                            errors.firstName &&
                            touched.firstName &&
                            errors.firstName
                          }
                          error={isValid ? false : true}
                          label="First Name"
                          variant={"outlined"}
                          style={{ marginBottom: "20px" }}
                          {...field}
                        />
                      )}
                    />
                    <Field
                      name="lastName"
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          helperText={
                            errors.lastName &&
                            touched.lastName &&
                            errors.lastName
                          }
                          error={isValid ? false : true}
                          label="Last Name"
                          variant={"outlined"}
                          {...field}
                        />
                      )}
                    />

                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={!isValid}
                      fullWidth
                      style={{ marginTop: "20px" }}
                    >
                      {isSubmitting && (
                        <CircularProgress
                          style={{ marginRight: "10px" }}
                          color={"#fff"}
                          size={14}
                        />
                      )}
                      <span>Save</span>
                    </Button>
                  </Form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default HomePage;
