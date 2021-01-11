import React from "react";

const Footer = () => {
    return (
        <div>
            <div id="footer">
                <div className="container text-center">
                    <p>
                        Copyright { (new Date).getFullYear() } &copy; Alco Group{" "}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;