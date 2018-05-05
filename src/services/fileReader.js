const isJsonFile = (file) => file.name.endsWith('.json');

export const readJsonFiles = (files) =>
  Promise.all([...files].map(readJsonFile));

export const readJsonFile = (file) =>
  new Promise((resolve, reject) => {

    if (!isJsonFile(file)) {
      reject(`File '${file.name}' is not in json format`);
      return;
    }

    const reader = new FileReader();

    reader.onload = (readFile) => {
      try {
        const data = JSON.parse(readFile.currentTarget.result);
        resolve({
          name: file.name,
          date: new Date(),
          data
        });
      } catch (e) {
        reject(`Error reading file '${file.name}': ${e}`);
      }
    }

    reader.readAsText(file);    
  });