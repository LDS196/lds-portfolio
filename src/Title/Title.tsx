import React, {FC} from 'react';
import s from "./Title.module.scss";

type TitleType = {
    title: string
    subtitle: string
    fontSizeTitle: string
    fontSizeSubtitle: string
}
const Title:FC<TitleType> = ({title, subtitle, fontSizeTitle, fontSizeSubtitle}) => {

    // const fontSizeSubtitleProps = "'" + `${fontSizeSubtitle}px` + "'";
    //
    // const fontSizeTitleProps = "'" + `${fontSizeTitle}px` + "'";

    return (
        <>
            <p style={{fontSize: `${fontSizeSubtitle}`}} className={s.subtitle}>{subtitle}</p>
            <h2 style={{fontSize: `${fontSizeTitle}`}} className={s.title}>{title}</h2>
        </>
    );
};

export default Title;