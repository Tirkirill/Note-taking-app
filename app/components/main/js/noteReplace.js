
function noteReplace(text) {
    let replacer = {
        "</div>":"",
        "br":"",
        "<div>":"\n",
    }

    let newText = text;
    for (let key in replacer) {
        newText = newText.replace(key, replacer[key]);
    }
    return newText;
}

export default noteReplace;