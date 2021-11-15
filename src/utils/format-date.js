const formatDate = date => {
    // months array
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Handle Date
    let month = months[parseInt(date.getMonth())];
    let day = date.getDate() === 1 ? `${date.getDate()}st` : date.getDate() === 2 ? `${date.getDate()}ed` : `${date.getDate()}th`;
    let year = date.getFullYear();

    // Handle Time
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;

    return `${month} ${day}, ${year} ${strTime}`;
};

export default formatDate;
