document.getElementById('generateBtn').addEventListener('click', function() {
    const qrInput = document.getElementById('qrInput').value;
    const qrCodeContainer = document.getElementById('qrCode');

    qrCodeContainer.innerHTML = ''; 

    if (qrInput) {
        $(qrCodeContainer).qrcode({
            width: 200,
            height: 200,
            text: qrInput
        });
    } else {
        alert('Please enter a URL or text!');
    }
});
