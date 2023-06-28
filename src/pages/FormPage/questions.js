export const questions = [
    {
    question: 'С какими группами отходов Вы работаете?',
    type: "checkbox",
    options: [{
        value: 'Полимеры',
        id: 'polymers'
    },{
        value: 'Картон',
        id: 'carton'
    },{
        value: 'Металл',
        id: 'metal'
    },{
        value: 'Стекло',
        id: 'glass'
    },{
        value: 'Другое',
        id: 'otherGroups'
    }]
},{
        question: 'Какой профиль Вашей деятельности?',
        type: "checkbox",
        options: [{
            value: 'Торговая сеть',
            id: 'trade',
            name: 'profile'
        },{
            value: 'Сборка, транспортировка, сортировка отходов',
            id: 'sorting',
            name: 'profile'
        },{
            value: 'Переработка, утилизация',
            id: 'recycling',
            name: 'profile'
        },{
            value: 'Продажа, монтаж, сервисное обслуживание оборудования',
            id: 'sales',
            name: 'profile'
        },{
            value: 'Производство напитков, продуктов питания, упаковки',
            id: 'production',
            name: 'profile'
        },{
            value: 'Социальный активист, агент',
            id: 'agent',
            name: 'profile'
        },{
            value: 'Другое',
            id: 'otherProfile',
            name: 'profile'
        }]
    },
    {
        question: 'Ваши контактные данные?',
        type: "personalData",
        fields: [
            {
                id: 'surname',
                name: 'Фамилия*',
                type:'text',
                rule: 'surname',
            },
                {
                id: 'name',
                name: 'Имя*',
                type:'text',
                rule: 'name',
            },
            {
                id: 'middle',
                name: 'Отчество',
                view: 'input',
                type:'text',
                rule: 'middle',
            },
            {
                id: 'company',
                name: 'Название организации*',
                type:'text',
                rule: 'company',
            },
            {
                id: 'phone',
                name: 'Номер телефона*',
                type:'tel',
                rule: 'phone',
            },
            {
                id: 'email',
                name: 'Ваш E-mail*',
                type:'email',
                rule: 'email',
            },
        ]
    },
    {
        question: 'Пожалуйста, сообщите нам каким способом Вам удобнее получить дальнейшую информацию?',
        type: "radio",
        options: [{
            value: 'SMS',
            id: 'sms',
            name: 'contact',
            checked: true
        },{
            value: 'E-mail',
            id: 'email',
            name: 'contact',
            checked: false
        }]
    }
]