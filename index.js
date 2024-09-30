/* 

Starting puedo code
    1. Select div container id and store in variable container
    2. Create div element inside "container" div and store its variable as content
    3. Give the div element a class
    4. give the div some text content
    5. Appending the div element inside the div container 
    6. Repeat steps 2-5 until 32 square divs are reached

    7. Implement hover effect on the style for the row and column divs
    8. Set up EventListener for mouse as it goes over row and column divs
    9. Add button on top of screen prompting user for the side of grid
     10. Once user puts new size of grid, old grid is removed and new grid is implemented
     11. 

*/

const container = document.querySelector("#container");

function createGrid(size) 
{
container.innerHTML = ""
container.style.display = "flex";
container.style.flexwrap = "wrap";
const squareSize = 960 / size; 

for (let i = 0; i < size * size; i++)
    {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black"; // Change this to any color you want
        });
        container.appendChild(div);
    }
  

}



createGrid(16);








const btn = document.querySelector("#size");

btn.addEventListener("click", function() {
    console.log("Button clicked"); // Check if the button is clicked
    const gridSize = prompt("Enter the size of the grid (e.g., 8 for an 8x8 grid):");

    if (gridSize !== null) {
        const size = parseInt(gridSize);
        if (!isNaN(size) && size > 0 && size <= 100) {
            createGrid(size);
        } else {
            alert("Please enter a valid positive number up to 100.");
        }
    }
}); 