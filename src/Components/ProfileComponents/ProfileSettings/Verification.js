import React, { useEffect, useRef, useState } from "react";
import HeaderComponent from "../../HeaderComponent";
import './verification.scss'
import { useNavigate } from "react-router"
import axios from 'axios';
import { CustomContext } from "../../../Context";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Select from 'react-select'
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'

function Verification(){
    const {user, SetUser, statusVerification, SetStatusVerification} = useContext(CustomContext)
    const navigate = useNavigate()
    let [verifDataUser, setVerifDataUser] = useState({})

    const [selectedImg1, setSelectedImg1] = useState(null)
    const [selectedImg2, setSelectedImg2] = useState(null)

    const setStatusVerif = ()=>{
        if (!statusVerification)
        {SetStatusVerification(true)}
    }
    const onSubmit = data => {     
                                    axios.post(`http://localhost:3030/verifydatausers`, (Object.assign({}, 
                                    data, 
                                    {userId: user.id}, 
                                    {country: valueCountry.label},
                                    {image1: selectedImg1.dataUrl},
                                    {image2: selectedImg2.dataUrl},
                                    )))
                                    .then(res=> console.log(res.data))
                                    .catch((err) => console.log(err.message))
                                    setStatusVerif()
                                    navigate(-1)
                             }; 


    const [objCountries, setObjCountries] =useState([])
    useEffect(()=> {
        axios.get('https://namaztimes.kz/ru/api/country' )
        .then((res)=>{setObjCountries(res.data)},
        )
        .catch((err) => console.log(err.message))
    }, [])

    const countryFunc = (event) => {
        let ddd0 = ''
        let ddd1 = ''
        let massiv = []
        for (let i = 0; i < Object.keys(event).length-1; i++) {
             ddd0 =  Object.keys(event)[i];
             ddd1 =  Object.values(event)[i];
             massiv.push({ value: ddd0, label: ddd1});
                }
          return  massiv   
    }

    const [valueCountry, setValueCountry] = useState('')
    const changeHandler = valueCountry => {
        setValueCountry(valueCountry)
      }

      const {register, handleSubmit,formState:{ errors, isValid }, formState}=useForm({
        mode: 'onBlur'
    })
    function getImageFileObject(imageFile) {
        console.log( selectedImg1 )
      }
      const imgPicker = useRef(null)
      const imgPicker2 = useRef(null)
      const handlePicker = ()=>{
        imgPicker.current.click()
      }
      const handlePicker2 = ()=>{
        imgPicker2.current.click()
      }

    return(
        <div className="korobka_verif">
            <HeaderComponent title =  '__Верификация аккаунта'/>
            <div className="verif_body">
            <div className="block_info">
                        <img src="./img/znak_predup.png"/>
                        <p>Идентификация счета необходима для предотвращения случаев мошенничества, противодействия отмыванию средств и финансирования терроризма.</p>
            </div>  
        <p className="instr_txt">- В поле «документ, удостоверяющий личность» загрузите сканированную копию или фото внутреннего или загран паспорта, водительское удостоверение, военный билет.</p>
        <p className="instr_txt">- В поле «документ, подтверждающий адрес проживания» загрузите сканированную копию или фото страницы прописки в паспорте (только если в качестве документа подтверждающего личность вы загрузили внутренний паспорт), либо любой официальный документ с печатью и адресом проживания на котором указаны Ваши данные.</p>
<h3 className="title_datas">Персональные данные</h3>
       
        <form onSubmit={handleSubmit(onSubmit)} className="data_form">

        <div className="divs_input">
    <h3>Имя</h3>       
    <input {...register ('name', {
        required: 'Заполните пожалуйста!',
    } )}
    defaultValue = {user.name}
    className='inp_name'
    // onChange={}
    />
        {errors?.name && (
        <label className="err_message" style={{color:'red'}}>{errors.name.message}</label>
    )} 
    </div>

    <div className="divs_input">
    <h3>Фамилия</h3>       
    <input {...register ('lastname', {
        required: 'Заполните пожалуйста!',
    } )}
    defaultValue = {user.lastname}
    className='inp_lastname'
    />
        {errors?.lastname && (
        <label className="err_message" style={{color:'red'}}>{errors.lastname.message}</label>
    )} 
    </div>

    <div className="divs_input">
    <h3>Дата рождения</h3>       
    <input {...register ('birthday', {
        required: 'Выберите дату пожалуйста!',
    } )}
    defaultValue = '15.15.2015'
    className='inp_birthday'
    type= 'date'
    />
        {errors?.birthday && (
        <label className="err_message" style={{color:'red'}}>{errors.birthday.message}</label>
        )} 
    </div>

    <div className="nomPassportInn">
                <div className="divs_input">
                <h3>Номер паспорта</h3>       
                <input {...register ('noPassport', {
                    required: 'Заполните пожалуйста!',
                } )}
                defaultValue = {user.noPassport}
                className='inp_noPassport'
                />
                    {errors?.noPassport && (
                    <label className="err_message" style={{color:'red'}}>{errors.noPassport.message}</label>
                )} 
                </div>

                <div className="divs_input">
                <h3>ИНН</h3>       
                <input {...register ('noInn', {
                    required: 'Заполните пожалуйста!',
                } )}
                defaultValue = {user.noInn}
                className='inp_noInn'
                />
                    {errors?.noInn && (
                    <label className="err_message" style={{color:'red'}}>{errors.noInn.message}</label>
                )} 
                </div>
    </div>
    
    <h3 className="title_datas">Адрес проживания</h3>

    <Select className="divs_input"
    options={countryFunc(objCountries)} 
    defaultInputValue='Кыргызстан'
    value={valueCountry} 
    onChange={changeHandler} 
    placeholder='Выбрать'
    styles={{
        control: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        border:'1px solid #CCCCCC',
        height: '48px',
        alignContent: 'center'
        }),
      }}
    />

