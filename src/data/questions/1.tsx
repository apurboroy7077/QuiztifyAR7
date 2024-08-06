const questionsData = [
  {
    question: "Who was the president of America?",
    options: [
      "Jawaharlal Nehru",
      "Angela Merkel",
      "Barack Obama",
      "Hillary Clinton",
    ],
    correctAnswer: "Barack Obama",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Mark Twain",
      "Jane Austen",
      "William Shakespeare",
      "Charles Dickens",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Silver", "Iron"],
    correctAnswer: "Oxygen",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
    correctAnswer: "Vatican City",
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Charles Babbage",
      "Nikola Tesla",
    ],
    correctAnswer: "Charles Babbage",
  },
  {
    question: "What is the main ingredient in traditional Japanese miso soup?",
    options: ["Tofu", "Miso paste", "Seaweed", "Soy sauce"],
    correctAnswer: "Miso paste",
  },
  {
    question: "What is the longest river in the world?",
    options: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River",
    ],
    correctAnswer: "Nile River",
  },
  {
    question: "Who developed the theory of relativity?",
    options: [
      "Galileo Galilei",
      "Nikola Tesla",
      "Albert Einstein",
      "Isaac Newton",
    ],
    correctAnswer: "Albert Einstein",
  },
  {
    question: "What is the smallest bone in the human body?",
    options: ["Stapes", "Femur", "Scapula", "Tibia"],
    correctAnswer: "Stapes",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Kyoto", "Osaka", "Tokyo", "Nagoya"],
    correctAnswer: "Tokyo",
  },
  {
    question: "Who is the author of '1984'?",
    options: [
      "George Orwell",
      "Aldous Huxley",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
    ],
    correctAnswer: "George Orwell",
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
    correctAnswer: "Nitrogen",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    correctAnswer: "Diamond",
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    correctAnswer: "8",
  },
  {
    question: "Who discovered penicillin?",
    options: [
      "Marie Curie",
      "Alexander Fleming",
      "Louis Pasteur",
      "Gregor Mendel",
    ],
    correctAnswer: "Alexander Fleming",
  },
  {
    question: "What is the chemical formula for water?",
    options: ["H2O", "CO2", "O2", "H2SO4"],
    correctAnswer: "H2O",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra",
  },
  {
    question: "Who painted 'Starry Night'?",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Claude Monet",
      "Salvador Dali",
    ],
    correctAnswer: "Vincent van Gogh",
  },
  {
    question: "Which organ is known as the 'powerhouse of the cell'?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
    correctAnswer: "Mitochondria",
  },
  {
    question: "What is the primary language spoken in Brazil?",
    options: ["Spanish", "English", "Portuguese", "French"],
    correctAnswer: "Portuguese",
  },
  {
    question: "Who is the founder of Microsoft?",
    options: ["Steve Jobs", "Mark Zuckerberg", "Bill Gates", "Larry Page"],
    correctAnswer: "Bill Gates",
  },
  {
    question: "What is the main component of the sun?",
    options: ["Oxygen", "Carbon", "Helium", "Hydrogen"],
    correctAnswer: "Hydrogen",
  },
  {
    question: "What is the boiling point of water?",
    options: ["50°C", "75°C", "100°C", "150°C"],
    correctAnswer: "100°C",
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    options: [
      "Marie Curie",
      "Rosalind Franklin",
      "Jane Goodall",
      "Ada Lovelace",
    ],
    correctAnswer: "Marie Curie",
  },
  {
    question: "What is the most widely spoken language in the world?",
    options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
    correctAnswer: "Mandarin Chinese",
  },
];

export default questionsData;
type questionsDataType = typeof questionsData;
export type { questionsDataType };
