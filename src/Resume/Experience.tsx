import React, {FC} from "react";
import s from "./Experience.module.scss";

export const Experience = () => {
    return (
        <div className={s.experience}>
            <ul className={s.list}>
                <li className={s.place}>Frontend Developer</li>
                <li className={s.year}>Project work (remote work 2022-2023)</li>
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