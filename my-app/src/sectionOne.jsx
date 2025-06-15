import React from "react";

function sectionOne() {
    return (
        <section className="container">
        <h2 className="header">OUR FEATURES</h2>
        <div className="features">
            <div className="card">
                <span><i className="ri-money-dollar-box-line"></i></span>
                <h4>Free Tutorials</h4>
                <p>
                    My tutorials in my channel "AsmrProg" are free and you don't need to pay anything.
                </p>
                <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
            </div>
            <div className="card">
                <span><i className="ri-bug-line"></i></span>
                <h4>Fix Your Bugs</h4>
                <p>
                    You have any problem in your codes? Tell me, i will help you fix it.
                </p>
                <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
            </div>
            <div className="card">
                <span><i className="ri-history-line"></i></span>
                <h4>On Time Videos</h4>
                <p>
                    We have video each 4 days, So check channel every 4 days to watch it!
                </p>
                <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
            </div>
            <div className="card">
                <span><i className="ri-shake-hands-line"></i></span>
                <h4>Cooperation</h4>
                <p>
                    You want we worrk together? Write email to us, we will read it.
                </p>
                <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
            </div>
        </div>
    </section>
    )
}

export default sectionOne