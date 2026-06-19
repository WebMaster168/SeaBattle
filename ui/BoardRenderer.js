import { CELL } from "../constants/gameConstants.js";
 
export class BoardRenderer {
 
    static render(
        wrapperId,
        player,
        showShips,
        clickHandler = null
    ) {
 
        const wrapper =
            document.getElementById(
                wrapperId
            );
 
        wrapper.innerHTML = "";
 
        const letters = [
            "А","Б","В","Г","Д",
            "Е","Ж","З","И","К"
        ];
 
        const layout =
            document.createElement("div");
 
        layout.classList.add(
            "board-layout"
        );
 
        const corner =
            document.createElement("div");
 
        corner.classList.add(
            "corner"
        );
 
        const columnLabels =
            document.createElement("div");
 
        columnLabels.classList.add(
            "column-labels"
        );
 
        for(let i = 1; i <= 10; i++){
 
            const label =
                document.createElement("div");
 
            label.textContent = i;
 
            columnLabels.appendChild(
                label
            );
        }
 
        const rowLabels =
            document.createElement("div");
 
        rowLabels.classList.add(
            "row-labels"
        );
 
        letters.forEach(letter => {
 
            const label =
                document.createElement("div");
 
            label.textContent =
                letter;
 
            rowLabels.appendChild(
                label
            );
        });
 
        const board =
            document.createElement("div");
 
        board.classList.add(
            "board"
        );
 
        player.grid.forEach(
            (row, y) => {
 
                row.forEach(
                    (cellValue, x) => {
 
                        const cell =
                            document.createElement(
                                "div"
                            );
 
                        cell.classList.add(
                            "cell"
                        );
 
                        if(
                            cellValue === CELL.SHIP &&
                            showShips
                        ){
                            cell.classList.add(
                                "ship"
                            );
                        }
 
                        if(
                            cellValue === CELL.HIT
                        ){
                            cell.classList.add(
                                "hit"
                            );
                        }
 
                        if(
                            cellValue === CELL.MISS
                        ){
                            cell.classList.add(
                                "miss"
                            );
                        }
 
                        if(clickHandler){
 
                            cell.addEventListener(
                                "click",
                                () =>
                                    clickHandler(
                                        x,
                                        y
                                    )
                            );
                        }
 
                        board.appendChild(
                            cell
                        );
                    }
                );
            }
        );
 
        layout.appendChild(corner);
        layout.appendChild(columnLabels);
        layout.appendChild(rowLabels);
        layout.appendChild(board);
 
        wrapper.appendChild(layout);
    }
}