// Тарифы хранения (руб/день)
const storageRates = {
    "20dc": [
        { days: "1-5", rate: 0 },
        { days: "6-8", rate: 1650 },
        { days: "9-11", rate: 2200 },
        { days: "12-14", rate: 3300 },
        { days: "15+", rate: 4950 }
    ],
    "40dc": [
        { days: "1-5", rate: 0 },
        { days: "6-8", rate: 3300 },
        { days: "9-11", rate: 4400 },
        { days: "12-14", rate: 6600 },
        { days: "15+", rate: 9900 }
    ],
    "40href": [
        { days: "1-5", rate: 4200 },
        { days: "6-10", rate: 8400 },
        { days: "11+", rate: 10500 }
    ],
    "imo20dc": [
        { days: "1-5", rate: 0 },
        { days: "6-8", rate: 2750 },
        { days: "9-11", rate: 3300 },
        { days: "12-14", rate: 4950 },
        { days: "15+", rate: 7200 }
    ],
    "imo40dc": [
        { days: "1-5", rate: 0 },
        { days: "6-8", rate: 5500 },
        { days: "9-11", rate: 6600 },
        { days: "12-14", rate: 9900 },
        { days: "15+", rate: 14400 }
    ]
};

// Тарифы демереджа (USD/день)
const demurrageRates = {
    "20dc": {
        "default": [
            { days: "1-14", rate: 0 },
            { days: "15-21", rate: 30 },
            { days: "22+", rate: 60 }
        ],
        "moscow": [
            { days: "1-21", rate: 0 },
            { days: "22-28", rate: 30 },
            { days: "29+", rate: 60 }
        ],
        "far": [
            { days: "1-28", rate: 0 },
            { days: "29-35", rate: 30 },
            { days: "36+", rate: 60 }
        ]
    },
    "40dc": {
        "default": [
            { days: "1-14", rate: 0 },
            { days: "15-21", rate: 60 },
            { days: "22+", rate: 120 }
        ],
        "moscow": [
            { days: "1-21", rate: 0 },
            { days: "22-28", rate: 60 },
            { days: "29+", rate: 120 }
        ],
        "far": [
            { days: "1-28", rate: 0 },
            { days: "29-35", rate: 60 },
            { days: "36+", rate: 120 }
        ]
    },
    "40href": [
        { days: "1-2", rate: 30 },
        { days: "3-9", rate: 75 },
        { days: "10-16", rate: 100 },
        { days: "17+", rate: 300 }
    ]
};

function validateDateInput(dateInput) {
    if (!dateInput.value) return false;
    
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateInput.value)) {
        alert("Ошибка: Дата должна быть в формате ГГГГ-ММ-ДД (например, 2023-12-31)");
        return false;
    }
    
    const year = dateInput.value.split('-')[0];
    if (year.length !== 4) {
        alert("Ошибка: Год должен состоять из 4 цифр");
        return false;
    }
    
    return true;
}

