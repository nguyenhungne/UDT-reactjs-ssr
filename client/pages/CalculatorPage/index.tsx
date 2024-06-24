import React, { useContext, useRef } from "react";
import { observer, MobXProviderContext } from "mobx-react";
import "./calculatorPage.scss";
import { KeyMap } from "./KeyMap";
import {OperationKey} from"../../enums/OperationKey"
const CalculatorPage = () => {
  const { calculatorStore } = useContext(MobXProviderContext);
  const { display, setDisplay, isClickInput, handleClickInput, resetDisplay, addDisplay,calculate  } = calculatorStore;
  const _resetDisplay = resetDisplay.bind(calculatorStore);
  const _addDisplay = addDisplay.bind(calculatorStore);
  const _calculate = calculate.bind(calculatorStore);
  const _handleClickInput = handleClickInput.bind(calculatorStore);
  const _setDisplay = setDisplay.bind(calculatorStore);
  const displayInput = useRef(null);
  return (
    <div className={"container"}>
      <div className={"wrapper"}>
        <button className={"button-top button-red"}></button>
        <button className={"button-top button-orange"}></button>
        <button className={"button-top button-green"}></button>
        <div className={"screen"}>
          {isClickInput ? <input ref={displayInput} type={"text"} className={"calculator-display"} onBlur={_handleClickInput} onChange={(e)=> _setDisplay(e.target.value)} value={display}/>:<div onClick={()=> _handleClickInput()} className={"calculator-display"}>{display}</div> }
          {/* <input type={"text"} className={"calculator-display"}/>
          <div className={"calculator-display"}>{display}</div> */}
        </div>
        <div className={"calculator-body"}>
          {/* reset button */}
          {KeyMap.map((key, index) => {
            if (key.name === "RESET") {
              if (display === "0") {
                return (
                  <button
                    className={`${key.className} calculator-button`}
                    key={index}
                  >
                    AC
                  </button>
                );
              } else {
                return (
                  <button
                  onClick={_resetDisplay}
                    className={`${key.className} calculator-button`}
                    key={index}
                  >
                    C
                  </button>
                );
              }
            }

            // equal button
            if (key.name === OperationKey.EQUAL) {
              return (
                <button
                onClick={_calculate}
                  className={`${key.className} calculator-button`}
                  key={index}
                >
                  =
                </button>
              );
            }
            // other buttons
            return (
              <button
              onClick={()=>{_addDisplay(key.name)}}
                className={`${key.className} calculator-button`}
                key={index}
              >
                {key.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default observer(CalculatorPage);
