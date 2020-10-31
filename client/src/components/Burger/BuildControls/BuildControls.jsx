import React from "react";
import classes from "./buildControls.module.css";
import BuildControl from "./BuildControl/BuildControl.jsx";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {controls.map((control) => {
        return <BuildControl key={control.label} label={control.label} />;
      })}
    </div>
  );
};

export default buildControls;
