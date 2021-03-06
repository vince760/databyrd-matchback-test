import React__default, { useContext, createElement } from "react";
import { createUseStyles, jss } from "react-jss";
import clsx from "clsx";
import Color from "color";

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var stepStyleDefaults = {
  activeBgColor: "#FFC300",
  activeTextColor: "#ffffff",
  completedBgColor: "#a10308",
  completedTextColor: "#ffffff",
  inactiveBgColor: "#e0e0e0",
  inactiveTextColor: "#ffffff",
  size: "2em",
  circleFontSize: "1rem",
  borderRadius: "50%",
};
var HOVER_COLOR_DEFAULT_RATIO = 0.15;
var ACTIVE_COLOR_DEFAULT_RATIO = 0.2;

var shadeOrTintColor = function shadeOrTintColor(colorString, ratio) {
  var color = Color(colorString);
  return color.isDark()
    ? color.darken(ratio).hex()
    : color.lighten(ratio).hex();
};

var useStepStyles = /*#__PURE__*/ createUseStyles({
  StepMain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  StepButton: function StepButton(props) {
    return {
      border: "none",
      margin: 0,
      padding: 0,
      cursor: "pointer",
      borderRadius: props.borderRadius,
      backgroundColor: props.inactiveBgColor,
      width: props.size,
      height: props.size,
      fontSize: "1em",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&.active": {
        backgroundColor: props.activeBgColor,
        "&:hover": {
          backgroundColor: shadeOrTintColor(
            props.activeBgColor,
            HOVER_COLOR_DEFAULT_RATIO
          ),
        },
        "&:active": {
          backgroundColor: shadeOrTintColor(
            props.activeBgColor,
            ACTIVE_COLOR_DEFAULT_RATIO
          ),
        },
      },
      "&.completed": {
        backgroundColor: props.completedBgColor,
        "&:hover": {
          backgroundColor: shadeOrTintColor(
            props.completedBgColor,
            HOVER_COLOR_DEFAULT_RATIO
          ),
        },
        "&:active": {
          backgroundColor: shadeOrTintColor(
            props.completedBgColor,
            ACTIVE_COLOR_DEFAULT_RATIO
          ),
        },
      },
    };
  },
  StepButtonContent: function StepButtonContent(props) {
    return {
      color: props.inactiveTextColor,
      fontSize: props.circleFontSize,
      fontVariantNumeric: "tabular-nums",
      "&.active": {
        color: props.activeTextColor,
      },
      "&.completed": {
        color: props.completedTextColor,
      },
    };
  },
});

var StepperContext = /*#__PURE__*/ React__default.createContext({
  activeStep: 0,
  hideConnectors: false,
  nonLinear: false,
  connectorStateColors: false,
});

if (process.env.NODE_ENV !== "production") {
  StepperContext.displayName = "StepperContext";
}

var connectorStyleDefaults = {
  disabledColor: "#bdbdbd",
  activeColor: "#ed1d24",
  completedColor: "#a10308",
  size: 1,
  style: "solid",
};
var useConnectorStyles = /*#__PURE__*/ createUseStyles({
  ConnectorContainer: function ConnectorContainer(props) {
    return {
      top: "calc((" + props.stepSize + " - " + props.size + ") / 2)",
      left: "calc(-50% + " + props.stepSize + " - 8px)",
      right: "calc(50% + " + props.stepSize + " - 8px)",
      position: "absolute",
    };
  },
  Connector: function Connector(props) {
    return {
      borderTopStyle: props.style,
      borderTopWidth: props.size,
      borderColor: props.disabledColor,
      display: "block",
      "&.completed": {
        borderColor: props.completedColor,
      },
      "&.active": {
        borderColor: props.activeColor,
      },
    };
  },
});

var convertNumericToPixel = function convertNumericToPixel(object, property) {
  if (typeof object[property] === "number") {
    object[property] = object[property] + "px";
  }
};

var StepContext = /*#__PURE__*/ React__default.createContext({
  completed: false,
  active: false,
  disabled: false,
  index: 0,
});

if (process.env.NODE_ENV !== "production") {
  StepContext.displayName = "StepContext";
}

