import{userState, useState} from 'react';
import styles from './Contador.module.css'


function Contador(){

    const [Contador,setContador]= useState(1);

    function maisUm(){
        setContador(Contador+1)
    }
    function menosUm(){

        if(Contador<= 0){
            alert("Menor que 1 não existe animal!")
        }
        else(
            setContador(Contador-1)
        )
    }



    return(<div><div>{Contador}</div>
    <button className={styles.butao} onClick={maisUm}>+</button>
    <button className={styles.butao} onClick={menosUm} >-</button>
    </div>
    )
}

export default Contador