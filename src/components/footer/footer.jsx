import React, { Component } from "react";

export class Footer extends Component {
    render() {
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
}

export default Footer;