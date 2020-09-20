
function noteReplace(text) {
    let replacer = {
        "<br>":"",
    }

    let newText = text;
    for (let key in replacer) {
        newText = newText.replace(key, replacer[key]);
    }
    return newText;
}

export default noteReplace;