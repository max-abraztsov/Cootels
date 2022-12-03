import '../scss/style.scss';
import '../scss/zero.scss';
import '../css/style.css';
import '../img/Cootels.svg';
import '../img/Ellipse 1.svg';
import '../img/Group.png';
import '../img/image 10.jpg';
import '../img/image 11.jpg';
import '../img/image 13.jpg';
import '../img/image 18.jpg';
import '../img/image 21.jpg';
import '../img/Stroke.svg';
import '../img/Vector.png';
import '../img/Vector2.png';
import '../img/meritt-thomas-u-Hb93V6IWI-unsplash 1.jpg';
import '../img/meritt-thomas-u-Hb93V6IWI-unsplash 2.jpg';
import '../img/meritt-thomas-u-Hb93V6IWI-unsplash 3.jpg';
import '../img/ian-keefe-OgcJIKRnRC8-unsplash 1.jpg';
import '../img/logo.svg';

window.addEventListener('DOMContentLoaded', ()=>{

    const level = document.querySelector(".level");
    const levelItems = level.querySelectorAll(".level__item");
    const sideButtons = level.querySelectorAll(".level__sidebutton");
    const listDescription = level.querySelectorAll(".level__list-description");

    const client = document.querySelector(".client");
    const clientParentItems = client.querySelector(".client__items");
    const clientPoints = client.querySelectorAll(".client__point");

    const header = document.querySelector(".header");
    const headerItems = header.querySelectorAll(".header__item");
    const headerStroke = header.querySelector(".header__stroke");

    const modal = document.querySelector(".modal");
    const modalCross = modal.querySelector(".modal__cross");
    const back = document.querySelector('.back-black');

    const deadline = addDateToLocal('2023-01-01');
    const modalTimer = document.querySelector('.modal__timer');
    const modalHours = modalTimer.querySelector('.modal__hours');
    const modalDays = modalTimer.querySelector('.modal__days');
    const modalMinuts = modalTimer.querySelector('.modal__minuts');
    const modalSeconds = modalTimer.querySelector('.modal__seconds');

    const home = document.querySelector('.home');
    const rooms = document.querySelector('.rooms');

    // functions for local storage

    function addDateToLocal(date){
        localStorage.setItem('finalDate', date);
        return date;
    }

    function getDateFromLocal(item){
        return localStorage.getItem(item);
        
    }


    // Functions for tabs /////////////////////////////////////////////
    function strokeEditAdd(index){
        for (const item of sideButtons[index].children){
            item.style.background = "#FFFFFF";
        };
        sideButtons[index].style.background = "#FF620A";
        sideButtons[index].style.transform = "rotate(0deg)";
        sideButtons[index].style.width = "42px";
    }

    function strokeEditRemove(){
        sideButtons.forEach((item, index, array)=>{
            for (const item of sideButtons[index].children){
                item.style.background = "";
            }
            sideButtons[index].style.background = "";
            sideButtons[index].style.transform = "rotate(180deg)";
            sideButtons[index].style.width = "";
        });
    }

    function editTextBlock(index){
        levelItems[index].style.height = "178px";
        setTimeout(()=>{
            listDescription[index].style.opacity = "1";
        },100);
    }

    function unEditTextBlock(){
        levelItems.forEach((item, index, array) => {
            item.style.height = "";
        });
        listDescription.forEach((item,index,array) => {
            item.style.opacity = "0";
        });
    }

    function addActive(item){
        item.classList.add('active');
    }

    function removeActive(arr){
        arr.forEach((item,index,array)=>{
            item.classList.remove('active');
        });
    }

    // Functions for tabs ////////////////////////////////////////////

    editTextBlock(0);
    strokeEditAdd(0);
    sideButtons.forEach((item, index, array)=>{
        item.addEventListener('click', ()=>{
            if(!listDescription[index].classList.contains('active')){
                removeActive(listDescription);
                unEditTextBlock();
                strokeEditRemove(index);
                addActive(listDescription[index]); 
                editTextBlock(index);
                strokeEditAdd(index); 
            } else {
                removeActive(listDescription);
                unEditTextBlock();
                strokeEditRemove(index);
            }
        });
    });

    // functions for slider

    let numberOfItems = clientParentItems.children.length;
    clientParentItems.style.width = `${numberOfItems*793}px`;
    addStylesForPoint(0);

    function deleteStylesForPoints(){
        clientPoints.forEach((item,index,array) => {
            item.style.cssText = ``;
        });
    }

    function addStylesForPoint(index){
        clientPoints[index].style.cssText = `
                width:10px;
                height: 10px;
                background-color: #FAB047;
            `;
    }

    clientPoints.forEach((item, index, array) =>{
        item.addEventListener('click', ()=>{
            deleteStylesForPoints();
            clientParentItems.style.right = `${index*793}px`;
            addStylesForPoint(index);
        });
    });

    // functions for stroke

    headerItems.forEach((item, index, array) => {
        item.addEventListener('click', () => {
            headerStroke.style.width = `${headerItems[index].offsetWidth}px`;
            headerStroke.style.marginLeft = `${headerItems[index].offsetLeft}px`;
        });
    });

    // function for modal
    
    function closeModal(){
        modal.style.display = 'none';
        back.style.display = 'none';
    }

    function setEnableDisableScroll(){
        document.body.style.overflow = 'hidden';
    }

    setTimeout(() => {
        setEnableDisableScroll();
        modal.style.display = 'block';
        modal.style.top = `${window.pageYOffset+(0.25 * document.documentElement.clientHeight)}px`;
        back.style.width = `${document.documentElement.clientWidth}px`;
        back.style.height = `100%`;
        back.style.top = `${window.pageYOffset}px`;
        back.style.display = 'block';

    }, 3000);

    modalCross.addEventListener('click', ()=>{
        closeModal();
        document.body.style.overflow = '';
    });

    // functions for timer
    
    function getTime(){
        const time = Date.parse(deadline)-Date.parse(new Date),
            days = Math.floor(time / 1000 / 60 / 60 / 24),
            hours = Math.floor(time / 1000 / 60 / 60 % 24),
            minuts = Math.floor(time / 1000 / 60 % 60),
            seconds = Math.floor(time / 1000 % 60);

        return {
            days: days,
            hours: hours,
            minuts: minuts,
            seconds: seconds,
        }
    }

    function AddZero(item){
        if (item < 10){
            return `0${item}`;
        }else {
            return item;
        }
    } 

    function reloadTimer(){
        const objTime = getTime();
        modalSeconds.innerHTML = `${AddZero(objTime.seconds)}`;
        modalMinuts.innerHTML = `${AddZero(objTime.minuts)}`;
        modalHours.innerHTML = `${AddZero(objTime.hours)}`;
        modalDays.innerHTML = `${AddZero(objTime.days)}`;
    }

    setInterval(reloadTimer,1000);

    // functions for scroll

    function addScroll(clickElement,scrollElement){
        clickElement.addEventListener('click', (event) => {
            event.preventDefault();
            setTimeout(()=>{
                window.scroll({
                    left: 0,
                    top:scrollElement.offsetTop,
                    behavior: 'smooth',
                })
            }, 500);
            // window.scroll({
            //     left: 0,
            //     top:scrollElement.offsetTop,
            //     behavior: 'smooth',
            // })
        });
    }

    addScroll(headerItems[0],rooms);
    addScroll(headerItems[1],home);
    addScroll(headerItems[2],level);

    const date = getDateFromLocal('finalDate');
    console.log(date);

    

    function sendRequest(){
        const requestURL = 'https://jsonplaceholder.typicode.com/users';

    const xhr = new XMLHttpRequest();

    xhr.open('GET', requestURL);

    xhr.onload = () => {
        if (xhr.status >= 400){
            console.error(xhr.response);
        }else{
            console.log(JSON.parse(xhr.response)); 
        }
    }

    xhr.onerror = () => {
        console.log(xhr.response);
    }

    xhr.send();
    }
});
