// Объекты с терминалами
const terminals = {
    "novorossiysk": ["НУТЭП"],
    "kaliningrad": ["Балтийск"],
    "spb": ["КТСП", "ПКТ/ПЛП"], 
    "vladivostok": ["ВМПП"],
    "vostochny": ["Порт Восточный"]
};

// Тарифы хранения для разных портов
const storageRates = {
    "novorossiysk": {
        "20dc": [
            { days: "1-5", rate: 0 },
            { days: "6-8", rate: 1650 },
            { days: "9-11", rate: 2200 },
            { days: "12-14", rate: 3300 },
            { days: "15-999", rate: 4950 }
        ],
        "40dc": [
            { days: "1-5", rate: 0 },
            { days: "6-8", rate: 3300 },
            { days: "9-11", rate: 4400 },
            { days: "12-14", rate: 6600 },
            { days: "15-999", rate: 9900 }
        ],
        "40href": [
            { days: "1-5", rate: 4200 },
            { days: "6-10", rate: 8400 },
            { days: "11-999", rate: 10500 }
        ],
        "imo20dc": [
            { days: "1-5", rate: 0 },
            { days: "6-8", rate: 2750 },
            { days: "9-11", rate: 3300 },
            { days: "12-14", rate: 4950 },
            { days: "15-999", rate: 7200 }
        ],
        "imo40dc": [
            { days: "1-5", rate: 0 },
            { days: "6-8", rate: 5500 },
            { days: "9-11", rate: 6600 },
            { days: "12-14", rate: 9900 },
            { days: "15-999", rate: 14400 }
        ]
    },
    "kaliningrad": {
        "20dc": [
            { days: "1-15", rate: 0 },
            { days: "16-30", rate: 600 },
            { days: "31-45", rate: 1000 },
            { days: "46-60", rate: 1500 },
            { days: "61-999", rate: 2000 }
        ],
        "40dc": [
            { days: "1-15", rate: 0 },
            { days: "16-30", rate: 900 },
            { days: "31-45", rate: 1600 },
            { days: "46-60", rate: 2500 },
            { days: "61-999", rate: 3500 }
        ],
        "40href": [
            { days: "1-15", rate: 4500 },
            { days: "16-30", rate: 5000 },
            { days: "31-45", rate: 6500 },
            { days: "46-60", rate: 7500 },
            { days: "61-999", rate: 8000 }
        ],
        "imo20dc": [
            { days: "1-15", rate: 0 },
            { days: "16-30", rate: 900 },
            { days: "31-45", rate: 1500 },
            { days: "46-60", rate: 2250 },
            { days: "61-999", rate: 3000 }
        ],
        "imo40dc": [
            { days: "1-15", rate: 0 },
            { days: "16-30", rate: 1350 },
            { days: "31-45", rate: 2400 },
            { days: "46-60", rate: 3750 },
            { days: "61-999", rate: 5250 }
        ]
    },
    "spb": {
        "20dc": [
            { days: "1-5", rate: 0, currency: "USD" },
            { days: "6-10", rate: 20, currency: "USD" },
            { days: "11-14", rate: 45, currency: "USD" },
            { days: "15-17", rate: 50, currency: "USD" },
            { days: "18-999", rate: 70, currency: "USD" }
        ],
        "40dc": [
            { days: "1-5", rate: 0, currency: "USD" },
            { days: "6-10", rate: 40, currency: "USD" },
            { days: "11-14", rate: 90, currency: "USD" },
            { days: "15-17", rate: 100, currency: "USD" },
            { days: "18-999", rate: 150, currency: "USD" }
        ],
        "40href": [
            { days: "1-999", rate: 60, currency: "USD" }
        ],
        "imo20dc": [
            { days: "1-3", rate: 0, currency: "USD" },
            { days: "4-5", rate: 45, currency: "USD" },
            { days: "6-10", rate: 50, currency: "USD" },
            { days: "11-14", rate: 70, currency: "USD" },
            { days: "15-17", rate: 80, currency: "USD" },
            { days: "18-999", rate: 90, currency: "USD" }
        ],
        "imo40dc": [
            { days: "1-3", rate: 0, currency: "USD" },
            { days: "4-5", rate: 90, currency: "USD" },
            { days: "6-10", rate: 100, currency: "USD" },
            { days: "11-14", rate: 150, currency: "USD" },
            { days: "15-17", rate: 160, currency: "USD" },
            { days: "18-999", rate: 180, currency: "USD" }
        ],
        "20fr": [
            { days: "1", rate: 0, currency: "USD" },
            { days: "2-999", rate: 120, currency: "USD" }
        ],
        "40fr": [
            { days: "1", rate: 0, currency: "USD" },
            { days: "2-999", rate: 220, currency: "USD" }
        ]
    }
};

