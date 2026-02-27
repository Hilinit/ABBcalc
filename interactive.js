/*=============================Button-larda active yerdeyismesi=================*/
const navButtons = document.querySelectorAll('#nav button');
const dateButtons = document.querySelectorAll('.miniBtns.btn1 button');
const currencyButtons = document.querySelectorAll('.miniBtns.btn2 button');
const durationsButtons = document.querySelectorAll('.durations button');  /* id="durations" → class="durations" */

function Actived(buttons, clas) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove(clas);
      }
      this.classList.add(clas);
    });
  }
}
Actived(navButtons, 'active')
Actived(dateButtons, 'rightActive');
Actived(currencyButtons, 'leftActive');
Actived(durationsButtons, 'deepActive')

/*=================================Display================================ */

const kredit = document.getElementById("kredit")
const depozit = document.getElementById("depozit")
const avtoKredit = document.getElementById("AvtoKredit")
const ipoteka = document.getElementById("Ipoteka")

function vizible(clicked) {
  kredit.style.display = 'none';
  depozit.style.display = 'none';
  avtoKredit.style.display = 'none';
  ipoteka.style.display = 'none';

  if (clicked == 'kredit') kredit.style.display = 'flex';
  if (clicked == 'depozit') depozit.style.display = 'flex';
  if (clicked == 'AvtoKredit') avtoKredit.style.display = 'flex';
  if (clicked == 'Ipoteka') ipoteka.style.display = 'flex';
}

/*==================================================Credit==================================*/
const kreditResult = document.querySelector(".kreditResult");
const range1 = document.querySelector('.range1');
const range2 = document.querySelector('.range2');
const range3 = document.querySelector('.range3');
const money = document.querySelector('.money');
const date = document.querySelector('.date');
const rate = document.querySelector('.rate');

class Credit {
  constructor(mebleg, muddet, derece) {
    this.amount = mebleg;
    this.duration = muddet;
    this.interestRate = derece;
  }
}
const credit = new Credit(range1.value, range2.value, range3.value);

function updateCredit() {
  kreditResult.innerHTML = `${(Math.floor((credit.amount * credit.duration * credit.interestRate) / 1000))} ₼`
  money.innerHTML = `${range1.value}₼`
  date.innerHTML = `${range2.value}ay`
  rate.innerHTML = `${range3.value}%`
}
range1.addEventListener('input', function () {
  credit.amount = Number(this.value)
  updateCredit();
});

range2.addEventListener('input', function () {
  credit.duration = Number(this.value);
  updateCredit();
});

range3.addEventListener('input', function () {
  credit.interestRate = Number(this.value);
  updateCredit();
});

/*=====================================================Depozit========================*/
const depozitResult = document.querySelector(".depozitResult");
const range4 = document.querySelector('.range4');
const money1 = document.querySelector('.money1');
const moneytwo = document.querySelector('.moneytwo');
const rate1 = document.querySelector('.rate1');
const rightcurr = document.querySelectorAll('.miniBtns.btn2 button');
const leftdate = document.querySelectorAll('.miniBtns.btn1 button');

class Depozit {
  constructor(mebleg) {
    this.amount = mebleg;
  }
}
const depo = new Depozit(range4.value);

function updateDepozit() {
  depozitResult.innerHTML = `${(depo.amount * 12)} ₼`
  money1.innerHTML = `${range4.value}₼`
  moneytwo.innerHTML = `${range4.value}₼`

  for (let element of Ratebuttons) {
    element.addEventListener("click", function () {
      depozitResult.innerHTML = `${Math.floor(element.value * 0.04 * range4.value)}₼`;
      rate1.innerHTML = `${element.value}%`;
      moneytwo.innerHTML = `${range4.value * element.value / 100}₼`
    });
  }
  for (let element of leftdate) {
    element.addEventListener("click", function () {
      moneytwo.innerHTML = `${Math.floor(range4.value * element.value * 5)}₼`
    });
  }
  for (let element of rightcurr) {
    element.addEventListener("click", function () {
      money1.innerHTML = `${range4.value}${element.value}`
      depozitResult.innerHTML = `${(depo.amount * 12)} ${element.value}`
    });
  }
}
range4.addEventListener('input', function () {
  depo.amount = Number(this.value)
  updateDepozit();
});

