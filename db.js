const form = document.querySelector('form');

// save documents
form.addEventListener('submit', e => {
    e.preventDefault();
  
    const now = new Date();
    const contact = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };
  
    db.collection('contact').add(contact).then(() => {
      console.log('contact added');
    }).catch(err => {
      console.log(err);
    });
  });