var Connector = function Connector() {
  var _React$useContext = React__default.useContext(StepperContext),
    connectorStateColors = _React$useContext.connectorStateColors,
    connectorStyleConfig = _React$useContext.connectorStyleConfig;

  var _React$useContext2 = React__default.useContext(StepContext),
    completed = _React$useContext2.completed,
    active = _React$useContext2.active,
    stepSize = _React$useContext2.stepSize;

  var connectorStyle = _extends(
    {},
    connectorStyleDefaults,
    connectorStyleConfig,
    {
      stepSize: stepSize,
    }
  );

  convertNumericToPixel(connectorStyle, "stepSize");
  convertNumericToPixel(connectorStyle, "size");
  var classes = useConnectorStyles(connectorStyle);
  return React__default.createElement(
    "div",
    {
      className: classes.ConnectorContainer,
    },
    React__default.createElement("span", {
      className: clsx(
        classes.Connector,
        {
          completed: completed && connectorStateColors,
        },
        {
          active: active && connectorStateColors,
        }
      ),
    })
  );
};

var _excluded = ["children", "contentClasses"];

var StepButton = function StepButton(_ref) {
  var children = _ref.children,
    contentClasses = _ref.contentClasses,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _React$useContext = React__default.useContext(StepContext),
    completed = _React$useContext.completed,
    disabled = _React$useContext.disabled,
    index = _React$useContext.index;

  return React__default.createElement(
    "button",
    Object.assign(
      {
        disabled: disabled,
      },
      rest
    ),
    React__default.createElement(
      "span",
      {
        className: clsx(
          contentClasses,
          {
            active: !disabled && !completed,
          },
          {
            completed: completed,
          }
        ),
      },
      
      // children || index + 1
    )
  );
};

var useStepLabelStyles = /*#__PURE__*/ createUseStyles({
  LabelContainer: function LabelContainer(props) {
    return {
      width: "100%",
      fontSize: props.fontSize || "0.875rem",
      fontWeight: 400,
      lineHeight: 1.4,
    };
  },
  Label: function Label(props) {
    return {
      display: "block",
      marginTop: 16,
      textAlign: "center",
      fontWeight: props.fontWeight || 500,
    };
  },
});

var StepLabel = function StepLabel(_ref) {
  var children = _ref.children,
    fontSize = _ref.fontSize,
    fontWeight = _ref.fontWeight;
  var classes = useStepLabelStyles({
    fontSize: fontSize,
    fontWeight: fontWeight,
  });
  return React__default.createElement(
    "div",
    {
      className: classes.LabelContainer,
    },
    React__default.createElement(
      "span",
      {
        className: classes.Label,
      },
      children
    )
  );
};

var _excluded$1 = [
  "children",
  "label",
  "styleConfig",
  "completed",
  "active",
  "disabled",
  "className",
  "index",
];

var Step = function Step(_ref) {
  var children = _ref.children,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? "" : _ref$label,
    styleConfig = _ref.styleConfig,
    completedProp = _ref.completed,
    activeProp = _ref.active,
    disabledProp = _ref.disabled,
    className = _ref.className,
    _ref$index = _ref.index,
    index = _ref$index === void 0 ? 0 : _ref$index,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  var _React$useContext = useContext(StepperContext),
    activeStep = _React$useContext.activeStep,
    hideConnectors = _React$useContext.hideConnectors,
    nonLinear = _React$useContext.nonLinear;

  var _activeProp = activeProp,
    active = _activeProp === void 0 ? false : _activeProp,
    _completedProp = completedProp,
    completed = _completedProp === void 0 ? false : _completedProp,
    _disabledProp = disabledProp,
    disabled = _disabledProp === void 0 ? false : _disabledProp;

  if (activeStep === index) {
    active = activeProp !== undefined ? activeProp : true;
  } else if (!nonLinear && activeStep > index && !activeProp && !disabledProp) {
    completed = completedProp !== undefined ? completedProp : true;
  } else if (
    !nonLinear &&
    activeStep < index &&
    !activeProp &&
    !completedProp
  ) {
    disabled = disabledProp !== undefined ? disabledProp : true;
  }

  var stepStyleProps = _extends({}, styleConfig, {
    completed: completed && !disabled,
    active: active || !disabled,
  });

  var classes = useStepStyles(
    _extends(
      {},
      stepStyleDefaults,
      stepStyleProps.size &&
        !stepStyleProps.circleFontSize && {
          circleFontSize: "calc(" + stepStyleProps.size + " / 2)",
        },
      stepStyleProps
    )
  );
  var contextValue = {
    completed: completed,
    active: active,
    disabled: disabled,
    index: index,
    stepSize: (styleConfig && styleConfig.size) || stepStyleDefaults.size,
  };
  return createElement(
    StepContext.Provider,
    {
      value: contextValue,
    },
    index !== 0 &&
      ((hideConnectors === "inactive" && (active || completed)) ||
        (hideConnectors !== true && hideConnectors !== "inactive")) &&
      createElement(Connector, null),
    createElement(
      "div",
      {
        className: classes.StepMain,
      },
      createElement(
        StepButton,
        Object.assign(
          {
            className: clsx(
              classes.StepButton,
              {
                active: !disabled && !completed,
              },
              {
                completed: completed,
              },
              className
            ),
            contentClasses: classes.StepButtonContent,
          },
          rest
        ),
        children || index + 1
      ),
      label &&
        createElement(
          StepLabel,
          {
            fontSize: styleConfig == null ? void 0 : styleConfig.labelFontSize,
            fontWeight: styleConfig == null ? void 0 : styleConfig.fontWeight,
          },
          label
        )
    )
  );
};

