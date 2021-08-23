import React from "react";
import { Link } from "gatsby";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            <div className="icon fa-envelope-o">{label}</div>
        </Link>
    );
};

export default ButtonMailto;