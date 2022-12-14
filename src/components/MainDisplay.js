import Header from "./Header"
export default function MainDisplay () {
    return(
    <div>
        <Header></Header>
        <h1>Score:</h1>
        <button>Decrease</button>
        <button>Increase</button>
        <button>Reset</button>
        <h1>Let's play!</h1>
        <button>Get Question</button>
        <h1>Category:</h1>
        <h2>Points:</h2>
        <h2>Answer:</h2>
        <button>Click to Reveal Question</button>
    </div>    
    )
}