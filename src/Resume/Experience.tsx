import React, {FC} from "react";
import s from "./Experience.module.scss";

export const Experience = () => {
    return (
        <div className={s.experience}>
            <ul className={s.list}>
                <li className={s.place}>Junior Frontend Developer</li>
                <li className={s.year}>Startup (Remote work 2022-2023)</li>
                <li className={s.speciality}>Job description of junior frontend developer
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