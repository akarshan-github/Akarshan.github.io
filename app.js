function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_3anoy2c";
    const templateID = "template_c8gm14d";

    emailjs
        .send(serviceID,templateID,params)
        .then(res=>{
                document.getElementById("name").value="";
                document.getElementById("email").value="";
                document.getElementById("subject").value="";
                document.getElementById("message").value="";
                console.log(res);
                alert("Your message sent successfully");
        })
        .catch(err=>console.log(err));
}
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
    
})();