/*=====================================================AvtoKredit========================*/
const avtoResult = document.querySelector(".avtoResult");
const range5 = document.querySelector('.range5');
const range6 = document.querySelector('.range6');
const range7 = document.querySelector('.range7');
const money2 = document.querySelector('.money2');
const date2 = document.querySelector('.date2');
const rate2 = document.querySelector('.rate2');

const av1 = document.querySelector('.av1');
const av2 = document.querySelector('.av2');
const av3 = document.querySelector('.av3');
const av4 = document.querySelector('.av4');

const topBtns = document.querySelectorAll('.topBtn');

class avtoCredit {
  constructor(mebleg, muddet, derece) {
    this.amount = mebleg;
    this.duration = muddet;
    this.interestRate = derece;
  }
}
const AvtoCredit = new avtoCredit(range5.value, range6.value, range7.value);

function updateAvtoCredit() {
  avtoResult.innerHTML = `${(Math.floor((range5.value * range6.value * range7.value) / 1000))} ₼`
  money2.innerHTML = `${range5.value}₼`
  date2.innerHTML = `${range6.value}ay`
  rate2.innerHTML = `${range7.value}%`

  av1.innerHTML = `${range5.value * range6.value}₼`
  av2.innerHTML = `${range7.value}%`
  av3.innerHTML = `${range6.value * range5.value}₼`
  av4.innerHTML = `${(Math.floor(range7.value * range6.value * range5.value / 100))} ₼`

  for (let element of topBtns) {
    element.addEventListener("click", function () {
      depozitResult.innerHTML = `${Math.floor(element.value * 0.04 * range4.value)}₼`;
      av2.innerHTML = `${Math.floor(range5.value * element.value / 100)}₼`
      av4.innerHTML = `${(Math.floor(element.value * range6.value * range5.value / 100))} ₼`
    });
  }
}
range5.addEventListener('input', function () {
  AvtoCredit.amount = Number(this.value)
  updateAvtoCredit();
});
range6.addEventListener('input', function () {
  AvtoCredit.duration = Number(this.value)
  updateAvtoCredit();
});
range7.addEventListener('input', function () {
  AvtoCredit.interestRate = Number(this.value)
  updateAvtoCredit();
});

/*=====================================================Ipoteka========================*/

const ipotekResult = document.querySelector(".ipotekResult");
const range8 = document.querySelector('.range8');
const range9 = document.querySelector('.range9');
const money3 = document.querySelector('.money3');
const date3 = document.querySelector('.date3');

const ipo1 = document.querySelector('.ipo1');
const ipo2 = document.querySelector('.ipo2');

const Ratebuttons = document.querySelectorAll(".rateBtn");  /* id seçici yox idi, dəyişiklik lazım deyil */

class Ipotek {
  constructor(mebleg, muddet) {
    this.amount = mebleg;
    this.duration = muddet;
  }
}
const ipotek = new Ipotek(range8.value, range9.value);

function updateIpotek() {
  ipotekResult.innerHTML = `${(Math.floor((ipotek.amount * ipotek.duration) / 1000))} ₼`
  money3.innerHTML = `${range8.value}₼`
  date3.innerHTML = `${range9.value}il`
  ipo1.innerHTML = `${range8.value}₼`

  for (let element of Ratebuttons) {
    element.addEventListener("click", function () {
      ipotekResult.innerHTML = `${Math.floor(element.value * range8.value / 1000)}₼`;
      ipo2.innerHTML = `${element.value}%`;
    });
  }
}
range8.addEventListener('input', function () {
  ipotek.amount = Number(this.value)
  updateIpotek();
});
range9.addEventListener('input', function () {
  ipotek.duration = Number(this.value)
  updateIpotek();
});

/*============================================================================================= */