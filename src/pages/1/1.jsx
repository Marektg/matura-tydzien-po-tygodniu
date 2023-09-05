import React from 'react'

import { MainTask, StyledLink2 } from '../homePage/homePage.styled';
import WorksList from '../../components/WorksList';


const Tydzien1 = () => {
   


   

    return (<MainTask>
        <StyledLink2 to='/'>Powrót</StyledLink2>
        <WorksList typ="1" />
       
    </MainTask>
    )

};


export default Tydzien1