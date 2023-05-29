import Mock from '../mock'
import shortId from 'shortid'

const NotificationDB = {
    list: [
        {
            id: shortId.generate(),
            heading: 'Bank Announcement',
            icon: {
                name: 'notifications',
                color: 'primary',
            },
            timestamp: 1570702802573,
            title: 'New 15% interest certificates',
            subtitle: 'Dear valued customer ,...',
            path: 'dashboard/notificationDetails',
        },
        {
            id: shortId.generate(),
            heading: 'Bill reminder',
            icon: {
                name: 'notifications',
                color: 'error',
            },
            timestamp: 1570702702573,
            title: 'Gas bill due',
            subtitle: 'You have set a reminder for today for Gas Bill Payment',
            path: 'page-layouts/user-profile',
        },
        {
            id: shortId.generate(),
            heading: 'Loan reminder',
            icon: {
                name: 'notifications',
                color: 'error',
            },
            timestamp: 1570502502573,
            title: 'Loan Payment Due',
            subtitle: 'Dear valued customer, your Car Loan payment is due today.',
            path: 'dashboard/notificationDetails',
        },
        {
            id: shortId.generate(),
            heading: 'Credit Card Purchase',
            icon: {
                name: 'notifications',
                color: 'secondary',
            },
            timestamp: 1570502502573,
            title: 'Item bought',
            subtitle: 'Dear valued customer, 5098 EGP has been deducted in "Uber"... ',
            path: 'dashboard/notificationDetails',
        },
        {
            id: shortId.generate(),
            heading: 'Issue resolution',
            icon: {
                name: 'notifications',
                color: 'info',
            },
            timestamp: 1570502502573,
            title: 'Update on Issue #3427',
            subtitle: 'Dear valued customer, here are the updates with issue  #3472..',
            path: 'dashboard/notificationDetails',
        },
        {
            id: shortId.generate(),
            heading: 'Domestic Bank Transfer',
            icon: {
                name: 'notifications',
                color: 'success',
            },
            timestamp: 1570502502573,
            title: 'Successful bank transfer',
            subtitle: 'Dear valued customer, bank transfer #789310 has been made successfully...',
            path: 'dashboard/notificationDetails',
        },
    ],
}

Mock.onGet('/api/notification').reply((config) => {
    const response = NotificationDB.list
    return [200, response]
})

Mock.onPost('/api/notification/add').reply((config) => {
    const response = NotificationDB.list
    return [200, response]
})

Mock.onPost('/api/notification/delete').reply((config) => {
    let { id } = JSON.parse(config.data)
    console.log(config.data)

    const response = NotificationDB.list.filter(
        (notification) => notification.id !== id
    )
    NotificationDB.list = [...response]
    return [200, response]
})

Mock.onPost('/api/notification/delete-all').reply((config) => {
    NotificationDB.list = []
    const response = NotificationDB.list
    return [200, response]
})
