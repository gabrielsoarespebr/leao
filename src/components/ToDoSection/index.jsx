export function ToDoSection(props) {

    class Activity {
        constructor(title, priority, section, done = false) {
            this.title = title;
            this.priority = priority;
            this.section = section;
            this.done = done
        }
    }

    const emojis = ["&#128527;", "&#128528;", "&#128556;", "&#129327;"];

    const list = [];

    function addActivityBtn(letter) {

        const activityList = document.querySelector(`.code-${letter} .activityList`);

        activityList.innerHTML = "";


        const activityTitle = document.querySelector(`.code-${letter} .activityTitle`).value;

        const activityPriority = document.querySelector(`.code-${letter} .activityPriority`).value;


        const activity = new Activity(activityTitle, activityPriority, letter);

        list.push(activity);

        const filterList = list.filter(e => e.section === letter);

        const sortList = filterList.sort((a, b) => Number(b.priority) - Number(a.priority));

        const mapList = sortList.map(e => {
            return `<li class="list-group-item d-flex justify-content-between">
        <div>
        <span class="emoji pe-2">${emojis[e.priority]}</span><span class="activityTitle">${e.title}</span>
        </div>
        <div class="">
        <i class="fa-solid fa-check"></i>
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-xmark"></i>
        </div>
        </li>`;
        });



        mapList.forEach(e => {
            activityList.innerHTML += e;
        })


        // const content = `<li class="list-group-item d-flex justify-content-between">
        // <div>
        // <span class="emoji pe-2">${emojis[activity.priority]}</span><span class="activityTitle">${activity.title}</span>
        // </div>
        // <div class="">
        // <i class="fa-solid fa-check"></i>
        // <i class="fa-solid fa-pen-to-square"></i>
        // <i class="fa-solid fa-xmark"></i>
        // </div>
        // </li>`;

        // activityList.innerHTML += content;
    }

    return (
        <section className={`code-${props.code} ${props.bgColor} p-2 rounded col-5`}>
            <h2>{props.type}</h2>
            <div className="input-group mb-3">
                <input type="text" className="form-control activityTitle" placeholder="Insira a atividade" />
                <select className="custom-select activityPriority">
                    <option value="default">Prioridade</option>
                    <option value="3">&#129327; Altíssima</option>
                    <option value="2">&#128556; Alta</option>
                    <option value="1">&#128528; Normal</option>
                    <option value="0">&#128527; Baixa</option>
                </select>
                <div className="input-group-append">
                    <button onClick={() => addActivityBtn(props.code)} className="btn btn-dark" type="button">Inserir</button>
                </div>
            </div>
            <ul className="list-group activityList">
            </ul>
        </section>
    )
}