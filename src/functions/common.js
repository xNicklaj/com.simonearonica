function openLink(link){
    window.open(link, '_blank');
}

function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

function generateKey(max) {
    if(max)
        return Math.random() * max;
    else
        return Math.random() * 256;
}

module.exports = {
    openLink,
    importAll,
    generateKey
};