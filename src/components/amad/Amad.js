import React, {useEffect, useMemo, useState} from "react";
import axios from "axios";
import Table from "./Table";
import {Columns} from "./columns";

function Amad() {
    const [data, setData] = useState([]);

    // Using useEffect to call the API once mounted and set the data
    useEffect(() => {
        (async () => {
            const result = await axios("http://localhost:3001/csapi/amad");
            setData(result.data);
        })();
    }, []);

    const columns = useMemo(() => Columns, []);

    return (
        <div className="Amad">
            <Table columns={columns} data={data}/>
        </div>
    );
}

export default Amad;
