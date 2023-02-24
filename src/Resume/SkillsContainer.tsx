import React, {FC} from 'react';
import SkillItem from "./SkillItem";
import {SkillsType} from "./Skills";


type SkillsContainerType={
    skills: SkillsType
}
const SkillsContainer:FC<SkillsContainerType> = ({skills}) => {
const skillsForRender = skills.map((el,i)=> <SkillItem key={i} progress={el.progress} title={el.title}/> )
    return (
        <ul>
            {skillsForRender}
        </ul>
    );
};

export default SkillsContainer;