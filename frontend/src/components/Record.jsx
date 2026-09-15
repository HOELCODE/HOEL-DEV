import { UseState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Record() {
    const [form, setForm] = useState({
        name: "",
        position: "",
        level: "",
    });
    const [isNew, setIsNew] = useState(true);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
        const id = params.id?.toString() || undefined;
        if(!id) return;
        setIsNew(false);
        const response = await fetch(
            `http://localhost:5050/record/${params.id.toString()}`
        );
        if(!response.ok) {
            const message = `An error has occured: ${response.statusText}`;
            console.error(message);
            return;
        }
        const record = await response.json();
        if (!record) {
            console.warn(`Record with id ${id} not found`);
            navigate("/");
            return;
        }
        setForm(record);
        }
        fetchData();
        return;
    }, [params.id, navigate]);

    function updateForm(value) {
        return setForm((prev) => {
            return {  ...prev, ...value};
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
        const person = { ...form };
        try {
            let reponse;
            if (isNew) {
                response = await fetch("http://localhost:5050/record", {
                    method: "POST",
                    headers: {
                        "content-Type": "application/json",
                    },
                    body: JSON.stringify(person),
                });
            } else {
                response = await fetch(`http://localhost:5050/record/${params.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: HSON.stringify(person),
                });
            }

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (error) {
            console.error('A problem occured with your fetch operation: ', error);
        } finally {
            setForm({ name: "", position: "", level: ""});
            navigate("/");
        }
    }

    return (
        <>
            <h3>Create/Update Employee Record</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <h2>Employee Info</h2>
                    <p>This information will be displayed publicity so be carreful what you share</p>
                </div>

                <div>
                    <div>
                        <label htmlFor="nale">Name</label>
                        <input type="text" name="name" id="name" placeholder="First Last" value={form.name} onChange={(e) => updateForm({ name: e.target.value })}/>
                    </div>
                    <div>
                        <label htmlFor="position">Position</label>
                        <input type="text" name="position" id="name" placeholder="Position" value={form.position} onChange={(e) => updateForm({ position: e.target.value })}/>
                    </div>
                    <div>
                        <p>Position Options</p>
                        <div style="display:flex; flex-direction: row; width: 100px; justify-content: space-around">
                            <input id="positionIntern" name="positionOptions" type="radio" value="intern" checked={form.level === "Intern"} onChange={(e) => updateForm({ level: e.target.value})}/>
                            <label htmlFor="positionIntern">Intern</label>
                        </div>
                        <div style="display:flex; flex-direction: row; width: 100px; justify-content: space-around">
                            <input id="positionJunior" name="positionOptions" type="radio" value="junior" checked={form.level === "Junior"} onChange={(e) => updateForm({ level: e.target.value})}/>
                            <label htmlFor="positionJunior">Junior</label>
                        </div>
                        <div style="display:flex; flex-direction: row; width: 100px; justify-content: space-around">
                            <input id="positionSenior" name="positionOptions" type="radio" value="senior" checked={form.level === "Senior"} onChange={(e) => updateForm({ level: e.target.value})}/>
                            <label htmlFor="positionSenior">Senior</label>
                        </div>

                    </div>
                </div>
                <input type="submit" value="save Employee Record"/>
            </form>
        </>
    )
}