// Тарифы демереджа
const demurrageRates = {
    "novorossiysk": {
        "default": {
            "20dc": [
                { days: "1-14", rate: 0 },
                { days: "15-21", rate: 30 },
                { days: "22-999", rate: 60 }
            ],
            "40dc": [
                { days: "1-14", rate: 0 },
                { days: "15-21", rate: 60 },
                { days: "22-999", rate: 120 }
            ],
            "40href": [
                { days: "1-2", rate: 30 },
                { days: "3-9", rate: 75 },
                { days: "10-16", rate: 100 },
                { days: "17-999", rate: 300 }
            ]
        },
        "moscow": {
            "20dc": [
                { days: "1-21", rate: 0 },
                { days: "22-28", rate: 30 },
                { days: "29-999", rate: 60 }
            ],
            "40dc": [
                { days: "1-21", rate: 0 },
                { days: "22-28", rate: 60 },
                { days: "29-999", rate: 120 }
            ],
            "40href": [
                { days: "1-2", rate: 30 },
                { days: "3-9", rate: 75 },
                { days: "10-16", rate: 100 },
                { days: "17-999", rate: 300 }
            ]
        },
        "far": {
            "20dc": [
                { days: "1-28", rate: 0 },
                { days: "29-35", rate: 30 },
                { days: "36-999", rate: 60 }
            ],
            "40dc": [
                { days: "1-28", rate: 0 },
                { days: "29-35", rate: 60 },
                { days: "36-999", rate: 120 }
            ],
            "40href": [
                { days: "1-2", rate: 30 },
                { days: "3-9", rate: 75 },
                { days: "10-16", rate: 100 },
                { days: "17-999", rate: 300 }
            ]
        },
        "novorossiysk": {
            "20dc": [
                { days: "1-14", rate: 0 },
                { days: "15-21", rate: 30 },
                { days: "22-999", rate: 60 }
            ],
            "40dc": [
                { days: "1-14", rate: 0 },
                { days: "15-21", rate: 60 },
                { days: "22-999", rate: 120 }
            ],
            "40href": [
                { days: "1-2", rate: 30 },
                { days: "3-9", rate: 75 },
                { days: "10-16", rate: 100 },
                { days: "17-999", rate: 300 }
            ]
        },
        "rostov": {
            "20dc": [
                { days: "1-14", rate: 0 },
                { days: "15-21", rate: 30 },
                { days: "22-999", rate: 60 }
            ],
            "40dc": [
                { days: "1-14", rate: 0 },
                { days: "15-21", rate: 60 },
                { days: "22-999", rate: 120 }
            ],
            "40href": [
                { days: "1-2", rate: 30 },
                { days: "3-9", rate: 75 },
                { days: "10-16", rate: 100 },
                { days: "17-999", rate: 300 }
            ]
        }
    },
    "kaliningrad": {
        "20dc": [
            { days: "1-7", rate: 0 },
            { days: "8-15", rate: 30 },
            { days: "16-999", rate: 40 }
        ],
        "40dc": [
            { days: "1-7", rate: 0 },
            { days: "8-15", rate: 60 },
            { days: "16-999", rate: 70 }
        ],
        "40href": [
            { days: "1-2", rate: 0 },
            { days: "3-15", rate: 80 },
            { days: "16-999", rate: 100 }
        ],
        "20fr": [
            { days: "1-7", rate: 0 },
            { days: "8-15", rate: 45 },
            { days: "16-999", rate: 60 }
        ],
        "40fr": [
            { days: "1-7", rate: 0 },
            { days: "8-15", rate: 90 },
            { days: "16-999", rate: 105 }
        ],
        "imo20dc": [
            { days: "1-7", rate: 0 },
            { days: "8-15", rate: 30 },
            { days: "16-999", rate: 40 }
        ],
        "imo40dc": [
            { days: "1-7", rate: 0 },
            { days: "8-15", rate: 60 },
            { days: "16-999", rate: 70 }
        ]
    },
    "spb": {
        "kts": {
            "20dc": [
                { days: "1-14", rate: 0 },
                { days: "15-21", rate: 30 },
                { days: "22-999", rate: 60 }
            ],
            "40dc": [
                { days: "1-14", rate: 0 },
                { days: "15-21", rate: 60 },
                { days: "22-999", rate: 120 }
            ],
            "40href": [
                { days: "1-2", rate: 30 },
                { days: "3-9", rate: 75 },
                { days: "10-16", rate: 100 },
                { days: "17-999", rate: 300 }
            ],
            "20fr": [
                { days: "1-2", rate: 0 },
                { days: "3-9", rate: 45 },
                { days: "10-999", rate: 90 }
            ],
            "40fr": [
                { days: "1-2", rate: 0 },
                { days: "3-9", rate: 90 },
                { days: "10-999", rate: 180 }
            ]
        },
        "pkt_plp": {
            "20dc": [
                { days: "1-14", rate: 0 },
                { days: "15-21", rate: 30 },
                { days: "22-999", rate: 60 }
            ],
            "40dc": [
                { days: "1-14", rate: 0 },
                { days: "15-21", rate: 60 },
                { days: "22-999", rate: 120 }
            ],
            "40href": [
                { days: "1-2", rate: 30 },
                { days: "3-9", rate: 75 },
                { days: "10-16", rate: 100 },
                { days: "17-999", rate: 300 }
            ],
            "20fr": [
                { days: "1-2", rate: 0 },
                { days: "3-9", rate: 45 },
                { days: "10-999", rate: 90 }
            ],
            "40fr": [
                { days: "1-2", rate: 0 },
                { days: "3-9", rate: 90 },
                { days: "10-999", rate: 180 }
            ]
        }
    },
    "vladivostok": {
        "vmpp": {
            "20dc": [
                { days: "1-10", rate: 0 },
                { days: "11-999", rate: 10 }
            ],
            "40dc": [
                { days: "1-10", rate: 0 },
                { days: "11-999", rate: 20 }
            ],
            "far": {
                "20dc": [
                    { days: "1-40", rate: 0 },
                    { days: "41-999", rate: 10 }
                ],
                "40dc": [
                    { days: "1-40", rate: 0 },
                    { days: "41-999", rate: 20 }
                ]
            },
            "moscow": {
                "20dc": [
                    { days: "1-45", rate: 0 },
                    { days: "46-999", rate: 10 }
                ],
                "40dc": [
                    { days: "1-45", rate: 0 },
                    { days: "46-999", rate: 20 }
                ]
            }
        }
    },
    "vostochny": {
        "vostochny": {
            "20dc": [
                { days: "1-10", rate: 0 },
                { days: "11-999", rate: 10 }
            ],
            "40dc": [
                { days: "1-10", rate: 0 },
                { days: "11-999", rate: 20 }
            ],
            "40href": [
                { days: "1-7", rate: 0 },
                { days: "8-14", rate: 60 },
                { days: "15-25", rate: 120 },
                { days: "26-999", rate: 220 }
            ],
            "far": {
                "20dc": [
                    { days: "1-40", rate: 0 },
                    { days: "41-999", rate: 10 }
                ],
                "40dc": [
                    { days: "1-40", rate: 0 },
                    { days: "41-999", rate: 20 }
                ]
            },
            "moscow": {
                "20dc": [
                    { days: "1-45", rate: 0 },
                    { days: "46-999", rate: 10 }
                ],
                "40dc": [
                    { days: "1-45", rate: 0 },
                    { days: "46-999", rate: 20 }
                ]
            }
        }
    }
};

