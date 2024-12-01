const crypto = require('crypto')

const hashUtils = (text, algorithm = "sha256", encoding = 'hex') => {
    const hash = crypto.createHash(algorithm);

    hash.update(text);

    return hash.digest(encoding);
}

module.exports = {
    createHash: hashUtils
};