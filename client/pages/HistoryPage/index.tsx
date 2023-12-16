import React, {useEffect, useState} from "react";
import "./historyPage.scss";

const HistoryPage = () => {
    const [historyCalculator, setHistoryCalculator] = useState<Array<string>>([]);
    useEffect(() => {
        const results = localStorage.getItem("results");
        setHistoryCalculator(results ? JSON.parse(results) : []);
    }, []);


    return (
        <div className={"wrapper"}>
            <h1 className={"tittle"}>History Page</h1>
            {historyCalculator.map((item, index) => {
                return (
                    <div key={index} className={"history-item"}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
};

export default HistoryPage;