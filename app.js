const IMAGE1 = document.querySelector('.ImageTransform');
const IMAGE2 = document.querySelector('.ImageStandout');
const IMAGE3 = document.getElementById('image_box1');
const IMAGE4 = document.getElementById('image_box2');
const MENU_BTN = document.querySelector('.MenuBtn');
const BACKDROP = document.getElementById('backdrop');



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
	document.querySelector('.MenuBar').classList.toggle('visible');
};
MENU_BTN.addEventListener('click', MenuBtnHandler);