// Валидация даты
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

// Обновленная функция updateStorageTerminals()
function updateStorageTerminals() {
    const port = document.getElementById("storage-port").value;
    const terminalSelect = document.getElementById("storage-terminal");
    terminalSelect.innerHTML = '';
    document.getElementById("storage-terminal-group").style.display = 'none';
    
    // Сбрасываем результаты
    document.getElementById("storage-details").innerHTML = "";
    document.getElementById("storage-total").textContent = "Итого: 0 ₽";
    
    // Обновляем select с контейнерами
    const newContainerSelect = updateStorageContainerTypes(port);
    // Если нужно сохранить ссылку на элемент:
    document.getElementById("storage-container-type").replaceWith(newContainerSelect);
}

// Обновленная функция updateStorageContainerTypes()
function updateStorageContainerTypes(port) {
    const containerTypeSelect = document.getElementById("storage-container-type");
    
    // Удаляем все предыдущие обработчики change
    const newSelect = containerTypeSelect.cloneNode(true);
    containerTypeSelect.parentNode.replaceChild(newSelect, containerTypeSelect);
    
    // Очищаем и заполняем заново
    newSelect.innerHTML = '';
    
    if (port === 'novorossiysk') {
        addOption(newSelect, '20dc', '20 DC');
        addOption(newSelect, '40dc', '40 DC');
        addOption(newSelect, '40href', '40 HREF');
        addOption(newSelect, 'imo20dc', 'IMO 20 DC');
        addOption(newSelect, 'imo40dc', 'IMO 40 DC');
    } 
    else if (port === 'kaliningrad') {
        addOption(newSelect, '20dc', '20 DC / FR / OT');
        addOption(newSelect, '40dc', '40 DC / FR / OT');
        addOption(newSelect, '40href', '40 HREF');
        addOption(newSelect, 'imo20dc', 'IMO 20 DC');
        addOption(newSelect, 'imo40dc', 'IMO 40 DC');
    } 
    else if (port === 'spb') {
        addOption(newSelect, '20dc', '20 DC');
        addOption(newSelect, '40dc', '40 DC / HC');
        addOption(newSelect, '40href', '40 HREF');
        addOption(newSelect, 'imo20dc', 'IMO 20 DC');
        addOption(newSelect, 'imo40dc', 'IMO 40 DC / HC');
        addOption(newSelect, '20fr', '20 FR / OT');
        addOption(newSelect, '40fr', '40 FR / OT');
    }
    
    // Добавляем обработчик, который только сбрасывает результаты
    newSelect.addEventListener('change', function() {
        document.getElementById("storage-details").innerHTML = "";
        document.getElementById("storage-total").textContent = "Итого: 0 ₽";
    });
    
    return newSelect;
}


