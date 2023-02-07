import React, {FC} from 'react';
import s from './SkillItem.module.scss';

type SkillItemType={
    progress:number
    title: string
}

const SkillItem: FC<SkillItemType> = ({progress,title}) => {
    const gap=30;
    const paddingLeft = progress-gap;
    return (
        <>
        <li className={s.item}>
            <span style={{width: gap +'%'}}>{title}</span>
            <span style={{paddingLeft:paddingLeft + '%'}}>{progress +'%'}</span>
            <div className={s.progress}>
                <div className={s.progressInner} style={{width: progress + '%'}} ></div>
            </div>
        </li>
        </>
    );
};

export default SkillItem;