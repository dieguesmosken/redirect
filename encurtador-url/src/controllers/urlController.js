class UrlController {
    constructor(UrlModel) {
        this.UrlModel = UrlModel;
    }

    async createShortUrl(req, res) {
        const { originalUrl } = req.body;

        if (!originalUrl) {
            return res.status(400).json({ error: "URL is required" });
        }

        const shortUrl = this.generateShortUrl();
        const urlEntry = new this.UrlModel({ originalUrl, shortUrl });

        try {
            await urlEntry.save();
            res.status(201).json({ shortUrl });
        } catch (error) {
            res.status(500).json({ error: "Error creating short URL" });
        }
    }

    async getOriginalUrl(req, res) {
        const { shortUrl } = req.params;

        try {
            const urlEntry = await this.UrlModel.findOne({ shortUrl });

            if (!urlEntry) {
                return res.status(404).json({ error: "URL not found" });
            }

            res.redirect(urlEntry.originalUrl);
        } catch (error) {
            res.status(500).json({ error: "Error retrieving original URL" });
        }
    }

    generateShortUrl() {
        return Math.random().toString(36).substring(2, 8);
    }
}

module.exports = UrlController;