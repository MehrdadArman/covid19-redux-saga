import React, { useEffect, useState, useRef } from "react";
import Skeleton from "@material-ui/lab/Skeleton";

// action types
import {
  getCountriesList,
  getCountryStat,
} from "../../../redux/actionType/actionType";

// connect to redux
import { connect } from "react-redux";

// styles
import { makeStyles } from "@material-ui/core/styles";

// material components
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// page components
import CountryDetail from "./CountryDetail";

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "30px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionItem: {
    boxShadow: "rgb(0 26 102 / 40%) 0px 5px 20px -12px",
    padding: "20px",
    borderRadius: 4,
  },
}));

const CountriesList = ({
  countryList,
  loading,
  fetchCountriesList,
  fetchCountryDetail,
}) => {
  // hooks
  const [expanded, setExpanded] = useState();
  const [countryName, setCountryName] = useState();

  // refs
  const expandedeRef = useRef();
  expandedeRef.current = expanded;

  // handle collapse accordion
  const handleChange = (newExpanded, name) => {
    setCountryName(name);
    setExpanded(newExpanded);
  };

  const classes = useStyles();

  useEffect(() => {
    fetchCountriesList();
  }, []);

  useEffect(() => {
    fetchCountryDetail(countryName);
  }, [expandedeRef.current]);

  return (
    <>
      <div className={classes.root}>
        {!loading ? (
          <>
            {countryList?.map((item, index) => {
              return (
                <div key={index}>
                  <Accordion
                    square
                    style={{ margin: "10px 0px" }}
                    expanded={
                      expanded === `panel${item.iso3}a-header` ? true : false
                    }
                    onChange={() => {
                      handleChange(`panel${item.iso3}a-header`, item.name);
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${item.iso3}a-content`}
                      id={`panel${item.iso3}a-header`}
                    >
                      <Typography className={classes.heading}>
                        {item.name}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <CountryDetail countryName={item.name} />
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            })}
          </>
        ) : (
          [1, 2, 3, 4, 5, 6, 7].map((item) => {
            return (
              <div key={item}>
                <Skeleton
                  animation="wave"
                  height={70}
                  variant={"text"}
                  width="100%"
                  style={{
                    marginBottom: 3,
                    display: "flex",
                    alignSelf: "center",
                  }}
                />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    countryList: state.countriesList.list,
    loading: state.countriesList.loading,
    error: state.countriesList.error,

    loadingCountryDetail: state.countryStat.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountriesList: () => {
      dispatch({ type: getCountriesList });
    },
    fetchCountryDetail: (countryName) => {
      dispatch({ type: getCountryStat, countryName: countryName });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);
