import React, {useEffect, useContext} from "react";
import "./historyPage.scss";
import { observer, MobXProviderContext } from "mobx-react";

const HistoryPage = () => {
    const { historyStore } = useContext(MobXProviderContext);
    // const [historyCalculator, setHistoryCalculator] = useState<Array<string>>([]);
    const { historyCalculator, setHistoryCalculator } = historyStore;
    const _setHistoryCalculator = setHistoryCalculator.bind(historyStore);

    useEffect(() => {
        const results = localStorage.getItem("results");
        _setHistoryCalculator(results ? JSON.parse(results) : []);
    }, []);


    return (
        <div className={"container"}>
            <h1 className={"tittle"}>History Page</h1>
            {historyCalculator.map((item:string, index: number) => {
                return (
                    <div key={index} className={"history-item"}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
};


export default observer(HistoryPage);