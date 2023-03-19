import React from "react";
import HeaderComponent from "../Components/HeaderComponent";
import './kakNachat.scss'
import ReactPlayer from 'react-player'

function KakNachat(){
    return(
        <div className="korobka_kak">
            <HeaderComponent title = 'Как начать?' />
        <div className="body_kak">
           <div className="div_video">
                <ReactPlayer light={<img src='./img/video_img.png' alt='Thumbnail' />}
                url={'https://www.youtube.com/watch?v=iSO4Ix9sS0g'}
                playing={true}
                controls={false}
                // width = {'100vw'}
                // height = {'33vh'}

                />
           </div>
        </div>

        </div>
    )
}

export default KakNachat