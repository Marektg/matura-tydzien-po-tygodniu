import React from 'react'

import { MainTask, StyledLink2, TaskList } from '../homePage/homePage.styled';
import WorksList from '../../components/WorksList';


const Tydzien2 = () => {





    return (<MainTask>
        <StyledLink2 to='/'>Powrót</StyledLink2>
        <TaskList> <WorksList typ="2" /> </TaskList>

    </MainTask>
    )

};


export default Tydzien2