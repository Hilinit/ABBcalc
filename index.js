/*=============================Button-larda active yerdeyismesi=================*/

const navButtons=document.querySelectorAll('#nav button');
const dateButtons=document.querySelectorAll('#date button');
const durationsButtons=document.querySelectorAll('#durations button');

// for (let i=0; i<navButtons.length; i++) {
//   navButtons[i].addEventListener('click', function () {
//     for (let j=0; j<navButtons.length; j++) {
//       navButtons[j].classList.remove('active');
//     }
//     this.classList.add('active');
//   });
// }
// for (let i=0; i<dateButtons.length; i++) {
//   dateButtons[i].addEventListener('click', function () {
//     for (let j=0; j<dateButtons.length; j++) {
//       dateButtons[j].classList.remove('deepActive');
//     }
//     this.classList.add('deepActive');
//   });
// }
// for (let i=0; i<durationsButtons.length; i++) {
//     durationsButtons[i].addEventListener('click', function () {
//       for (let j=0; j<dateButtons.length; j++) {
//         durationsButtons[j].classList.remove('deepActive');
//       }
//       this.classList.add('deepActive');
//     });
// }

function Actived(buttons, clas) {
    for (let i=0; i<buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        for (let j=0; j<buttons.length; j++) {
          buttons[j].classList.remove(clas);
        }
        this.classList.add(clas);
      });
    }
}
  
Actived(navButtons,'active')
Actived(dateButtons,'deepActive')
Actived(durationsButtons,'deepActive')

  /*=================================Display================================ */

  const kredit=document.getElementById("kredit")
  const depozit=document.getElementById("depozit")
  const avtoKredit=document.getElementById("AvtoKredit")
  const ipoteka=document.getElementById("Ipoteka")
  
  function vizible(clicked){
      kredit.style.display='none';
      depozit.style.display='none';
      avtoKredit.style.display='none';
      ipoteka.style.display='none';
  
      if(clicked=='kredit') kredit.style.display='flex';
      if(clicked=='depozit') depozit.style.display='flex';
      if(clicked=='AvtoKredit') avtoKredit.style.display='flex';
      if(clicked=='Ipoteka') ipoteka.style.display='flex';
} 