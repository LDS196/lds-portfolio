import React from 'react';
import s from './/Todo.module.scss'
import strategy from '../assets/images/todo/strategy.jpg'
import research from '../assets/images/todo/Research.jpg'
import design from '../assets/images/todo/Design.jpg'
import growth from '../assets/images/todo/Growth.jpg'
import ceo from '../assets/images/todo/CEO-Marketing.jpg'
import performance from '../assets/images/todo/Performance.png'
import Line from "../Line/Line";
import {Title} from "../Title/Title";
import {Fade} from "react-awesome-reveal";


const Todo = () => {
    return (
        <div className={s.todo}>
            <Fade direction={'up'} delay={500} triggerOnce={true}>
                <div className={s.todo__title}>
                    <Title subtitle={'features'}
                           title={'What I Do'}
                    />
                </div>
                <ul>
                    <div className={s.item}>
                        <li>
                            <img src={strategy} alt="todo"/>
                            <h4>Strategy</h4>
                            <p> Brand Strategy, Product Strategy, Research & Analysis, Service Design, Content
                                Strategy</p>
                        </li>
                    </div>
                    <div className={s.item}>
                        <li>
                            <img src={research} alt="todo"/>
                            <h4>Research</h4>
                            <p>Qualitative Research, Quantitative Research, Heuristic Evaluation, Competitor Analysis,
                                Usability Testing</p>
                        </li>
                    </div>
                    <div className={s.item}>
                        <li>
                            <img src={design} alt="todo"/>
                            <h4>Design</h4>
                            <p>User Interface, User Experience, Product Design, Branding & Illustration, Motion
                                Design</p>
                        </li>
                    </div>
                    <div className={s.item}>
                        <li>
                            <img src={growth} alt="todo"/>
                            <h4>Growth</h4>
                            <p> I throw myself down among the tall grass by the stream as Ilie close to the earth.</p>
                        </li>
                    </div>
                    <div className={s.item}>
                        <li>
                            <img src={ceo} alt="todo"/>
                            <h4>CEO Marketing</h4>
                            <p>We make tailor-made user acquisition to increase business growth for you to uncover all
                                the potential opportunities!</p>
                        </li>
                    </div>
                    <div className={s.item}>
                        <li>
                            <img src={performance} alt="todo"/>
                            <h4>Performance</h4>
                            <p> I throw myself down among the tall grass by the stream as Ilie close to the earth.</p>
                        </li>
                    </div>
                </ul>
                <Line/>
                </Fade>
        </div>
);
};

export default Todo;