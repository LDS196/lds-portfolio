import './App.scss';

import Intro from "./Intro/Intro";
import Todo from "./Todo/Todo";
import Portfolio from "./Portfolio/Portfolio";
import Resume from "./Resume/Resume";
import Header from "./Header/Header";

function App() {
    return (
        <div className="container">
            <Header/>
            <div className="container-inner">
                <Intro/>
                <Todo/>
                <Portfolio/>
                <Resume/>
            </div>
        </div>
    );
}

export default App;
