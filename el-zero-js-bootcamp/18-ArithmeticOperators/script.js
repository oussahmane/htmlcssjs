// [1] Create 3 Variables In One Statement (Two Words Each)
let cardTitle = "Elzero",
    cardDescription = "Elzero Web School",
    cardDate = "25/10";

// [2] Create Div Card Using Template Literals
let cardTemplate = `
  <div class="card">
    <h3>${cardTitle}</h3>
    <p>${cardDescription}</p>
    <span>${cardDate}</span>
  </div>
`;

// [3] Add The Card 4 Times Using Repeat (ES6)
document.write(cardTemplate.repeat(4));

