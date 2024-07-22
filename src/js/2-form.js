const form = document.querySelector('.feedback-form');
let formData = {email: "", message: ""};
const email = form.elements.email;
const message = form.elements.message;
const localStorageKey = 'feedback-form-state';

const storageData = localStorage.getItem(localStorageKey);

if (storageData) {
  const data = JSON.parse(storageData);
  formData = data;
  email.value = data.email;
  message.value = data.message;
}


form.addEventListener('input', (e) => {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
})

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields')
    return
  }

  console.log(formData)
  formData = {email: "", message: ""}
  localStorage.removeItem(localStorageKey);
  form.reset();
});