<div className="divs_input">
    <h3>Город</h3>       
    <input {...register ('city', {
        required: 'Заполните пожалуйста!',
    } )}
    defaultValue = {user.city}
    className='inp_city'
    />
        {errors?.city && (
        <label className="err_message" style={{color:'red'}}>{errors.city.message}</label>
    )} 
</div>
<div className="divs_input">
    <h3>Адрес</h3>       
    <input {...register ('address', {
        required: 'Заполните пожалуйста!',
    } )}
    defaultValue = {user.address}
    className='inp_address'
    />
        {errors?.address && (
        <label className="err_message" style={{color:'red'}}>{errors.address.message}</label>
    )} 
</div>

<div className="div_document_title">Документ, удостоверяющий личность</div>

<div className="document_identity">
<ImageUploader 
      onFileAdded={(img) => getImageFileObject(setSelectedImg1(img))}
      style={{
        borderRadius:10,
        minHeight:75,
        minWidth:80,
        minWidth:120,
        background: '##F3F3F3',
        position:"absolute",
     }}
      deleteIcon=''
      uploadIcon={<img ref={imgPicker} src="./img/verif_icon1.png" alt="icon"/>}
      
    />

    <div className="div_txt_btn">
        <p>Документ, удостоверяющий личность</p>
        <button type="button" className="btn_choose" onClick={handlePicker}>Выбрать файл
        </button>
    </div>
</div>
<div className="document_identity">
<ImageUploader className= 'img_uploader'
      onFileAdded={(img) => getImageFileObject(setSelectedImg2(img))}
      style={{
        borderRadius:10,
        minHeight:75,
        minWidth:120,
        background: '##F3F3F3',
        position:"absolute"
     }}
      deleteIcon=''
      uploadIcon={<img ref={imgPicker2} src="./img/verif_icon2.png" alt="icon"/>}
    />
    <div className="div_txt_btn">
        <p>Документ, подтверждающий адрес проживания</p>
        <button type="button" className="btn_choose" onClick={handlePicker2} >Выбрать файл</button>
    </div>
</div>

<button 
    onClick={handleSubmit(onSubmit)}
    className="submit_btn_verif" 
    type="submit" 
    disabled = {!selectedImg1 || !selectedImg2 || !isValid}>
        <p>Далее</p>
    </button>
        </form>

            </div>
 
        </div>
    )
}
export default Verification