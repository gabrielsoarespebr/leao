export function ToDoSection(props) {
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
                    <button className="btn btn-dark addActivityBtn" type="button">Inserir</button>
                </div>
            </div>
            <ul className="list-group activityList">
                <li className="list-group-item">Atividade 1</li>
                <li className="list-group-item">Atividade 2</li>
            </ul>
        </section>
    )
}