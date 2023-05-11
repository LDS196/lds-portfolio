import imgProject from "../assets/images/portfolio/project.jpg";
import socialNetwork from "../assets/images/portfolio/social-network.jpg";
import pizza from "../assets/images/portfolio/pizza.jpg";
import birds from "../assets/images/portfolio/birds.png";
import zoo from "../assets/images/portfolio/zoo.jpg";
import pazzleGame from "../assets/images/portfolio/pazzle.png";
import {cardProjectType} from "./Portfolio";
import flashCardsImg from '../assets/images/portfolio/flash-cards.jpg'

export const projects: Array<cardProjectType> = [
    {
        kind: 'app',
        title: 'flash cards',
        technologies: ['React','TypeScript', 'Redux Toolkit', 'RestApi', 'Router-dom', 'Axios', 'Mui', 'React Hooks Form', 'Redux-persist'],
        id: '1',
        urlImg: flashCardsImg,
        link:'https://lds196.github.io/cards/'
    },
    {
        kind: 'app',
        title: 'task manager',
        technologies: ['React','TypeScript', 'Redux', 'RestApi', 'Storybook','Redux-thunk', 'Router- dom', 'Axios', 'Mui', 'Formik',' Redux-Form', 'Jest'],
        id: '2',
        urlImg: imgProject,
        link:'https://lds196.github.io/1-todolist/'
    },
    {
        kind: 'web site',
        title: 'social network',
        technologies: ['React','TypeScript', 'Redux', 'RestApi', 'Router- dom', 'Axios', 'Ant design', 'Formik', 'Redux-Form', 'Jest'],
        id: '3',
        urlImg: socialNetwork,
        link:'https://lds196.github.io/samurai-way/'
    },
    {
        kind: 'online store',
        title: 'Mama Pizza',
        technologies: ['React','TypeScript', 'Redux Toolkit', 'RestApi', 'Router-dom', 'Axios','Hooks'],
        id: '4',
        urlImg: pizza,
        link:'https://lds196.github.io/new-pizza/'
    },
    {
        kind: 'game',
        title: 'songbirds',
        technologies: ['js','html', 'css', 'sass', 'figma'],
        id: '5',
        urlImg: birds,
        link:'https://rolling-scopes-school.github.io/lds196-JSFE2022Q3/songbirds/'
    },
    {
        kind: 'web site',
        title: 'online zoo',
        technologies:['js','html', 'css', 'sass', 'figma'],
        id: '6',
        urlImg: zoo,
        link:'https://rolling-scopes-school.github.io/lds196-JSFE2022Q3/online-zoo/pages/main/index.html'
    },
    {
        kind: 'game',
        title: 'Gem pazzle',
        technologies: ['js','html', 'css', 'sass', 'figma'],
        id: '7',
        urlImg: pazzleGame,
        link:'https://rolling-scopes-school.github.io/lds196-JSFE2022Q3/codejam/'
    },
]