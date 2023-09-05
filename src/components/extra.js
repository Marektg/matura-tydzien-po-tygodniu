import { MathJax } from 'better-react-mathjax'
import React from 'react'
import styles from './extra.module.scss';

export const Extra = ({ id }) => {
    let content;
    const { mainFrame, firstRow, mainPart, lastRow, wrapFlex, wrapFlex2, tab1 } = styles;

    switch (id) {
        case "rozdzie1": (

            content = <div className={mainFrame}>



                <div className={firstRow}>Jak znaleźć rozwinięcie dziesiętne liczby <MathJax inline>{"\\(\\frac{6}{19}\\)"}</MathJax></div>

                <div className={mainPart}>

                    <div>6 : 19 = 0,31578947</div>
                    <div>Dzielimy na kalkulatorze 6 przez 19</div>

                    <div><span>0,3157894</span></div>
                    <div>Zapisujemy wynik, pomijając ostatnią cyfrę. Jeżeli bezpośrednio przed pomijaną cyfrą są zera, je również pomijamy</div>

                    <div>0,3157894 x 19 = 5,9999986</div>
                    <div>Zapisaną liczbę mnożymy przez 19</div>

                    <div>6-5,9999986=0,0000014<br></br>
                        14 : 19= 0,73684211
                    </div>
                    <div>Obliczamy ile brakuje do 6, pomijamy zera
                        i otrzymaną liczbę naturalną (czyli 14)
                        dzielimy przez 19</div>

                    <div>0,3157894<span>7368421</span> </div>
                    <div>Cyfry po przecinku ( z pominięciem ostatniej)
                        dopisujemy na końcu wcześniej otrzymanego
                        rozwinięcia dziesiętnego</div>

                    <div>0,7368421 x 19=13,9999999</div>
                    <div>Liczbę 0,7368421 mnożymy przez 19</div>

                    <div>14-13,9999999=0,000001
                        1 : 19=0,05263158
                        0,31578947368421<span>0526315</span>
                        0,0526315 x 19=0,9999985
                        1-0,9999985=0,0000015
                        15 : 19=0,78947368
                        0,315789473684210526315<span>7894736</span>
                    </div>
                    <div>
                        Powtarzamy powyższe kroki tak długo,
                        aż otrzymamy okres ułamka</div>
                </div>
                <div className={lastRow}>Odpowiedź:<MathJax inline>{"\\(\\frac{6}{19} \\)=0,(315789473684210526)"}</MathJax></div>


            </div>


        ); break;
        case "rozdziere1": (
            content = <div className={wrapFlex}>
                <div><p>Sposób na przedstawienie ułamka okresowego w postaci ułamka zwykłego</p>
                    <MathJax inline>{"\\(0,23(5)=\\frac{p}{q}=\\frac{235 - 23}{900}=\\frac{212}{900}=\\frac{53}{225}\\)"}</MathJax></div>
                <div>
                    <MathJax inline>{"\\(\\bullet\\)"}</MathJax> Aby obliczyć <MathJax inline>{"\\(p \\)"}</MathJax>, od liczby utworzonej z cyfr po przecinku odejmujemy liczbę utworzoną z cyfr stojących między przecinkiem a okresem</div>
                <div> <MathJax inline>{"\\(\\bullet\\)"}</MathJax> Aby otrzymać <MathJax inline>{"\\(q \\)"}</MathJax>, zapisujemy tyle dziewiątek, ile jest cyfr w okresie, i tyle zer, ile jest cyfr między przecinkiem a okresem.
                </div>
            </div>
        ); break;
        case "liczNW2": (
            content = <div className={wrapFlex}>
                <MathJax inline>
                    <div>Liczba {"\\(\\sqrt{2}+\\sqrt{3} \\)"} jest niewymierna.</div>
                    <div>Dowód:</div>
                    <div>Przypuśćmy przeciwnie, liczba {"\\(a=\\sqrt{2}+\\sqrt{3} \\)"} jest wymierna.</div>
                    <div>Wtedy {"\\(z-\\sqrt{3}=\\sqrt{2} \\)"},</div>
                    <div>a stąd otrzymujemy kolejno:</div>
                    <div>{"\\((z-\\sqrt{3})^2=(\\sqrt{2})^2\\)"}</div>
                    <div>{"\\(z^2-2z\\sqrt{3}+3=2 \\)"}</div>
                    <div> {"\\(2z\\sqrt{3}=z^2+1 \\)"}</div>
                    <div>{"\\(\\sqrt{3}=\\frac{z^2+1}{2z}\\)"}.</div>
                    <div>Przy założeniu, że {"\\(z \\)"} jest liczbą wymierną, prawa strona równości jest także liczbą wymierną, z czego wynika, że {"\\(\\sqrt{3} \\)"} jest liczbą wymierną.</div>
                    <div>Otrzymaliśmy sprzeczność, więc {"\\(\\sqrt{2}+\\sqrt{3} \\)"} jest liczbą niewymierną.</div>
                </MathJax></div>
        ); break;
        case "lwym1": (
            content = <div className={wrapFlex}>
                <MathJax> <table className={tab1}> <tr>
                    <th>Wynik działania</th>
                    <td>{"\\(p+x \\)"} </td>
                    <td>{"\\(\\begin{matrix}px,\\\\p\\neq 0\\end{matrix} \\)"} </td>
                    <td>{"\\(\\begin{matrix}\\frac{x}{p},\\\\p\\neq 0\\end{matrix} \\)"} </td>
                    <td>{"\\(x^2 \\)"} </td>
                    <td>{"\\(x+y \\)"} </td>
                    <td>{"\\(xy \\)"} </td>
                    <td>{"\\(\\frac{x}{y} \\)"} </td>
                    <td>{"\\(\\begin{matrix} \\sqrt{x},\\\\x> 0\\end{matrix} \\)"}</td>
                    <td>{"\\(\\begin{matrix}\\sqrt{x + p},\\\\x+p> 0\\end{matrix} \\)"} </td>
                </tr>
                    <tr>
                        <th>Wymierny</th>
                        <td>? </td>
                        <td>? </td>
                        <td>? </td>
                        <td>? </td>
                        <td>? </td>
                        <td>? </td>
                        <td>? </td>
                        <td>? </td>
                        <td>? </td>
                    </tr>
                    <tr>
                        <th>Niewymierny</th>
                        <td>? </td>
                        <td>? </td>
                        <td>? </td>
                        <td>? </td>
                        <td>? </td>
                        <td>? </td>
                        <td>? </td>
                        <td>? </td>
                        <td>? </td>
                    </tr>

                </table></MathJax>
            </div>
        ); break;
        case "z1202226": (
            content = <div className={wrapFlex}>
                <MathJax> <table className={tab1}> <tr>
                    <th>Liczba uczniów</th>
                    <td>{"\\(5\\)"} </td>
                    <td>{"\\(3\\)"} </td>
                    <td>{"\\(5\\)"} </td>
                    <td>{"\\(7\\)"} </td>
                    <td>{"\\(3\\)"} </td>
                    <td>{"\\(1\\)"} </td>
                </tr>
                    <tr>
                        <th>Ocena</th>
                        <td>{"\\(1\\)"}</td>
                        <td>{"\\(2\\)"}</td>
                        <td>{"\\(3\\)"}</td>
                        <td>{"\\(4\\)"}</td>
                        <td>{"\\(5\\)"}</td>
                        <td>{"\\(6\\)"}</td>
                    </tr>

                </table></MathJax>
            </div>
        ); break;
        case "pliczby1": (
            content = <div className={wrapFlex}>
                <MathJax> <table className={tab1}>
                    <tr>
                        <th>Wartość transakcji</th>
                        <th>Wysokość prowizji</th>
                    </tr>
                    <tr>
                        <td>od {"\\(500 \\)"} zł</td>
                        <td>{"\\(15 \\)"} zł</td>
                    </tr>
                    <tr>
                        <td>od {"\\(500,01 \\)"} zł do  {"\\(3000 \\)"} zł</td>
                        <td>{"\\(2 \\% \\)"} wartości transakcji {"\\(+\\ 5 \\)"} zł</td>
                    </tr>
                    <tr>
                        <td>od {"\\(3000,01 \\)"} zł do {"\\(8000 \\)"} zł</td>
                        <td> {"\\(1,5 \\% \\)"} wartości transakcji {"\\(+\\ 20 \\)"} zł</td>
                    </tr>
                    <tr>
                        <td>od {"\\(8000,01 \\)"} zł do {"\\(15000 \\)"} zł</td>
                        <td>{"\\(1 \\% \\)"} wartości transakcji {"\\(+ \\ 60 \\)"} zł</td>
                    </tr>
                    <tr>
                        <td>powyżej {"\\(15000 \\)"} zł</td>
                        <td>{"\\(0,7 \\% \\)"} wartości transakcji {"\\(+\\ 105 \\)"} zł</td>
                    </tr>

                </table></MathJax>
            </div>
        ); break;
        case "pliczby2": (
            content = <div className={wrapFlex}>
                <MathJax>
                    <p>{"\\(a \\circ b=\\)"}  liczba nie mniejsza spośród liczb  {"\\(a\\)"}  i  {"\\(b\\)"}</p>
                    <p>{"\\(a\\ast b=\\)"}  liczba nie większa spośród liczb  {"\\(a\\)"}  i  {"\\(b\\)"}</p>
                </MathJax>
            </div>
        ); break;
        case "pliczby3": (
            content = <div className={wrapFlex}>
                <MathJax>
                    <p>Sumę  {"\\(S\\)"}  zapisujemy w postaci {"\\(S=\\frac{4 - 1}{1\\cdot 4}+\\frac{7 - 4}{4\\cdot 7}+\\frac{10 - 7}{7\\cdot 10}+_{\\cdots}+\\frac{304 - 301}{301\\cdot 304}+\\frac{307 - 304}{304\\cdot 307}\\)"}</p>
                    <p>Każdy składnik tej sumy przedstawiamy jako różnicę ułamków  {"\\(S=(\\frac{4}{4\\cdot 1}-\\frac{1}{4\\cdot 1})+(\\frac{7}{7\\cdot 4}-\\frac{4}{7\\cdot 4})+(\\frac{10}{10\\cdot 7}-\\frac{7}{10\\cdot 7})+_{\\cdots}+\\\\ +(\\frac{304}{304\\cdot 301}-\\frac{301}{304\\cdot 301})+(\\frac{307}{307\\cdot 304}-\\frac{304}{307\\cdot 304})\\)"} stąd {"\\(S=(1-\\frac{1}{4})+(\\frac{1}{4}-\\frac{1}{7})+(\\frac{1}{7}-\\frac{1}{10})+_{\\cdots}+(\\frac{1}{301}-\\frac{1}{304})+(\\frac{1}{304}-\\frac{1}{307})\\)"}  więc {"\\(S=1-\\frac{1}{4}+\\frac{1}{4}-\\frac{1}{7}+\\frac{1}{7}-\\frac{1}{10}+_{\\cdots}+\\frac{1}{301}-\\frac{1}{304}+\\frac{1}{304}-\\frac{1}{307}\\)"}</p>
                    <p>Obliczamy sumę, redukując parami wyrazy sąsiednie, poza pierwszym i ostatnim  {"\\(S=1-\\frac{1}{307}=\\frac{306}{307}\\)"}</p>
                </MathJax>
            </div>
        ); break;

        case "kielbasad2z22": (
            content = <div className={wrapFlex2}>
                <MathJax>
                    <p> {"\\(\\bullet\\)"} Wyrażenie {"\\(\\frac{n + 2}{n - 3}\\)"} zapisujemy w postaci {"\\(\\frac{a}{n + b}+c\\)"}, gdzie {"\\(a, b, c\\in Z \\)"}: {"\\(\\frac{n+2}{n-3}=\\frac{n-3+3+2}{n-3}=\\frac{n-3}{n-3}+\\frac{5}{n-3}=1+\\frac{5}{n-3}\\)"}</p>
                    <p>{"\\(\\bullet\\)"} Liczba {"\\(1+\\frac{5}{n-3}\\in Z\\)"} wtedy i tylko wtedy, gdy {"\\(\\frac{5}{n-3}\\in Z\\)"}. Zauważamy, że {"\\(\\frac{5}{n-3}\\in Z\\)"} wtedy i tylko wtedy, gdy liczba {"\\(n-3\\)"} jest dzielnikiem liczby {"\\(5\\)"}</p>
                    <p>{"\\(\\bullet\\)"} Zatem: {"\\(n-3=-5\\)"} lub {"\\(n-3=-1\\)"} lub {"\\(n-3=5\\)"} lub {"\\(n-3=1\\)"}, czyli {"\\(n=-2\\)"} lub {"\\(n=2\\)"} lub {"\\(n=4\\)"} lub {"\\(n=8\\)"}
                    </p>
                    <p>{"\\(\\bullet\\)"} Ostatecznie, liczba {"\\(\\frac{n + 2}{n - 3}\\)"} jest całkowita wtedy i tylko wtedy, gdy {"\\(n\\in\\{-2,2,4,8\\}\\)"}
                    </p>

                </MathJax>
            </div>
        ); break;

        default: break;

    }
    return content
}

export default Extra