// Новая функция для сброса результатов
function resetStorageResults() {
    document.getElementById("storage-details").innerHTML = "";
    document.getElementById("storage-total").textContent = "Итого: 0 ₽";
}

// Обновление терминалов для демереджа
function updateDemurrageTerminals() {
    const port = document.getElementById("demurrage-port").value;
    const terminalGroup = document.getElementById("demurrage-terminal-group");
    const terminalSelect = document.getElementById("demurrage-terminal");
    const locationGroup = document.getElementById("location-group");
    const locationSelect = document.getElementById("container-location");

    // Очистка списка терминалов
    terminalSelect.innerHTML = '';

    // Сохраняем текущее значение места сдачи
    const currentLocation = locationSelect.value;

    // Очищаем и заполняем список мест сдачи
    locationSelect.innerHTML = '';

    // Общие места сдачи для всех портов
    addOption(locationSelect, 'moscow', 'Москва');
    addOption(locationSelect, 'spb', 'Санкт-Петербург');
    addOption(locationSelect, 'ekaterinburg', 'Екатеринбург');
    addOption(locationSelect, 'novosibirsk', 'Новосибирск');
    addOption(locationSelect, 'krasnoyarsk', 'Красноярск');
    addOption(locationSelect, 'irkutsk', 'Иркутск');
    addOption(locationSelect, 'tolyatti', 'Тольятти');
    addOption(locationSelect, 'samara', 'Самара');
    addOption(locationSelect, 'novorossiysk', 'Новороссийск');
    addOption(locationSelect, 'rostov', 'Ростов-на-Дону');
    
    // Дополнительные места сдачи для Калининграда
    if (port !== 'spb') {
        addOption(locationSelect, 'kaliningrad', 'Калининград');
    }

    // Дополнительные места сдачи для Владивостока и бухты Врангеля
    if (port === 'vladivostok') {
        addOption(locationSelect, 'vladivostok', 'Владивосток');
        addOption(locationSelect, 'vostochny', 'Порт Восточный');
    } else if (port === 'vostochny') {
        addOption(locationSelect, 'vladivostok', 'Владивосток');
        addOption(locationSelect, 'wrangell', 'Бухта Врангеля');
    }

    // Восстанавливаем предыдущее значение места сдачи, если оно есть в списке
    if (currentLocation && Array.from(locationSelect.options).some(o => o.value === currentLocation)) {
        locationSelect.value = currentLocation;
    }

    // Скрыть "Место сдачи" только для Калининграда
    locationGroup.style.display = port === 'kaliningrad' ? 'none' : 'block';

    // Обновление терминалов
    if (terminals[port]?.length > 1) {
        terminalGroup.style.display = 'block';
        const uniqueTerms = [...new Set(terminals[port])];
        uniqueTerms.forEach(terminal => {
            const option = document.createElement('option');
            option.value = terminal === 'ПКТ/ПЛП' ? 'pkt_plp' : terminal.toLowerCase();
            option.textContent = terminal;
            terminalSelect.appendChild(option);
        });
    } else {
        terminalGroup.style.display = 'none';
        if (terminals[port]?.[0]) {
            terminalSelect.innerHTML = `<option value="${terminals[port][0].toLowerCase()}">${terminals[port][0]}</option>`;
        }
    }

    updateDemurrageContainerTypes(port, terminalSelect.value);
}

