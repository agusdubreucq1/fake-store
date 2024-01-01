import React, { useEffect, useId } from 'react';
import styles from '../styles/modal.module.css'

interface Props {
    show: boolean
    cerrarModal: () => void
    texto: string
    funcion: () => void;
}

const Modal: React.FC<Props> = ({ texto, funcion, show, cerrarModal }) => {
    // const id = useId();

    // useEffect(() => {
    //     console.log('show', show)
    //     const modal = document.querySelector('.modal') as any;
    //     if (show) modal?.showModal();
    //     else modal?.close();
    // }, [show])



    return (
        <>
        <dialog className={styles.dialog} open={show}>
            <form method="dialog" >
                <p className={styles.texto}>{texto}</p>
                <div className={styles.btns}>
                    <button type='button' onClick={funcion}>Aceptar</button>
                    <button type='submit' onClick={cerrarModal}>Cerrar</button>
                </div>
            </form>
        </dialog>
        {show && <div className={styles.backdrop}></div>}
        </>
        
    );
};

export default Modal