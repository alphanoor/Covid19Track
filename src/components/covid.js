import React, { useEffect, useState } from "react";

const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch("https://api.covid19india.org/data.json");
            const actualdata = await res.json();
            console.log(actualdata.statewise[0]);
            setData(actualdata.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
            <section>
                <span>
                    Hello,Hope you are well!{"\n"}
                    <br />
                    STAY HOME ! STAY SAFE!
                </span>
                <h1>LIVE</h1>
                <h2> COVID-19 LIVE TRACKER</h2>
                <ul>
                    <li className="cases">
                        <div className="case_main">
                            <div className="case_inner">
                                <p className="case_name">
                                    <span>TOTAL</span>
                                    Active
                                </p>
                                <p className="total">{data.active}</p>
                            </div>
                        </div>
                    </li>
                    <li className="cases">
                        <div className="case_main">
                            <div className="case_inner">
                                <p className="case_name">
                                    <span> Total</span>
                                    Recovered
                                </p>
                                <p className="total">{data.recovered}</p>
                            </div>
                        </div>
                    </li>
                    <li className="cases">
                        <div className="case_main">
                            <div className="case_inner">
                                <p className="case_name">
                                    <span>OUR</span>
                                    Country
                                </p>
                                <p className="total">India</p>
                            </div>
                        </div>
                    </li>
                    <li className="cases">
                        <div className="case_main">
                            <div className="case_inner">
                                <p className="case_name">
                                    <span>OUR</span>
                                    Country
                                </p>
                                <p className="total">India</p>
                            </div>
                        </div>
                    </li>
                    <li className="cases">
                        <div className="case_main">
                            <div className="case_inner">
                                <p className="case_name">
                                    <span>OUR</span>
                                    Country
                                </p>
                                <p className="total">India</p>
                            </div>
                        </div>
                    </li>
                    <li className="cases">
                        <div className="case_main">
                            <div className="case_inner">
                                <p className="case_name">
                                    <span>OUR</span>
                                    Country
                                </p>
                                <p className="total">India</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    );
};
export default Covid;
