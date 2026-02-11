import "./Style.css"
import Logo from "../../assets/Logop.png"
import { useState } from "react";
 function Home () {
    const [nmr,setNmr]=useState(0);
    function add (){
        const novonmr=nmr + 1;
        setNmr(novonmr)
        
        
    }
    function remov (){
        if (nmr>0){
        const novonmr=nmr - 1;
        setNmr(novonmr)}
        
        
    }
    return(
    <div className="home">
        <header>
            <div className="logo"><img src={Logo} alt="logobox" /><h2>GESTORBOX</h2></div>
            <section className="boxheader"><ul><li>PRODUTOS</li><li>CADASTRAR</li><li>CONTAS</li></ul></section>
        </header>
        <div className="boxfund">
            <div className="boxproduct">
                <div className="productviw">
                    <h1>COCA COLA ZERO 2 LITROS</h1>
                    <h1>R$ 11.90</h1>
                    <div className="ACTION">
                        <div className="qnt"><h1 className="n">{nmr}</h1></div>
                        <div className="btns"><button className="add" onClick={add}><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16"><path fill="#000000" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m.75-10.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0" clip-rule="evenodd"/></svg></button><button className="rem" onClick={remov}><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16"><path fill="#000000" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m4-7a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0 0 1.5h6.5A.75.75 0 0 0 12 8" clip-rule="evenodd"/></svg></button></div>
                    </div>

                </div> 
            </div>






            <div className="boxsale"></div>


        </div>
    </div>
    )
}
export default Home;