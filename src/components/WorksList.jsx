import React from 'react'
import zadania from '../data/data'
import WievTask from './WievTask';
const WorksList = ({ typ }) => {
    let data = zadania;
    let d = data.length;
    let zadaniaTygodniowe = [];
    console.log(data);

    const selectTask = (typ) => {
        for (let i = 0; i < d; i++) {
            if (data[i].tydzien === typ) {
                zadaniaTygodniowe.push(data[i])
            }
        }
        data = zadaniaTygodniowe;
        return (<WievTask data={data} />);
    }
    switch (typ) {
        case "1":
            return selectTask(typ);
        case "2":
            return selectTask(typ);
        default:
            return (<div></div>)
    }

}

export default WorksList