// import style from "./style.module.css"

export function Header() {
    return (
        <header className="text-center d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-start">
                <img className="col-2" src="../../src\assets\img\lion.png" alt="Leão logo" />
                <h1 className="d-flex justify-content-center align-items-end">
                    <span className="display-3 bgBlue rounded mx-2 px-2 py-1 cursor-pointer" tile="Limpeza">L</span>
                    <span className="display-3 bgGreen rounded mx-2 px-2 py-1 cursor-pointer" title="Exercício físico">E</span>

                    <span className="d-inline-flex flex-column align-items-center">
                        <iconify-icon icon="uil:arrow-growth"></iconify-icon>
                        <span className="display-3 bgOrange rounded mx-2 px-2 py-1 cursor-pointer d-inline-block" title="Alimentação">
                            A
                        </span>
                    </span>

                    <span className="display-3 bgPurple rounded mx-2 px-2 py-1 cursor-pointer" title="Organização">O</span>
                </h1>
            </div>

            <p className="m-0">Como diz o ditado: um LEÃO por dia!</p>
            <p>Atinja suas metas de vida a partir de pequenos objetivos diários de Limpeza, Exercício físico, Alimentação saudável e Organização.</p>
        </header>
    )
}