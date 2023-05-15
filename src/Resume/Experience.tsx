import React from "react";
import s from "./Experience.module.scss";

export const Experience = () => {
    return (
        <div className={s.experience}>
            <ul className={s.list}>
                <li className={s.place}>Frontend Developer</li>
                <li className={s.year}>Project work / May 2022-present day</li>
                <li className={s.speciality}><span>Cards</span><br/>
                    • is a memory training app with flashcards that can beused to memorize words, terms etc.
                    Users can createcards, edit and test them<br/>
                </li>
                <li className={s.speciality}><span>Task manager</span><br/>
                    • is a web application for task management.The app allows users
                    to create todolist with tasks, set priorities for them, edit
                    and delete them, mark completed tasks.<br/>
                </li>
                <li className={s.speciality}><span>Social network</span><br/>
                    • this project is a social network.It allows you to create profile, add friends and follow for them, exchange messages and publish posts on your page.<br/>
                </li>
                <li className={s.speciality}><span>Stack:</span><br/>
                    •  React,TypeScript, Redux Toolkit, RestApi, Router-
                    dom, Axios, Mui,Ant design, React Hook Form,Formik,Storybook,Jest,SASS and other technologies and libraries
                </li>
                <li className={s.speciality}><span>Key responsibilities</span><br/>
                </li>
                <li className={s.speciality}>• Project architectural solutions (layering UI, BLL,
                    DAL, Server)<br/>
                    • Development and update components with React
                    RESTful (Registration/loginization/pagination etc)<br/>
                    • Proper BLL state management with Redux, Thunk
                    Toolkit etc<br/>
                    • Working with the server using ajax (CRUD
                    determination and data processing)<br/>
                    • Performance enhancement (memo, useCallback,
                    lazy, etc.)<br/>
                    • Covering applications with tests<br/>
                    • Team developement<br/>
                    • Bug fixing, deploying<br/>
                </li>

            </ul>
            <ul className={s.list}>
                <li className={s.place}>Engineer Railway Transport</li>
                <li className={s.year}>OAO RZD (Yekaterinburg 2010-2022)</li>
                <li className={s.speciality}>Lead a construction team service of railway supervise the work of
                    construction equipment preparation of reports on work planning and control of completed work
                    financial responsibility, financial reporting development of technical documentation
                </li>

            </ul>
        </div>

    );
};