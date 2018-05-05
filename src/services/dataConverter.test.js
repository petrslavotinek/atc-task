import { convertData } from './dataConverter';

test('converts data', () => {
  const data = [{
    data: {
      prop1: 'value1'
    },
    kids: {
      has_relatives: {
        records: [{
          data: {
            prop2: 'value2'
          },
          kids: {
            has_phone: {
              records: [{
                data: {
                  prop3: 'value3'
                },
                kids: {}
              }]
            }
          }
        }]
      }
    }
  }];
  const convertedData = convertData(data);
  const expected = {
    headers: ['prop1'],
    items: [{
      data: {
        prop1: 'value1'
      },
      hasKids: true,
      kids: [{
        name: 'has_relatives',
        headers: ['prop2'],
        items: [{
          data: {
            prop2: 'value2'
          },
          hasKids: true,
          kids: [{
            name: 'has_phone',
            headers: ['prop3'],
            items: [{
              data: {
                prop3: 'value3'
              },
              hasKids: false,
              kids: []
            }]
          }]
        }]
      }]
    }]
  };
  expect(convertedData).toEqual(expected);
});