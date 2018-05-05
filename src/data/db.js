import Dexie from 'dexie';

const db = new Dexie('AtaccamaTask');
db.version(1).stores({ files: '++id' });

export default db;