import { useEffect, useState} from "react";
import { Link, NavLink } from "react-router-dom";

const Record = (props) => (
    <tr>
        <td>{props.record.name}</td>
        <td>{props.record.position}</td>
        <td>{props.record.level}</td>
        <td>
            <div>
                <Link to={`/edit/${props.record._id}`}></Link>
                <button type="button" onClick={() => {
                    props.deleteRecord(props.record._id);
                }}>Delete</button>
            </div>
        </td>
    </tr>
);

//Fetch records from databases
export default function Recordlist() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:5050/record/`);
            if (!response.ok) {
                const message = `An error occured : ${response.statusText}`;
                console.error(message);
                return;
            }
            const records = await response.json();
            setRecords(records);
        }
        getRecords();
        return;
    }, [records.length]);

// Delete a record
async function deleteRecord(id) {
    await fetch (`http://localhost:5050/record/${id}`, {
        method: "DELETE"
    });
    const newRecords = record.filter((el) => el._id != id );
    setRecords(newRecords);
}

// map record on the table
function recordList() {
    return records.map((record) => {
        return (
        <Record record={record} deleteRecord={() => deleteRecord(record,_id)} key={record._id}/>
        );
    });
}

return (
    <>
        <h3>Employee Records</h3>
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Level</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recordList()}
                    </tbody>
                </table>
            </div>
        </div>
    </>
)
}