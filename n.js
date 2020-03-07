const data = {
    "bread": [ // This is a group of bread-like foods
      "קורונה",
      "קורונה",
      "קורונה",
      "קורונה"
    ],
    "kind": [ // This is a group of kinds of aforementioned foods
      "pepperoni",
      "veggie",
      "fish",
      "cheese",
      "chocolate",
      "disappointment"
    ],
    "start": [ // This is what a basic pattern looks like
        "{kind} {bread}",
        "let {kind}"
    ]
  }
  const TextualHealing = require("textual-healing");

const t = new TextualHealing(data);

console.log(t.start());