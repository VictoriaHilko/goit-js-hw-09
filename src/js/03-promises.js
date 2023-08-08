import { Notify } from "notiflix";

const refs = {
  form: document.querySelector('.form')
};

refs.form.addEventListener('submit', onCreatePromise);


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({position, delay});
    } else {
      reject({position, delay});
    }
    }, delay);
  });
}


function onCreatePromise(event) {
  event.preventDefault();
  // console.log(event.currentTarget);

  const formData = new FormData(event.currentTarget);
  const dataParams = {};


  for (const [key, value] of formData.entries()) {
    dataParams[key] = Number(value);
  }

  let { amount, step, delay } = dataParams;

  for (let i = 1; i <= amount; i += 1) {

    createPromise(i, delay)
    .then(onSuccess)
    .catch(onError);

    delay += step;

    refs.form.reset();
  }
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);
}

