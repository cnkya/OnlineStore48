import { useState } from "react";
import "./styles/about.css";

function About() {
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
                <p className="alert alert-info">Click the button to view my info</p>
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
                <button onClick={showInfo}>Click to view Info</button>
            )}
        </div>
    );
}
export default About;
