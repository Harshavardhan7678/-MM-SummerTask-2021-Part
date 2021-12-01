import { useEffect } from "react";
import Sawo from "sawo";

const SawoLogin = () => {
    useEffect(() => {
        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: 'sawo-container',
            // can be one of 'email' or 'phone_number_sms'
            identifierType: 'phone_number_sms',
            // Add the API key copied from 5th step
            apiKey: 'c1fa17f2-c47c-4f0b-a4ce-5efc2c7f4273',
            // Add a callback here to handle the payload sent by sdk
            onSuccess: payload => {
                // you can use this payload for your purpose
                alert("Login has been successfull. ")
            },
        }
        let sawo = new Sawo(config)
        sawo.showForm()
    }, [])
    return (
        <div>
            <div id="sawo-container"
                style={{
                    height: "800px",
                    marginLeft: "550px",
                    width: "400px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            ></div>
        </div>
    )

}

export default SawoLogin;