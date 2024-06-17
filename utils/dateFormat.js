const dateFormatter = (timestamp) => {

    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };

    const newFormat = new Date(timestamp).toLocaleString('en-US', options);
    
    const indexAddAt = newFormat.indexOf(',', 7);
    let updatedFormat = newFormat.substring(0, indexAddAt) + ' at' + newFormat.substring(indexAddAt + 1);

    const indexWhitespace = updatedFormat.indexOf(' ');
    const indexAddOrdinal = updatedFormat.indexOf(',');
    let ordinalConverter = updatedFormat.substring(indexWhitespace + 1, indexAddOrdinal);

    if (ordinalConverter === "1" || ordinalConverter === "21" || ordinalConverter === "31") {
        ordinalConverter = ordinalConverter + "st";
    }

    else if (ordinalConverter === "2" || ordinalConverter === "22") {
        ordinalConverter = ordinalConverter + "nd";
    }

    else if (ordinalConverter === "3" || ordinalConverter === "23") {
        ordinalConverter = ordinalConverter + "rd";
    }

    else {
        ordinalConverter = ordinalConverter + "th";
    }

    updatedFormat = updatedFormat.substring(0, indexWhitespace + 1) + ordinalConverter + updatedFormat.substring(indexAddOrdinal);
    return updatedFormat;
}

module.exports = { dateFormatter };