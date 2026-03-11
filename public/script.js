document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;

    
    fetch("https://nirankari-travels.onrender.com/book", {
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
    fetch("https://nirankari-travels.onrender.com/admin-login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username:username,
            password:password
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