// Обновление типов контейнеров для демереджа
function updateDemurrageContainerTypes(port, terminal) {
    const containerTypeSelect = document.getElementById("demurrage-container-type");
    const freeDaysGroup = document.getElementById("free-days-group");
    const locationGroup = document.getElementById("location-group");
    
    containerTypeSelect.innerHTML = '';
    freeDaysGroup.style.display = 'none';
    document.getElementById('free-days').value = '0';
    
    // Определяем, нужно ли скрывать место сдачи для текущего порта
    const hideLocationFor40Href = ['novorossiysk', 'spb', 'vostochny'].includes(port);
    
    if (port === 'spb') {
        addOption(containerTypeSelect, '20dc', '20 DC');
        addOption(containerTypeSelect, '40dc', '40 DC');
        addOption(containerTypeSelect, '40href', '40 HREF');
        addOption(containerTypeSelect, '20fr', '20 FR / OT');
        addOption(containerTypeSelect, '40fr', '40 FR / OT');
    } 
    else if (port === 'novorossiysk') {
        addOption(containerTypeSelect, '20dc', '20 DC');
        addOption(containerTypeSelect, '40dc', '40 DC');
        addOption(containerTypeSelect, '40href', '40 HREF');
    } 
    else if (port === 'kaliningrad') {
        addOption(containerTypeSelect, '20dc', '20 DC');
        addOption(containerTypeSelect, '40dc', '40 DC / HC');
        addOption(containerTypeSelect, '40href', '40 HREF');
        addOption(containerTypeSelect, '20fr', '20 FR / OT');
        addOption(containerTypeSelect, '40fr', '40 FR / OT');
        addOption(containerTypeSelect, 'imo20dc', 'IMO 20 DC');
        addOption(containerTypeSelect, 'imo40dc', 'IMO 40 DC / HC');
    } 
    else if (port === 'vladivostok') {
        addOption(containerTypeSelect, '20dc', '20 DC, GEN/IMO');
        addOption(containerTypeSelect, '40dc', '40 DC/HC, GEN/IMO');
    }
    else if (port === 'vostochny') {
        addOption(containerTypeSelect, '20dc', '20 DC, GEN/IMO');
        addOption(containerTypeSelect, '40dc', '40 DC/HC, GEN/IMO');
        addOption(containerTypeSelect, '40href', '40 HREF');
    }
    
    // Скрываем место сдачи для 40HREF в указанных портах (кроме Калининграда)
    if (hideLocationFor40Href) {
        containerTypeSelect.addEventListener('change', function() {
            locationGroup.style.display = 
                (this.value === '40href' && port !== 'kaliningrad') ? 'none' : 'block';
        });
    }
}

