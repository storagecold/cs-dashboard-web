import React, {useState, useEffect} from "react";
//import ".././App.css";
import Axios from "axios";

function AddColdStorage() {
    const [coldSubmitter, setColdSubmitter] = useState("");
    const [coldName, setColdName] = useState("");
    const [owner, setOwner] = useState("");
    const [faceBookUrl, setFaceBookUrl] = useState("");
    const [address, setAddress] = useState("");

    const [contactList, setContactList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/api/getContact").then((response) => {
            setContactList(response.data);
            //contactList = response.data;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addColdStorage = () => {
        Axios.post("http://localhost:3001/csapi/coldInfo/addColdStotage", {
            coldSubmitter: coldSubmitter,
            coldName: coldName,
            owner: owner,
            faceBookUrl: faceBookUrl,
            address: address,
        }).then(() => {
            alert("successfully added Cold Storage");
        });
    };

    return (
        <div className="App">
            <h1>Add Cold Storage</h1>
            <div className="form">
                <label>Cold Submitter:</label>
                <input
                    type="text"
                    name="coldSubmitter"
                    onChange={(e) => {
                        setColdSubmitter(e.target.value);
                    }}
                />
                <label>Cold Name:</label>
                <input
                    type="text"
                    name="coldName"
                    onChange={(e) => {
                        setColdName(e.target.value);
                    }}
                />
                <label>Owner:</label>
                <input
                    type="text"
                    name="owner"
                    onChange={(e) => {
                        setOwner(e.target.value);
                    }}
                />
                <label>FaceBook Url:</label>
                <input
                    type="text"
                    name="faceBookUrl"
                    onChange={(e) => {
                        setFaceBookUrl(e.target.value);
                    }}
                />
                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                />
                <button onClick={addColdStorage}>Add Cold Storage</button>
            </div>
        </div>
    );
}

export default AddColdStorage;
