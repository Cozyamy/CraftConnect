import { Fragment } from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_LINKS } from "../../../assets/data";
import "./index.css";

export function Signup() {
	return (
        <Fragment>
            <section>
                <div>
                    <h1>Create Your Account</h1>
                    <p>Please enter your details to create your account</p>
                </div>
                <div>
                    <form>
                        <div>
                            <label>Full Name</label>
                            <input type="text" placeholder="<Enter your full name>" />
                        </div>
                        <div>
                            <label>Email Address</label>
                            <input type="text" placeholder="<Enter your email address>" />
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input type="text" placeholder="<Enter your phone number>" />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="text" placeholder="<Enter your Password>" />
                        </div>
                    </form>
                </div>
            </section>
        </Fragment>
    );
    }