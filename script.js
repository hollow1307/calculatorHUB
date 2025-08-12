// Объекты с терминалами
const terminals = {
    "novorossiysk": ["НУТЭП"],
    "kaliningrad": ["Балтийск"],
    "spb": ["КТСП", "ПКТ/ПЛП", "ТМРП"], 
    "vladivostok": ["ВМПП"],
    "vostochny": ["Порт Восточный"],
    "tmrp": ["ТМРП"],
};

// Тарифы хранения для разных портов
const storageRates = {
    "novorossiysk": {
        "20dc": [
            { days: "1-5", rate: 0 },
            { days: "6-8", rate: 1800 },
            { days: "9-11", rate: 2400 },
            { days: "12-14", rate: 3600 },
            { days: "15-999", rate: 5450 }
        ],
        "40dc": [
            { days: "1-5", rate: 0 },
            { days: "6-8", rate: 3600 },
            { days: "9-11", rate: 4800 },
            { days: "12-14", rate: 7200 },
            { days: "15-999", rate: 10900 }
        ],
        "40href": [
            { days: "1-5", rate: 4600 },
            { days: "6-10", rate: 9200 },
            { days: "11-999", rate: 11500 }
        ],
        "imo20dc": [
            { days: "1-5", rate: 0 },
            { days: "6-8", rate: 3000 },
            { days: "9-11", rate: 3600 },
            { days: "12-14", rate: 5400 },
            { days: "15-999", rate: 7900 }
        ],
        "imo40dc": [
            { days: "1-5", rate: 0 },
            { days: "6-8", rate: 6000 },
            { days: "9-11", rate: 7200 },
            { days: "12-14", rate: 10800 },
            { days: "15-999", rate: 15800 }
        ],
         "oog20": [
            { days: "1-999", rate: 8800 }
        ],
        "oog40": [
            { days: "1-999", rate: 17600 }
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
         "imo40href": [
            { days: "1-999", rate: 90, currency: "USD" }
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
    },
     "tmrp": {
        "20dc": [
            { days: "1-10", rate: 0, currency: "USD" },
            { days: "11-14", rate: 45, currency: "USD" },
            { days: "15-17", rate: 50, currency: "USD" },
            { days: "18-999", rate: 70, currency: "USD" }
        ],
        "40dc": [
            { days: "1-10", rate: 0, currency: "USD" },
            { days: "11-14", rate: 90, currency: "USD" },
            { days: "15-17", rate: 100, currency: "USD" },
            { days: "18-999", rate: 150, currency: "USD" }
        ],
        "40href": [
            { days: "1-999", rate: 60, currency: "USD" }
        ],
         "imo40href": [
            { days: "1-999", rate: 90, currency: "USD" }
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
         "imo6.1\20": [
            { days: "1-3", rate: 0, currency: "USD" },
            { days: "4-999", rate: 100, currency: "USD" }
        ],
        "imo6.1\40": [
            { days: "1-3", rate: 0, currency: "USD" },
            { days: "4-999", rate: 200, currency: "USD" }
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
        "40href": [
            { days: "1-7", rate: 0 },
            { days: "8-14", rate: 60 },
            { days: "15-25", rate: 120 },  
            { days: "26-999", rate: 220 }
        ]
    },  
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
        ]
    }, 
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
        addOption(newSelect, '20dc', '20 DC/TANK');
        addOption(newSelect, '40dc', '40 DC/HC/TANK');
        addOption(newSelect, '40href', '40 HREEF');
        addOption(newSelect, 'imo20dc', 'IMO 20 DC/TANK');
        addOption(newSelect, 'imo40dc', 'IMO 40 DC/TANK');
        addOption(newSelect, 'oog20', 'OOG/IG:20 FR/OT');
        addOption(newSelect, 'oog40', 'OOG/IG:40 FR/OT');
    } 
    else if (port === 'kaliningrad') {
        addOption(newSelect, '20dc', '20 DC/FR/OT');
        addOption(newSelect, '40dc', '40 DC/HC/FR/OT');
        addOption(newSelect, '40href', '40 HREEF');
        addOption(newSelect, 'imo20dc', 'IMO 20 DC');
        addOption(newSelect, 'imo40dc', 'IMO 40 DC');
    } 
    else if (port === 'spb') {
        addOption(newSelect, '20dc', '20 DC');
        addOption(newSelect, '40dc', '40 DC/HC');
        addOption(newSelect, '40href', '40 HREEF');
        addOption(newSelect, 'imo40href', 'IMO 40 HREEF');
        addOption(newSelect, 'imo20dc', 'IMO 20 DC');
        addOption(newSelect, 'imo40dc', 'IMO 40 DC/HC');
        addOption(newSelect, '20fr', '20 FR/OT');
        addOption(newSelect, '40fr', '40 FR/OT');
    }
    else if (port === 'tmrp') {
        addOption(newSelect, '20dc', '20 DC');
        addOption(newSelect, '40dc', '40 DC/HC');
        addOption(newSelect, '40href', '40 HREEF');
        addOption(newSelect, 'imo40href', 'IMO 40 HREEF');
        addOption(newSelect, 'imo20dc', 'IMO 20 DC');
        addOption(newSelect, 'imo40dc', 'IMO 40 DC/HC');
        addOption(newSelect, 'imo6.1\20', 'IMO 6.1 20 DC');
        addOption(newSelect, 'imo6.1\40', 'IMO 6.1 40 DC/HC');
        addOption(newSelect, '20fr', '20 FR/OT');
        addOption(newSelect, '40fr', '40 FR/OT');
    }
    
    // Добавляем ОДИН обработчик
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
    const freeDaysGroup = document.getElementById("free-days-demurrage-group");
    const locationGroup = document.getElementById("location-group");
    const locationSelect = document.getElementById("container-location");
    
    containerTypeSelect.innerHTML = '';
    freeDaysGroup.style.display = 'none';
    document.getElementById('free-days-demurrage').value = '0';

    // Управление видимостью места сдачи
    locationGroup.style.display = port === 'kaliningrad' ? 'none' : 'block';

    // 1. Логика для Новороссийска
    if (port === 'novorossiysk') {
        addOption(containerTypeSelect, '20dc', '20 DC');
        addOption(containerTypeSelect, '40dc', '40 DC/HC');
        addOption(containerTypeSelect, '40href', '40 HREEF');
        addOption(containerTypeSelect, '20fr', 'OOG/IG: 20FR/OT');
        addOption(containerTypeSelect, '40fr', 'OOG/IG: 40FR/OT');
    }
    // 2. Логика для Владивостока и Бухты Врангеля
    else if (port === 'vladivostok' || port === 'vostochny') {
        addOption(containerTypeSelect, '20dc', '20 DC, GEN/IMO');
        addOption(containerTypeSelect, '40dc', '40 DC/HC, GEN/IMO');
        addOption(containerTypeSelect, '40href', '40 HREEF');
    }
    // Остальные порты
    else if (port === 'spb') {
        const location = locationSelect.value;
        if (location === 'spb') {
            addOption(containerTypeSelect, '20dc', '20 DC');
            addOption(containerTypeSelect, '40dc', '40 DC/HC');
            addOption(containerTypeSelect, '40href', '40 HREEF');
            addOption(containerTypeSelect, '20fr', '20 FR/OT');
            addOption(containerTypeSelect, '40fr', '40 FR/OT');
        } else {
            addOption(containerTypeSelect, '20dc', '20 DC');
            addOption(containerTypeSelect, '40dc', '40 DC/HC');
        }
    }
    else if (port === 'kaliningrad') {
        addOption(containerTypeSelect, '20dc', '20 DC');
        addOption(containerTypeSelect, '40dc', '40 DC/HC');
        addOption(containerTypeSelect, '40href', '40 HREEF');
        addOption(containerTypeSelect, '20fr', '20 FR/OT');
        addOption(containerTypeSelect, '40fr', '40 FR / OT');
        addOption(containerTypeSelect, 'imo20dc', 'IMO 20 DC');
        addOption(containerTypeSelect, 'imo40dc', 'IMO 40 DC / HC');
    }

    // Обработчик изменения типа контейнера
    containerTypeSelect.addEventListener('change', function() {
        const port = document.getElementById("demurrage-port").value;
        const containerType = this.value;
        const locationSelect = document.getElementById("container-location");
        
        // Если выбран 40 HREEF в Новороссийске, Владивостоке или Бухте Врангеля
        if (containerType === '40href' && ['novorossiysk', 'vladivostok', 'vostochny'].includes(port)) {
            // Сохраняем текущее значение
            const currentLocation = locationSelect.value;
            
            // Очищаем и заполняем только нужными опциями
            locationSelect.innerHTML = '';
            
            if (port === 'novorossiysk') {
                addOption(locationSelect, 'novorossiysk', 'Новороссийск');
                addOption(locationSelect, 'rostov', 'Ростов-на-Дону');
            } 
            else if (port === 'vladivostok') {
                addOption(locationSelect, 'vladivostok', 'Владивосток');
                addOption(locationSelect, 'vostochny', 'Порт Восточный');
            } 
            else if (port === 'vostochny') {
                addOption(locationSelect, 'vladivostok', 'Владивосток');
                addOption(locationSelect, 'wrangell', 'Бухта Врангеля');
            }
            
            // Восстанавливаем предыдущее значение, если оно есть в новом списке
            if (currentLocation && Array.from(locationSelect.options).some(o => o.value === currentLocation)) {
                locationSelect.value = currentLocation;
            }
        } 
        // Если выбран другой тип контейнера - восстанавливаем полный список мест сдачи
        else {
            // Сохраняем текущее значение
            const currentLocation = locationSelect.value;
            
            // Очищаем и заполняем полным списком
            locationSelect.innerHTML = '';
            
            // Общие места сдачи
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
            
            // Дополнительные места для Калининграда
            if (port !== 'spb') {
                addOption(locationSelect, 'kaliningrad', 'Калининград');
            }
            
            // Дополнительные места для Владивостока и Бухты Врангеля
            if (port === 'vladivostok') {
                addOption(locationSelect, 'vladivostok', 'Владивосток');
                addOption(locationSelect, 'vostochny', 'Порт Восточный');
            } else if (port === 'vostochny') {
                addOption(locationSelect, 'vladivostok', 'Владивосток');
                addOption(locationSelect, 'wrangell', 'Бухта Врангеля');
            }
            
            // Восстанавливаем предыдущее значение
            if (currentLocation && Array.from(locationSelect.options).some(o => o.value === currentLocation)) {
                locationSelect.value = currentLocation;
            }
        }
        
        document.getElementById("demurrage-details").innerHTML = "";
        document.getElementById("demurrage-total").textContent = "Итого: 0 USD";
    });
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
    
    const freeDays = document.getElementById('special-conditions-storage').checked 
        ? parseInt(document.getElementById('free-days-storage').value) || 0 
        : 0;
    
    let totalCost = 0;
    let currency = '₽';
    let detailsHTML = "<ul>";
    
    for (let day = 1; day <= totalDays; day++) {
        let dailyRate = 0;
        
        if (day <= freeDays) {
            detailsHTML += `<li>День ${day}: 0 ${currency} (свободный день)</li>`;
            continue;
        }
        
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
    
    if (!validateDateInput(unloadDateInput) || !validateDateInput(returnDateInput)) return;
    
    const unloadDate = new Date(unloadDateInput.value);
    const returnDate = new Date(returnDateInput.value);
    
    if (returnDate < unloadDate) {
        alert("Ошибка: Дата возврата не может быть раньше даты выгрузки!");
        return;
    }
    
    const timeDiff = returnDate - unloadDate;
    const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1;
    
    let freeDays = document.getElementById('special-conditions-demurrage').checked 
        ? parseInt(document.getElementById('free-days-demurrage').value) || 0 
        : 0;
    
    let rates;
    if (port === 'kaliningrad') {
        rates = demurrageRates[port][containerType];
    } 
    else if (port === 'spb') {
        let rateGroup = 'default';
        if (['moscow', 'novorossiysk', 'rostov', 'samara', 'tolyatti'].includes(location)) {
            rateGroup = 'moscow';
        } else if (['ekaterinburg', 'novosibirsk', 'krasnoyarsk', 'irkutsk'].includes(location)) {
            rateGroup = 'far';
        }
        rates = demurrageRates[port][rateGroup]?.[containerType] || 
               demurrageRates[port]['default'][containerType];
    } 
    else if (port === 'vladivostok') {
        // Обработка для порта Владивосток
        if (location === 'vladivostok' || location === 'vostochny') {
            // Локальные тарифы (Владивосток и Порт Восточный)
            rates = demurrageRates[port]['vmpp'][containerType];
        } else {
            // Тарифы для других мест сдачи
            let rateGroup = 'default';
            if (['moscow', 'novorossiysk', 'rostov', 'samara', 'tolyatti', 'kaliningrad', 'spb'].includes(location)) {
                rateGroup = 'moscow';
            } else if (['ekaterinburg', 'novosibirsk', 'krasnoyarsk', 'irkutsk'].includes(location)) {
                rateGroup = 'far';
            }
            rates = demurrageRates[port][rateGroup]?.[containerType];
        }
    }
    else if (port === 'vostochny') {
        // Обработка для Бухты Врангеля
        if (containerType === '40href') {
            rates = demurrageRates[port]['vostochny']['40href'];
        } 
        else if (location === 'vladivostok' || location === 'wrangell') {
            // Локальные тарифы (Владивосток и Бухта Врангеля)
            rates = demurrageRates[port]['vostochny'][containerType];
        } else {
            // Тарифы для других мест сдачи
            let rateGroup = 'default';
            if (['moscow', 'novorossiysk', 'rostov', 'samara', 'tolyatti', 'kaliningrad', 'spb'].includes(location)) {
                rateGroup = 'moscow';
            } else if (['ekaterinburg', 'novosibirsk', 'krasnoyarsk', 'irkutsk'].includes(location)) {
                rateGroup = 'far';
            }
            rates = demurrageRates[port]['vostochny'][rateGroup]?.[containerType];
        }
    }
    else if (port === 'novorossiysk') {
        if (containerType === '40href') {
            rates = demurrageRates[port]['default'][containerType];
        } else if (['novorossiysk', 'rostov'].includes(location)) {
            rates = demurrageRates[port][location]?.[containerType] || 
                   demurrageRates[port]['default'][containerType];
        } else {
            let rateGroup = 'default';
            if (['moscow', 'spb', 'tolyatti', 'samara'].includes(location)) {
                rateGroup = 'moscow';
            } else if (['ekaterinburg', 'novosibirsk', 'krasnoyarsk', 'irkutsk', 'kaliningrad'].includes(location)) {
                rateGroup = 'far';
            }
            rates = demurrageRates[port][rateGroup][containerType] || 
                   demurrageRates[port]['default'][containerType];
        }
    }
    
    if (!rates) {
        alert("Тарифы для выбранных параметров не найдены!");
        return;
    }
    
    let totalCost = 0;
    let detailsHTML = "<ul>";
    
    for (let day = 1; day <= totalDays; day++) {
        let dailyRate = 0;
        
        if (day <= freeDays) {
            detailsHTML += `<li>День ${day}: 0 USD (свободный день)</li>`;
            continue;
        }
        
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
    
    document.getElementById('special-conditions-storage').addEventListener('change', function() {
        document.getElementById('free-days-storage-group').style.display = 
            this.checked ? 'block' : 'none';
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
    });
    
    document.getElementById('special-conditions-demurrage').addEventListener('change', function() {
        document.getElementById('free-days-demurrage-group').style.display = 
            this.checked ? 'block' : 'none';
    });
    
    document.getElementById('container-location').addEventListener('change', function() {
        const port = document.getElementById("demurrage-port").value;
        if (port === 'novorossiysk' || port === 'vostochny' || port === 'spb') {
            updateDemurrageContainerTypes(
                port, 
                document.getElementById("demurrage-terminal").value
            );
        }
        document.getElementById("demurrage-details").innerHTML = "";
        document.getElementById("demurrage-total").textContent = "Итого: 0 USD";
    });
    
     // Обработчики для кнопок расчета
     document.getElementById('calculate-storage-btn').addEventListener('click', calculateStorage);
     document.getElementById('calculate-demurrage-btn').addEventListener('click', calculateDemurrage);
});






