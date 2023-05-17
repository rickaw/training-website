const LOG_DATA = [
    {
        date: '2022/08/09',
        type: 'C152',
        registration: 'G-BHAI',
        captain: 'C. McBurney',
        capacity: 'PUT',
        from: 'EGTR',
        to: 'EGTR',
        departure: '11:45',
        arrival: '12:45',
        inCommandTime: 0,
        dualTime: 1,
        takeoff: 1,
        landing: 1,
        remarks: ''
    },

    {
        date: '2022/08/24',
        type: 'C152',
        registration: 'G-BHAI',
        captain: 'A. Lalji',
        capacity: 'PUT',
        from: 'EGTR',
        to: 'EGTR',
        departure: '13:15',
        arrival: '15:15',
        inCommandTime: 0,
        dualTime: 1,
        takeoff: 1,
        landing: 1,
        remarks: 'Ex 4.2, 6.1'
    },
]

const generateTableHead = (table, headers) => {
    const tHead = table.createTHead()
    const row = tHead.insertRow()
    for (const header of headers) {
        const th = document.createElement('th')
        const text = document.createTextNode(header)
        th.appendChild(text)
        row.appendChild(th)
    }
}

const generateTable = (table, flights) => {
    for (const flight of flights) {
        const row = table.insertRow()
        for (const header in flight) {
            const cell = row.insertCell()
            const text = document.createTextNode(flight[header])
            cell.appendChild(text)
        }
    }
}

const logTable = document.getElementById('logTable')
const headers = Object.keys(LOG_DATA[0])
generateTableHead(logTable, headers)
generateTable(logTable, LOG_DATA)