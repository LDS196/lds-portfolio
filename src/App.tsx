import './App.scss';

import Intro from "./Intro/Intro";
import Todo from "./Todo/Todo";
import Portfolio from "./Portfolio/Portfolio";
import Resume from "./Resume/Resume";
import Header from "./Header/Header";
import Contacts from "./Contacts/Contacts";

function App() {
    return (
        <div className="container">
            <Header/>
            <div className="container-inner">
                <Intro/>
                <Todo/>
                <Portfolio/>
                <Resume/>
                <Contacts/>
                <footer style={{textAlign:'center', padding:'30px'}}>
                    Copyright © 2023 LDS Laboratory.All rights reserved.
                </footer>
            </div>
        </div>
    );
}

export default App;
