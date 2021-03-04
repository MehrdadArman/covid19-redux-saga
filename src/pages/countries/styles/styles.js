import { makeStyles } from "@material-ui/core/styles";
export const mainStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#3f51b5",
    paddingTop: `${theme.spacing(3)}px `,
  },
  avatar: {
    backgroundColor: "#000",
    width: "50px",
    height: "50px",
  },
  headerCard: {
    marginBottom: `${theme.spacing(3)}px `,

    padding: theme.spacing(2),
    boxShadow: "rgb(0 26 102 / 40%) 0px 5px 20px -12px",
    position: "relative",
  },
  globalBox: {
    boxShadow: "rgb(0 26 102 / 40%) 0px 5px 20px -12px",
    padding: "20px",
    borderRadius: 4,
    minHeight: "100px",
  },
}));
