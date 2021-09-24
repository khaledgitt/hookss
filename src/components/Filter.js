import React from "react";
import ReactStars from "react-rating-stars-component";

function Filter({ filterText, filterRate }) {
    return (
        <div className="starplusinput">
            <div className="nav-rate">
                <ReactStars
                    name="rate"
                    className="reactstars"
                    starCount={5}
                    size={35}
                    activeColor="#0097a7"
                    onChange={(newRating) => filterRate(newRating)}
                />
            </div>
            <h1> Elbo7 Movies</h1>
            <div className="nav-search">
                <input
                    type="text"
                    placeholder="Search"
                    className="inputS"
                    onChange={(e) => filterText(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Filter;