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
    "20dc": [
        { days: "1-14", rate: 0 },
        { days: "15-21", rate: 30 },
        { days: "22+", rate: 60 }
    ],
    "40dc": [
        { days: "1-14", rate: 0 },
        { days: "15-21", rate: 60 },
        { days: "22+", rate: 120 }
    ],
    "40href": [
        { days: "1-2", rate: 30 },
        { days: "3-9", rate: 75 },
        { days: "10-16", rate: 100 },
        { days: "17+", rate: 300 }
    ]
};

function validateDateInput(dateInput) {
    if (!dateInput.value) return false;
    
    // Проверяем формат ГГГГ-ММ-ДД
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateInput.value)) {
        alert("Ошибка: Дата должна быть в формате ГГГГ-ММ-ДД (например, 2023-12-31)");
        return false;
    }
    
    // Проверяем, что год состоит из 4 цифр
    const year = dateInput.value.split('-')[0];
    if (year.length !== 4) {
        alert("Ошибка: Год должен состоять из 4 цифр");
        return false;
    }
    
    return true;
}

// Показываем/скрываем поле для 40 HREF
document.getElementById('demurrage-container-type').addEventListener('change', function() {
    const freeDaysGroup = document.getElementById('free-days-group');
    freeDaysGroup.style.display = this.value === '40href' ? 'block' : 'none';
});

function calculateStorage() {
    const containerType = document.getElementById("storage-container-type").value;
    const unloadDateInput = document.getElementById("unload-date-storage");
    const pickupDateInput = document.getElementById("pickup-date");
    
    // Валидация ввода
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
    const unloadDateInput = document.getElementById("unload-date-demurrage");
    const returnDateInput = document.getElementById("return-date");
    
    // Валидация ввода
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
        
        // Информация о бесплатных днях
        if (freeDays > 0) {
            detailsHTML = `<p>Свободные дни: 1-${Math.min(freeDays, totalDays)} (0 USD)</p><ul>`;
        }

        for (let calendarDay = 1; calendarDay <= totalDays; calendarDay++) {
            // Пропускаем бесплатные дни
            if (calendarDay <= freeDays) {
                continue;
            }

            // Определяем ставку по фактическому календарному дню
            let dailyRate;
            if (calendarDay <= 2) {
                dailyRate = 30;       // Дни 1-2: 30 USD
            } else if (calendarDay <= 9) {
                dailyRate = 75;       // Дни 3-9: 75 USD
            } else if (calendarDay <= 16) {
                dailyRate = 100;      // Дни 10-16: 100 USD
            } else {
                dailyRate = 300;      // Дни 17+: 300 USD
            }

            totalCost += dailyRate;
            detailsHTML += `<li>День ${calendarDay}: ${dailyRate} USD</li>`;
        }
    } else {
        // Логика для других типов контейнеров (без изменений)
        const rates = demurrageRates[containerType];
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