// Вспомогательная функция добавления опции
function addOption(selectElement, value, text) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    selectElement.appendChild(option);
}

// Парсинг диапазона дней
function parseDayRange(rangeStr) {
    const parts = rangeStr.split('-');
    const min = parseInt(parts[0]);
    const max = parts[1] ? (parts[1].includes('+') ? Infinity : parseInt(parts[1])) : min;
    return { min, max };
}

// Расчет хранения
function calculateStorage() {
    const containerType = document.getElementById("storage-container-type").value;
    const port = document.getElementById("storage-port").value;
    const terminal = document.getElementById("storage-terminal").value || terminals[port][0];
    const unloadDateInput = document.getElementById("unload-date-storage");
    const pickupDateInput = document.getElementById("pickup-date");
    
    if (!validateDateInput(unloadDateInput) || !validateDateInput(pickupDateInput)) return;
    
    const unloadDate = new Date(unloadDateInput.value);
    const pickupDate = new Date(pickupDateInput.value);
    
    if (pickupDate < unloadDate) {
        alert("Ошибка: Дата вывоза не может быть раньше даты выгрузки!");
        return;
    }
    
    const timeDiff = pickupDate - unloadDate;
    const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1;
    
    const rates = storageRates[port][containerType];
    if (!rates) {
        alert("Тарифы для выбранного порта и типа контейнера не найдены!");
        return;
    }
    
    let totalCost = 0;
    let currency = '₽';
    let detailsHTML = "<ul>";
    
    for (let day = 1; day <= totalDays; day++) {
        let dailyRate = 0;
        for (const rate of rates) {
            const [min, max] = rate.days.split('-').map(Number);
            if (day >= min && (max ? day <= max : true)) {
                dailyRate = rate.rate;
                if (rate.currency) currency = rate.currency;
                break;
            }
        }
        totalCost += dailyRate;
        detailsHTML += `<li>День ${day}: ${dailyRate.toLocaleString()} ${currency}</li>`;
    }
    
    detailsHTML += "</ul>";
    document.getElementById("storage-details").innerHTML = detailsHTML;
    document.getElementById("storage-total").textContent = `Итого: ${totalCost.toLocaleString()} ${currency}`;
}

