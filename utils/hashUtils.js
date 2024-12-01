const crypto = require('crypto')

const hashUtils = (text, algorithm = "sha256", encoding = 'hex') => {
    const hash = crypto.createHash(algorithm);

    hash.update(text);

    return hash.digest();
}

const verifyHash = (text, hash, algorithm = 'sha256', encoding = 'hex') => {
    const generatedHash = hashUtils(text, algorithm, encoding);
    return generatedHash === hash;
}

module.exports = {
    createHash: hashUtils,
    verifyHash
};