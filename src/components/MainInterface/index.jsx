import { ToDoSection } from "../ToDoSection";

export function MainInterface() {
    return (
        <div className="d-flex justify-content-around flex-wrap gap-3">
            <ToDoSection code="l" type="Limpeza" bgColor="bgBlue" />
            <ToDoSection code="e" type="Exercício físico" bgColor="bgGreen" />
            <ToDoSection code="a" type="Alimentação saudável" bgColor="bgOrange" />
            <ToDoSection code="o" type="Organização" bgColor="bgPurple" />
        </div>
    )
}