// Расчет демереджа
function calculateDemurrage() {
    document.getElementById("demurrage-details").innerHTML = "";
    document.getElementById("demurrage-total").textContent = "Итого: 0 USD";
    
    const containerType = document.getElementById("demurrage-container-type").value;
    const port = document.getElementById("demurrage-port").value;
    const terminal = document.getElementById("demurrage-terminal").value || terminals[port]?.[0]?.toLowerCase() || '';
    const location = document.getElementById("container-location").value;
    const unloadDateInput = document.getElementById("unload-date-demurrage");
    const returnDateInput = document.getElementById("return-date");
    const freeDaysInput = document.getElementById("free-days");
    
    if (!validateDateInput(unloadDateInput) || !validateDateInput(returnDateInput)) return;
    
    const unloadDate = new Date(unloadDateInput.value);
    const returnDate = new Date(returnDateInput.value);
    
    if (returnDate < unloadDate) {
        alert("Ошибка: Дата возврата не может быть раньше даты выгрузки!");
        return;
    }
    
    const timeDiff = returnDate - unloadDate;
    const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1;
    
    // Учет свободных дней ТОЛЬКО для 40 HREF
    let freeDays = 0;
    if (containerType === '40href') {
        freeDays = parseInt(freeDaysInput.value) || 0;
    }
    
    let rates;
    if (port === 'kaliningrad') {
        rates = demurrageRates[port][containerType];
    } 
    else if (port === 'spb') {
        const terminalKey = terminal === 'ПКТ/ПЛП' ? 'pkt_plp' : 'kts';
        rates = demurrageRates[port][terminalKey][containerType];
    } 
    else if (port === 'vladivostok' || port === 'vostochny') {
        let terminalKey;
        if (port === 'vladivostok') {
            terminalKey = 'vmpp';
        } else {
            terminalKey = 'vostochny';
        }

        // Для Бухты Врангеля используем тарифы из vostochny
        rates = demurrageRates['vostochny']['vostochny'][containerType];
    } 
    else if (port === 'novorossiysk') {
        // Для 40HREF в Новороссийске используем default тарифы
        if (containerType === '40href') {
            rates = demurrageRates[port]['default'][containerType];
        } else if (['novorossiysk', 'rostov'].includes(location)) {
            rates = demurrageRates[port][location]?.[containerType] || 
                   demurrageRates[port]['default'][containerType];
        } else {
            const rateGroup = ['moscow', 'spb', 'tolyatti', 'samara'].includes(location) 
                ? 'moscow' 
                : (['ekaterinburg', 'novosibirsk', 'krasnoyarsk', 'irkutsk'].includes(location) ? 'far' : 'default');
            rates = demurrageRates[port][rateGroup][containerType];
        }
    }
    
    if (!rates) {
        alert("Тарифы для выбранных параметров не найдены!");
        return;
    }
    
    let totalCost = 0;
    let detailsHTML = "<ul>";
    
    // Правильный расчет с учетом свободных дней для 40HREF
    for (let day = 1; day <= totalDays; day++) {
        let dailyRate = 0;
        
        // Для 40HREF учитываем свободные дни
        if (containerType === '40href' && day <= freeDays) {
            detailsHTML += `<li>День ${day}: 0 USD (свободный день)</li>`;
            continue;
        }
        
        // Находим подходящий тариф для текущего дня
        // Для 40HREF учитываем фактический день хранения (без вычета свободных дней)
        const rateDay = containerType === '40href' ? day : day;
        
        for (const rate of rates) {
            const [min, max] = rate.days.split('-').map(Number);
            if (rateDay >= min && (max ? rateDay <= max : true)) {
                dailyRate = rate.rate;
                break;
            }
        }
        
        totalCost += dailyRate;
        detailsHTML += `<li>День ${day}: ${dailyRate} USD</li>`;
    }
    
    detailsHTML += "</ul>";
    document.getElementById("demurrage-details").innerHTML = detailsHTML;
    document.getElementById("demurrage-total").textContent = `Итого: ${totalCost.toLocaleString()} USD`;
}

// Обновленная инициализация
document.addEventListener('DOMContentLoaded', () => {
    updateStorageTerminals();
    updateDemurrageTerminals();

    // Обработчики для калькулятора хранения
    document.getElementById('storage-port').addEventListener('change', function() {
        document.getElementById("storage-details").innerHTML = "";
        document.getElementById("storage-total").textContent = "Итого: 0 ₽";
        updateStorageTerminals();
    });
    
    document.getElementById('storage-container-type').addEventListener('change', function() {
        document.getElementById("storage-details").innerHTML = "";
        document.getElementById("storage-total").textContent = "Итого: 0 ₽";
    });

    // Обработчики для калькулятора демереджа
    document.getElementById('demurrage-port').addEventListener('change', function() {
        document.getElementById("demurrage-terminal").selectedIndex = 0;
        document.getElementById("demurrage-details").innerHTML = "";
        document.getElementById("demurrage-total").textContent = "Итого: 0 USD";
        updateDemurrageTerminals();
    });
    
    document.getElementById('demurrage-container-type').addEventListener('change', function() {
        document.getElementById("demurrage-details").innerHTML = "";
        document.getElementById("demurrage-total").textContent = "Итого: 0 USD";
        document.getElementById('free-days-group').style.display = 
            this.value === '40href' ? 'block' : 'none';
    });
    
    document.getElementById('container-location').addEventListener('change', function() {
        document.getElementById("demurrage-details").innerHTML = "";
        document.getElementById("demurrage-total").textContent = "Итого: 0 USD";
    });
    
     // Обработчики для кнопок расчета
     document.getElementById('calculate-storage-btn').addEventListener('click', calculateStorage);
     document.getElementById('calculate-demurrage-btn').addEventListener('click', calculateDemurrage);
 });
