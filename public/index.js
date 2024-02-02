/* const sendEmailBtn = document.getElementById('sendEmail');
async function sendEmail() {
    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
   


    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to, subject, message }),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error(error);
      alert('Error sending email');
    }
  }

 
  sendEmailBtn.addEventListener('click', (e)=>{
e.preventDefault();
sendEmail()
  }) */