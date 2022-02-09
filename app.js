const IMAGE1 = document.querySelector('.ImageTransform');
const IMAGE2 = document.querySelector('.ImageStandout');
const IMAGE3 = document.getElementById('image_box1');
const IMAGE4 = document.getElementById('image_box2');
const [MENU_BTN, CLOSE_BTN] = document.querySelectorAll('.MenuBtnIcon');
const BACKDROP = document.getElementById('backdrop');



const BackDrop = () => {
	BACKDROP.classList.toggle('visible');
};

const StopScroll = () => {
	document.body.classList.toggle('StopScroll');
};

const BackDropHandler = () => {
	BackDrop();
   StopScroll();
   if (CLOSE_BTN.classList.contains('hidden')) {
		MENU_BTN.classList.add('hidden');
		CLOSE_BTN.classList.remove('hidden');
	} else if (MENU_BTN.classList.contains('hidden')) {
		MENU_BTN.classList.remove('hidden');
		CLOSE_BTN.classList.add('hidden');
   }
   document.querySelector('.MenuBar').classList.toggle('visible');
   
};

if (window.innerWidth > 767) {
	IMAGE1.innerHTML = `
   <img
      src="/images/desktop/image-transform.jpg"
		width="100%" alt=""  height="100%"
   />
   `;
	IMAGE2.innerHTML = `
   <img
      src="/images/desktop/image-stand-out.jpg"
		width="100%" height="100%" alt=""
   />
   `;
	IMAGE3.innerHTML = `
   <div >
	   <img
		src="/images/desktop/image-gallery-milkbottles.jpg"
		alt="" width="100%" height="100%"
		/>
	</div>
	<div>
	   <img
		src="/images/desktop/image-gallery-orange.jpg"
		alt="" width="100%" height="100%"
		/>
	</div>
   `;
	IMAGE4.innerHTML = `
   <div >
	   <img
		src="/images/desktop/image-gallery-cone.jpg"
		alt="" width="100%" height="100%"
		/>
	</div>
	<div>
	   <img
		src="/images/desktop/image-gallery-sugarcubes.jpg"
		alt="" width="100%" height="100%"
		/>
	</div>
   `;
}
const MenuBtnHandler = () => {
   BackDropHandler();
	document.querySelector('.MenuBar').classList.toggle('visible');
};


MENU_BTN.addEventListener('click', MenuBtnHandler);
CLOSE_BTN.addEventListener('click', MenuBtnHandler);
BACKDROP.addEventListener('click', BackDropHandler);

