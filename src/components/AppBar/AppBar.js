import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import AppBarMain from "@material-ui/core/AppBar";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    boxShadow: "0px 0px 80px rgba(0,0,0,0.1)",
    bottom: 0,
  },
  appBarMain: {
    boxShadow: "unset",
    top: "unset",
    bottom: 0,
  },
});

function AppBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState();

  return (
    <>
      <AppBarMain position="fixed" className={classes.appBarMain}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            props.history.push(`/${newValue}`);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            value={""}
            label="HomePage"
            icon={<LanguageOutlinedIcon />}
          />
          <BottomNavigationAction
            value={"countries"}
            label="Countries"
            icon={<FlagOutlinedIcon />}
          />
        </BottomNavigation>
      </AppBarMain>
    </>
  );
}

export default withRouter(AppBar);
