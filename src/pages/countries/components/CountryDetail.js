import React from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

// styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  accordionCollapse: {
    padding: "20px",
    flexDirection: "row",
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  spinner: {
    alignSelf: "center",
  },
}));

const CountryDetail = ({ country, loading, countryName }) => {
  const classes = useStyles();

  return (
    <div className={classes.accordionCollapse}>
      {loading ? (
        <>
          <div></div>
          <CircularProgress className={classes.spinner} color="primary" />
          <div></div>
        </>
      ) : (
        <>
          {country.hasOwnProperty(countryName) ? (
            <>
              <div>
                Confirmed:&nbsp;&nbsp;{country[countryName].confirmed.value}
              </div>
              <div>Deaths:&nbsp;&nbsp;{country[countryName].deaths.value}</div>
              <div>
                Recovered:&nbsp;&nbsp;{country[countryName].recovered.value}
              </div>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    country: state.countryStat.countryDetail,
    loading: state.countryStat.loading,
    errors: state.countryStat.error,
  };
};

export default connect(mapStateToProps)(CountryDetail);
