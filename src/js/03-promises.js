import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const [delay, step, amount, button] = form;

function onFormSubmit(evt) {
  evt.preventDefault();

  const firstDelay = Number(delay.value); 
  const delayIncrement = Number(step.value);
  const qtyCallFn = Number(amount.value);
  let currentDelay = firstDelay;
  
  for (let i = 0; i < qtyCallFn; i++) {
    createPromise(i + 1, currentDelay);
    
    currentDelay += delayIncrement;
  }

  form.reset();
}

function createPromise(position, delay) {  
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, `${delay}`);
  });

  promise.then(result => {
    Notiflix.Notify.success(result);
  });
  
  promise.catch(error => {
    Notiflix.Notify.failure(error);
  });
};

form.addEventListener('submit', onFormSubmit);