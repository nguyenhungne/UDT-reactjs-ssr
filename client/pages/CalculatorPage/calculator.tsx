import React, { useContext } from "react";
import { observer, MobXProviderContext } from "mobx-react";
import "./calculatorPage.scss";
import { KeyMap } from "./keymap";
import {OperationKey} from"../../enums/OperationKey"
const CalculatorPage = () => {
  const { calculatorStore } = useContext(MobXProviderContext);
  const { display, resetDisplay, addDisplay,calculate  } = calculatorStore;
  const _resetDisplay = resetDisplay.bind(calculatorStore);
  const _addDisplay = addDisplay.bind(calculatorStore);
  const _calculate = calculate.bind(calculatorStore);

  return (
    <div className={"container"}>
      <div className={"wrapper"}>
        <button className={"button-top button-red"}></button>
        <button className={"button-top button-orange"}></button>
        <button className={"button-top button-green"}></button>
        <div className={"screen"}>
          <div className={"calculator-display"}>{display}</div>
        </div>
        <div className={"calculator-body"}>
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

            // if (key.name === KeyMap[1].name) {
            //   return (
            //     <button
            //     onClick={}
            //       className={`${key.className} calculator-button`}
            //       key={index}
            //     >
            //       +/-
            //     </button>
            //   );
            // }

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
