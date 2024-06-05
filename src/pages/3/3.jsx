import React from 'react'

import { MainTask, StyledLink2, TaskList } from '../homePage/homePage.styled';
import WorksList from '../../components/WorksList';


const Tydzien3 = () => {





    return (<MainTask>
        <StyledLink2 to='/'>Powrót</StyledLink2>
        <TaskList> <WorksList typ="3" /> </TaskList>

    </MainTask>
    )

};


export default Tydzien3