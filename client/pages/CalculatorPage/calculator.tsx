import React from 'react';
import { observer } from 'mobx-react';
import './calculatorPage.scss';
import { KeyMap } from './keymap';
const CalculatorPage = () => {
  return (
    <div className={'container'}>
      <div className={'wrapper'}>
          <button className={'button-top button-red'}></button>
          <button className={'button-top button-orange'}></button>
          <button className={'button-top button-green'}></button>
        <div className={'screen'}>
          {/* input */}
          <div className={"calculator-display"}>0</div>
        </div>
        <div className={"calculator-body"} >
                {KeyMap.map((key, index) => {

                    if (key.name === 'RESET') {
                        //if (input)
                        if (true) {
                            return (
                                <button className={`${key.className} calculator-button`} key={index}>
                                    AC
                                  </button>
                                );
                            } else {
                            return (
                                <button className={`${key.className} calculator-button`} key={index}>
                                  C
                                </button>
                              );
                        }
                    }

                return (
                    <button className={`${key.className} calculator-button`} key={index}>
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
