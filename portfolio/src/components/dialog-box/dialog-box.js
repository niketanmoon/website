import React, { useState, useCallback, createContext, useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import MuiDialogActions from "@mui/material/DialogActions";
import { Dialog as MDialog, Typography, IconButton } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import clsx from "clsx";
import Button from "../button/button";

const Context = createContext({});

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      color: "white!important",
    },
    error: {
      backgroundColor: theme.palette["error"]?.main,
    },
    success: {
      backgroundColor: theme.palette["success"]?.main,
    },
    info: {
      backgroundColor: theme.palette["info"]?.main,
    },
    title: {
      display: "flex",
      alignItems: "center",
    },
    content: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      color: "white!important",
    },
  })
);

const DEFAULT_PROPS = {
  successBtnType: "error",
  titleBgType: "info",
  title: "",
  titleIcon: null,
  message: "",
  callbackFn: () => null,
  acceptText: "Confirm",
  cancelText: "Cancel",
};

export const DialogBoxProvider = (props) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [dialogProps, setDialogProps] = useState(DEFAULT_PROPS);

  const openDialogBox = (
    props = {
      successBtnType: "error",
      titleBgType: "info",
      title: "",
      titleIcon: null,
      message: "",
      callbackFn: () => null,
      acceptText: "Confirm",
      cancelText: "Cancel",
    }
  ) => {
    setDialogProps({ ...DEFAULT_PROPS, ...props });
    setIsOpen(true);
  };

  const handleConfirm = useCallback(() => {
    if (dialogProps.callbackFn) dialogProps.callbackFn(true);
    setIsOpen(false);
  }, [dialogProps]);

  const handleCancel = useCallback(() => {
    if (dialogProps.callbackFn) dialogProps.callbackFn(false);
    setIsOpen(false);
  }, [dialogProps]);

  return (
    <Context.Provider value={{ openDialogBox }}>
      <MDialog open={isOpen}>
        <MuiDialogTitle
          disableTypography
          className={clsx(classes.root, classes[dialogProps.titleBgType])}
        >
          {dialogProps.titleIcon}
          <Typography>{dialogProps.title}</Typography>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleCancel}
          >
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        <MuiDialogContent
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: dialogProps.message }}
        ></MuiDialogContent>
        <MuiDialogActions>
          {dialogProps.cancelText ? (
            <Button onClick={handleCancel} variant="contained">
              {dialogProps.cancelText}
            </Button>
          ) : null}

          <Button
            onClick={handleConfirm}
            variant="contained"
            color={dialogProps.type}
          >
            {dialogProps.acceptText}
          </Button>
        </MuiDialogActions>
      </MDialog>
      {props.children}
    </Context.Provider>
  );
};

export const useDialogBox = () => {
  const { openDialogBox } = useContext(Context);
  return {
    getDialogResult: (options) =>
      new Promise((resolve, reject) =>
        !openDialogBox
          ? reject("No provider context found")
          : openDialogBox({ callbackFn: resolve, ...options })
      ),
  };
};

export default DialogBoxProvider;
