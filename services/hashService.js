const { createHash } = require('../utils/hashUtils');

class HashService {
    static supportedAlgorithms = [
        'sha256',
        'sha512',
        'md5'
    ];

    static async generateHash(text, options= {}) {
        try {
            const {
                algorithm = 'sha256',
                encoding = 'hex',
            } = options;

            if (!this.supportedAlgorithms.includes(algorithm)) {
                throw new Error('Unsupported algorithm.')
            }

            const hash = createHash(text, algorithm, encoding)

            return {
                hash,
                algorithm,
                encoding
            };

        } catch (error) {
            throw new Error(`Hashing failed: ${error.message}`)
        }
    }
}

module.exports = HashService;