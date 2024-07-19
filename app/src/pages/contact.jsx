import { useState } from "react";
import "./styles/about.css";

function Contact() {
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    function showInfo() {
        setIsInfoVisible(true);
    }
    function getInfo() {
        if (isInfoVisible) {
            return (
                <div className="">
                    <p>Email: mrs.nkya@gmail.com </p>
                    <p> Phone: (555)555-5555</p>
                </div>
            );
        } else {
            return (
                <p className="alert alert-light">Click the button to view my info</p>
            );
        }
    }

    return (
        <div className="about page">
            <h2>Christina Nkya</h2>
            {getInfo()}

            {isInfoVisible ? (
                ""
            ) : (
                <button className="btn btn-sm btn-dark" onClick={showInfo}>Click here</button>
            )}
        </div>
    );
}
export default Contact;