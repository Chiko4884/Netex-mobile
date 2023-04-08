import React, { useRef, useState } from "react";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CustomContext } from "../../Context";
import '../../Components/TorgovlyaComponents/userComponentCurr.scss';
import './userComponent_verif.scss';
import { useEffect } from "react";
import axios from "axios";
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'

function UserComponent_verif(){
    const {user, SetUser, statusVerification, SetStatusVerification} = useContext(CustomContext)

    const myRef = useRef(null);
    const [isClassName, setIsClassName] = useState('')
    useEffect(()=>{
        const width = myRef.current.clientWidth;
        const widthScr = myRef.current.scrollWidth;
        const isOverflowing = width < widthScr;

        if (isOverflowing) {
            setIsClassName("animate-text");
        } else {
            setIsClassName("not");
        }
    },[]);

    useEffect(()=>{
        const idCkeck = axios.get(`http://localhost:3030/verifydatausers/?userId=${user.id}`)
        .then((res)=>{if (res.data.length != 0) {SetStatusVerification(true);console.log('user verified')}}
        )
        .catch((err) => console.log(err.message))
    }, [])
console.log(`http://localhost:3030/verifydatausers/?userId=${user.id}`)

const [selectedAvatar, setSelectedAvatar] = useState(null)
function getImageFileObject(imageFile) {
    console.log( selectedAvatar )
  }
    return(
        <div className='user_block'>
        <div className='div_name_balance'>
        <ImageUploader className= 'avatar'
      onFileAdded={(img) => getImageFileObject(setSelectedAvatar(img))}
      style={{
        borderRadius:17,
        minHeight:34,
        minWidth:34,
        background: '##F3F3F3',
        position:"relative",
        marginRight:8
     }}
      deleteIcon='-'
      uploadIcon=''
    />
            <div className='div_name'>
            <h3 className={isClassName} id="animated_text" ref={myRef}>{user.name} {user.lastname}</h3>
                <p className={isClassName} id="animated_text" ref={myRef}>{user.email}</p>
            </div>
            <div className='separator'></div>
            <div className='div_balance1'>
                <div className='bal1'>
                <h3>Ваш баланс</h3>
                <p>0.000000</p>
                </div>
                <img className='logo_tether' src='./img/tetherIcon1.png'/>
            </div>
        </div>

        <div className='div_vyvod_popolnit'>

            <Link to='/vyvod' className='btn_vyvod'>
            <img className='logo_vyvod_popolnit' src='./img/vyvod1.png'/>
                <div className='div_txt'>
                <h3>Вывод</h3>
                <p>Вывод на карту</p>
                </div>
            </Link>
           
    <Link to='/popolnenie' className='btn_popolnenie'>  
            <img className='logo_vyvod_popolnit' src='./img/popolnit1.png'/>
                <div className='div_txt'>
                <h3>Пополнить</h3>
                <p>Пополнить баланс</p>
                </div>
    </Link>
        </div>

        <h1 className="limit_title">Лимиты за текущий день</h1>

        <div className="div_lim">
            <div className="limit"> <h3>Пополнение</h3><p>0.000000</p></div>
            <div className="limit"> <h3>Продажа</h3><p>0.000000</p></div>
            <div className="limit"> <h3>Покупка</h3><p>0.000000</p></div>
        </div>

        <div className="div_verification">
            {statusVerification && <img src="./img/verific_ok.png"/>}
            {!statusVerification && <img src="./img/verific_not.png"/>}
            <div className="verif_txt">
                <h1>Верификация аккаунта</h1>
                {statusVerification && <h3>Верифицирован</h3>}
                {!statusVerification && <h3>Не верефицирован</h3>}
            </div>
        </div>

    </div>
    )
}

export default UserComponent_verif;