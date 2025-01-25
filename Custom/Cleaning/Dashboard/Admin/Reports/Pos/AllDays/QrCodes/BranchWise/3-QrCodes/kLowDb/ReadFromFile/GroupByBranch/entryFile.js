import { StartFunc as StartFuncArrayToObject } from "./arrayToObject.js";
import { StartFunc as StartFuncInsertMaxAndMins } from "./insertMaxAndMins.js";
import { StartFunc as StartFuncSortBy } from "./sortBy.js";

let StartFunc = ({ inDataAsArray }) => {
    const grouped = StartFuncArrayToObject({ inDataAsArray });
    let LocalWithMaxAndMins = StartFuncInsertMaxAndMins({ inGroupedData: grouped });
    let LocalSorted = StartFuncSortBy({ inDataAsArray: LocalWithMaxAndMins });

    return LocalSorted;
};

let StartFunc1 = ({ inDataAsArray }) => {
    const grouped = inDataAsArray.reduce((result, item) => {
        const key = item.BranchName;
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});

    let LocalReturnArray = [];

    for (const [key, value] of Object.entries(grouped)) {
        const LoopInsideArray = value;

        const LoopInsideQrCodes = LoopInsideArray.map(element => {
            return element.QrCodeId
        });

        const LoopInsideOrderDateTime = LoopInsideArray.map(element => {
            return element.OrderDateTime
        });

        // console.log("LoopInsideOrderDateTime : ", LoopInsideOrderDateTime);

        LocalReturnArray.push({
            BranchName: key,
            QrCount: value.length,
            QrMax: LoopInsideQrCodes.reduce((a, b) => a > b ? a : b),
            QrMin: LoopInsideQrCodes.reduce((a, b) => a < b ? a : b),
            OrderDateMax: LoopInsideOrderDateTime.reduce((a, b) => a > b ? a : b),
            OrderDateMin: LoopInsideOrderDateTime.reduce((a, b) => a < b ? a : b)
        });
    };

    LocalReturnArray.sort((b, a) => b.QrCount - a.QrCount);

    return LocalReturnArray;
};

export { StartFunc };