import { useEffect } from 'react';

export const useDisableBodyScroll = (open) => {
    useEffect(() => {
    // let chatIcon = document.querySelector('.app__chatIcon');
    // let chatOnline = document.querySelector('.app__chatOnline')

    if (open) {
        document.body.style.paddingRight = `${scrollbarWidth()}px`;
        // chatIcon.style.display = 'none';
        // chatOnline.style.display = 'none';
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.paddingRight = '0px';
        // chatIcon.style.display = 'block';
        // chatOnline.style.display = 'block';
        document.body.style.removeProperty('overflow');
    }
}, [open]);
};

//Функция расчитывает и возвращает  шируну скроллбара
export const scrollbarWidth = () => {
	//Отключить полосы прокрутки в теле
	document.body.style.overflow = 'hidden';
	var width = document.body.clientWidth;
 
	// Полоса прокрутки
	document.body.style.overflow = 'scroll';
 
	width -= document.body.clientWidth;
 
	// IE в стандартном режиме
	if(!width) width = document.body.offsetWidth-document.body.clientWidth;
 
	// восстановить исходные настройки
	document.body.style.overflow = '';
 
	return width;
}


        