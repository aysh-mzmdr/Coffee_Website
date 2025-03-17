import styles from "./index.module.css"

function menu(props){

    return(
        <div className={styles.box}>
            <h3 style={{fontSize:"35px"}}>{props.name}</h3>
            -------------------------------------
            <p style={{paddingInline:"10px",textAlign:"center",fontSize:"25px"}}>{props.desc}</p>
        </div>
    )
}

export default menu