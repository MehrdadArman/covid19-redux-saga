import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";

// components
import CountriesList from "./components/CountriesList";

// action types
import { getGlobalStat } from "../../redux/actionType/actionType";

import { mainStyles } from "./styles/styles";

const Countries = ({ global, fetchGlobalStat, loading }) => {
  const retrievedObject = localStorage.getItem("userData");
  const userData = JSON.parse(retrievedObject);
  const classes = mainStyles();
  const { confirmed, death, recovered } = global;

  // const erros = props.erros;

  React.useEffect(() => {
    fetchGlobalStat();
  }, []);

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h3" align={"left"}>
          <Card className={classes.headerCard}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {userData.firstName[0]}
                </Avatar>
              }
              title={`${userData.firstName}  ${userData.lastName}`}
              subheader={new Date().toJSON().slice(0, 10).replace(/-/g, "/")}
            />
          </Card>
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card className={classes.globalBox}>
              {loading ? (
                <>
                  <Skeleton
                    animation="wave"
                    variant="circle"
                    width={40}
                    height={40}
                    style={{
                      marginBottom: 6,
                      display: "flex",
                      alignSelf: "center",
                    }}
                  />
                  <Skeleton animation="wave" height={50} width="100%" />
                </>
              ) : (
                <Typography variant="h6" align={"center"}>
                  Confirmed:&nbsp;&nbsp;{confirmed}
                </Typography>
              )}
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.globalBox}>
              {loading ? (
                <>
                  <Skeleton
                    animation="wave"
                    variant="circle"
                    width={40}
                    height={40}
                    style={{
                      marginBottom: 6,
                      display: "flex",
                      alignSelf: "center",
                    }}
                  />
                  <Skeleton animation="wave" height={50} width="100%" />
                </>
              ) : (
                <Typography variant="h6" align={"center"}>
                  Death:&nbsp;&nbsp;{death}
                </Typography>
              )}
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.globalBox}>
              {loading ? (
                <>
                  <Skeleton
                    animation="wave"
                    variant="circle"
                    width={40}
                    height={40}
                    style={{
                      marginBottom: 6,
                      display: "flex",
                      alignSelf: "center",
                    }}
                  />
                  <Skeleton animation="wave" height={50} width="100%" />
                </>
              ) : (
                <Typography variant="h6" align={"center"}>
                  Recovered:&nbsp;&nbsp;{recovered}
                </Typography>
              )}
            </Card>
          </Grid>
        </Grid>
        <CountriesList />
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    global: state.globalStat.global,
    loading: state.globalStat.loading,
    error: state.globalStat.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGlobalStat: () => {
      dispatch({ type: getGlobalStat });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
