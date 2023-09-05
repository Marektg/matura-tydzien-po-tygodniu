import React from 'react'
import { MathJax } from 'better-react-mathjax'
import styles from '../pages/wievTask.module.scss';
// import Canvas from '../../data/funkcjeCanvas';
import Extra from './extra';

const WievTask = ({ data }) => {
   

    const { powt, tresc, odp, well, podpowiedz, /*canvasWrapper,*/ wellpo, trescpo } = styles;
   


    let tasks = data;
    return (<>
        
        <ol className={powt}>
            {tasks.map(work => (
                <li key={work.id}><MathJax inline>{
                    <p className={tresc}><a href='#top'>⇑</a>{work.tresc}</p>}</MathJax>
                    {work.ramka && (<div className={well}><MathJax inline>{work.ramka}</MathJax></div>)}
                    {work.extra && (<MathJax inline><Extra id={work.extra} /></MathJax>)}
                    {work.extraRamka && (<div className={well}><MathJax inline><Extra id={work.extraRamka} /></MathJax></div>)}

                    {work.tresc2 !== 0 && (<MathJax inline><p className={tresc}>{work.tresc2}</p></MathJax>)}
                    <div className={odp}>
                        {work.podpunkty.length !== 0 && !work.koniec && (work.podpunkty.map(podpunkt => (

                            <div><MathJax inline>{podpunkt}</MathJax></div>

                        ))

                        )}


                    </div>
                   {/* <div className={canvasWrapper}>
                        {work.canvas.length !== 0 && (
                            work.canvas.map(canva => (
                                <Canvas id={canva.id} width={canva.width} height={canva.height} inline />
                            ))
                        )}
                            </div>*/}
                    {work.trescpocanvie !== 0 && (<MathJax inline><p className={tresc}>{work.trescpocanvie}</p></MathJax>)}
                    <div className={odp}>
                        {work.koniec && (work.podpunkty.map(podpunkt => (

                            <div><MathJax inline>{podpunkt}</MathJax></div>

                        ))

                        )}


                    </div>


                    {work.ramkapo && (<div className={wellpo} ><MathJax inline>{work.ramkapo}</MathJax></div>)}
                    {work.wskazowka && (<div className={podpowiedz}>Wskazówka: <MathJax inline>{work.wskazowka}</MathJax></div>)}
                    {work.tresc3 !== 0 && (<MathJax inline><p className={trescpo}>{work.tresc3}</p></MathJax>)}

                </li>
            ))}
        </ol>

    </>
    )

};


export default WievTask