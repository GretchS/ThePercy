const generateKeyArray = (data, filterKey) => {
    let countArray = []
    data.forEach((datum) => {
        if (countArray.every((object) => (object[filterKey] !== datum[filterKey]))) {
            countArray = [ ...countArray, { [filterKey]: datum[filterKey] } ]
        }
    })
    return countArray
}

const generateDataStructure = (data, id, key) => {
    let dataArray = []
    data.forEach((datum) => {
        let firstPoint = { musher_name: datum.name, musher_id: datum.musher_id, bib: datum.bib_no, distance: 0, time: 0 };
        if (datum[key] === id) {
            return dataArray = [ ...dataArray, firstPoint, { musher_name: datum.name, musher_id: datum.musher_id, bib: datum.bib_no, distance: (datum.run_dist/1000), time: datum.run_time } ];
        }
    })
    return dataArray
}

export const generateData = (data, key) => {
    let filteredData = generateKeyArray(data, key)
    filteredData = filteredData.map((object) => {
            return object = Object.assign({}, object, { data: generateDataStructure(data, object[key], key)} )
    })
    return filteredData
}