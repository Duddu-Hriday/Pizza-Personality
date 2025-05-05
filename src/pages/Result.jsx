import { useEffect, useState } from "react";

const Result = () => {
    const [result, setResult] = useState("");

    useEffect(() => {
        const answers = JSON.parse(localStorage.getItem("pizzaAnswers") || "[]");
        const counts = {};
        answers.forEach((type) => {
            counts[type] = (counts[type] || 0) + 1;
        });
        const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
        setResult(sorted[0][0]);
    }, []);

    return (
        <div className="question-container">
            <h2>Your Inner Pizza Personality Is...</h2>
            <h1 className="result-text">{result} 🍕</h1>
            <p>
                {result === "Margherita" && "You're classic, comforting, and never go out of style!"}
                {result === "Pepperoni" && "Bold, spicy, and the life of the party!"}
                {result === "Cheesy Overload" && "Warm, lovable, and a little extra — in the best way!"}
                {result === "Vegan Veggie" && "Conscious, chill, and full of plant-powered wisdom!"}
                {result === "Pineapple Adventurer" && "Unpredictable, brave, and wonderfully weird!"}
                {result === "Meat Lover Supreme" && "Savage appetite, alpha energy, BBQ royalty!"}
            </p>
        </div>
    );
};

export default Result;