var useStepperStyles = /*#__PURE__*/ createUseStyles({
  StepperContainer: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    padding: 24,
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  StepContainer: {
    flex: 1,
    position: "relative",
    paddingLeft: 8,
    paddingRight: 8,
  },
});

var _excluded$2 = [
  "steps",
  "children",
  "connectorStateColors",
  "className",
  "stepClassName",
  "activeStep",
  "styleConfig",
  "connectorStyleConfig",
  "hideConnectors",
  "nonLinear",
];

var generateId = function generateId(rule) {
  return "RFS-" + rule.key;
};

var createGenerateId = function createGenerateId() {
  return generateId;
};

jss.setup({
  createGenerateId: createGenerateId,
});

var Stepper = function Stepper(_ref) {
  var steps = _ref.steps,
    children = _ref.children,
    _ref$connectorStateCo = _ref.connectorStateColors,
    connectorStateColors =
      _ref$connectorStateCo === void 0 ? false : _ref$connectorStateCo,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$stepClassName = _ref.stepClassName,
    stepClassName = _ref$stepClassName === void 0 ? "" : _ref$stepClassName,
    _ref$activeStep = _ref.activeStep,
    activeStep = _ref$activeStep === void 0 ? 0 : _ref$activeStep,
    styleConfig = _ref.styleConfig,
    connectorStyleConfig = _ref.connectorStyleConfig,
    _ref$hideConnectors = _ref.hideConnectors,
    hideConnectors =
      _ref$hideConnectors === void 0 ? false : _ref$hideConnectors,
    _ref$nonLinear = _ref.nonLinear,
    nonLinear = _ref$nonLinear === void 0 ? false : _ref$nonLinear,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  var classes = useStepperStyles();
  var contextValue = React__default.useMemo(
    function () {
      return {
        activeStep: activeStep,
        hideConnectors: hideConnectors,
        nonLinear: nonLinear,
        connectorStateColors: connectorStateColors && !nonLinear,
        connectorStyleConfig: connectorStyleConfig,
      };
    },
    [
      activeStep,
      hideConnectors,
      nonLinear,
      connectorStateColors,
      connectorStyleConfig,
    ]
  );
  var useStepsProp = steps instanceof Array && steps.length > 0;
  var stepsArray = useStepsProp
    ? steps
    : React__default.Children.toArray(children);
  var stepsToRender = stepsArray.map(function (step, index) {
    if (!useStepsProp && !React__default.isValidElement(step)) return null;
    var stepProps = {
      className: stepClassName,
      styleConfig: styleConfig,
      index: index,
    };
    return React__default.createElement(
      "div",
      {
        key: index,
        className: classes.StepContainer,
      },
      React__default.isValidElement(step)
        ? React__default.cloneElement(step, _extends({}, stepProps, step.props))
        : React__default.createElement(Step, Object.assign({}, stepProps, step))
    );
  });
  return React__default.createElement(
    StepperContext.Provider,
    {
      value: contextValue,
    },
    React__default.createElement(
      "div",
      Object.assign(
        {
          className: clsx(classes.StepperContainer, className),
        },
        rest
      ),
      stepsToRender 
      
    )
  );
};

export { Step, Stepper };
//# sourceMappingURL=react-form-stepper.esm.js.map
