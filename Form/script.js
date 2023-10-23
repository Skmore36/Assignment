document.addEventListener("DOMContentLoaded", function () {
    const surveyForm = document.getElementById("surveyForm");
    const popup = document.getElementById("popup");
    const popupData = document.getElementById("popupData");
    const closePopup = document.getElementById("closePopup");
    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");

    submitBtn.addEventListener("click", function () {
        if (surveyForm.checkValidity()) {
            // Collect form data
            const formData = new FormData(surveyForm);
            let dataHtml = "<h2>Survey Form Data</h2>";
            dataHtml += "<ul>";
            for (const [key, value] of formData.entries()) {
                const label = surveyForm.querySelector(`label[for="${key}"]`).textContent;
                dataHtml += `<li><strong>${label}:</strong> ${value}</li>`;
            }
            dataHtml += "</ul>";

            // Display form data in the popup
            popupData.innerHTML = dataHtml;
            popup.style.display = "block";
        }
    });

    resetBtn.addEventListener("click", function () {
        surveyForm.reset();
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
