document.getElementById('form_contact').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(document.getElementById('form_contact'));
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'contact.php');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.error === false) {
                document.getElementById('form_contact_message').innerHTML = '<p class="success">' + response.msg + '</p>';
                document.getElementById('form_contact_submit').innerHTML = 'Message Sent';
                document.getElementById('form_contact_submit').disabled = true;
            } else {
                document.getElementById('form_contact_message').innerHTML = '<p class="error">' + response.msg + '</p>';
            }
        } else {
            document.getElementById('form_contact_message').innerHTML = '<p class="error">There was an error when trying to send your message. Please try again, or send an email directly at <a href="mailto:mail@yourdomain.com">mail@yourdomain.com</a>.</p>';
        }
    }
    xhr.send(formData);
});
