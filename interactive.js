/*=============================Button-larda active yerdeyismesi=================*/
const navButtons=document.querySelectorAll('#nav button');
const dateButtons=document.querySelectorAll('.miniBtns.btn1 button');
const currencyButtons=document.querySelectorAll('.miniBtns.btn2 button');
const durationsButtons=document.querySelectorAll('#durations button');


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
Actived(dateButtons, 'rightActive');
Actived(currencyButtons, 'leftActive');
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

let kreditResult=document.getElementById("kreditresult");
const range1 = document.querySelector('.range1'); 
const range2 = document.querySelector('.range2'); 
const range3 = document.querySelector('.range3'); 

class Credit {
  constructor(menbleg, muddet, derece) {
    this.amount = menbleg;
    this.duration = muddet;
    this.interestRate = derece;
  }
}

let credit = new Credit(range1.value, range2.value, range3.value);

function updateCreditResult() {
  kreditResult.textContent = `${((credit.amount * credit.duration * credit.interestRate)/1000).toFixed(2)} ₼`;
}

range1.addEventListener('input', function() {
  credit.amount = Number(this.value);
  updateCreditResult();
});

range2.addEventListener('input', function() {
  credit.duration = Number(this.value);
  updateCreditResult();
});

range3.addEventListener('input', function() {
  credit.interestRate = Number(this.value);
  updateCreditResult();
});