document.getElementById('demurrage-container-type').addEventListener('change', function() {
    const freeDaysGroup = document.getElementById('free-days-group');
    const locationGroup = document.getElementById('location-group');
    
    if (this.value === '40href') {
        freeDaysGroup.style.display = 'block';
        locationGroup.style.display = 'none';
    } else {
        freeDaysGroup.style.display = 'none';
        locationGroup.style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const freeDaysGroup = document.getElementById('free-days-group');
    const locationGroup = document.getElementById('location-group');
    
    if (document.getElementById('demurrage-container-type').value === '40href') {
        freeDaysGroup.style.display = 'block';
        locationGroup.style.display = 'none';
    } else {
        freeDaysGroup.style.display = 'none';
        locationGroup.style.display = 'block';
    }
});

function calculateStorage() {
    const containerType = document.getElementById("storage-container-type").value;
    const unloadDateInput = document.getElementById("unload-date-storage");
    const pickupDateInput = document.getElementById("pickup-date");
    
    if (!validateDateInput(unloadDateInput) || !validateDateInput(pickupDateInput)) {
        return;
    }
    
    const unloadDate = new Date(unloadDateInput.value);
    const pickupDate = new Date(pickupDateInput.value);
    
    if (!unloadDate || !pickupDate || pickupDate < unloadDate) {
        alert("Ошибка: некорректные даты!");
        return;
    }
    
    const timeDiff = pickupDate - unloadDate;
    const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1;
    const rates = storageRates[containerType];
    let totalCost = 0;
    let detailsHTML = "<ul>";
    
    for (let day = 1; day <= totalDays; day++) {
        let dailyRate = 0;
        
        for (const rate of rates) {
            const range = rate.days.split(/(\+|-)/);
            const minDay = parseInt(range[0]);
            
            if (rate.days.includes("+") && day >= minDay) {
                dailyRate = rate.rate;
                break;
            } 
            else if (range.length >= 3) {
                const maxDay = parseInt(range[2]);
                if (day >= minDay && day <= maxDay) {
                    dailyRate = rate.rate;
                    break;
                }
            }
        }
        
        totalCost += dailyRate;
        detailsHTML += `<li>День ${day}: ${dailyRate.toLocaleString()} ₽</li>`;
    }
    
    detailsHTML += "</ul>";
    document.getElementById("storage-details").innerHTML = detailsHTML;
    document.getElementById("storage-total").textContent = `Итого: ${totalCost.toLocaleString()} ₽`;
}

function calculateDemurrage() {
    const containerType = document.getElementById("demurrage-container-type").value;
    const location = document.getElementById("container-location").value;
    const unloadDateInput = document.getElementById("unload-date-demurrage");
    const returnDateInput = document.getElementById("return-date");
    
    if (!validateDateInput(unloadDateInput) || !validateDateInput(returnDateInput)) {
        return;
    }
    
    const unloadDate = new Date(unloadDateInput.value);
    const returnDate = new Date(returnDateInput.value);
    
    if (!unloadDate || !returnDate || returnDate < unloadDate) {
        alert("Ошибка: некорректные даты!");
        return;
    }

    const timeDiff = returnDate - unloadDate;
    const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1;
    let totalCost = 0;
    let detailsHTML = "<ul>";

    if (containerType === '40href') {
        const freeDays = parseInt(document.getElementById("free-days").value) || 0;
        
        if (freeDays > 0) {
            detailsHTML = `<p>Свободные дни: 1-${Math.min(freeDays, totalDays)} (0 USD)</p><ul>`;
        }

        for (let calendarDay = 1; calendarDay <= totalDays; calendarDay++) {
            if (calendarDay <= freeDays) continue;

            let dailyRate;
            if (calendarDay <= 2) {
                dailyRate = 30;
            } else if (calendarDay <= 9) {
                dailyRate = 75;
            } else if (calendarDay <= 16) {
                dailyRate = 100;
            } else {
                dailyRate = 300;
            }

            totalCost += dailyRate;
            detailsHTML += `<li>День ${calendarDay}: ${dailyRate} USD</li>`;
        }
    } else {
        let rates;
        if (location === 'novorossiysk' || location === 'rostov') {
            rates = demurrageRates[containerType]['default'];
        } else if (['moscow', 'spb', 'tolyatti', 'samara'].includes(location)) {
            rates = demurrageRates[containerType]['moscow'];
        } else {
            rates = demurrageRates[containerType]['far'];
        }

        for (let day = 1; day <= totalDays; day++) {
            let dailyRate = 0;
            for (const rate of rates) {
                const range = rate.days.split(/(\+|-)/);
                const minDay = parseInt(range[0]);
                if (rate.days.includes("+") && day >= minDay) {
                    dailyRate = rate.rate;
                    break;
                } else if (range.length >= 3) {
                    const maxDay = parseInt(range[2]);
                    if (day >= minDay && day <= maxDay) {
                        dailyRate = rate.rate;
                        break;
                    }
                }
            }
            totalCost += dailyRate;
            detailsHTML += `<li>День ${day}: ${dailyRate} USD</li>`;
        }
    }

    detailsHTML += "</ul>";
    document.getElementById("demurrage-details").innerHTML = detailsHTML;
    document.getElementById("demurrage-total").textContent = `Итого: ${totalCost.toLocaleString()} USD`;
}