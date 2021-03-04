module.exports = {
    formatString: (string) => {
        var newString = string;
        var hexMap = {
            a : /[\xE0-\xE6]/g,
            e : /[\xE8-\xEB]/g,
            i : /[\xEC-\xEF]/g,
            o : /[\xF2-\xF6]/g,
            u : /[\xF9-\xFC]/g,
            c : /\xE7/g,
            n : /\xF1/g
        };
      
        for(var letter in hexMap) {
            var regex = hexMap[letter];
            newString = newString.replace(regex, letter);
        }
    
        return newString;
    },
};
