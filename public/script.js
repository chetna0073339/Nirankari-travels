document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;

    fetch("http://localhost:5000/book", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            phone: phone,
            service: service
        })
    })
    .then(res => res.json())
    .then(data => {
        alert("Booking Successful! We will contact you.");
    })
    .catch(err => {
        console.error(err);
    });
});