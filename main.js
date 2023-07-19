const gridContainer = document.getElementById('grid-container');
const resetButton = document.getElementById('reset-button');
let isBlack = true;

// Create the grid
function createGrid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const square = document.createElement('div');
            square.classList.add('square');

            // Add event listener for hover effect
            square.addEventListener('mouseover', function () {
                if (isBlack) {
                    square.style.backgroundColor = 'black';
                } else {
                    square.style.backgroundColor = 'olive';
                }
                isBlack = !isBlack;
            });

            gridContainer.appendChild(square);
        }
    }
}
// Clear the grid
function clearGrid() {
    gridContainer.innerHTML = '';
    createGrid();
}

// Add event listener to the reset button
resetButton.addEventListener('click', clearGrid);

// Initialize the grid
createGrid();
