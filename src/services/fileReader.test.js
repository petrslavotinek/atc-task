import { readJsonFile, readJsonFiles } from './fileReader';

describe('fileReader', () => {
  it('should read json file', () => {
    const blob = new Blob([JSON.stringify({ prop: 'abc' }, null, 2)], { type: 'application/json' });
    blob.name = 'file.json';
    readJsonFile(blob).then(result => {
      expect(result.name).toBe('file.json');
      expect(result.data.prop).toBe('abc');
    });
  });

  it('should fail with invalid file name', () => {
    const blob = new Blob([JSON.stringify({ prop: 'abc' }, null, 2)], { type: 'application/json' });
    blob.name = 'file.png';
    readJsonFile(blob).catch(error => {
      expect(error).toBe(`File 'file.png' is not in json format`);
    });
  });

  it('should fail with invalid json data', () => {
    const blob = new Blob(['{ "prop": "abc"'], { type: 'application/json' });
    blob.name = 'file.json';
    readJsonFile(blob).catch(error => {
      expect(error).toBe(`Error reading file 'file.json': SyntaxError: Unexpected end of JSON input`);
    });
  });

  it('should read multiple json files', () => {
    const blob1 = new Blob([JSON.stringify({ prop: 'abc' }, null, 2)], { type: 'application/json' });
    blob1.name = 'file1.json';
    const blob2 = new Blob([JSON.stringify({ prop: 'def' }, null, 2)], { type: 'application/json' });
    blob2.name = 'file2.json';
    readJsonFiles([blob1, blob2]).then(results => {
      expect(results[0].name).toBe('file1.json');
      expect(results[0].data.prop).toBe('abc');
      expect(results[1].name).toBe('file2.json');
      expect(results[1].data.prop).toBe('def');
    });
  });
});