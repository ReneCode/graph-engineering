
const DocumentDBClient = require("documentdb").DocumentClient;
const DocDBUtils = require("./DocDBUtils");

const docdbUtils = new DocDBUtils();

class Database {
  connect() {
    const dbHost = process.env.DB_HOST;
    const dbAuthKey = process.env.DB_AUTH_KEY;
    const dbDatabaseId = process.env.DB_DATABASE_ID;
    const dbCollectionId = process.env.DB_COLLECTION_ID;

    this.client = new DocumentDBClient(dbHost, { masterKey: dbAuthKey });

    return new Promise((resolve, reject) => {
      docdbUtils.getOrCreateDatabase(this.client, dbDatabaseId, (err, db) => {
        if (err) {
          reject(err);
        } else {
          this.database = db;
          docdbUtils.getOrCreateCollection(this.client, this.database._self, dbCollectionId, (err, coll) => {
            if (err) {
              reject(err);
            } else {
              this.collection = coll;
              resolve();
            }
          });
        }
      });
    });
  }

  find(query) {
    return new Promise((resolve, reject) => {
      this.client.queryDocuments(this.collection._self, query).toArray( (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    })
  }
}

module.exports = new Database();
