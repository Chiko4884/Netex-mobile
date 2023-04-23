import React, { useContext, useEffect, useState } from "react";
import './avatar.scss'
import { CustomContext } from "../Context";
import axios from "axios";

function Avatar() {
    const {user, SetUser} = useContext(CustomContext);
 const [avatar, SetAvatar] = useState('');

 useEffect(()=>{
    let path_a = './img/uploads/uid_'+ user.id +'_avatar.jpg'
    axios.get(`http://localhost:3030/pathAvatar/?user_avatar=${path_a}`)
    .then((res)=>{if (res.data.length > 0) {SetAvatar(res.data[0].user_avatar);console.log('user av', res.data)}}
    )
    .catch((err) => console.log(err.message))
}, [user.id])
    
    const [changeAvatar, setChangeAvatar] = useState(false);
    const togglechangeAvatar = () => {
        setChangeAvatar(!changeAvatar);
    };

    const uploadAvatar = async (file) => {
        const formData = new FormData()
        formData.append('id', user.id)
        formData.append('avatar', file)

        try {
            const res = await axios.post(`http://localhost:3031/upload`, formData)
            console.log(res.data.message);
            console.log(res.data.filePath); // Используем полученный путь
            SetAvatar('./img/uploads/' + res.data.filePath) 
            console.log(res.data.filePath); 

            await axios.post(`http://localhost:3030/pathAvatar`, {user_avatar: './img/uploads/' + res.data.filePath}, )
            .then(res=> console.log(res.data))
            .catch((err) => console.log(err.message))

        } catch (error) {
            console.log(error.message);
        }
    };

    const deleteAvatar = async () => {
        try {
            const res = await axios.delete(`http://localhost:3031/upload/uid_${user.id}_avatar.jpg`);
            console.log(res.data);
            SetAvatar(null);
        } catch (error) {
            console.log(error.message);
        }
    };

    const changeHandler = (e) => {
        const file = e.target.files[0]
        uploadAvatar(file);
    };

    console.log('avatar', avatar);

    return (
        <div>
            {avatar && (
                <img
                    className='avatar'
                    onClick={togglechangeAvatar}
                    src= {avatar}
                    alt="avatar"
                />
            )}
            
            {!avatar && (
                <img
                className='avatar'
                onClick={togglechangeAvatar}
                src= './img/user_default.png'
                alt="avatar"
            />
            )}
    {/* <img src="./img/uploads/uid_20_avatar.jpg"/> */}
        {changeAvatar &&  <div onClick={togglechangeAvatar} className="back_blur">  </div>}
        {changeAvatar && <div className="toggle_avatar">
            <input type="file" accept="image/*" onChange={(e)=>changeHandler(e)} className="load_avatar"/>
            <button  type="button" onClick={deleteAvatar} className="del_avatar">Удалить аватар</button>
            </div>}
        </div>
    )
}

export default Avatar